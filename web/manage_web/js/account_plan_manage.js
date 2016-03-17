$import("rpc.js");
$import("html/form.js");
/*载入页面时用*/
eventArray = new Array();
var currentDate;
function event(title,start,id)
{
	this.title = title;
	this.start = start;
	this.id = id;

    this.allDay = false;
}
/*向后台提交修改时用*/
/*若需要保存修改内容一起提交可参考下面的函数*/
/*editArray = new Array();
function addToEditArray(newEvent)
{
    for(var i = 0;i<editArray.length;i++)
        {
            if(editArray[i].id===newEvent.id)
            {
                editArray[i] = newEvent;
                return;
            }
        }
    editArray.push(newEvent);
}*/
function editEvent(title,date,id)
{
    this.person =title.replace('拜访','');
    this.date = date.getFullYear().toString()+"-"+(date.getMonth()+1).toString()+"-"+date.getDate().toString();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    if(hour <10){
        hour = "0" + hour;
    }
    if(minutes <10){
        minutes = "0" + minutes;
    }
    var time = hour+":"+minutes;
    this.time = time;
    this.id = id;
}

function fillCompanyName()
{
    var callback = function(result)
    {
        for(var i = 0;i<result.data.length;i++)
        {
            $("#companyname").append("<option value="+result.data[i]+">"+result.data[i]+"</option>");
        }
    }
    var operation = new Operation("酒店.销售管理.销售活动.列公司名称");
    operation.execute(callback);
}

$(document).ready(function() {
	
	var args = util.getURLArgs();
	currentDate = StrToDate(args.date);
	var operation = new Operation("酒店.销售管理.销售活动.列拜访时间");	
	operation.execute(callback);
    fillCompanyName();

});

function StrToDate(datetime)
{
	var date = new Date(Date.parse(datetime.replace(/-/g,"/")));
	return date;
}

var callback = function(result)
{	
	for(var i = 0;i<result.data.length;i++)
		{
		    var year = result.data[i].activityDate.getFullYear();
		    var month = result.data[i].activityDate.getMonth();
		    var day = result.data[i].activityDate.getDate();
		    var hour = result.data[i].activityTime.getHours();
		    var minute = result.data[i].activityTime.getMinutes();
		    var eventDate = new Date(year,month,day,hour,minute);
		    var eventTitle = "拜访"+result.data[i].activityPerson;
            var eventId =  result.data[i].id;
            eventArray[i] = new event(eventTitle,eventDate,eventId)
		}

	    $('#calendar').fullCalendar({

			eventClick: function(event) {
                $('#calendar').fullCalendar( 'gotoDate',event.start );
                $('#calendar').fullCalendar( 'changeView', 'agendaDay' );
			},
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			
			firstDay:1,
			events:eventArray,
			defaultView:'agendaDay',
            allDaySlot:false,
			year:currentDate.getFullYear(),
			month:currentDate.getMonth(),
			date:currentDate.getDate(),
			editable: true,
			timeFormat: 'H:mm',
			axisFormat: 'H:mm',
            eventDrop: function(event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view ) {


                var temp = new editEvent(event.title,event.start,event.id);
                var operation = new Operation("酒店.销售管理.销售活动.更新拜访时间");
                operation.id = temp.id;
                operation.activityDate= temp.date;
                operation.activityTime= temp.time;
                operation.execute(callback1);

            },
            dayClick: function(date, allDay, jsEvent, view) {

                var dateString = date.getFullYear().toString()+"-"+(date.getMonth()+1).toString()+"-"+date.getDate().toString();
                $('#activityDate').val(dateString);
                var hour = date.getHours();
                var minutes = date.getMinutes();
                if(hour <10){
                    hour = "0" + hour;
                }
                if(minutes <10){
                    minutes = "0" + minutes;
                }
                var time = hour+":"+minutes;
                $('#activityTime').val(time);
                $('#myModal_salerinfo').modal('show');
            }
		});		
		
}

var callback1 = function(){alert("修改成功")}

