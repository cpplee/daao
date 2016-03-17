$import("rpc.js");
$import("html/form.js");
var mcc;

/**
 * 
 */
/*
 * var tableList; var tableOperation;
 */

/*
 * function onEdit(data) { $("#edit-person").show(); $("#show-person").hide(); }
 * 
 * 
 * function onView(data) { $("#detail-person").show(); $("#show-person").hide(); }
 * 
 */

/*
 * function onDelete(data) {
 * 
 * var callback = function () {
 * 
 * alert("成功删除用户‘" + data.cname + "’!"); tableList.refresh();
 *  }; if(!confirm("确认删除‘" + data.cname + "’用户吗?该操作不可逆！删除后会删除其他表，请谨慎！！！"))
 * return; var operation = new Operation("酒店.销售管理.客户信息.删除客户");
 * operation.comAccountId = data.id; operation.execute(callback);
 *  }
 */
/*
 * function initTable() {
 * 
 * var operations = [ {name: "会员信息",onclick: onView }, {name: "编辑",onclick:
 * onEdit }, {name: "删除",onclick: onDelete }
 *  ];
 * 
 * var checks = [];
 * 
 * var titles = [ {text:"", width:"5%"}, {text:"序号", width:"7%"}, {text:"姓名",
 * width:"10%"}, {text:"性别", width:"5%"}, {text:"生日", width:"10%"},
 * {text:"证件种类", width:"7%"}, {text:"证件号码", width:"15%"}, {text:"公司名称",
 * width:"10%"}, {text:"联系电话", width:"8%"}, {text:"会员信息", width:"8%"},
 * {text:"是否预定", width:"8%"}, {text:"操作", width:"14%"},
 *  ]; var columns = [
 * 
 * function(data) { util.debug(data, 9); return TableList.link2(checks, data); },
 * 
 * function(data) { return data.id; }, function(data) { return data.contactName; },
 * function(data) { return data.contactSex; }, function(data) { return
 * data.contactDob; }, function(data) { return data.contactCertificate; },
 * function(data) { return data.contactCerNum; }, function(data) { return
 * data.contactCompanyName; }, function(data) { return data.contactPhone; },
 * 
 * function(data) {
 * 
 * return TableList.link2(checks, data); }, function(data) { return
 * TableList.link1(operations, data); }
 *  ];
 * 
 * tableOperation = new Operation("前台信息.列常用联系人信息");
 * //tableOperation.departmentId = currentDepartmentId;
 * 
 * tableList = new TableList(tableOperation, titles, columns);
 * tableList.create($$('container_div')); tableList.refresh();
 *  }
 * 
 * function pageLoad(){ initTable(); }
 */

var tableList; // 人事信息表格
var tableOperation; // tableList的操作
var args;
var ok=false;
function pageLoad() {
	args = util.getURLArgs();

	 if(!ok){
	    	
	    	if($.cookie("loginname")!==undefined){
	    		
	    		$('#contralLoginRegister').append('<span style="color:green;">'+$.cookie("loginname")+'</span>'
	    		           +'<a href="login.html" id="setExit"><span>退出</span></a>');
	    		
	    		$('#setExit').click(function(){
	    			$.cookie('loginname',null,{ expires: -1 });
	    			window.location.href="index.html";
	    			
	    		});
	             
	        	ok=true;
	        }else{
	       $('#contralLoginRegister').append('<a href="login.html"><span id="setLoginName">登陆</span>'
	               +'</a><a href="register.html"><span id="setRegister">注册</span></a>');
	            }
	    	
	    }
	 if($.cookie("loginType")!='团客')
	  {
	    $('#customerli').hide();
	  
	  }		
	 $("#edit-person1,#edit-person2,#edit-person3,#edit-person4").click(function () {
	        $("#edit-person").show();
	        $("#show-person").hide();
	    });
	listPersion();

}

