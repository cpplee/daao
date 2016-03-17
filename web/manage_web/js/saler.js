$import("html/form.js");

$(function(){
	
	fillChart();
	fillSalerInfo();
	fillCoreAccount();
	fillNicheAccount();
	fillPropsAccount();
	fillSuspAccount();
	fillCoreMonthNights();
	fillSuspectMonthNights();
	fillProsMonthNights();
	fillNicheMonthNights();
	fillCoreMonthBanquet();
	fillSuspectMonthBanquet();
	fillProsMonthBanquet();
	fillNicheMonthBanquet();
	fillCoreMonthRoomPrice();
	fillNicheMonthRoomPrice();
	fillProspMonthRoomPrice();
	fillSuspectMonthRoomPrice();
	fillCoreMonthBanquetPrice();
	fillNicheMonthBanquetPrice();
	fillProspMonthBanquetPrice();
	fillSuspectMonthBanquetPrice();
	
	
});

function fillChart(){
    var callback = function(result){
        for(var i = 0;i<result.hotelData.length;i++){
            hotelData[i] = result.hotelData[i];
        }
        for(var i = 0;i<result.hotelData.length;i++){
            banquetData[i] = result.banquetData[i];
        }
        showChart();
    }

    var hotelData = new Array();
    var banquetData = new Array();
    var operation = new Operation("酒店.销售管理.销售人员主页.填充柱状图");
    operation.year = 2015;
    operation.execute(callback);

    function showChart() {
        var myChart = echarts.init(document.getElementById('container'));
        myChart.setOption(
            {
                title: {
                    text: '各类生意统计信息',
                    subtext: '单位:房/晚'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['客房', '宴会/会议', '餐饮','其他收入']
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '客房',
                        type: 'bar',
                        data:hotelData ,
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        }
                    },
                    {
                        name: '宴会/会议',
                        type: 'bar',
                        data: banquetData,
                        markPoint: {
                            data: [
                                {type: 'max',name: '年最高'},
                                {type: 'min',name: '年最低'}
                            ]
                        },
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        }
                    },
                    {
                        name: '餐饮',
                        type: 'bar',
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                        markPoint: {
                            data: [
                                {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183, symbolSize: 18},
                                {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
                            ]
                        },
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        }
                    },
                    {
                        name: '其他收入',
                        type: 'bar',
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                        markPoint: {
                            data: [
                                {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183, symbolSize: 18},
                                {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
                            ]
                        },
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        }
                    }

                ]
            }
        );
    }
}
function fillSalerInfo()
{
	var callback = function(result)
	{			
	
		$("#level").val(result.saler.level);
		$("#salercode").val(result.saler.salerCode);
		$("#salername").val(result.saler.name);
		$("#position").val(result.saler.position);
		$("#hotelname").val(result.saler.hotelname);	
	}
	var operation = new Operation("酒店.销售管理.销售人员主页.填充销售人员信息");
	operation.execute(callback);
}

function fillCoreAccount()
{
	var callback = function(result)
	{
		$("span[name='coreAccount']").text(result.count);
	}
	
	var operation = new Operation("酒店.销售管理.销售人员主页.填充核心客户数量");
	operation.execute(callback);
}

function fillNicheAccount()
{
	var callback = function(result)
	{
		$("span[name='nicheAccount']").text(result.count);
	}
	
	var operation = new Operation("酒店.销售管理.销售人员主页.填充忠实客户数量");
	operation.execute(callback);
}

function fillPropsAccount()
{
	var callback = function(result)
	{
		$("span[name='prosAccount']").text(result.count);
	}
	
	var operation = new Operation("酒店.销售管理.销售人员主页.填充潜力客户数量");
	operation.execute(callback);
}

function fillCoreMonthNights()
{
	var callback = function(result)
	{
		$("span[name='coreAccountRoomNight']").text(result.count);
	}
	
	var operation = new Operation("酒店.销售管理.销售人员主页.填充核心客户当月房晚量");
	operation.execute(callback);
}

function fillSuspectMonthNights()
{
	var callback = function(result)
	{
		$("span[name='suspectAccountRoomNight']").text(result.count);
	}
	
	var operation = new Operation("酒店.销售管理.销售人员主页.填充潜在客户当月房晚量");
	operation.execute(callback);
}

function fillNicheMonthNights()
{
	var callback = function(result)
	{
		$("span[name='nicheAccountRoomNight']").text(result.count);
	}
	
	var operation = new Operation("酒店.销售管理.销售人员主页.填充忠实客户当月房晚量");
	operation.execute(callback);
}

function fillProsMonthNights()
{
	var callback = function(result)
	{
		$("span[name='prosAccountRoomNight']").text(result.count);
	}
	
	var operation = new Operation("酒店.销售管理.销售人员主页.填充潜力客户当月房晚量");
	operation.execute(callback);
}


