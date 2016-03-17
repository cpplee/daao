$import("rpc.js");
$import("html/form.js");

var banquetPrice;
var ModalDialog = false;

function onSubmit()
{
	ModalDialog = true;
    addMP_1();
    addMP_2();
    addMP_3();
    addMP_4();
    addMP_5();
    addMP_6();
    addMP_7();
    addMP_8();
    addMP_9();
    addMP_10();
    addA_1();
    addA_2();
    addA_3();
    addA_4();
    addA_5();
    addA_6();
    addA_7();
    addA_8();
    addA_9();
    addA_10();
    addW_1();
    addW_2();
    addW_3();
    addW_4();
    addW_5();
    addW_6();
    addW_7();
    addW_8();
    addW_9();
    addW_10();
    addGrB_1();
    addGrB_2();
    addGrB_3();
    addGrB_4();
    addGrB_5();
    addGrB_6();
    addGrB_7();
    addGrB_8();
    addGrB_9();
    addGrB_10();
    addGA_1();
    addGA_2();
    addGA_3();
    addGA_4();
    addGA_5();
    addGA_6();
    addGA_7();
    addGA_8();
    addGA_9();
    addGA_10();
    addGB_1();
    addGB_2();
    addGB_3();
    addGB_4();
    addGB_5();
    addGB_6();
    addGB_7();
    addGB_8();
    addGB_9();
    addGB_10();
    addGC_1();
    addGC_2();
    addGC_3();
    addGC_4();
    addGC_5();
    addGC_6();
    addGC_7();
    addGC_8();
    addGC_9();
    addGC_10();
    addGABC_1();
    addGABC_2();
    addGABC_3();
    addGABC_4();
    addGABC_5();
    addGABC_6();
    addGABC_7();
    addGABC_8();
    addGABC_9();
    addGABC_10();
    addBF_1();
    addBF_2();
    addBF_3();
    addBF_4();
    addBF_5();
    addBF_6();
    addBF_7();
    addBF_8();
    addBF_9();
    addBF_10();
    
    addMB_1();
    addMB_2();
    addMB_3();
    addMB_4();
    addMB_5();
    addMB_6();
    addMB_7();
    addMB_8();
    addMB_9();
    addMB_10();
    addM1_1();
    addM1_2();
    addM1_3();
    addM1_4();
    addM1_5();
    addM1_6();
    addM1_7();
    addM1_8();
    addM1_9();
    addM1_10();
    addM2_1();
    addM2_2();
    addM2_3();
    addM2_4();
    addM2_5();
    addM2_6();
    addM2_7();
    addM2_8();
    addM2_9();
    addM2_10();
    addM3_1();
    addM3_2();
    addM3_3();
    addM3_4();
    addM3_5();
    addM3_6();
    addM3_7();
    addM3_8();
    addM3_9();
    addM3_10();
    addM12or23_1();
    addM12or23_2();
    addM12or23_3();
    addM12or23_4();
    addM12or23_5();
    addM12or23_6();
    addM12or23_7();
    addM12or23_8();
    addM12or23_9();
    addM12or23_10();
    addM123_1();
    addM123_2();
    addM123_3();
    addM123_4();
    addM123_5();
    addM123_6();
    addM123_7();
    addM123_8();
    addM123_9();
    addM123_10();
    addM4_1();
    addM4_2();
    addM4_3();
    addM4_4();
    addM4_5();
    addM4_6();
    addM4_7();
    addM4_8();
    addM4_9();
    addM4_10();
    addM5_1();
    addM5_2();
    addM5_3();
    addM5_4();
    addM5_5();
    addM5_6();
    addM5_7();
    addM5_8();
    addM5_9();
    addM5_10();
}


function encode1()
{
	banquetPrice={};
	banquetPrice.banquetName = $("[name=MeetingPackage]").text();
}

