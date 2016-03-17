$import("rpc.js");
$import("html/form.js");

var roomPrice;
var popModal = false;

function OnSubmit()
{
    popModal = true;
    addEFrontNoBreakfastBasePrice();
	addEFrontNoBreakfastRoom2Price();
	addEFrontNoBreakfastRoom3Price();
	addEFrontNoBreakfastRoom4Price();	
	addEFrontBreakfastBasePrice();	
	addEFrontBreakfastRoom2Price();
	addEFrontBreakfastRoom3Price();
	addEFrontBreakfastRoom4Price();	
	addEPrepayNoBreakfastBasePrice();
	addEPrepayNoBreakfastRoom2Price();
	addEPrepayNoBreakfastRoom3Price();
	addEPrepayNoBreakfastRoom4Price();	
	addEPrepayBreakfastBasePrice();
	addEPrepayBreakfastRoom2Price();
	addEPrepayBreakfastRoom3Price();
	addEPrepayBreakfastRoom4Price();	
	addEWeekendBreakfastBasePrice();
	addEWeekendBreakfastRoom2Price();
	addEWeekendBreakfastRoom3Price();
	addEWeekendBreakfastRoom4Price();
	addEPackage1BasePrice();
	addEPackage1Room2Price();
	addEPackage1Room3Price();
	addEPackage1Room4Price();
	addEPackage2BasePrice();
	addEPackage2Room2Price();
	addEPackage2Room3Price();
	addEPackage2Room4Price();
	
	
	addHFrontNoBreakfastBasePrice();
	addHFrontNoBreakfastRoom2Price();
	addHFrontNoBreakfastRoom3Price();
	addHFrontNoBreakfastRoom4Price();	
	addHFrontBreakfastBasePrice();	
	addHFrontBreakfastRoom2Price();
	addHFrontBreakfastRoom3Price();
	addHFrontBreakfastRoom4Price();	
	addHPrepayNoBreakfastBasePrice();
	addHPrepayNoBreakfastRoom2Price();
	addHPrepayNoBreakfastRoom3Price();
	addHPrepayNoBreakfastRoom4Price();	
	addHPrepayBreakfastBasePrice();
	addHPrepayBreakfastRoom2Price();
	addHPrepayBreakfastRoom3Price();
	addHPrepayBreakfastRoom4Price();	
	addHWeekendBreakfastBasePrice();
	addHWeekendBreakfastRoom2Price();
	addHWeekendBreakfastRoom3Price();
	addHWeekendBreakfastRoom4Price();
	addHPackage1BasePrice();
	addHPackage1Room2Price();
	addHPackage1Room3Price();
	addHPackage1Room4Price();
	addHPackage2BasePrice();
	addHPackage2Room2Price();
	addHPackage2Room3Price();
	addHPackage2Room4Price();
	
	addNFrontNoBreakfastBasePrice();
	addNFrontNoBreakfastRoom2Price();
	addNFrontNoBreakfastRoom3Price();
	addNFrontNoBreakfastRoom4Price();	
	addNFrontBreakfastBasePrice();	
	addNFrontBreakfastRoom2Price();
	addNFrontBreakfastRoom3Price();
	addNFrontBreakfastRoom4Price();	
	addNPrepayNoBreakfastBasePrice();
	addNPrepayNoBreakfastRoom2Price();
	addNPrepayNoBreakfastRoom3Price();
	addNPrepayNoBreakfastRoom4Price();	
	addNPrepayBreakfastBasePrice();
	addNPrepayBreakfastRoom2Price();
	addNPrepayBreakfastRoom3Price();
	addNPrepayBreakfastRoom4Price();	
	addNWeekendBreakfastBasePrice();
	addNWeekendBreakfastRoom2Price();
	addNWeekendBreakfastRoom3Price();
	addNWeekendBreakfastRoom4Price();
	addNPackage1BasePrice();
	addNPackage1Room2Price();
	addNPackage1Room3Price();
	addNPackage1Room4Price();
	addNPackage2BasePrice();
	addNPackage2Room2Price();
	addNPackage2Room3Price();
	addNPackage2Room4Price();
	
    SP2_1_1();
    SP2_1_2();
    SP2_1_3();
    SP2_1_4();
    SP2_2_1();
    SP2_2_2();
    SP2_2_3();
    SP2_2_4();
    SP2_3_1();
    SP2_3_2();
    SP2_3_3();
    SP2_3_4();
    SP2_4_1();
    SP2_4_2();
    SP2_4_3();
    SP2_4_4();
    SP2_5_1();
    SP2_5_2();
    SP2_5_3();
    SP2_5_4();
    SP2_6_1();
    SP2_6_2();
    SP2_6_3();
    SP2_6_4();
    SP2_7_1();
    SP2_7_2();
    SP2_7_3();
    SP2_7_4();
    SP1_1_1();
    SP1_1_2();
    SP1_1_3();
    SP1_1_4();
    SP1_2_1();
    SP1_2_2();
    SP1_2_3();
    SP1_2_4();
    SP1_3_1();
    SP1_3_2();
    SP1_3_3();
    SP1_3_4();
    SP1_4_1();
    SP1_4_2();
    SP1_4_3();
    SP1_4_4();
    SP1_5_1();
    SP1_5_2();
    SP1_5_3();
    SP1_5_4();
    SP1_6_1();
    SP1_6_2();
    SP1_6_3();
    SP1_6_4();
    SP1_7_1();
    SP1_7_2();
    SP1_7_3();
    SP1_7_4();
    
    D_1_1();
    D_1_2();
    D_1_3();
    D_1_4();
    D_2_1();
    D_2_2();
    D_2_3();
    D_2_4();
    D_3_1();
    D_3_2();
    D_3_3();
    D_3_4();
    D_4_1();
    D_4_2();
    D_4_3();
    D_4_4();
    D_5_1();
    D_5_2();
    D_5_3();
    D_5_4();
    D_6_1();
    D_6_2();
    D_6_3();
    D_6_4();
    D_7_1();
    D_7_2();
    D_7_3();
    D_7_4();
    
    L_1_1();
    L_1_2();
    L_1_3();
    L_1_4();
    L_2_1();
    L_2_2();
    L_2_3();
    L_2_4();
    L_3_1();
    L_3_2();
    L_3_3();
    L_3_4();
    L_4_1();
    L_4_2();
    L_4_3();
    L_4_4();
    L_5_1();
    L_5_2();
    L_5_3();
    L_5_4();
    L_6_1();
    L_6_2();
    L_6_3();
    L_6_4();
    L_7_1();
    L_7_2();
    L_7_3();
    L_7_4();

}

function encodeERoomPrice1()
{
    roomPrice={};

    var pt1 = $("[name=package1]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Esupplement1").val());
    roomPrice.onlinePayType = $("#Epk1").val();
    roomPrice.onlineProjectName = $(".Eproj1").text();
    roomPrice.onlineHotelCode = $("#Ehtcode1").val();
    roomPrice.onlineSupplements = supplement/100;

}

function addEFrontNoBreakfastBasePrice()
{
    encodeERoomPrice1();
    roomPrice.onlinePrice = $("#Ebaseprice1").val();
    roomPrice.roomType = $(".Ebasichometype").text();
    var callback = function(result)
    {
       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Ebaseprice1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }

}