function listPersion() {
	var callback = function(data) {
		
		if (data.total === 0) {
			$("#container_div").append("<p>对不起,没有数据</p>");
		}

		var totalPage = (data.total+4)/5;
		var totalRecords = data.total;
		var showCount = 0;
		var pageNo = getParameter('pno');
		console.log(pageNo);
		if (!pageNo) {
			pageNo = 1;
		}

		kkpager.generPageHtml({
			pno : pageNo,

			total : totalPage,

			totalRecords : totalRecords,

			hrefFormer : 'demo',

			hrefLatter : '.html',
			getLink : function(n) {
				return this.hrefFormer + this.hrefLatter + "?pno=" + n;
			},
			mode : 'click',
			click : function(n) {
				this.selectPage(n);
				showCount = n - 1;
				if ($(".block-rooms").length > 0) {
					$(".block-rooms").remove();
				}
				showData(data, showCount);
				return false;
			}
		});

		showData(data, showCount);
	};


	function showData(data, showCount) {
		
		var limitData=5;
		$("#container_div").empty();
		// util.debug(data, 9);
		 
		 
		$('#container_div')
				.append(
						'<tr><th><input type="checkbox"/></th><th>序号</th><th>姓名</th><th>性别</th><th>生日</th><th>证件类型</th><th>证件号码</th><th>公司名称</th><th>联系电话</th><th>会员信息</th><th>是否预定</th><th>操作</th></tr></tr>');

		
		
		if(data.total<5)
		 {
		   limitData = data.total; 
		 }else{
			 if((data.total-showCount*5)>5){
					limitData=5;
					
				}else{
					limitData=(data.total-showCount*5);
					//alert(limitData);
				}
			 
		 }
		
		
		for (var i = showCount * 5; i < showCount * 5 + limitData; i++) {
			          var sex;
			          var contactDobList;
					if (data.data[i].contactSex==true) {
						sex = '男';
					} else {
						sex = '女';
					}
			
          
          if(data.data[i].contactDob==null){   	  
        	         contactDobList='';
                 }else{
        	          contactDobList=dateToStr1(data.data[i].contactDob);
        	    }
          
          
			$("#container_div")
					.append(
							'<tr style="border-bottom: 1px dotted black" >'
									+ '<td><input type="checkbox" name="cus_name" /></td>'
									+ '<td>'
									+ data.data[i].id
									+ '</td>'
									+ '<td>'
									+ data.data[i].contactName
									+ '</td>'
									+ '<td>'
									+ sex
									+ '</td>'
									+ '<td>'
									+ contactDobList
									+ '</td>'
									+ '<td>'
									+ data.data[i].contactCertificate
									+ '</td>'
									+ '<td>'
									+ data.data[i].contactCerNum
									+ '</td>'
									+ '<td>'
									+ data.data[i].contactHotelName
									+ '</td>'
									+ '<td>'
									+ data.data[i].contactPhone
									+ '</td>'
									+ '<td><div>'
									+ '<span ><button style="width: 80px;" class="btn-na" id="sort-detail-person-button'
									+ data.data[i].id
									+ '" value="'
									+ data.data[i].id
									+ '">会员详情</button></span></div></td>'
									+ '<td><input type="checkbox"></td>'
									+ '<td><div><span style="padding-left: 4px"><button class="btn-na" id="sort-edit-person'
									+ data.data[i].id
									+ '" value="'
									+ data.data[i].id
									+ '">编辑</button></span>'
									+ '<span style="padding-left: 4px"><button class="btn-na" id="sort-delete-persion'
									+ data.data[i].id
									+ '" value="'
									+ data.data[i].id
									+ '">删除</button></span></div></td></tr>');

			
			
			$('#sort-detail-person-button' + data.data[i].id + '')
					.click(
							function() {
								$("#detail-person").show();
								$("#show-person").hide();

								var callbackupdatacontact = function(result) {
									$('#readcontactName').val(
											result.member.contactName);
									if (result.member.contactSex == true) {
										$('#readsexRadio1').attr("checked",
												true);
									} else {
										$('#readsexRadio2').attr("checked",
												true);
									}
									;
									$('#readdob')
											.val(
													dateToStr1(result.member.contactDob));
									$('#readcontactCompanyName').val(
											result.member.contactCompanyName);
									$("#readcontactCertifiter")
											.find(
													'option[value='
															+ result.member.contactCertifiter
															+ ']').attr(
													"selected", true);
									$('#readcontactCerNum').val(
											result.member.contactCerNum);
									$('#readcontactName').val(
											result.member.contactName);
									$('#readcontactPhone').val(
											result.member.contactPhone);
									$('#readcontactCompanyName').val(
											result.member.contactHotelName);
									$('#readcontactMemNum').val(
											result.member.contactMemNum);
									$("#readcontactMemLevel")
											.find(
													'option[value='
															+ result.member.contactMemLevel
															+ ']').attr(
													"selected", true);
									$('#readcontactPointStatus').val(
											result.member.contactPointStatus);
								
						
							};

								var operationupdatacontact;
								operationupdatacontact = new Operation(
										"前台信息.查询联系人基本信息");
								operationupdatacontact.id = $(this).val();

								operationupdatacontact
										.execute(callbackupdatacontact);

							});
			
			$('#sort-edit-person' + data.data[i].id + '').click(function() {
				$("#edit-person").show();
				$("#show-person").hide();
			});

			$('#sort-delete-persion' + data.data[i].id + '').click(
					function() {

						$('#sort-delete-persion' + $(this).val() + '').parent()
								.parent().parent().parent().remove();

						// alert(data.data[k-1].id);

						var callbackdelete = function() {

							alert("删除联系人成功！");
							window.location = "#p2";
						};

						var operationdelete;
						operationdelete = new Operation("前台信息.删除常用联系人");
						operationdelete.id = $(this).val();

						operationdelete.execute(callbackdelete);

					});
		}

	}

	var operation = new Operation("前台信息.列常用联系人信息");
	operation.limit = 99999;
	operation.execute(callback);
}

function getParameter(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}

function dateToStr1(datetime) {
	var year = datetime.getFullYear();
	var month = datetime.getMonth() + 1;// js中月份是从0开始的
	var date = datetime.getDate();

	if (month < 10) {
		month = "0" + month;
	}
	if (date < 10) {
		date = "0" + date;
	}

	var time = year + "-" + month + "-" + date;
	// var time = date+"-"+month+"-"+year;
	// alert(time);
	return time;
}

function encodeListBasicPersionFormmcc(addcontactForm) {
	if (mcc == null)
		mcc = {};
	var parsers = {
		"contactDob" : ruite.parse.date,
	};
	mcc = ruite.form.encode(addcontactForm, parsers);
}

function onamccSubmit() {
     //     alert(123);
	var addcontactForm = $$('addcontact-form');

	encodeListBasicPersionFormmcc(addcontactForm);

	var callback = function() {
		alert("添加联系人成功！");
		window.location = "#";
	};

	var operationmcc;
	operationmcc = new Operation("前台信息.添加常用联系人信息");
	operationmcc.mcc = mcc;
     //   alert(333333333333333333);
        operationmcc.execute(callback);
    // alert(111111110);
}

function goUrl(){
	window.location.href=document.referrer;
	}