function fillSuspAccount()
{
	var callback = function(result)
	{
		$("span[name='suspectAccount']").text(result.count);
	}
	
	var operation = new Operation("酒店.销售管理.销售人员主页.填充潜在客户数量");
	operation.execute(callback);
}

function fillCoreMonthBanquet()
{
	var callback = function(result)
	{
		$("span[name='coreAccountBanquet']").text(result.count);
	}
	
	var operation = new Operation("酒店.销售管理.销售人员主页.填充核心客户当月宴会会议量");
	operation.execute(callback);
}

function fillSuspectMonthBanquet()
{
	var callback = function(result)
	{
		$("span[name='suspectAccountBanquet']").text(result.count);
	}
	
	var operation = new Operation("酒店.销售管理.销售人员主页.填充潜在客户当月宴会会议量");
	operation.execute(callback);
}

function fillProsMonthBanquet()
{
	var callback = function(result)
	{
		$("span[name='prosAccountBanquet']").text(result.count);
	}
	
	var operation = new Operation("酒店.销售管理.销售人员主页.填充潜力客户当月宴会会议量");
	operation.execute(callback);
}

function fillNicheMonthBanquet()
{
	var callback = function(result)
	{
		
		$("span[name='nicheAccountBanquet']").text(result.count);
	}
	
	var operation = new Operation("酒店.销售管理.销售人员主页.填充忠实客户当月宴会会议量");
	operation.execute(callback);
}

function fillCoreMonthRoomPrice()
{
	var callback = function(result)
	{
		
		$("span[name='coreAccountRoomPrice']").text(result.price);
				
	}
	
	var operation = new Operation("酒店.销售管理.销售人员主页.填充核心客户当月平均房价");
	operation.execute(callback);
}

function fillNicheMonthRoomPrice()
{
	var callback = function(result)
	{
		
		$("span[name='nicheAccountRoomPrice']").text(result.price);
				
	}
	
	var operation = new Operation("酒店.销售管理.销售人员主页.填充忠实客户当月平均房价");
	operation.execute(callback);
}

function fillProspMonthRoomPrice()
{
	var callback = function(result)
	{
		
		$("span[name='prospAccountRoomPrice']").text(result.price);
				
	}
	
	var operation = new Operation("酒店.销售管理.销售人员主页.填充潜力客户当月平均房价");
	operation.execute(callback);
}

function fillSuspectMonthRoomPrice()
{
	var callback = function(result)
	{
		
		$("span[name='suspectAccountRoomPrice']").text(result.price);
				
	}
	
	var operation = new Operation("酒店.销售管理.销售人员主页.填充潜在客户当月平均房价");
	operation.execute(callback);
}

function fillCoreMonthBanquetPrice()
{
	var callback = function(result)
	{
		
		$("span[name='coreAccountBanquetPrice']").text(result.price);
				
	}
	
	var operation = new Operation("酒店.销售管理.销售人员主页.填充核心客户当月宴会厅均价");
	operation.execute(callback);
}

function fillNicheMonthBanquetPrice()
{
	var callback = function(result)
	{
		
		$("span[name='nicheAccountBanquetPrice']").text(result.price);
				
	}
	
	var operation = new Operation("酒店.销售管理.销售人员主页.填充忠实客户当月宴会厅均价");
	operation.execute(callback);
}

function fillProspMonthBanquetPrice()
{
	var callback = function(result)
	{
		
		$("span[name='prosAccountBanquetPrice']").text(result.price);
				
	}
	
	var operation = new Operation("酒店.销售管理.销售人员主页.填充潜力客户当月宴会厅均价");
	operation.execute(callback);
}

function fillSuspectMonthBanquetPrice()
{
	var callback = function(result)
	{
		
		$("span[name='suspectAccountBanquetPrice']").text(result.price);
				
	}
	
	var operation = new Operation("酒店.销售管理.销售人员主页.填充潜在客户当月宴会厅均价");
	operation.execute(callback);
}

function dateToStr(datetime){ 
	var year = datetime.getFullYear();
	var month = datetime.getMonth()+1;//js中月份是从0开始的
	var date = datetime.getDate(); 
	var hour = datetime.getHours(); 
	var minutes = datetime.getMinutes(); 
	var second = datetime.getSeconds();

	if(month<10){
		month = "0" + month;
	}
	if(date<10){
		date = "0" + date;
	}
	if(hour <10){
		hour = "0" + hour;
	}
	if(minutes <10){
		minutes = "0" + minutes;
	}
	if(second <10){
		second = "0" + second ;
	}

	var time = year+"-"+month+"-"+date; 
	// alert(time);
	return time;
}