function addEFrontNoBreakfastRoom2Price()
{
    encodeERoomPrice1();
    roomPrice.onlinePrice = $("#Eroom2price1").val();
    roomPrice.roomType = $(".Eroomtype2").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Eroom2price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addEFrontNoBreakfastRoom3Price()
{
    encodeERoomPrice1();
    roomPrice.onlinePrice = $("#Eroom3price1").val();
    roomPrice.roomType = $(".Eroomtype3").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Eroom3price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addEFrontNoBreakfastRoom4Price()
{
    encodeERoomPrice1();
    roomPrice.onlinePrice = $("#Eroom4price1").val();
    roomPrice.roomType = $(".Eroomtype4").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Eroom4price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function encodeERoomPrice2()
{
    roomPrice={};

    var pt1 = $("[name=package1]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Esupplement2").val());
    roomPrice.onlinePayType = $("#Epk2").val();
    roomPrice.onlineProjectName = $(".Eproj2").text();
    roomPrice.onlineHotelCode = $("#Ehtcode2").val();
    roomPrice.onlineSupplements = supplement/100;

}

function addEFrontBreakfastBasePrice()
{
    encodeERoomPrice2();
    roomPrice.onlinePrice = $("#Ebaseprice2").val();
    roomPrice.roomType = $(".Ebasichometype").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Ebaseprice2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addEFrontBreakfastRoom2Price()
{
    encodeERoomPrice2();
    roomPrice.onlinePrice = $("#Eroom2price2").val();
    roomPrice.roomType = $(".Eroomtype2").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Eroom2price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addEFrontBreakfastRoom3Price()
{
    encodeERoomPrice2();
    roomPrice.onlinePrice = $("#Eroom3price2").val();
    roomPrice.roomType = $(".Eroomtype3").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Eroom3price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addEFrontBreakfastRoom4Price()
{
    encodeERoomPrice2();
    roomPrice.onlinePrice = $("#Eroom4price2").val();
    roomPrice.roomType = $(".Eroomtype4").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Eroom4price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function encodeERoomPrice3()
{
    roomPrice={};

    var pt1 = $("[name=package1]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Esupplement3").val());
    roomPrice.onlinePayType = $("#Epk3").val();
    roomPrice.onlineProjectName = $(".Eproj3").text();
    roomPrice.onlineHotelCode = $("#Ehtcode3").val();
    roomPrice.onlineSupplements = supplement/100;

}

function addEPrepayNoBreakfastBasePrice()
{
    encodeERoomPrice3();
    roomPrice.onlinePrice = $("#Ebaseprice3").val();
    roomPrice.roomType = $(".Ebasichometype").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Ebaseprice3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addEPrepayNoBreakfastRoom2Price()
{
    encodeERoomPrice3();
    roomPrice.onlinePrice = $("#Eroom2price3").val();
    roomPrice.roomType = $(".Eroomtype2").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Eroom2price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addEPrepayNoBreakfastRoom3Price()
{
    encodeERoomPrice3();
    roomPrice.onlinePrice = $("#Eroom3price3").val();
    roomPrice.roomType = $(".Eroomtype3").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Eroom3price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addEPrepayNoBreakfastRoom4Price()
{
    encodeERoomPrice3();
    roomPrice.onlinePrice = $("#Eroom4price3").val();
    roomPrice.roomType = $(".Eroomtype4").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Eroom4price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function encodeERoomPrice4()
{
   roomPrice={};

    var pt1 = $("[name=package1]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Esupplement4").val());
    roomPrice.onlinePayType = $("#Epk4").val();
    roomPrice.onlineProjectName = $(".Eproj4").text();
    roomPrice.onlineHotelCode = $("#Ehtcode4").val();
    roomPrice.onlineSupplements = supplement/100;

}

function addEPrepayBreakfastBasePrice()
{
    encodeERoomPrice4();
    roomPrice.onlinePrice = $("#Ebaseprice4").val();
    roomPrice.roomType = $(".Ebasichometype").text();
    var callback = function(result)
    {
       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Ebaseprice4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }

}

function addEPrepayBreakfastRoom2Price()
{
    encodeERoomPrice4();
    roomPrice.onlinePrice = $("#Eroom2price4").val();
    roomPrice.roomType = $(".Eroomtype2").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Eroom2price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addEPrepayBreakfastRoom3Price()
{
    encodeERoomPrice4();
    roomPrice.onlinePrice = $("#Eroom3price4").val();
    roomPrice.roomType = $(".Eroomtype3").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Eroom3price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addEPrepayBreakfastRoom4Price()
{
    encodeERoomPrice4();
    roomPrice.onlinePrice = $("#Eroom4price4").val();
    roomPrice.roomType = $(".Eroomtype4").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Eroom4price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function encodeERoomPrice5()
{
    roomPrice={};

    var pt1 = $("[name=package1]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Esupplement5").val());
    roomPrice.onlinePayType = $("#Epk5").val();
    roomPrice.onlineProjectName = $(".Eproj5").text();
    roomPrice.onlineHotelCode = $("#Ehtcode5").val();
    roomPrice.onlineSupplements = supplement/100;

}

function addEWeekendBreakfastBasePrice()
{
    encodeERoomPrice5();
    roomPrice.onlinePrice = $("#Ebaseprice5").val();
    roomPrice.roomType = $(".Ebasichometype").text();
    var callback = function(result)
    {
       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Ebaseprice5").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }

}

function addEWeekendBreakfastRoom2Price()
{
    encodeERoomPrice5();
    roomPrice.onlinePrice = $("#Eroom2price5").val();
    roomPrice.roomType = $(".Eroomtype2").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Eroom2price5").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addEWeekendBreakfastRoom3Price()
{
    encodeERoomPrice5();
    roomPrice.onlinePrice = $("#Eroom3price5").val();
    roomPrice.roomType = $(".Eroomtype3").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Eroom3price5").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addEWeekendBreakfastRoom4Price()
{
    encodeERoomPrice5();
    roomPrice.onlinePrice = $("#Eroom4price5").val();
    roomPrice.roomType = $(".Eroomtype4").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Eroom4price5").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function encodeERoomPrice6()
{
    roomPrice={};

    var pt1 = $("[name=package1]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Esupplement6").val());
    roomPrice.onlinePayType = $("#Epk6").val();
    roomPrice.onlineProjectName = $(".Eproj6").text();
    roomPrice.onlineHotelCode = $("#Ehtcode6").val();
    roomPrice.onlineSupplements = supplement/100;

}

function addEPackage1BasePrice()
{
    encodeERoomPrice6();
    roomPrice.onlinePrice = $("#Ebaseprice6").val();
    roomPrice.roomType = $(".Ebasichometype").text();
    var callback = function(result)
    {
       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Ebaseprice6").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }

}

function addEPackage1Room2Price()
{
    encodeERoomPrice6();
    roomPrice.onlinePrice = $("#Eroom2price6").val();
    roomPrice.roomType = $(".Eroomtype2").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Eroom2price6").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addEPackage1Room3Price()
{
    encodeERoomPrice6();
    roomPrice.onlinePrice = $("#Eroom3price6").val();
    roomPrice.roomType = $(".Eroomtype3").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Eroom3price6").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addEPackage1Room4Price()
{
    encodeERoomPrice6();
    roomPrice.onlinePrice = $("#Eroom4price6").val();
    roomPrice.roomType = $(".Eroomtype4").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Eroom4price6").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function encodeERoomPrice7()
{
     roomPrice={};

    var pt1 = $("[name=package1]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Esupplement7").val());
    roomPrice.onlinePayType = $("#Epk7").val();
    roomPrice.onlineProjectName = $(".Eproj7").text();
    roomPrice.onlineHotelCode = $("#Ehtcode7").val();
    roomPrice.onlineSupplements = supplement/100;

}

function addEPackage2BasePrice()
{
    encodeERoomPrice7();
    roomPrice.onlinePrice = $("#Ebaseprice7").val();
    roomPrice.roomType = $(".Ebasichometype").text();
    var callback = function(result)
    {
       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Ebaseprice7").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }

}

function addEPackage2Room2Price()
{
    encodeERoomPrice7();
    roomPrice.onlinePrice = $("#Eroom2price7").val();
    roomPrice.roomType = $(".Eroomtype2").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Eroom2price7").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addEPackage2Room3Price()
{
    encodeERoomPrice7();
    roomPrice.onlinePrice = $("#Eroom3price7").val();
    roomPrice.roomType = $(".Eroomtype3").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Eroom3price7").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addEPackage2Room4Price()
{
    encodeERoomPrice7();
    roomPrice.onlinePrice = $("#Eroom4price7").val();
    roomPrice.roomType = $(".Eroomtype4").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Eroom4price7").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}



function encodeHRoomPrice1()
{
    roomPrice={};

    var pt1 = $("[name=package2]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Hsupplement1").val());
    roomPrice.onlinePayType = $("#Hpk1").val();
    roomPrice.onlineProjectName = $(".Hproj1").text();
    roomPrice.onlineHotelCode = $("#Hhtcode1").val();
    roomPrice.onlineSupplements = supplement/100;

}

function addHFrontNoBreakfastBasePrice()
{
    encodeHRoomPrice1();
    roomPrice.onlinePrice = $("#Hbaseprice1").val();
    roomPrice.roomType = $(".Hbasichometype").text();
    var callback = function(result)
    {
       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hbaseprice1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }

}

function addHFrontNoBreakfastRoom2Price()
{
    encodeHRoomPrice1();
    roomPrice.onlinePrice = $("#Hroom2price1").val();
    roomPrice.roomType = $(".Hroomtype2").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hroom2price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addHFrontNoBreakfastRoom3Price()
{
    encodeHRoomPrice1();
    roomPrice.onlinePrice = $("#Hroom3price1").val();
    roomPrice.roomType = $(".Hroomtype3").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hroom3price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addHFrontNoBreakfastRoom4Price()
{
    encodeHRoomPrice1();
    roomPrice.onlinePrice = $("#Hroom4price1").val();
    roomPrice.roomType = $(".Hroomtype4").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hroom4price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function encodeHRoomPrice2()
{
    roomPrice={};

    var pt1 = $("[name=package2]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Hsupplement2").val());
    roomPrice.onlinePayType = $("#Hpk2").val();
    roomPrice.onlineProjectName = $(".Hproj2").text();
    roomPrice.onlineHotelCode = $("#Hhtcode2").val();
    roomPrice.onlineSupplements = supplement/100;

}

function addHFrontBreakfastBasePrice()
{
    encodeHRoomPrice2();
    roomPrice.onlinePrice = $("#Hbaseprice2").val();
    roomPrice.roomType = $(".Hbasichometype").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hbaseprice2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addHFrontBreakfastRoom2Price()
{
    encodeHRoomPrice2();
    roomPrice.onlinePrice = $("#Hroom2price2").val();
    roomPrice.roomType = $(".Hroomtype2").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hroom2price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addHFrontBreakfastRoom3Price()
{
    encodeHRoomPrice2();
    roomPrice.onlinePrice = $("#Hroom3price2").val();
    roomPrice.roomType = $(".Hroomtype3").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hroom3price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addHFrontBreakfastRoom4Price()
{
    encodeHRoomPrice2();
    roomPrice.onlinePrice = $("#Hroom4price2").val();
    roomPrice.roomType = $(".Hroomtype4").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hroom4price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function encodeHRoomPrice3()
{
    roomPrice={};

    var pt1 = $("[name=package2]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Hsupplement3").val());
    roomPrice.onlinePayType = $("#Hpk3").val();
    roomPrice.onlineProjectName = $(".Hproj3").text();
    roomPrice.onlineHotelCode = $("#Hhtcode3").val();
    roomPrice.onlineSupplements = supplement/100;

}

function addHPrepayNoBreakfastBasePrice()
{
    encodeHRoomPrice3();
    roomPrice.onlinePrice = $("#Hbaseprice3").val();
    roomPrice.roomType = $(".Hbasichometype").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hbaseprice3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addHPrepayNoBreakfastRoom2Price()
{
    encodeHRoomPrice3();
    roomPrice.onlinePrice = $("#Hroom2price3").val();
    roomPrice.roomType = $(".Hroomtype2").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hroom2price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addHPrepayNoBreakfastRoom3Price()
{
    encodeHRoomPrice3();
    roomPrice.onlinePrice = $("#Hroom3price3").val();
    roomPrice.roomType = $(".Hroomtype3").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hroom3price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addHPrepayNoBreakfastRoom4Price()
{
    encodeHRoomPrice3();
    roomPrice.onlinePrice = $("#Hroom4price3").val();
    roomPrice.roomType = $(".Hroomtype4").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hroom4price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function encodeHRoomPrice4()
{
    roomPrice={};

    var pt1 = $("[name=package2]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Hsupplement4").val());
    roomPrice.onlinePayType = $("#Hpk4").val();
    roomPrice.onlineProjectName = $(".Hproj4").text();
    roomPrice.onlineHotelCode = $("#Hhtcode4").val();
    roomPrice.onlineSupplements = supplement/100;

}

function addHPrepayBreakfastBasePrice()
{
    encodeHRoomPrice4();
    roomPrice.onlinePrice = $("#Hbaseprice4").val();
    roomPrice.roomType = $(".Hbasichometype").text();
    var callback = function(result)
    {
       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hbaseprice4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }

}

function addHPrepayBreakfastRoom2Price()
{
    encodeHRoomPrice4();
    roomPrice.onlinePrice = $("#Hroom2price4").val();
    roomPrice.roomType = $(".Hroomtype2").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hroom2price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addHPrepayBreakfastRoom3Price()
{
    encodeHRoomPrice4();
    roomPrice.onlinePrice = $("#Hroom3price4").val();
    roomPrice.roomType = $(".Hroomtype3").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hroom3price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addHPrepayBreakfastRoom4Price()
{
    encodeHRoomPrice4();
    roomPrice.onlinePrice = $("#Hroom4price4").val();
    roomPrice.roomType = $(".Hroomtype4").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hroom4price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function encodeHRoomPrice5()
{
     roomPrice={};

    var pt1 = $("[name=package2]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Hsupplement5").val());
    roomPrice.onlinePayType = $("#Hpk5").val();
    roomPrice.onlineProjectName = $(".Hproj5").text();
    roomPrice.onlineHotelCode = $("#Hhtcode5").val();
    roomPrice.onlineSupplements = supplement/100;

}

function addHWeekendBreakfastBasePrice()
{
    encodeHRoomPrice5();
    roomPrice.onlinePrice = $("#Hbaseprice5").val();
    roomPrice.roomType = $(".Hbasichometype").text();
    var callback = function(result)
    {
       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hbaseprice5").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }

}

function addHWeekendBreakfastRoom2Price()
{
    encodeHRoomPrice5();
    roomPrice.onlinePrice = $("#Hroom2price5").val();
    roomPrice.roomType = $(".Hroomtype2").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hroom2price5").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addHWeekendBreakfastRoom3Price()
{
    encodeHRoomPrice5();
    roomPrice.onlinePrice = $("#Hroom3price5").val();
    roomPrice.roomType = $(".Hroomtype3").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hroom3price5").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addHWeekendBreakfastRoom4Price()
{
    encodeHRoomPrice5();
    roomPrice.onlinePrice = $("#Hroom4price5").val();
    roomPrice.roomType = $(".Hroomtype4").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hroom4price5").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function encodeHRoomPrice6()
{
     roomPrice={};

    var pt1 = $("[name=package2]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Hsupplement6").val());
    roomPrice.onlinePayType = $("#Hpk6").val();
    roomPrice.onlineProjectName = $(".Hproj6").text();
    roomPrice.onlineHotelCode = $("#Hhtcode6").val();
    roomPrice.onlineSupplements = supplement/100;

}

function addHPackage1BasePrice()
{
    encodeHRoomPrice6();
    roomPrice.onlinePrice = $("#Hbaseprice6").val();
    roomPrice.roomType = $(".Hbasichometype").text();
    var callback = function(result)
    {
       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hbaseprice6").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }

}

function addHPackage1Room2Price()
{
    encodeHRoomPrice6();
    roomPrice.onlinePrice = $("#Hroom2price6").val();
    roomPrice.roomType = $(".Hroomtype2").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hroom2price6").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addHPackage1Room3Price()
{
    encodeHRoomPrice6();
    roomPrice.onlinePrice = $("#Hroom3price6").val();
    roomPrice.roomType = $(".Hroomtype3").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hroom3price6").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addHPackage1Room4Price()
{
    encodeHRoomPrice6();
    roomPrice.onlinePrice = $("#Hroom4price6").val();
    roomPrice.roomType = $(".Hroomtype4").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hroom4price6").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function encodeHRoomPrice7()
{
     roomPrice={};

    var pt1 = $("[name=package2]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Hsupplement7").val());
    roomPrice.onlinePayType = $("#Hpk7").val();
    roomPrice.onlineProjectName = $(".Hproj7").text();
    roomPrice.onlineHotelCode = $("#Hhtcode7").val();
    roomPrice.onlineSupplements = supplement/100;

}

function addHPackage2BasePrice()
{
    encodeHRoomPrice7();
    roomPrice.onlinePrice = $("#Hbaseprice7").val();
    roomPrice.roomType = $(".Hbasichometype").text();
    var callback = function(result)
    {
       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hbaseprice7").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }

}

function addHPackage2Room2Price()
{
    encodeHRoomPrice7();
    roomPrice.onlinePrice = $("#Hroom2price7").val();
    roomPrice.roomType = $(".Hroomtype2").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hroom2price7").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addHPackage2Room3Price()
{
    encodeHRoomPrice7();
    roomPrice.onlinePrice = $("#Hroom3price7").val();
    roomPrice.roomType = $(".Hroomtype3").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hroom3price7").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addHPackage2Room4Price()
{
    encodeHRoomPrice7();
    roomPrice.onlinePrice = $("#Hroom4price7").val();
    roomPrice.roomType = $(".Hroomtype4").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Hroom4price7").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}



function encodeNRoomPrice1()
{
     roomPrice={};

    var pt1 = $("[name=package3]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Nsupplement1").val());
    roomPrice.onlinePayType = $("#Npk1").val();
    roomPrice.onlineProjectName = $(".Nproj1").text();
    roomPrice.onlineHotelCode = $("#Nhtcode1").val();
    roomPrice.onlineSupplements = supplement/100;

}

function addNFrontNoBreakfastBasePrice()
{
    encodeNRoomPrice1();
    roomPrice.onlinePrice = $("#Nbaseprice1").val();
    roomPrice.roomType = $(".Nbasichometype").text();
    var callback = function(result)
    {
       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nbaseprice1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }

}

function addNFrontNoBreakfastRoom2Price()
{
    encodeNRoomPrice1();
    roomPrice.onlinePrice = $("#Nroom2price1").val();
    roomPrice.roomType = $(".Nroomtype2").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nroom2price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addNFrontNoBreakfastRoom3Price()
{
    encodeNRoomPrice1();
    roomPrice.onlinePrice = $("#Nroom3price1").val();
    roomPrice.roomType = $(".Nroomtype3").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nroom3price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addNFrontNoBreakfastRoom4Price()
{
    encodeNRoomPrice1();
    roomPrice.onlinePrice = $("#Nroom4price1").val();
    roomPrice.roomType = $(".Nroomtype4").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nroom4price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function encodeNRoomPrice2()
{
     roomPrice={};

    var pt1 = $("[name=package3]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Nsupplement2").val());
    roomPrice.onlinePayType = $("#Npk2").val();
    roomPrice.onlineProjectName = $(".Nproj2").text();
    roomPrice.onlineHotelCode = $("#Nhtcode2").val();
    roomPrice.onlineSupplements = supplement/100;
}

function addNFrontBreakfastBasePrice()
{
    encodeNRoomPrice2();
    roomPrice.onlinePrice = $("#Nbaseprice2").val();
    roomPrice.roomType = $(".Nbasichometype").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nbaseprice2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addNFrontBreakfastRoom2Price()
{
    encodeNRoomPrice2();
    roomPrice.onlinePrice = $("#Nroom2price2").val();
    roomPrice.roomType = $(".Nroomtype2").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nroom2price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addNFrontBreakfastRoom3Price()
{
    encodeNRoomPrice2();
    roomPrice.onlinePrice = $("#Nroom3price2").val();
    roomPrice.roomType = $(".Nroomtype3").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nroom3price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addNFrontBreakfastRoom4Price()
{
    encodeNRoomPrice2();
    roomPrice.onlinePrice = $("#Nroom4price2").val();
    roomPrice.roomType = $(".Nroomtype4").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nroom4price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function encodeNRoomPrice3()
{
     roomPrice={};

    var pt1 = $("[name=package3]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Nsupplement3").val());
    roomPrice.onlinePayType = $("#Npk3").val();
    roomPrice.onlineProjectName = $(".Nproj3").text();
    roomPrice.onlineHotelCode = $("#Nhtcode3").val();
    roomPrice.onlineSupplements = supplement/100;
}

function addNPrepayNoBreakfastBasePrice()
{
    encodeNRoomPrice3();
    roomPrice.onlinePrice = $("#Nbaseprice3").val();
    roomPrice.roomType = $(".Nbasichometype").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nbaseprice3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addNPrepayNoBreakfastRoom2Price()
{
    encodeNRoomPrice3();
    roomPrice.onlinePrice = $("#Nroom2price3").val();
    roomPrice.roomType = $(".Nroomtype2").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nroom2price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addNPrepayNoBreakfastRoom3Price()
{
    encodeNRoomPrice3();
    roomPrice.onlinePrice = $("#Nroom3price3").val();
    roomPrice.roomType = $(".Nroomtype3").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nroom3price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addNPrepayNoBreakfastRoom4Price()
{
    encodeNRoomPrice3();
    roomPrice.onlinePrice = $("#Nroom4price3").val();
    roomPrice.roomType = $(".Nroomtype4").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nroom4price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function encodeNRoomPrice4()
{
     roomPrice={};

    var pt1 = $("[name=package3]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Nsupplement4").val());
    roomPrice.onlinePayType = $("#Npk4").val();
    roomPrice.onlineProjectName = $(".Nproj4").text();
    roomPrice.onlineHotelCode = $("#Nhtcode4").val();
    roomPrice.onlineSupplements = supplement/100;
}

function addNPrepayBreakfastBasePrice()
{
    encodeNRoomPrice4();
    roomPrice.onlinePrice = $("#Nbaseprice4").val();
    roomPrice.roomType = $(".Nbasichometype").text();
    var callback = function(result)
    {
       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nbaseprice4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }

}

function addNPrepayBreakfastRoom2Price()
{
    encodeNRoomPrice4();
    roomPrice.onlinePrice = $("#Nroom2price4").val();
    roomPrice.roomType = $(".Nroomtype2").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nroom2price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addNPrepayBreakfastRoom3Price()
{
    encodeNRoomPrice4();
    roomPrice.onlinePrice = $("#Nroom3price4").val();
    roomPrice.roomType = $(".Nroomtype3").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nroom3price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addNPrepayBreakfastRoom4Price()
{
    encodeNRoomPrice4();
    roomPrice.onlinePrice = $("#Nroom4price4").val();
    roomPrice.roomType = $(".Nroomtype4").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nroom4price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function encodeNRoomPrice5()
{
     roomPrice={};

    var pt1 = $("[name=package3]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Nsupplement5").val());
    roomPrice.onlinePayType = $("#Npk5").val();
    roomPrice.onlineProjectName = $(".Nproj5").text();
    roomPrice.onlineHotelCode = $("#Nhtcode5").val();
    roomPrice.onlineSupplements = supplement/100;
}

function addNWeekendBreakfastBasePrice()
{
    encodeNRoomPrice5();
    roomPrice.onlinePrice = $("#Nbaseprice5").val();
    roomPrice.roomType = $(".Nbasichometype").text();
    var callback = function(result)
    {
       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nbaseprice5").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }

}

function addNWeekendBreakfastRoom2Price()
{
    encodeNRoomPrice5();
    roomPrice.onlinePrice = $("#Nroom2price5").val();
    roomPrice.roomType = $(".Nroomtype2").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nroom2price5").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addNWeekendBreakfastRoom3Price()
{
    encodeNRoomPrice5();
    roomPrice.onlinePrice = $("#Nroom3price5").val();
    roomPrice.roomType = $(".Nroomtype3").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nroom3price5").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addNWeekendBreakfastRoom4Price()
{
    encodeNRoomPrice5();
    roomPrice.onlinePrice = $("#Nroom4price5").val();
    roomPrice.roomType = $(".Nroomtype4").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nroom4price5").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function encodeNRoomPrice6()
{
     roomPrice={};

    var pt1 = $("[name=package3]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Nsupplement6").val());
    roomPrice.onlinePayType = $("#Npk6").val();
    roomPrice.onlineProjectName = $(".Nproj6").text();
    roomPrice.onlineHotelCode = $("#Nhtcode6").val();
    roomPrice.onlineSupplements = supplement/100;
}

function addNPackage1BasePrice()
{
    encodeNRoomPrice6();
    roomPrice.onlinePrice = $("#Nbaseprice6").val();
    roomPrice.roomType = $(".Nbasichometype").text();
    var callback = function(result)
    {
       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nbaseprice6").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }

}

function addNPackage1Room2Price()
{
    encodeNRoomPrice6();
    roomPrice.onlinePrice = $("#Nroom2price6").val();
    roomPrice.roomType = $(".Nroomtype2").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nroom2price6").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addNPackage1Room3Price()
{
    encodeNRoomPrice6();
    roomPrice.onlinePrice = $("#Nroom3price6").val();
    roomPrice.roomType = $(".Nroomtype3").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nroom3price6").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addNPackage1Room4Price()
{
    encodeNRoomPrice6();
    roomPrice.onlinePrice = $("#Nroom4price6").val();
    roomPrice.roomType = $(".Nroomtype4").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nroom4price6").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function encodeNRoomPrice7()
{
     roomPrice={};

    var pt1 = $("[name=package3]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Nsupplement7").val());
    roomPrice.onlinePayType = $("#Npk7").val();
    roomPrice.onlineProjectName = $(".Nproj7").text();
    roomPrice.onlineHotelCode = $("#Nhtcode7").val();
    roomPrice.onlineSupplements = supplement/100;
}

function addNPackage2BasePrice()
{
    encodeNRoomPrice7();
    roomPrice.onlinePrice = $("#Nbaseprice7").val();
    roomPrice.roomType = $(".Nbasichometype").text();
    var callback = function(result)
    {
       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nbaseprice7").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }

}

function addNPackage2Room2Price()
{
    encodeNRoomPrice7();
    roomPrice.onlinePrice = $("#Nroom2price7").val();
    roomPrice.roomType = $(".Nroomtype2").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nroom2price7").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addNPackage2Room3Price()
{
    encodeNRoomPrice7();
    roomPrice.onlinePrice = $("#Nroom3price7").val();
    roomPrice.roomType = $(".Nroomtype3").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nroom3price7").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function addNPackage2Room4Price()
{
    encodeNRoomPrice7();
    roomPrice.onlinePrice = $("#Nroom4price7").val();
    roomPrice.roomType = $(".Nroomtype4").text();
    var callback = function(result)
    {

       if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#Nroom4price7").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
        operation.roomPrice = roomPrice;
        operation.execute(callback);
    }
}

function encodeSP2_1()
{
     roomPrice={};

    var pt1 = $("[name=SP2]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#SP2supplement1").val());
    roomPrice.onlinePayType = $("#SP2pk1").val();
    roomPrice.onlineProjectName = $(".SP2proj1").text();
    roomPrice.onlineHotelCode = $("#SP2htcode1").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeSP2_2()
{
     roomPrice={};

    var pt1 = $("[name=SP2]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#SP2supplement2").val());
    roomPrice.onlinePayType = $("#SP2pk2").val();
    roomPrice.onlineProjectName = $(".SP2proj2").text();
    roomPrice.onlineHotelCode = $("#SP2htcode2").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeSP2_3()
{
     roomPrice={};

    var pt1 = $("[name=SP2]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#SP2supplement3").val());
    roomPrice.onlinePayType = $("#SP2pk3").val();
    roomPrice.onlineProjectName = $(".SP2proj3").text();
    roomPrice.onlineHotelCode = $("#SP2htcode3").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeSP2_4()
{
     roomPrice={};

    var pt1 = $("[name=SP2]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#SP2supplement4").val());
    roomPrice.onlinePayType = $("#SP2pk4").val();
    roomPrice.onlineProjectName = $(".SP2proj4").text();
    roomPrice.onlineHotelCode = $("#SP2htcode4").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeSP2_5()
{
     roomPrice={};

    var pt1 = $("[name=SP2]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#SP2supplement5").val());
    roomPrice.onlinePayType = $("#SP2pk5").val();
    roomPrice.onlineProjectName = $(".SP2proj5").text();
    roomPrice.onlineHotelCode = $("#SP2htcode5").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeSP2_6()
{
     roomPrice={};

    var pt1 = $("[name=SP2]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#SP2supplement6").val());
    roomPrice.onlinePayType = $("#SP2pk6").val();
    roomPrice.onlineProjectName = $(".SP2proj6").text();
    roomPrice.onlineHotelCode = $("#SP2htcode6").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeSP2_7()
{
     roomPrice={};

    var pt1 = $("[name=SP2]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#SP2supplement7").val());
    roomPrice.onlinePayType = $("#SP2pk7").val();
    roomPrice.onlineProjectName = $(".SP2proj7").text();
    roomPrice.onlineHotelCode = $("#SP2htcode7").val();
    roomPrice.onlineSupplements = supplement/100;

}

function SP2_1_1()
{
    if($("#SP2basprice1").val() ==="" ) return;
    encodeSP2_1();
    roomPrice.onlinePrice = $("#SP2basprice1").val();
    roomPrice.roomType = $(".SP2basichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_1_2()
{
    if($("#SP2room2price1").val() ==="" ) return;
    encodeSP2_1();
    roomPrice.onlinePrice = $("#SP2room2price1").val();
    roomPrice.roomType = $(".SP2roomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_1_3()
{
    if($("#SP2room3price1").val() ==="" ) return;
    encodeSP2_1();
    roomPrice.onlinePrice = $("#SP2room3price1").val();
    roomPrice.roomType = $(".SP2roomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_1_4()
{
    if($("#SP2room4price1").val() ==="" ) return;
    encodeSP2_1();
    roomPrice.onlinePrice = $("#SP2room4price1").val();
    roomPrice.roomType = $(".SP2roomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_2_1()
{
    if($("#SP2basprice2").val() ==="" ) return;
    encodeSP2_2();
    roomPrice.onlinePrice = $("#SP2basprice2").val();
    roomPrice.roomType = $(".SP2basichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_2_2()
{
    if($("#SP2room2price2").val() ==="" ) return;
    encodeSP2_2();
    roomPrice.onlinePrice = $("#SP2room2price2").val();
    roomPrice.roomType = $(".SP2roomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_2_3()
{
    if($("#SP2room3price2").val() ==="" ) return;
    encodeSP2_2();
    roomPrice.onlinePrice = $("#SP2room3price2").val();
    roomPrice.roomType = $(".SP2roomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_2_4()
{
    if($("#SP2room4price2").val() ==="" ) return;
    encodeSP2_2();
    roomPrice.onlinePrice = $("#SP2room4price2").val();
    roomPrice.roomType = $(".SP2roomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}
function SP2_3_1()
{
    if($("#SP2basprice3").val() ==="" ) return;
    encodeSP2_3();
    roomPrice.onlinePrice = $("#SP2basprice3").val();
    roomPrice.roomType = $(".SP2basichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_3_2()
{
    if($("#SP2room2price3").val() ==="" ) return;
    encodeSP2_3();
    roomPrice.onlinePrice = $("#SP2room2price3").val();
    roomPrice.roomType = $(".SP2roomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_3_3()
{
    if($("#SP2room3price3").val() ==="" ) return;
    encodeSP2_3();
    roomPrice.onlinePrice = $("#SP2room3price3").val();
    roomPrice.roomType = $(".SP2roomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_3_4()
{
    if($("#SP2room4price3").val() ==="" ) return;
    encodeSP2_3();
    roomPrice.onlinePrice = $("#SP2room4price3").val();
    roomPrice.roomType = $(".SP2roomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}
function SP2_4_1()
{
    if($("#SP2basprice4").val() ==="" ) return;
    encodeSP2_4();
    roomPrice.onlinePrice = $("#SP2basprice4").val();
    roomPrice.roomType = $(".SP2basichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_4_2()
{
    if($("#SP2room2price4").val() ==="" ) return;
    encodeSP2_4();
    roomPrice.onlinePrice = $("#SP2room2price4").val();
    roomPrice.roomType = $(".SP2roomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_4_3()
{
    if($("#SP2room3price4").val() ==="" ) return;
    encodeSP2_4();
    roomPrice.onlinePrice = $("#SP2room3price4").val();
    roomPrice.roomType = $(".SP2roomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_4_4()
{
    if($("#SP2room4price4").val() ==="" ) return;
    encodeSP2_4();
    roomPrice.onlinePrice = $("#SP2room4price4").val();
    roomPrice.roomType = $(".SP2roomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}
function SP2_5_1()
{
    if($("#SP2basprice5").val() ==="" ) return;
    encodeSP2_5();
    roomPrice.onlinePrice = $("#SP2basprice5").val();
    roomPrice.roomType = $(".SP2basichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_5_2()
{
    if($("#SP2room2price5").val() ==="" ) return;
    encodeSP2_5();
    roomPrice.onlinePrice = $("#SP2room2price5").val();
    roomPrice.roomType = $(".SP2roomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_5_3()
{
    if($("#SP2room3price5").val() ==="" ) return;
    encodeSP2_5();
    roomPrice.onlinePrice = $("#SP2room3price5").val();
    roomPrice.roomType = $(".SP2roomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_5_4()
{
    if($("#SP2room4price5").val() ==="" ) return;
    encodeSP2_5();
    roomPrice.onlinePrice = $("#SP2room4price5").val();
    roomPrice.roomType = $(".SP2roomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}
function SP2_6_1()
{
    if($("#SP2basprice6").val() ==="" ) return;
    encodeSP2_6();
    roomPrice.onlinePrice = $("#SP2basprice6").val();
    roomPrice.roomType = $(".SP2basichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_6_2()
{
    if($("#SP2room2price6").val() ==="" ) return;
    encodeSP2_6();
    roomPrice.onlinePrice = $("#SP2room2price6").val();
    roomPrice.roomType = $(".SP2roomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_6_3()
{
    if($("#SP2room3price6").val() ==="" ) return;
    encodeSP2_6();
    roomPrice.onlinePrice = $("#SP2room3price6").val();
    roomPrice.roomType = $(".SP2roomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_6_4()
{
    if($("#SP2room4price6").val() ==="" ) return;
    encodeSP2_6();
    roomPrice.onlinePrice = $("#SP2room4price6").val();
    roomPrice.roomType = $(".SP2roomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}
function SP2_7_1()
{
    if($("#SP2basprice7").val() ==="" ) return;
    encodeSP2_7();
    roomPrice.onlinePrice = $("#SP2basprice7").val();
    roomPrice.roomType = $(".SP2basichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_7_2()
{
    if($("#SP2room2price7").val() ==="" ) return;
    encodeSP2_7();
    roomPrice.onlinePrice = $("#SP2room2price7").val();
    roomPrice.roomType = $(".SP2roomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_7_3()
{
    if($("#SP2room3price7").val() ==="" ) return;
    encodeSP2_7();
    roomPrice.onlinePrice = $("#SP2room3price7").val();
    roomPrice.roomType = $(".SP2roomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP2_7_4()
{
    if($("#SP2room4price7").val() ==="" ) return;
    encodeSP2_7();
    roomPrice.onlinePrice = $("#SP2room4price7").val();
    roomPrice.roomType = $(".SP2roomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function encodeSP1_1()
{
     roomPrice={};

    var pt1 = $("[name=SP1]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#SP1supplement1").val());
    roomPrice.onlinePayType = $("#SP1pk1").val();
    roomPrice.onlineProjectName = $(".SP1proj1").text();
    roomPrice.onlineHotelCode = $("#SP1htcode1").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeSP1_2()
{
     roomPrice={};

    var pt1 = $("[name=SP1]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#SP1supplement2").val());
    roomPrice.onlinePayType = $("#SP1pk2").val();
    roomPrice.onlineProjectName = $(".SP1proj2").text();
    roomPrice.onlineHotelCode = $("#SP1htcode2").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeSP1_3()
{
     roomPrice={};

    var pt1 = $("[name=SP1]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#SP1supplement3").val());
    roomPrice.onlinePayType = $("#SP1pk3").val();
    roomPrice.onlineProjectName = $(".SP1proj3").text();
    roomPrice.onlineHotelCode = $("#SP1htcode3").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeSP1_4()
{
     roomPrice={};

    var pt1 = $("[name=SP1]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#SP1supplement4").val());
    roomPrice.onlinePayType = $("#SP1pk4").val();
    roomPrice.onlineProjectName = $(".SP1proj4").text();
    roomPrice.onlineHotelCode = $("#SP1htcode4").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeSP1_5()
{
     roomPrice={};

    var pt1 = $("[name=SP1]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#SP1supplement5").val());
    roomPrice.onlinePayType = $("#SP1pk5").val();
    roomPrice.onlineProjectName = $(".SP1proj5").text();
    roomPrice.onlineHotelCode = $("#SP1htcode5").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeSP1_6()
{
     roomPrice={};

    var pt1 = $("[name=SP1]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#SP1supplement6").val());
    roomPrice.onlinePayType = $("#SP1pk6").val();
    roomPrice.onlineProjectName = $(".SP1proj6").text();
    roomPrice.onlineHotelCode = $("#SP1htcode6").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeSP1_7()
{
     roomPrice={};

    var pt1 = $("[name=SP1]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#SP1supplement7").val());
    roomPrice.onlinePayType = $("#SP1pk7").val();
    roomPrice.onlineProjectName = $(".SP1proj7").text();
    roomPrice.onlineHotelCode = $("#SP1htcode7").val();
    roomPrice.onlineSupplements = supplement/100;

}

function SP1_1_1()
{
    if($("#SP1basprice1").val() ==="" ) return;
    encodeSP1_1();
    roomPrice.onlinePrice = $("#SP1basprice1").val();
    roomPrice.roomType = $(".SP1basichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_1_2()
{
    if($("#SP1room2price1").val() ==="" ) return;
    encodeSP1_1();
    roomPrice.onlinePrice = $("#SP1room2price1").val();
    roomPrice.roomType = $(".SP1roomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_1_3()
{
    if($("#SP1room3price1").val() ==="" ) return;
    encodeSP1_1();
    roomPrice.onlinePrice = $("#SP1room3price1").val();
    roomPrice.roomType = $(".SP1roomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_1_4()
{
    if($("#SP1room4price1").val() ==="" ) return;
    encodeSP1_1();
    roomPrice.onlinePrice = $("#SP1room4price1").val();
    roomPrice.roomType = $(".SP1roomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_2_1()
{
    if($("#SP1basprice2").val() ==="" ) return;
    encodeSP1_2();
    roomPrice.onlinePrice = $("#SP1basprice2").val();
    roomPrice.roomType = $(".SP1basichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_2_2()
{
    if($("#SP1room2price2").val() ==="" ) return;
    encodeSP1_2();
    roomPrice.onlinePrice = $("#SP1room2price2").val();
    roomPrice.roomType = $(".SP1roomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_2_3()
{
    if($("#SP1room3price2").val() ==="" ) return;
    encodeSP1_2();
    roomPrice.onlinePrice = $("#SP1room3price2").val();
    roomPrice.roomType = $(".SP1roomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_2_4()
{
    if($("#SP1room4price2").val() ==="" ) return;
    encodeSP1_2();
    roomPrice.onlinePrice = $("#SP1room4price2").val();
    roomPrice.roomType = $(".SP1roomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}
function SP1_3_1()
{
    if($("#SP1basprice3").val() ==="" ) return;
    encodeSP1_3();
    roomPrice.onlinePrice = $("#SP1basprice3").val();
    roomPrice.roomType = $(".SP1basichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_3_2()
{
    if($("#SP1room2price3").val() ==="" ) return;
    encodeSP1_3();
    roomPrice.onlinePrice = $("#SP1room2price3").val();
    roomPrice.roomType = $(".SP1roomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_3_3()
{
    if($("#SP1room3price3").val() ==="" ) return;
    encodeSP1_3();
    roomPrice.onlinePrice = $("#SP1room3price3").val();
    roomPrice.roomType = $(".SP1roomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_3_4()
{
    if($("#SP1room4price3").val() ==="" ) return;
    encodeSP1_3();
    roomPrice.onlinePrice = $("#SP1room4price3").val();
    roomPrice.roomType = $(".SP1roomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}
function SP1_4_1()
{
    if($("#SP1basprice4").val() ==="" ) return;
    encodeSP1_4();
    roomPrice.onlinePrice = $("#SP1basprice4").val();
    roomPrice.roomType = $(".SP1basichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_4_2()
{
    if($("#SP1room2price4").val() ==="" ) return;
    encodeSP1_4();
    roomPrice.onlinePrice = $("#SP1room2price4").val();
    roomPrice.roomType = $(".SP1roomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_4_3()
{
    if($("#SP1room3price4").val() ==="" ) return;
    encodeSP1_4();
    roomPrice.onlinePrice = $("#SP1room3price4").val();
    roomPrice.roomType = $(".SP1roomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_4_4()
{
    if($("#SP1room4price4").val() ==="" ) return;
    encodeSP1_4();
    roomPrice.onlinePrice = $("#SP1room4price4").val();
    roomPrice.roomType = $(".SP1roomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}
function SP1_5_1()
{
    if($("#SP1basprice5").val() ==="" ) return;
    encodeSP1_5();
    roomPrice.onlinePrice = $("#SP1basprice5").val();
    roomPrice.roomType = $(".SP1basichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_5_2()
{
    if($("#SP1room2price5").val() ==="" ) return;
    encodeSP1_5();
    roomPrice.onlinePrice = $("#SP1room2price5").val();
    roomPrice.roomType = $(".SP1roomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_5_3()
{
    if($("#SP1room3price5").val() ==="" ) return;
    encodeSP1_5();
    roomPrice.onlinePrice = $("#SP1room3price5").val();
    roomPrice.roomType = $(".SP1roomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_5_4()
{
    if($("#SP1room4price5").val() ==="" ) return;
    encodeSP1_5();
    roomPrice.onlinePrice = $("#SP1room4price5").val();
    roomPrice.roomType = $(".SP1roomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}
function SP1_6_1()
{
    if($("#SP1basprice6").val() ==="" ) return;
    encodeSP1_6();
    roomPrice.onlinePrice = $("#SP1basprice6").val();
    roomPrice.roomType = $(".SP1basichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_6_2()
{
    if($("#SP1room2price6").val() ==="" ) return;
    encodeSP1_6();
    roomPrice.onlinePrice = $("#SP1room2price6").val();
    roomPrice.roomType = $(".SP1roomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_6_3()
{
    if($("#SP1room3price6").val() ==="" ) return;
    encodeSP1_6();
    roomPrice.onlinePrice = $("#SP1room3price6").val();
    roomPrice.roomType = $(".SP1roomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_6_4()
{
    if($("#SP1room4price6").val() ==="" ) return;
    encodeSP1_6();
    roomPrice.onlinePrice = $("#SP1room4price6").val();
    roomPrice.roomType = $(".SP1roomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}
function SP1_7_1()
{
    if($("#SP1basprice7").val() ==="" ) return;
    encodeSP1_7();
    roomPrice.onlinePrice = $("#SP1basprice7").val();
    roomPrice.roomType = $(".SP1basichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_7_2()
{
    if($("#SP1room2price7").val() ==="" ) return;
    encodeSP1_7();
    roomPrice.onlinePrice = $("#SP1room2price7").val();
    roomPrice.roomType = $(".SP1roomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_7_3()
{
    if($("#SP1room3price7").val() ==="" ) return;
    encodeSP1_7();
    roomPrice.onlinePrice = $("#SP1room3price7").val();
    roomPrice.roomType = $(".SP1roomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function SP1_7_4()
{
    if($("#SP1room4price7").val() ==="" ) return;
    encodeSP1_7();
    roomPrice.onlinePrice = $("#SP1room4price7").val();
    roomPrice.roomType = $(".SP1roomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}
function encodeD_1()
{
     roomPrice={};

    var pt1 = $("[name=D]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Dsupplement1").val());
    roomPrice.onlinePayType = $("#Dpk1").val();
    roomPrice.onlineProjectName = $(".Dproj1").text();
    roomPrice.onlineHotelCode = $("#Dhtcode1").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeD_2()
{
     roomPrice={};

    var pt1 = $("[name=D]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Dsupplement2").val());
    roomPrice.onlinePayType = $("#Dpk2").val();
    roomPrice.onlineProjectName = $(".Dproj2").text();
    roomPrice.onlineHotelCode = $("#Dhtcode2").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeD_3()
{
     roomPrice={};

    var pt1 = $("[name=D]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Dsupplement3").val());
    roomPrice.onlinePayType = $("#Dpk3").val();
    roomPrice.onlineProjectName = $(".Dproj3").text();
    roomPrice.onlineHotelCode = $("#Dhtcode3").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeD_4()
{
     roomPrice={};

    var pt1 = $("[name=D]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Dsupplement4").val());
    roomPrice.onlinePayType = $("#Dpk4").val();
    roomPrice.onlineProjectName = $(".Dproj4").text();
    roomPrice.onlineHotelCode = $("#Dhtcode4").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeD_5()
{
     roomPrice={};

    var pt1 = $("[name=D]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Dsupplement5").val());
    roomPrice.onlinePayType = $("#Dpk5").val();
    roomPrice.onlineProjectName = $(".Dproj5").text();
    roomPrice.onlineHotelCode = $("#Dhtcode5").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeD_6()
{
     roomPrice={};

    var pt1 = $("[name=D]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Dsupplement6").val());
    roomPrice.onlinePayType = $("#Dpk6").val();
    roomPrice.onlineProjectName = $(".Dproj6").text();
    roomPrice.onlineHotelCode = $("#Dhtcode6").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeD_7()
{
     roomPrice={};

    var pt1 = $("[name=D]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Dsupplement7").val());
    roomPrice.onlinePayType = $("#Dpk7").val();
    roomPrice.onlineProjectName = $(".Dproj7").text();
    roomPrice.onlineHotelCode = $("#Dhtcode7").val();
    roomPrice.onlineSupplements = supplement/100;

}

function D_1_1()
{
    if($("#Dbasprice1").val() ==="" ) return;
    encodeD_1();
    roomPrice.onlinePrice = $("#Dbasprice1").val();
    roomPrice.roomType = $(".Dbasichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_1_2()
{
    if($("#Droom2price1").val() ==="" ) return;
    encodeD_1();
    roomPrice.onlinePrice = $("#Droom2price1").val();
    roomPrice.roomType = $(".Droomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_1_3()
{
    if($("#Droom3price1").val() ==="" ) return;
    encodeD_1();
    roomPrice.onlinePrice = $("#Droom3price1").val();
    roomPrice.roomType = $(".Droomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_1_4()
{
    if($("#Droom4price1").val() ==="" ) return;
    encodeD_1();
    roomPrice.onlinePrice = $("#Droom4price1").val();
    roomPrice.roomType = $(".Droomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_2_1()
{
    if($("#Dbasprice2").val() ==="" ) return;
    encodeD_2();
    roomPrice.onlinePrice = $("#Dbasprice2").val();
    roomPrice.roomType = $(".Dbasichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_2_2()
{
    if($("#Droom2price2").val() ==="" ) return;
    encodeD_2();
    roomPrice.onlinePrice = $("#Droom2price2").val();
    roomPrice.roomType = $(".Droomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_2_3()
{
    if($("#Droom3price2").val() ==="" ) return;
    encodeD_2();
    roomPrice.onlinePrice = $("#Droom3price2").val();
    roomPrice.roomType = $(".Droomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_2_4()
{
    if($("#Droom4price2").val() ==="" ) return;
    encodeD_2();
    roomPrice.onlinePrice = $("#Droom4price2").val();
    roomPrice.roomType = $(".Droomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}
function D_3_1()
{
    if($("#Dbasprice3").val() ==="" ) return;
    encodeD_3();
    roomPrice.onlinePrice = $("#Dbasprice3").val();
    roomPrice.roomType = $(".Dbasichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_3_2()
{
    if($("#Droom2price3").val() ==="" ) return;
    encodeD_3();
    roomPrice.onlinePrice = $("#Droom2price3").val();
    roomPrice.roomType = $(".Droomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_3_3()
{
    if($("#Droom3price3").val() ==="" ) return;
    encodeD_3();
    roomPrice.onlinePrice = $("#Droom3price3").val();
    roomPrice.roomType = $(".Droomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_3_4()
{
    if($("#Droom4price3").val() ==="" ) return;
    encodeD_3();
    roomPrice.onlinePrice = $("#Droom4price3").val();
    roomPrice.roomType = $(".Droomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}
function D_4_1()
{
    if($("#Dbasprice4").val() ==="" ) return;
    encodeD_4();
    roomPrice.onlinePrice = $("#Dbasprice4").val();
    roomPrice.roomType = $(".Dbasichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_4_2()
{
    if($("#Droom2price4").val() ==="" ) return;
    encodeD_4();
    roomPrice.onlinePrice = $("#Droom2price4").val();
    roomPrice.roomType = $(".Droomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_4_3()
{
    if($("#Droom3price4").val() ==="" ) return;
    encodeD_4();
    roomPrice.onlinePrice = $("#Droom3price4").val();
    roomPrice.roomType = $(".Droomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_4_4()
{
    if($("#Droom4price4").val() ==="" ) return;
    encodeD_4();
    roomPrice.onlinePrice = $("#Droom4price4").val();
    roomPrice.roomType = $(".Droomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}
function D_5_1()
{
    if($("#Dbasprice5").val() ==="" ) return;
    encodeD_5();
    roomPrice.onlinePrice = $("#Dbasprice5").val();
    roomPrice.roomType = $(".Dbasichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_5_2()
{
    if($("#Droom2price5").val() ==="" ) return;
    encodeD_5();
    roomPrice.onlinePrice = $("#Droom2price5").val();
    roomPrice.roomType = $(".Droomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_5_3()
{
    if($("#Droom3price5").val() ==="" ) return;
    encodeD_5();
    roomPrice.onlinePrice = $("#Droom3price5").val();
    roomPrice.roomType = $(".Droomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_5_4()
{
    if($("#Droom4price5").val() ==="" ) return;
    encodeD_5();
    roomPrice.onlinePrice = $("#Droom4price5").val();
    roomPrice.roomType = $(".Droomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}
function D_6_1()
{
    if($("#Dbasprice6").val() ==="" ) return;
    encodeD_6();
    roomPrice.onlinePrice = $("#Dbasprice6").val();
    roomPrice.roomType = $(".Dbasichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_6_2()
{
    if($("#Droom2price6").val() ==="" ) return;
    encodeD_6();
    roomPrice.onlinePrice = $("#Droom2price6").val();
    roomPrice.roomType = $(".Droomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_6_3()
{
    if($("#Droom3price6").val() ==="" ) return;
    encodeD_6();
    roomPrice.onlinePrice = $("#Droom3price6").val();
    roomPrice.roomType = $(".Droomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_6_4()
{
    if($("#Droom4price6").val() ==="" ) return;
    encodeD_6();
    roomPrice.onlinePrice = $("#Droom4price6").val();
    roomPrice.roomType = $(".Droomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}
function D_7_1()
{
    if($("#Dbasprice7").val() ==="" ) return;
    encodeD_7();
    roomPrice.onlinePrice = $("#Dbasprice7").val();
    roomPrice.roomType = $(".Dbasichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_7_2()
{
    if($("#Droom2price7").val() ==="" ) return;
    encodeD_7();
    roomPrice.onlinePrice = $("#Droom2price7").val();
    roomPrice.roomType = $(".Droomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_7_3()
{
    if($("#Droom3price7").val() ==="" ) return;
    encodeD_7();
    roomPrice.onlinePrice = $("#Droom3price7").val();
    roomPrice.roomType = $(".Droomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function D_7_4()
{
    if($("#Droom4price7").val() ==="" ) return;
    encodeD_7();
    roomPrice.onlinePrice = $("#Droom4price7").val();
    roomPrice.roomType = $(".Droomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function encodeL_1()
{
     roomPrice={};

    var pt1 = $("[name=L]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Lsupplement1").val());
    roomPrice.onlinePayType = $("#Lpk1").val();
    roomPrice.onlineProjectName = $(".Lproj1").text();
    roomPrice.onlineHotelCode = $("#Lhtcode1").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeL_2()
{
     roomPrice={};

    var pt1 = $("[name=L]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Lsupplement2").val());
    roomPrice.onlinePayType = $("#Lpk2").val();
    roomPrice.onlineProjectName = $(".Lproj2").text();
    roomPrice.onlineHotelCode = $("#Lhtcode2").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeL_3()
{
    roomPrice={};

    var pt1 = $("[name=L]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Lsupplement3").val());
    roomPrice.onlinePayType = $("#Lpk3").val();
    roomPrice.onlineProjectName = $(".Lproj3").text();
    roomPrice.onlineHotelCode = $("#Lhtcode3").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeL_4()
{
     roomPrice={};

    var pt1 = $("[name=L]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Lsupplement4").val());
    roomPrice.onlinePayType = $("#Lpk4").val();
    roomPrice.onlineProjectName = $(".Lproj4").text();
    roomPrice.onlineHotelCode = $("#Lhtcode4").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeL_5()
{
     roomPrice={};

    var pt1 = $("[name=L]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Lsupplement5").val());
    roomPrice.onlinePayType = $("#Lpk5").val();
    roomPrice.onlineProjectName = $(".Lproj5").text();
    roomPrice.onlineHotelCode = $("#Lhtcode5").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeL_6()
{
     roomPrice={};

    var pt1 = $("[name=L]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Lsupplement6").val());
    roomPrice.onlinePayType = $("#Lpk6").val();
    roomPrice.onlineProjectName = $(".Lproj6").text();
    roomPrice.onlineHotelCode = $("#Lhtcode6").val();
    roomPrice.onlineSupplements = supplement/100;

}
function encodeL_7()
{
     roomPrice={};

    var pt1 = $("[name=L]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    roomPrice.onlinePackageCode = pt1;
    var supplement =  parseInt($("#Lsupplement7").val());
    roomPrice.onlinePayType = $("#Lpk7").val();
    roomPrice.onlineProjectName = $(".Lproj7").text();
    roomPrice.onlineHotelCode = $("#Lhtcode7").val();
    roomPrice.onlineSupplements = supplement/100;

}

function L_1_1()
{
    if($("#Lbasprice1").val() ==="" ) return;
    encodeL_1();
    roomPrice.onlinePrice = $("#Lbasprice1").val();
    roomPrice.roomType = $(".Lbasichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_1_2()
{
    if($("#Lroom2price1").val() ==="" ) return;
    encodeL_1();
    roomPrice.onlinePrice = $("#Lroom2price1").val();
    roomPrice.roomType = $(".Lroomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_1_3()
{
    if($("#Lroom3price1").val() ==="" ) return;
    encodeL_1();
    roomPrice.onlinePrice = $("#Lroom3price1").val();
    roomPrice.roomType = $(".Lroomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_1_4()
{
    if($("#Lroom4price1").val() ==="" ) return;
    encodeL_1();
    roomPrice.onlinePrice = $("#Lroom4price1").val();
    roomPrice.roomType = $(".Lroomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_2_1()
{
    if($("#Lbasprice2").val() ==="" ) return;
    encodeL_2();
    roomPrice.onlinePrice = $("#Lbasprice2").val();
    roomPrice.roomType = $(".Lbasichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_2_2()
{
    if($("#Lroom2price2").val() ==="" ) return;
    encodeL_2();
    roomPrice.onlinePrice = $("#Lroom2price2").val();
    roomPrice.roomType = $(".Lroomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_2_3()
{
    if($("#Lroom3price2").val() ==="" ) return;
    encodeL_2();
    roomPrice.onlinePrice = $("#Lroom3price2").val();
    roomPrice.roomType = $(".Lroomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_2_4()
{
    if($("#Lroom4price2").val() ==="" ) return;
    encodeL_2();
    roomPrice.onlinePrice = $("#Lroom4price2").val();
    roomPrice.roomType = $(".Lroomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}
function L_3_1()
{
    if($("#Lbasprice3").val() ==="" ) return;
    encodeL_3();
    roomPrice.onlinePrice = $("#Lbasprice3").val();
    roomPrice.roomType = $(".Lbasichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_3_2()
{
    if($("#Lroom2price3").val() ==="" ) return;
    encodeL_3();
    roomPrice.onlinePrice = $("#Lroom2price3").val();
    roomPrice.roomType = $(".Lroomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_3_3()
{
    if($("#Lroom3price3").val() ==="" ) return;
    encodeL_3();
    roomPrice.onlinePrice = $("#Lroom3price3").val();
    roomPrice.roomType = $(".Lroomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_3_4()
{
    if($("#Lroom4price3").val() ==="" ) return;
    encodeL_3();
    roomPrice.onlinePrice = $("#Lroom4price3").val();
    roomPrice.roomType = $(".Lroomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}
function L_4_1()
{
    if($("#Lbasprice4").val() ==="" ) return;
    encodeL_4();
    roomPrice.onlinePrice = $("#Lbasprice4").val();
    roomPrice.roomType = $(".Lbasichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_4_2()
{
    if($("#Lroom2price4").val() ==="" ) return;
    encodeL_4();
    roomPrice.onlinePrice = $("#Lroom2price4").val();
    roomPrice.roomType = $(".Lroomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_4_3()
{
    if($("#Lroom3price4").val() ==="" ) return;
    encodeL_4();
    roomPrice.onlinePrice = $("#Lroom3price4").val();
    roomPrice.roomType = $(".Lroomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_4_4()
{
    if($("#Lroom4price4").val() ==="" ) return;
    encodeL_4();
    roomPrice.onlinePrice = $("#Lroom4price4").val();
    roomPrice.roomType = $(".Lroomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}
function L_5_1()
{
    if($("#Lbasprice5").val() ==="" ) return;
    encodeL_5();
    roomPrice.onlinePrice = $("#Lbasprice5").val();
    roomPrice.roomType = $(".Lbasichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_5_2()
{
    if($("#Lroom2price5").val() ==="" ) return;
    encodeL_5();
    roomPrice.onlinePrice = $("#Lroom2price5").val();
    roomPrice.roomType = $(".Lroomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_5_3()
{
    if($("#Lroom3price5").val() ==="" ) return;
    encodeL_5();
    roomPrice.onlinePrice = $("#Lroom3price5").val();
    roomPrice.roomType = $(".Lroomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_5_4()
{
    if($("#Lroom4price5").val() ==="" ) return;
    encodeL_5();
    roomPrice.onlinePrice = $("#Lroom4price5").val();
    roomPrice.roomType = $(".Lroomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}
function L_6_1()
{
    if($("#Lbasprice6").val() ==="" ) return;
    encodeL_6();
    roomPrice.onlinePrice = $("#Lbasprice6").val();
    roomPrice.roomType = $(".Lbasichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_6_2()
{
    if($("#Lroom2price6").val() ==="" ) return;
    encodeL_6();
    roomPrice.onlinePrice = $("#Lroom2price6").val();
    roomPrice.roomType = $(".Lroomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_6_3()
{
    if($("#Lroom3price6").val() ==="" ) return;
    encodeL_6();
    roomPrice.onlinePrice = $("#Lroom3price6").val();
    roomPrice.roomType = $(".Lroomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_6_4()
{
    if($("#Lroom4price6").val() ==="" ) return;
    encodeL_6();
    roomPrice.onlinePrice = $("#Lroom4price6").val();
    roomPrice.roomType = $(".Lroomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}
function L_7_1()
{
    if($("#Lbasprice7").val() ==="" ) return;
    encodeL_7();
    roomPrice.onlinePrice = $("#Lbasprice7").val();
    roomPrice.roomType = $(".Lbasichometype").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_7_2()
{
    if($("#Lroom2price7").val() ==="" ) return;
    encodeL_7();
    roomPrice.onlinePrice = $("#Lroom2price7").val();
    roomPrice.roomType = $(".Lroomtype2").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_7_3()
{
    if($("#Lroom3price7").val() ==="" ) return;
    encodeL_7();
    roomPrice.onlinePrice = $("#Lroom3price7").val();
    roomPrice.roomType = $(".Lroomtype3").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

function L_7_4()
{
    if($("#Lroom4price7").val() ==="" ) return;
    encodeL_7();
    roomPrice.onlinePrice = $("#Lroom4price7").val();
    roomPrice.roomType = $(".Lroomtype4").text();
    var callback = function(result)
    {

        if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型在线价格");
    operation.roomPrice = roomPrice;
    operation.execute(callback);
}

