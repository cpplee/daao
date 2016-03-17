$import("html/parse.js");
$import("html/format.js");

/** 
 * 对html文件中的form进行编码、解码的工具
 *
 */

if (!ruite) var ruite = {};
if (!ruite.form) ruite.form = {};

/** 
处理 form, 返回一个 Bean, 其中, 如果是 checkbox, select-multi, 则属性是数组属性, 其他都是普通属性
可以传入分析器, 用于将表单元素的值解析成需要的数据

示例代码:

var parsers = 
{
	"buyDate": ruite.parse.date
};
var book = ruite.form.encode($("book_form"), parsers);
*/
ruite.form.encode = function (form, parsers)
{
	if (!parsers) parsers = {};

	var bean = {};

	var elements = form.elements;
	for (var i = 0; ; i++)
	{
		var element = elements[i];
		if (element == null) break;
		
		var name = element.name;
			
		if (!name || name.length == 0) continue;
			
		var type = element.type;
		
		if (type == "text" || type == "password" || type == "textarea" || type == "hidden")
		{
			var value = element.value;
			
			var parser = parsers[name];
			if (parser) value = parser(value);
		
			ruite.form.put(bean, name, value);

			continue;
		}
		
		if (type == "select-multiple")
		{
			var options = element.options;
			for (var j = 0; j < options.length; j++)
			{
				var option = options[j];
				if (!option.selected) continue;
				
				this.add(bean, name, option.value);
			}
			
			continue;
		}

		if (type == "select-one")
		{
			var options = element.options;
			for (var j = 0; j < options.length; j++)
			{
				var option = options[j];
				if (!option.selected) continue;
				
				ruite.form.put(bean, name, option.value);
			}
			
			continue;
		}

		if (type == "checkbox")
		{
			if (!element.checked) continue;
			 
			ruite.form.add(bean, name, element.value);
			 
			continue;
		}

		if (type == "radio")
		{
			if (!element.checked) continue;
			 
			ruite.form.put(bean, name, element.value);
			 
			continue;
		}

		// 其他类型的标签就不管了
	}
	
	return bean;
}

/** 
将 Bean 解码到 form 中
参数 formatters 用于格式化输出某些指定字段

示例代码:

var formatters = 
{
	"beginDate": ruite.format.date,
	"endDate": ruite.format.date
};
ruite.form.decode(trainClass, $('class_form'), formatters);
*/
ruite.form.decode = function (bean, form, formatters)
{
	if (!formatters) formatters = {};

	var elements = form.elements;
	for (var i = 0; ; i++)
	{
		var element = elements[i];
		if (element == null) break;
		
		var name = element.name;
		var type = element.type;

		if (!name || name.length == 0) continue;
		
		var value = ruite.form.get(bean, name);
		if (value == null) continue;
		
		if (type == "text" || type == "password" || type == "textarea" || type == "hidden")
		{
			var formatter = formatters[name];
			if (formatter)
				element.value = formatter(value);
			else
				element.value = value.toString();
			
			continue;
		}
		
		if (type == "select-multiple")
		{
			var options = element.options;
			for (var k = 0; k < options.length; k++)
			{
				var option = options[k];
				option.selected = ruite.form.contains(value.toString(), option.value);
			}
			
			continue;
		}
		
		if (type == "select-one")
		{
			var options = element.options;
			for (var k = 0; k < options.length; k++)
			{
				var option = options[k];
				if (option.value == value.toString())
				{
					option.selected = true;
					break;
				}
			}
			
			continue;
		}

		if (type == "checkbox") 
		{
			element.checked = ruite.form.contains(value, element.value);
			 
			continue;
		}
		
		if (type == "radio")
		{
			element.checked = element.value == value.toString();
			
			continue;
		}
	
		
		// 其他类型的标签就不管了
	}
}

/** 将表单中的所有元素都设置成只读 */
ruite.form.readonly = function (form)
{
	var elements = form.elements;
	for (var i = 0; ; i++)
	{
		var element = elements[i];
		if (element == null) break;
		element.disabled = true;
	}
}

/** 将表单中的所有元素都设置成可编辑 */
ruite.form.edit = function (form)
{
	var elements = form.elements;
	for (var i = 0; ; i++)
	{
		var element = elements[i];
		if (element == null) break;
		element.disabled = false;
	}
}
/** 获取bean中属性name的值 */
ruite.form.get = function (bean, name)
{
	var ss = name.split(".");
	
	var o = bean;
	for (var i = 0; i < ss.length; i++)
	{
		var s = ss[i];
		o = o[s];
		
		if (o == undefined || o === null) return null;
	}
	
	return o;
}

/** 向bean中设置一个属性值 */
ruite.form.put = function (bean, name, value)
{
	var ss = name.split(".");
	
	var o = bean;
	for (var i = 0; i < ss.length - 1; i++)
	{
		var s = ss[i];
		var c = o[s];
		
		if (c == undefined || c === null)
		{
			c = {};
			o[s] = c;  
		}
		
		o = c;
	}
	
	o[ss[ss.length - 1]] = value;
}

/** 向map中添加一个值  (重复的值用数组组织) */
ruite.form.add = function (map, name, value)
{
	var values = map[name];
	if (values == null)
	{
		values = [];
		map[name] = values;
	}
	values.push(value);
}

/** 检查array中是否存在元素e */
ruite.form.contains = function (array, e)
{
	for (var i = 0; i < array.length; i++)
	{
		if (e == array[i].toString()) return true;
	}
	
	return false;
}

/**清空form中的所有值*/
ruite.form.clear = function (form)
{
	var elements = form.elements;
	for (var i = 0; ; i++)
	{
		var element = elements[i];
		if (element == null) break;
		element.value = "";
	}
}