$import("rpc.js");
$import("html/form.js");
var comAccountActivityPlan;
eventArray = new Array();
function event(title,start,id)
{
    this.title = title;
    this.start = start;
    this.id = id;

    this.allDay = false;
}

function encodeActivityForm(activityForm) {

    if (comAccountActivityPlan == null) comAccountActivityPlan = {};

    var parsers =
    {
        "activityDate": ruite.parse.date,
        "activityTime": ruite.parse.time
    };
    comAccountActivityPlan = ruite.form.encode(activityForm, parsers);


}

function onSubmit() {
    var activityForm = $$('activity-form');
    encodeActivityForm(activityForm);

    var callback1 = function(result) {
        for (var i = 0; i < result.data.length; i++) {
            var year = result.data[i].activityDate.getFullYear();
            var month = result.data[i].activityDate.getMonth();
            var day = result.data[i].activityDate.getDate();
            var hour = result.data[i].activityTime.getHours();
            var minute = result.data[i].activityTime.getMinutes();
            var eventDate = new Date(year, month, day, hour, minute);
            var eventTitle = "拜访" + result.data[i].activityPerson;
            var eventId = result.data[i].id;
            eventArray[i] = new event(eventTitle, eventDate, eventId)
        }
        $('#calendar').fullCalendar( 'removeEvents');
        $('#calendar').fullCalendar( 'addEventSource',eventArray);

    }

    var callback = function () {
        alert("恭喜您，新增拜访行动计划操作成功！");

        var operation1 = new Operation("酒店.销售管理.销售活动.列拜访时间");
        operation1.execute(callback1);
    }

    var operation;

    operation = new Operation("酒店.销售管理.客户信息.新增拜访行动计划");
    operation.comAccountActivityPlan = comAccountActivityPlan;
    operation.comAccountName = $("#companyname").val();
    operation.execute(callback);


}