function addMP_1()
{
    encode1();
	
	banquetPrice.banpTimeBucket = $("[name=PublicPrice]").text();
	banquetPrice.banpPrice = $("[name=MP_price1]").val();
	var callback = function(result)
    {
		if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };
   
    if($("[name=MP_price1]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addMP_2()
{
    encode1();

    banquetPrice.banpTimeBucket = $("[name=HalfDayPrice]").text();
    banquetPrice.banpPrice = $("[name=MP_price2]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=MP_price2]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addMP_3()
{
    encode1();

    banquetPrice.banpTimeBucket = $("[name=HPrice]").text();
    banquetPrice.banpPrice = $("[name=MP_price3]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=MP_price3]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addMP_4()
{
    encode1();

    banquetPrice.banpTimeBucket = $("[name=NPrice]").text();
    banquetPrice.banpPrice = $("[name=MP_price4]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=MP_price4]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addMP_5()
{
    encode1();

    banquetPrice.banpTimeBucket = $("[name=LPrice]").text();
    banquetPrice.banpPrice = $("[name=MP_price5]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=MP_price5]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addMP_6()
{
    encode1();

    banquetPrice.banpTimeBucket = $("[name=DPrice]").text();
    banquetPrice.banpPrice = $("[name=MP_price6]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=MP_price6]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addMP_7()
{
    encode1();

    banquetPrice.banpTimeBucket = $("[name=EPrice]").text();
    banquetPrice.banpPrice = $("[name=MP_price7]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=MP_price7]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addMP_8()
{
    encode1();

    banquetPrice.banpTimeBucket = $("[name=GRPPrice]").text();
    banquetPrice.banpPrice = $("[name=MP_price8]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=MP_price8]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addMP_9()
{
    encode1();

    banquetPrice.banpTimeBucket = $("[name=GRPKPrice]").text();
    banquetPrice.banpPrice = $("[name=MP_price9]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=MP_price9]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addMP_10()
{
    encode1();

    banquetPrice.banpTimeBucket = $("[name=MinPrice]").text();
    banquetPrice.banpPrice = $("[name=MP_price10]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=MP_price10]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}


function encode2()
{
    banquetPrice={};
    banquetPrice.banquetName = $("[name=Accommodation]").text();
}

function addA_1()
{

    encode2();

    banquetPrice.banpTimeBucket = $("[name=PublicPrice]").text();
    banquetPrice.banpPrice = $("[name=A_price1]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=A_price1]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addA_2()
{
    encode2();

    banquetPrice.banpTimeBucket = $("[name=HalfDayPrice]").text();
    banquetPrice.banpPrice = $("[name=A_price2]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=A_price2]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addA_3()
{
    encode2();

    banquetPrice.banpTimeBucket = $("[name=HPrice]").text();
    banquetPrice.banpPrice = $("[name=A_price3]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=A_price3]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addA_4()
{
    encode2();

    banquetPrice.banpTimeBucket = $("[name=NPrice]").text();
    banquetPrice.banpPrice = $("[name=A_price4]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=A_price4]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addA_5()
{
    encode2();

    banquetPrice.banpTimeBucket = $("[name=LPrice]").text();
    banquetPrice.banpPrice = $("[name=A_price5]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=A_price5]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addA_6()
{
    encode2();

    banquetPrice.banpTimeBucket = $("[name=DPrice]").text();
    banquetPrice.banpPrice = $("[name=A_price6]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=A_price6]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addA_7()
{
    encode2();

    banquetPrice.banpTimeBucket = $("[name=EPrice]").text();
    banquetPrice.banpPrice = $("[name=A_price7]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=A_price7]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addA_8()
{
    encode2();

    banquetPrice.banpTimeBucket = $("[name=GRPPrice]").text();
    banquetPrice.banpPrice = $("[name=A_price8]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=A_price8]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addA_9()
{
    encode2();

    banquetPrice.banpTimeBucket = $("[name=GRPKPrice]").text();
    banquetPrice.banpPrice = $("[name=A_price9]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=A_price9]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addA_10()
{
    encode2();

    banquetPrice.banpTimeBucket = $("[name=MinPrice]").text();
    banquetPrice.banpPrice = $("[name=A_price10]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=A_price10]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function encode3()
{
    banquetPrice={};
    banquetPrice.banquetName = $("[name=Wedding]").text();
}

function addW_1()
{

    encode3();

    banquetPrice.banpTimeBucket = $("[name=PublicPrice]").text();
    banquetPrice.banpPrice = $("[name=W_price1]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=W_price1]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addW_2()
{
    encode3();

    banquetPrice.banpTimeBucket = $("[name=HalfDayPrice]").text();
    banquetPrice.banpPrice = $("[name=W_price2]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=W_price2]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addW_3()
{
    encode3();

    banquetPrice.banpTimeBucket = $("[name=HPrice]").text();
    banquetPrice.banpPrice = $("[name=W_price3]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=W_price3]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addW_4()
{
    encode3();

    banquetPrice.banpTimeBucket = $("[name=NPrice]").text();
    banquetPrice.banpPrice = $("[name=W_price4]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=W_price4]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addW_5()
{
    encode3();

    banquetPrice.banpTimeBucket = $("[name=LPrice]").text();
    banquetPrice.banpPrice = $("[name=W_price5]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=W_price5]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addW_6()
{
    encode3();

    banquetPrice.banpTimeBucket = $("[name=DPrice]").text();
    banquetPrice.banpPrice = $("[name=W_price6]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=W_price6]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addW_7()
{
    encode3();

    banquetPrice.banpTimeBucket = $("[name=EPrice]").text();
    banquetPrice.banpPrice = $("[name=W_price7]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=W_price7]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addW_8()
{
    encode3();

    banquetPrice.banpTimeBucket = $("[name=GRPPrice]").text();
    banquetPrice.banpPrice = $("[name=W_price8]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=W_price8]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addW_9()
{
    encode3();

    banquetPrice.banpTimeBucket = $("[name=GRPKPrice]").text();
    banquetPrice.banpPrice = $("[name=W_price9]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=W_price9]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addW_10()
{
    encode3();

    banquetPrice.banpTimeBucket = $("[name=MinPrice]").text();
    banquetPrice.banpPrice = $("[name=W_price10]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=W_price10]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function encode4()
{
    banquetPrice={};
    banquetPrice.banquetName = $("[name=GrandBallroom]").text();
}

function addGrB_1()
{

    encode4();

    banquetPrice.banpTimeBucket = $("[name=PublicPrice]").text();
    banquetPrice.banpPrice = $("[name=GrB_price1]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GrB_price1]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGrB_2()
{
    encode4();

    banquetPrice.banpTimeBucket = $("[name=HalfDayPrice]").text();
    banquetPrice.banpPrice = $("[name=GrB_price2]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GrB_price2]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGrB_3()
{
    encode4();

    banquetPrice.banpTimeBucket = $("[name=HPrice]").text();
    banquetPrice.banpPrice = $("[name=GrB_price3]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GrB_price3]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGrB_4()
{
    encode4();

    banquetPrice.banpTimeBucket = $("[name=NPrice]").text();
    banquetPrice.banpPrice = $("[name=GrB_price4]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GrB_price4]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGrB_5()
{
    encode4();

    banquetPrice.banpTimeBucket = $("[name=LPrice]").text();
    banquetPrice.banpPrice = $("[name=GrB_price5]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GrB_price5]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGrB_6()
{
    encode4();

    banquetPrice.banpTimeBucket = $("[name=DPrice]").text();
    banquetPrice.banpPrice = $("[name=GrB_price6]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GrB_price6]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGrB_7()
{
    encode4();

    banquetPrice.banpTimeBucket = $("[name=EPrice]").text();
    banquetPrice.banpPrice = $("[name=GrB_price7]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GrB_price7]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGrB_8()
{
    encode4();

    banquetPrice.banpTimeBucket = $("[name=GRPPrice]").text();
    banquetPrice.banpPrice = $("[name=GrB_price8]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GrB_price8]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGrB_9()
{
    encode4();

    banquetPrice.banpTimeBucket = $("[name=GRPKPrice]").text();
    banquetPrice.banpPrice = $("[name=GrB_price9]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GrB_price9]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGrB_10()
{
    encode4();

    banquetPrice.banpTimeBucket = $("[name=MinPrice]").text();
    banquetPrice.banpPrice = $("[name=GrB_price10]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GrB_price10]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function encode5()
{
    banquetPrice={};
    banquetPrice.banquetName = $("[name=GA]").text();
}

function addGA_1()
{

    encode5();

    banquetPrice.banpTimeBucket = $("[name=PublicPrice]").text();
    banquetPrice.banpPrice = $("[name=GA_price1]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GA_price1]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGA_2()
{
    encode5();

    banquetPrice.banpTimeBucket = $("[name=HalfDayPrice]").text();
    banquetPrice.banpPrice = $("[name=GA_price2]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GA_price2]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGA_3()
{
    encode5();

    banquetPrice.banpTimeBucket = $("[name=HPrice]").text();
    banquetPrice.banpPrice = $("[name=GA_price3]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GA_price3]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGA_4()
{
    encode5();

    banquetPrice.banpTimeBucket = $("[name=NPrice]").text();
    banquetPrice.banpPrice = $("[name=GA_price4]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GA_price4]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGA_5()
{
    encode5();

    banquetPrice.banpTimeBucket = $("[name=LPrice]").text();
    banquetPrice.banpPrice = $("[name=GA_price5]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GA_price5]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGA_6()
{
    encode5();

    banquetPrice.banpTimeBucket = $("[name=DPrice]").text();
    banquetPrice.banpPrice = $("[name=GA_price6]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GA_price6]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGA_7()
{
    encode5();

    banquetPrice.banpTimeBucket = $("[name=EPrice]").text();
    banquetPrice.banpPrice = $("[name=GA_price7]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GA_price7]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGA_8()
{
    encode5();

    banquetPrice.banpTimeBucket = $("[name=GRPPrice]").text();
    banquetPrice.banpPrice = $("[name=GA_price8]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GA_price8]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGA_9()
{
    encode5();

    banquetPrice.banpTimeBucket = $("[name=GRPKPrice]").text();
    banquetPrice.banpPrice = $("[name=GA_price9]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GA_price9]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGA_10()
{
    encode5();

    banquetPrice.banpTimeBucket = $("[name=MinPrice]").text();
    banquetPrice.banpPrice = $("[name=GA_price10]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GA_price10]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function encode6()
{
    banquetPrice={};
    banquetPrice.banquetName = $("[name=GB]").text();
}

function addGB_1()
{

    encode6();

    banquetPrice.banpTimeBucket = $("[name=PublicPrice]").text();
    banquetPrice.banpPrice = $("[name=GB_price1]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GB_price1]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGB_2()
{
    encode6();

    banquetPrice.banpTimeBucket = $("[name=HalfDayPrice]").text();
    banquetPrice.banpPrice = $("[name=GB_price2]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GB_price2]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGB_3()
{
    encode6();

    banquetPrice.banpTimeBucket = $("[name=HPrice]").text();
    banquetPrice.banpPrice = $("[name=GB_price3]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GB_price3]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGB_4()
{
    encode6();

    banquetPrice.banpTimeBucket = $("[name=NPrice]").text();
    banquetPrice.banpPrice = $("[name=GB_price4]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GB_price4]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGB_5()
{
    encode6();

    banquetPrice.banpTimeBucket = $("[name=LPrice]").text();
    banquetPrice.banpPrice = $("[name=GB_price5]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GB_price5]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGB_6()
{
    encode6();

    banquetPrice.banpTimeBucket = $("[name=DPrice]").text();
    banquetPrice.banpPrice = $("[name=GB_price6]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GB_price6]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGB_7()
{
    encode6();

    banquetPrice.banpTimeBucket = $("[name=EPrice]").text();
    banquetPrice.banpPrice = $("[name=GB_price7]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GB_price7]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGB_8()
{
    encode6();

    banquetPrice.banpTimeBucket = $("[name=GRPPrice]").text();
    banquetPrice.banpPrice = $("[name=GB_price8]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GB_price8]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGB_9()
{
    encode6();

    banquetPrice.banpTimeBucket = $("[name=GRPKPrice]").text();
    banquetPrice.banpPrice = $("[name=GB_price9]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GB_price9]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGB_10()
{
    encode6();

    banquetPrice.banpTimeBucket = $("[name=MinPrice]").text();
    banquetPrice.banpPrice = $("[name=GB_price10]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GB_price10]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function encode7()
{
    banquetPrice={};
    banquetPrice.banquetName = $("[name=GC]").text();
}

function addGC_1()
{

    encode7();

    banquetPrice.banpTimeBucket = $("[name=PublicPrice]").text();
    banquetPrice.banpPrice = $("[name=GC_price1]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GC_price1]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGC_2()
{
    encode7();

    banquetPrice.banpTimeBucket = $("[name=HalfDayPrice]").text();
    banquetPrice.banpPrice = $("[name=GC_price2]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GC_price2]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGC_3()
{
    encode7();

    banquetPrice.banpTimeBucket = $("[name=HPrice]").text();
    banquetPrice.banpPrice = $("[name=GC_price3]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GC_price3]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGC_4()
{
    encode7();

    banquetPrice.banpTimeBucket = $("[name=NPrice]").text();
    banquetPrice.banpPrice = $("[name=GC_price4]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GC_price4]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGC_5()
{
    encode7();

    banquetPrice.banpTimeBucket = $("[name=LPrice]").text();
    banquetPrice.banpPrice = $("[name=GC_price5]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GC_price5]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGC_6()
{
    encode7();

    banquetPrice.banpTimeBucket = $("[name=DPrice]").text();
    banquetPrice.banpPrice = $("[name=GC_price6]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GC_price6]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGC_7()
{
    encode7();

    banquetPrice.banpTimeBucket = $("[name=EPrice]").text();
    banquetPrice.banpPrice = $("[name=GC_price7]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GC_price7]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGC_8()
{
    encode7();

    banquetPrice.banpTimeBucket = $("[name=GRPPrice]").text();
    banquetPrice.banpPrice = $("[name=GC_price8]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GC_price8]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGC_9()
{
    encode7();

    banquetPrice.banpTimeBucket = $("[name=GRPKPrice]").text();
    banquetPrice.banpPrice = $("[name=GC_price9]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GC_price9]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGC_10()
{
    encode7();

    banquetPrice.banpTimeBucket = $("[name=MinPrice]").text();
    banquetPrice.banpPrice = $("[name=GC_price10]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GC_price10]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function encode8()
{
    banquetPrice={};
    banquetPrice.banquetName = $("[name=GABC]").text();
}

function addGABC_1()
{

    encode8();

    banquetPrice.banpTimeBucket = $("[name=PublicPrice]").text();
    banquetPrice.banpPrice = $("[name=GABC_price1]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GABC_price1]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGABC_2()
{
    encode8();

    banquetPrice.banpTimeBucket = $("[name=HalfDayPrice]").text();
    banquetPrice.banpPrice = $("[name=GABC_price2]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GABC_price2]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGABC_3()
{
    encode8();

    banquetPrice.banpTimeBucket = $("[name=HPrice]").text();
    banquetPrice.banpPrice = $("[name=GABC_price3]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GABC_price3]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGABC_4()
{
    encode8();

    banquetPrice.banpTimeBucket = $("[name=NPrice]").text();
    banquetPrice.banpPrice = $("[name=GABC_price4]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GABC_price4]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGABC_5()
{
    encode8();

    banquetPrice.banpTimeBucket = $("[name=LPrice]").text();
    banquetPrice.banpPrice = $("[name=GABC_price5]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GABC_price5]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGABC_6()
{
    encode8();

    banquetPrice.banpTimeBucket = $("[name=DPrice]").text();
    banquetPrice.banpPrice = $("[name=GABC_price6]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GABC_price6]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGABC_7()
{
    encode8();

    banquetPrice.banpTimeBucket = $("[name=EPrice]").text();
    banquetPrice.banpPrice = $("[name=GABC_price7]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GABC_price7]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGABC_8()
{
    encode8();

    banquetPrice.banpTimeBucket = $("[name=GRPPrice]").text();
    banquetPrice.banpPrice = $("[name=GABC_price8]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GABC_price8]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGABC_9()
{
    encode8();

    banquetPrice.banpTimeBucket = $("[name=GRPKPrice]").text();
    banquetPrice.banpPrice = $("[name=GABC_price9]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GABC_price9]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addGABC_10()
{
    encode8();

    banquetPrice.banpTimeBucket = $("[name=MinPrice]").text();
    banquetPrice.banpPrice = $("[name=GABC_price10]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=GABC_price10]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function encode9()
{
    banquetPrice={};
    banquetPrice.banquetName = $("[name=BallroomFoyer]").text();
}

function addBF_1()
{

    encode9();

    banquetPrice.banpTimeBucket = $("[name=PublicPrice]").text();
    banquetPrice.banpPrice = $("[name=BF_price1]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=BF_price1]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addBF_2()
{
    encode9();

    banquetPrice.banpTimeBucket = $("[name=HalfDayPrice]").text();
    banquetPrice.banpPrice = $("[name=BF_price2]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=BF_price2]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addBF_3()
{
    encode9();

    banquetPrice.banpTimeBucket = $("[name=HPrice]").text();
    banquetPrice.banpPrice = $("[name=BF_price3]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=BF_price3]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addBF_4()
{
    encode9();

    banquetPrice.banpTimeBucket = $("[name=NPrice]").text();
    banquetPrice.banpPrice = $("[name=BF_price4]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=BF_price4]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addBF_5()
{
    encode9();

    banquetPrice.banpTimeBucket = $("[name=LPrice]").text();
    banquetPrice.banpPrice = $("[name=BF_price5]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=BF_price5]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addBF_6()
{
    encode9();

    banquetPrice.banpTimeBucket = $("[name=DPrice]").text();
    banquetPrice.banpPrice = $("[name=BF_price6]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=BF_price6]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addBF_7()
{
    encode9();

    banquetPrice.banpTimeBucket = $("[name=EPrice]").text();
    banquetPrice.banpPrice = $("[name=BF_price7]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=BF_price7]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addBF_8()
{
    encode9();

    banquetPrice.banpTimeBucket = $("[name=GRPPrice]").text();
    banquetPrice.banpPrice = $("[name=BF_price8]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=BF_price8]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addBF_9()
{
    encode9();

    banquetPrice.banpTimeBucket = $("[name=GRPKPrice]").text();
    banquetPrice.banpPrice = $("[name=BF_price9]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=BF_price9]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addBF_10()
{
    encode9();

    banquetPrice.banpTimeBucket = $("[name=MinPrice]").text();
    banquetPrice.banpPrice = $("[name=BF_price10]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=BF_price10]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function encode10()
{
	banquetPrice={};
	banquetPrice.banquetName = $("[name=MinorBallroom]").text();
}

function addMB_1()
{
    encode10();
	
	banquetPrice.banpTimeBucket = $("[name=PublicPrice]").text();
	banquetPrice.banpPrice = $("[name=MB_price1]").val();
	var callback = function(result)
    {
		if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };
   
    if($("[name=MB_price1]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addMB_2()
{
    encode10();

    banquetPrice.banpTimeBucket = $("[name=HalfDayPrice]").text();
    banquetPrice.banpPrice = $("[name=MB_price2]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=MB_price2]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addMB_3()
{
    encode10();

    banquetPrice.banpTimeBucket = $("[name=HPrice]").text();
    banquetPrice.banpPrice = $("[name=MB_price3]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=MB_price3]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addMB_4()
{
    encode10();

    banquetPrice.banpTimeBucket = $("[name=NPrice]").text();
    banquetPrice.banpPrice = $("[name=MB_price4]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=MB_price4]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addMB_5()
{
    encode10();

    banquetPrice.banpTimeBucket = $("[name=LPrice]").text();
    banquetPrice.banpPrice = $("[name=MB_price5]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=MB_price5]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addMB_6()
{
    encode10();

    banquetPrice.banpTimeBucket = $("[name=DPrice]").text();
    banquetPrice.banpPrice = $("[name=MB_price6]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=MB_price6]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addMB_7()
{
    encode10();

    banquetPrice.banpTimeBucket = $("[name=EPrice]").text();
    banquetPrice.banpPrice = $("[name=MB_price7]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=MB_price7]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addMB_8()
{
    encode10();

    banquetPrice.banpTimeBucket = $("[name=GRPPrice]").text();
    banquetPrice.banpPrice = $("[name=MB_price8]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=MB_price8]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addMB_9()
{
    encode10();

    banquetPrice.banpTimeBucket = $("[name=GRPKPrice]").text();
    banquetPrice.banpPrice = $("[name=MB_price9]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=MB_price9]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addMB_10()
{
    encode10();

    banquetPrice.banpTimeBucket = $("[name=MinPrice]").text();
    banquetPrice.banpPrice = $("[name=MB_price10]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=MB_price10]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function encode11()
{
	banquetPrice={};
	banquetPrice.banquetName = $("[name=Meeting1]").text();
}

function addM1_1()
{
    encode11();
	
	banquetPrice.banpTimeBucket = $("[name=PublicPrice]").text();
	banquetPrice.banpPrice = $("[name=M1_price1]").val();
	var callback = function(result)
    {
		if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };
   
    if($("[name=M1_price1]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM1_2()
{
    encode11();

    banquetPrice.banpTimeBucket = $("[name=HalfDayPrice]").text();
    banquetPrice.banpPrice = $("[name=M1_price2]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M1_price2]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM1_3()
{
    encode11();

    banquetPrice.banpTimeBucket = $("[name=HPrice]").text();
    banquetPrice.banpPrice = $("[name=M1_price3]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M1_price3]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM1_4()
{
    encode11();

    banquetPrice.banpTimeBucket = $("[name=NPrice]").text();
    banquetPrice.banpPrice = $("[name=M1_price4]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M1_price4]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM1_5()
{
    encode11();

    banquetPrice.banpTimeBucket = $("[name=LPrice]").text();
    banquetPrice.banpPrice = $("[name=M1_price5]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M1_price5]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM1_6()
{
    encode11();

    banquetPrice.banpTimeBucket = $("[name=DPrice]").text();
    banquetPrice.banpPrice = $("[name=M1_price6]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M1_price6]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM1_7()
{
    encode11();

    banquetPrice.banpTimeBucket = $("[name=EPrice]").text();
    banquetPrice.banpPrice = $("[name=M1_price7]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M1_price7]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM1_8()
{
    encode11();

    banquetPrice.banpTimeBucket = $("[name=GRPPrice]").text();
    banquetPrice.banpPrice = $("[name=M1_price8]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M1_price8]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM1_9()
{
    encode11();

    banquetPrice.banpTimeBucket = $("[name=GRPKPrice]").text();
    banquetPrice.banpPrice = $("[name=M1_price9]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M1_price9]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM1_10()
{
    encode11();

    banquetPrice.banpTimeBucket = $("[name=MinPrice]").text();
    banquetPrice.banpPrice = $("[name=M1_price10]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M1_price10]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function encode12()
{
	banquetPrice={};
	banquetPrice.banquetName = $("[name=Meeting2]").text();
}

function addM2_1()
{
    encode12();
	
	banquetPrice.banpTimeBucket = $("[name=PublicPrice]").text();
	banquetPrice.banpPrice = $("[name=M2_price1]").val();
	var callback = function(result)
    {
		if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };
   
    if($("[name=M2_price1]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM2_2()
{
    encode12();

    banquetPrice.banpTimeBucket = $("[name=HalfDayPrice]").text();
    banquetPrice.banpPrice = $("[name=M2_price2]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M2_price2]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM2_3()
{
    encode12();

    banquetPrice.banpTimeBucket = $("[name=HPrice]").text();
    banquetPrice.banpPrice = $("[name=M2_price3]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M2_price3]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM2_4()
{
    encode12();

    banquetPrice.banpTimeBucket = $("[name=NPrice]").text();
    banquetPrice.banpPrice = $("[name=M2_price4]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M2_price4]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM2_5()
{
    encode12();

    banquetPrice.banpTimeBucket = $("[name=LPrice]").text();
    banquetPrice.banpPrice = $("[name=M2_price5]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M2_price5]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM2_6()
{
    encode12();

    banquetPrice.banpTimeBucket = $("[name=DPrice]").text();
    banquetPrice.banpPrice = $("[name=M2_price6]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M2_price6]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM2_7()
{
    encode12();

    banquetPrice.banpTimeBucket = $("[name=EPrice]").text();
    banquetPrice.banpPrice = $("[name=M2_price7]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M2_price7]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM2_8()
{
    encode12();

    banquetPrice.banpTimeBucket = $("[name=GRPPrice]").text();
    banquetPrice.banpPrice = $("[name=M2_price8]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M2_price8]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM2_9()
{
    encode12();

    banquetPrice.banpTimeBucket = $("[name=GRPKPrice]").text();
    banquetPrice.banpPrice = $("[name=M2_price9]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M2_price9]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM2_10()
{
    encode12();

    banquetPrice.banpTimeBucket = $("[name=MinPrice]").text();
    banquetPrice.banpPrice = $("[name=M2_price10]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M2_price10]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function encode13()
{
	banquetPrice={};
	banquetPrice.banquetName = $("[name=Meeting3]").text();
}

function addM3_1()
{
    encode13();
	
	banquetPrice.banpTimeBucket = $("[name=PublicPrice]").text();
	banquetPrice.banpPrice = $("[name=M3_price1]").val();
	var callback = function(result)
    {
		if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };
   
    if($("[name=M3_price1]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM3_2()
{
    encode13();

    banquetPrice.banpTimeBucket = $("[name=HalfDayPrice]").text();
    banquetPrice.banpPrice = $("[name=M3_price2]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M3_price2]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM3_3()
{
    encode13();

    banquetPrice.banpTimeBucket = $("[name=HPrice]").text();
    banquetPrice.banpPrice = $("[name=M3_price3]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M3_price3]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM3_4()
{
    encode13();

    banquetPrice.banpTimeBucket = $("[name=NPrice]").text();
    banquetPrice.banpPrice = $("[name=M3_price4]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M3_price4]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM3_5()
{
    encode13();

    banquetPrice.banpTimeBucket = $("[name=LPrice]").text();
    banquetPrice.banpPrice = $("[name=M3_price5]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M3_price5]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM3_6()
{
    encode13();

    banquetPrice.banpTimeBucket = $("[name=DPrice]").text();
    banquetPrice.banpPrice = $("[name=M3_price6]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M3_price6]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM3_7()
{
    encode13();

    banquetPrice.banpTimeBucket = $("[name=EPrice]").text();
    banquetPrice.banpPrice = $("[name=M3_price7]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M3_price7]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM3_8()
{
    encode13();

    banquetPrice.banpTimeBucket = $("[name=GRPPrice]").text();
    banquetPrice.banpPrice = $("[name=M3_price8]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M3_price8]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM3_9()
{
    encode13();

    banquetPrice.banpTimeBucket = $("[name=GRPKPrice]").text();
    banquetPrice.banpPrice = $("[name=M3_price9]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M3_price9]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM3_10()
{
    encode13();

    banquetPrice.banpTimeBucket = $("[name=MinPrice]").text();
    banquetPrice.banpPrice = $("[name=M3_price10]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M3_price10]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function encode14()
{
	banquetPrice={};
	banquetPrice.banquetName = $("[name=Meeting12or23]").text();
}

function addM12or23_1()
{
    encode14();
	
	banquetPrice.banpTimeBucket = $("[name=PublicPrice]").text();
	banquetPrice.banpPrice = $("[name=M12or23_price1]").val();
	var callback = function(result)
    {
		if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };
   
    if($("[name=M12or23_price1]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM12or23_2()
{
    encode14();

    banquetPrice.banpTimeBucket = $("[name=HalfDayPrice]").text();
    banquetPrice.banpPrice = $("[name=M12or23_price2]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M12or23_price2]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM12or23_3()
{
    encode14();

    banquetPrice.banpTimeBucket = $("[name=HPrice]").text();
    banquetPrice.banpPrice = $("[name=M12or23_price3]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M12or23_price3]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM12or23_4()
{
    encode14();

    banquetPrice.banpTimeBucket = $("[name=NPrice]").text();
    banquetPrice.banpPrice = $("[name=M12or23_price4]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M12or23_price4]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM12or23_5()
{
    encode14();

    banquetPrice.banpTimeBucket = $("[name=LPrice]").text();
    banquetPrice.banpPrice = $("[name=M12or23_price5]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M12or23_price5]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM12or23_6()
{
    encode14();

    banquetPrice.banpTimeBucket = $("[name=DPrice]").text();
    banquetPrice.banpPrice = $("[name=M12or23_price6]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M12or23_price6]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM12or23_7()
{
    encode14();

    banquetPrice.banpTimeBucket = $("[name=EPrice]").text();
    banquetPrice.banpPrice = $("[name=M12or23_price7]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M12or23_price7]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM12or23_8()
{
    encode14();

    banquetPrice.banpTimeBucket = $("[name=GRPPrice]").text();
    banquetPrice.banpPrice = $("[name=M12or23_price8]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M12or23_price8]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM12or23_9()
{
    encode14();

    banquetPrice.banpTimeBucket = $("[name=GRPKPrice]").text();
    banquetPrice.banpPrice = $("[name=M12or23_price9]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M12or23_price9]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM12or23_10()
{
    encode14();

    banquetPrice.banpTimeBucket = $("[name=MinPrice]").text();
    banquetPrice.banpPrice = $("[name=M12or23_price10]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M12or23_price10]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function encode15()
{
	banquetPrice={};
	banquetPrice.banquetName = $("[name=Meeting123]").text();
}

function addM123_1()
{
    encode15();
	
	banquetPrice.banpTimeBucket = $("[name=PublicPrice]").text();
	banquetPrice.banpPrice = $("[name=M123_price1]").val();
	var callback = function(result)
    {
		if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };
   
    if($("[name=M123_price1]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM123_2()
{
    encode15();

    banquetPrice.banpTimeBucket = $("[name=HalfDayPrice]").text();
    banquetPrice.banpPrice = $("[name=M123_price2]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M123_price2]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM123_3()
{
    encode15();

    banquetPrice.banpTimeBucket = $("[name=HPrice]").text();
    banquetPrice.banpPrice = $("[name=M123_price3]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M123_price3]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM123_4()
{
    encode15();

    banquetPrice.banpTimeBucket = $("[name=NPrice]").text();
    banquetPrice.banpPrice = $("[name=M123_price4]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M123_price4]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM123_5()
{
    encode15();

    banquetPrice.banpTimeBucket = $("[name=LPrice]").text();
    banquetPrice.banpPrice = $("[name=M123_price5]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M123_price5]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM123_6()
{
    encode15();

    banquetPrice.banpTimeBucket = $("[name=DPrice]").text();
    banquetPrice.banpPrice = $("[name=M123_price6]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M123_price6]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM123_7()
{
    encode15();

    banquetPrice.banpTimeBucket = $("[name=EPrice]").text();
    banquetPrice.banpPrice = $("[name=M123_price7]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M123_price7]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM123_8()
{
    encode15();

    banquetPrice.banpTimeBucket = $("[name=GRPPrice]").text();
    banquetPrice.banpPrice = $("[name=M123_price8]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M123_price8]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM123_9()
{
    encode15();

    banquetPrice.banpTimeBucket = $("[name=GRPKPrice]").text();
    banquetPrice.banpPrice = $("[name=M123_price9]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M123_price9]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM123_10()
{
    encode15();

    banquetPrice.banpTimeBucket = $("[name=MinPrice]").text();
    banquetPrice.banpPrice = $("[name=M123_price10]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M123_price10]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function encode16()
{
	banquetPrice={};
	banquetPrice.banquetName = $("[name=Meeting4]").text();
}

function addM4_1()
{
    encode16();
	
	banquetPrice.banpTimeBucket = $("[name=PublicPrice]").text();
	banquetPrice.banpPrice = $("[name=M4_price1]").val();
	var callback = function(result)
    {
		if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };
   
    if($("[name=M4_price1]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM4_2()
{
    encode16();

    banquetPrice.banpTimeBucket = $("[name=HalfDayPrice]").text();
    banquetPrice.banpPrice = $("[name=M4_price2]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M4_price2]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM4_3()
{
    encode16();

    banquetPrice.banpTimeBucket = $("[name=HPrice]").text();
    banquetPrice.banpPrice = $("[name=M4_price3]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M4_price3]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM4_4()
{
    encode16();

    banquetPrice.banpTimeBucket = $("[name=NPrice]").text();
    banquetPrice.banpPrice = $("[name=M4_price4]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M4_price4]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM4_5()
{
    encode16();

    banquetPrice.banpTimeBucket = $("[name=LPrice]").text();
    banquetPrice.banpPrice = $("[name=M4_price5]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M4_price5]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM4_6()
{
    encode16();

    banquetPrice.banpTimeBucket = $("[name=DPrice]").text();
    banquetPrice.banpPrice = $("[name=M4_price6]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M4_price6]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM4_7()
{
    encode16();

    banquetPrice.banpTimeBucket = $("[name=EPrice]").text();
    banquetPrice.banpPrice = $("[name=M4_price7]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M4_price7]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM4_8()
{
    encode16();

    banquetPrice.banpTimeBucket = $("[name=GRPPrice]").text();
    banquetPrice.banpPrice = $("[name=M4_price8]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M4_price8]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM4_9()
{
    encode16();

    banquetPrice.banpTimeBucket = $("[name=GRPKPrice]").text();
    banquetPrice.banpPrice = $("[name=M4_price9]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M4_price9]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM4_10()
{
    encode16();

    banquetPrice.banpTimeBucket = $("[name=MinPrice]").text();
    banquetPrice.banpPrice = $("[name=M4_price10]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M4_price10]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function encode17()
{
	banquetPrice={};
	banquetPrice.banquetName = $("[name=Meeting5]").text();
}

function addM5_1()
{
    encode17();
	
	banquetPrice.banpTimeBucket = $("[name=PublicPrice]").text();
	banquetPrice.banpPrice = $("[name=M5_price1]").val();
	var callback = function(result)
    {
		if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };
   
    if($("[name=M5_price1]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM5_2()
{
    encode17();

    banquetPrice.banpTimeBucket = $("[name=HalfDayPrice]").text();
    banquetPrice.banpPrice = $("[name=M5_price2]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M5_price2]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM5_3()
{
    encode17();

    banquetPrice.banpTimeBucket = $("[name=HPrice]").text();
    banquetPrice.banpPrice = $("[name=M5_price3]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M5_price3]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM5_4()
{
    encode17();

    banquetPrice.banpTimeBucket = $("[name=NPrice]").text();
    banquetPrice.banpPrice = $("[name=M5_price4]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M5_price4]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM5_5()
{
    encode17();

    banquetPrice.banpTimeBucket = $("[name=LPrice]").text();
    banquetPrice.banpPrice = $("[name=M5_price5]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M5_price5]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM5_6()
{
    encode17();

    banquetPrice.banpTimeBucket = $("[name=DPrice]").text();
    banquetPrice.banpPrice = $("[name=M5_price6]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M5_price6]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM5_7()
{
    encode17();

    banquetPrice.banpTimeBucket = $("[name=EPrice]").text();
    banquetPrice.banpPrice = $("[name=M5_price7]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M5_price7]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM5_8()
{
    encode17();

    banquetPrice.banpTimeBucket = $("[name=GRPPrice]").text();
    banquetPrice.banpPrice = $("[name=M5_price8]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M5_price8]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM5_9()
{
    encode17();

    banquetPrice.banpTimeBucket = $("[name=GRPKPrice]").text();
    banquetPrice.banpPrice = $("[name=M5_price9]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M5_price9]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}

function addM5_10()
{
    encode17();

    banquetPrice.banpTimeBucket = $("[name=MinPrice]").text();
    banquetPrice.banpPrice = $("[name=M5_price10]").val();
    var callback = function(result)
    {
       if(ModalDialog === true)  {  $('#banquet_salerinfo').modal('show');  popModal = false; }
    };

    if($("[name=M5_price10]").val())
    {
        var operation = new Operation("酒店.酒店设置.宴会厅价格设置.添加宴会厅价格");
        operation.banquetPrice = banquetPrice;
        operation.execute(callback);
    }
}
