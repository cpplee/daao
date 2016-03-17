$import("rpc.js");
$import("html/form.js");

var contractRoomPrice;
var popModal = false;

function OnSubmitDeal()
{
    popModal = true;
    LT1_N_1();
    LT1_N_2();
    LT1_N_3();
    LT1_N_4();
    LT1_W_1();
    LT1_W_2();
    LT1_W_3();
    LT1_W_4();
    LT1_D_1();
    LT1_D_2();
    LT1_D_3();
    LT1_D_4();
    LT2_N_1();
    LT2_N_2();
    LT2_N_3();
    LT2_N_4();
    LT2_W_1();
    LT2_W_2();
    LT2_W_3();
    LT2_W_4();
    LT2_D_1();
    LT2_D_2();
    LT2_D_3();
    LT2_D_4();
    LT3_N_1();
    LT3_N_2();
    LT3_N_3();
    LT3_N_4();
    LT3_W_1();
    LT3_W_2();
    LT3_W_3();
    LT3_W_4();
    LT3_D_1();
    LT3_D_2();
    LT3_D_3();
    LT3_D_4();
    LT4_N_1();
    LT4_N_2();
    LT4_N_3();
    LT4_N_4();
    LT4_W_1();
    LT4_W_2();
    LT4_W_3();
    LT4_W_4();
    LT4_D_1();
    LT4_D_2();
    LT4_D_3();
    LT4_D_4();

    LS1_N_1();
    LS1_N_2();
    LS1_N_3();
    LS1_N_4();
    LS1_W_1();
    LS1_W_2();
    LS1_W_3();
    LS1_W_4();
    LS1_D_1();
    LS1_D_2();
    LS1_D_3();
    LS1_D_4();
    LS2_N_1();
    LS2_N_2();
    LS2_N_3();
    LS2_N_4();
    LS2_W_1();
    LS2_W_2();
    LS2_W_3();
    LS2_W_4();
    LS2_D_1();
    LS2_D_2();
    LS2_D_3();
    LS2_D_4();
    LS3_N_1();
    LS3_N_2();
    LS3_N_3();
    LS3_N_4();
    LS3_W_1();
    LS3_W_2();
    LS3_W_3();
    LS3_W_4();
    LS3_D_1();
    LS3_D_2();
    LS3_D_3();
    LS3_D_4();
    LS4_N_1();
    LS4_N_2();
    LS4_N_3();
    LS4_N_4();
    LS4_W_1();
    LS4_W_2();
    LS4_W_3();
    LS4_W_4();
    LS4_D_1();
    LS4_D_2();
    LS4_D_3();
    LS4_D_4();

    HT1_N_1();
    HT1_N_2();
    HT1_N_3();
    HT1_N_4();
    HT1_W_1();
    HT1_W_2();
    HT1_W_3();
    HT1_W_4();
    HT1_D_1();
    HT1_D_2();
    HT1_D_3();
    HT1_D_4();
    HT2_N_1();
    HT2_N_2();
    HT2_N_3();
    HT2_N_4();
    HT2_W_1();
    HT2_W_2();
    HT2_W_3();
    HT2_W_4();
    HT2_D_1();
    HT2_D_2();
    HT2_D_3();
    HT2_D_4();

    addOwnerNBaseRoomPrice();
    addOwnerNRoom2Price();
    addOwnerNRoom3Price();
    addOwnerNRoom4Price();
    addOwnerWBaseRoomPrice();
    addOwnerWRoom2Price();
    addOwnerWRoom3Price();
    addOwnerWRoom4Price();
    addOwnerDBaseRoomPrice();
    addOwnerDRoom2Price();
    addOwnerDRoom3Price();
    addOwnerDRoom4Price();

    addGovernNBaseRoomPrice();
    addGovernNRoom2Price();
    addGovernNRoom3Price();
    addGovernNRoom4Price();
    addGovernWBaseRoomPrice();
    addGovernWRoom2Price();
    addGovernWRoom3Price();
    addGovernWRoom4Price();
    addGovernDBaseRoomPrice();
    addGovernDRoom2Price();
    addGovernDRoom3Price();
    addGovernDRoom4Price();

    addPeerNBaseRoomPrice();
    addPeerNRoom2Price();
    addPeerNRoom3Price();
    addPeerNRoom4Price();
    addPeerWBaseRoomPrice();
    addPeerWRoom2Price();
    addPeerWRoom3Price();
    addPeerWRoom4Price();
    addPeerDBaseRoomPrice();
    addPeerDRoom2Price();
    addPeerDRoom3Price();
    addPeerDRoom4Price();

    addFirst1NBaseRoomPrice();
    addFirst1NRoom2Price();
    addFirst1NRoom3Price();
    addFirst1NRoom4Price();
    addFirst1WBaseRoomPrice();
    addFirst1WRoom2Price();
    addFirst1WRoom3Price();
    addFirst1WRoom4Price();
    addFirst1DBaseRoomPrice();
    addFirst1DRoom2Price();
    addFirst1DRoom3Price();
    addFirst1DRoom4Price();

    addFirst2NBaseRoomPrice();
    addFirst2NRoom2Price();
    addFirst2NRoom3Price();
    addFirst2NRoom4Price();
    addFirst2WBaseRoomPrice();
    addFirst2WRoom2Price();
    addFirst2WRoom3Price();
    addFirst2WRoom4Price();
    addFirst2DBaseRoomPrice();
    addFirst2DRoom2Price();
    addFirst2DRoom3Price();
    addFirst2DRoom4Price();

    addFirst3NBaseRoomPrice();
    addFirst3NRoom2Price();
    addFirst3NRoom3Price();
    addFirst3NRoom4Price();
    addFirst3WBaseRoomPrice();
    addFirst3WRoom2Price();
    addFirst3WRoom3Price();
    addFirst3WRoom4Price();
    addFirst3DBaseRoomPrice();
    addFirst3DRoom2Price();
    addFirst3DRoom3Price();
    addFirst3DRoom4Price();

    addFirst4NBaseRoomPrice();
    addFirst4NRoom2Price();
    addFirst4NRoom3Price();
    addFirst4NRoom4Price();
    addFirst4WBaseRoomPrice();
    addFirst4WRoom2Price();
    addFirst4WRoom3Price();
    addFirst4WRoom4Price();
    addFirst4DBaseRoomPrice();
    addFirst4DRoom2Price();
    addFirst4DRoom3Price();
    addFirst4DRoom4Price();

    addSecond1NBaseRoomPrice();
    addSecond1NRoom2Price();
    addSecond1NRoom3Price();
    addSecond1NRoom4Price();
    addSecond1WBaseRoomPrice();
    addSecond1WRoom2Price();
    addSecond1WRoom3Price();
    addSecond1WRoom4Price();
    addSecond1DBaseRoomPrice();
    addSecond1DRoom2Price();
    addSecond1DRoom3Price();
    addSecond1DRoom4Price();

    addSecond2NBaseRoomPrice();
    addSecond2NRoom2Price();
    addSecond2NRoom3Price();
    addSecond2NRoom4Price();
    addSecond2WBaseRoomPrice();
    addSecond2WRoom2Price();
    addSecond2WRoom3Price();
    addSecond2WRoom4Price();
    addSecond2DBaseRoomPrice();
    addSecond2DRoom2Price();
    addSecond2DRoom3Price();
    addSecond2DRoom4Price();

    addSecond3NBaseRoomPrice();
    addSecond3NRoom2Price();
    addSecond3NRoom3Price();
    addSecond3NRoom4Price();
    addSecond3WBaseRoomPrice();
    addSecond3WRoom2Price();
    addSecond3WRoom3Price();
    addSecond3WRoom4Price();
    addSecond3DBaseRoomPrice();
    addSecond3DRoom2Price();
    addSecond3DRoom3Price();
    addSecond3DRoom4Price();

    addSecond4NBaseRoomPrice();
    addSecond4NRoom2Price();
    addSecond4NRoom3Price();
    addSecond4NRoom4Price();
    addSecond4WBaseRoomPrice();
    addSecond4WRoom2Price();
    addSecond4WRoom3Price();
    addSecond4WRoom4Price();
    addSecond4DBaseRoomPrice();
    addSecond4DRoom2Price();
    addSecond4DRoom3Price();
    addSecond4DRoom4Price();

    addThird1NBaseRoomPrice();
    addThird1NRoom2Price();
    addThird1NRoom3Price();
    addThird1NRoom4Price();
    addThird1WBaseRoomPrice();
    addThird1WRoom2Price();
    addThird1WRoom3Price();
    addThird1WRoom4Price();
    addThird1DBaseRoomPrice();
    addThird1DRoom2Price();
    addThird1DRoom3Price();
    addThird1DRoom4Price();

    addThird2NBaseRoomPrice();
    addThird2NRoom2Price();
    addThird2NRoom3Price();
    addThird2NRoom4Price();
    addThird2WBaseRoomPrice();
    addThird2WRoom2Price();
    addThird2WRoom3Price();
    addThird2WRoom4Price();
    addThird2DBaseRoomPrice();
    addThird2DRoom2Price();
    addThird2DRoom3Price();
    addThird2DRoom4Price();

    addCore1NBaseRoomPrice();
    addCore1NRoom2Price();
    addCore1NRoom3Price();
    addCore1NRoom4Price();
    addCore1WBaseRoomPrice();
    addCore1WRoom2Price();
    addCore1WRoom3Price();
    addCore1WRoom4Price();
    addCore1DBaseRoomPrice();
    addCore1DRoom2Price();
    addCore1DRoom3Price();
    addCore1DRoom4Price();

    addCore2NBaseRoomPrice();
    addCore2NRoom2Price();
    addCore2NRoom3Price();
    addCore2NRoom4Price();
    addCore2WBaseRoomPrice();
    addCore2WRoom2Price();
    addCore2WRoom3Price();
    addCore2WRoom4Price();
    addCore2DBaseRoomPrice();
    addCore2DRoom2Price();
    addCore2DRoom3Price();
    addCore2DRoom4Price();



}

    function encodeLT1()
{
    contractRoomPrice={};

    var supplement =  parseInt($("#LT_consupplement1").val());
    contractRoomPrice.contractCusType = $("#LT_comtype1").text();
    contractRoomPrice.contractProjectName = $(".LT_conBasicproj1").text();
    contractRoomPrice.contractPriceType = $("#LT_conPk1").val();
    contractRoomPrice.contractPriceCode = $("#LT_conHotelCode1").val();
    contractRoomPrice.contractSupplements = supplement/100;

}

function LT1_N_1()
{
    encodeLT1();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Ncon1Price1").val();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();

    var callback = function(result)
    {
        if(popModal === true)
        {
            $('#myModal_salerinfo').modal('show');
            popModal = false;
        }
    };

    if($("#LT_Ncon1Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT1_N_2()
{
    encodeLT1();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Ncon2Price1").val();
    contractRoomPrice.roomType = $(".NRoomType2").text();

    var callback = function(result)
    {
        if(popModal === true)
        {
            $('#myModal_salerinfo').modal('show');
            popModal = false;
        }
    };

    if($("#LT_Ncon2Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT1_N_3()
{
    encodeLT1();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Ncon3Price1").val();
    contractRoomPrice.roomType = $(".NRoomType3").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Ncon3Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT1_N_4()
{
    encodeLT1();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Ncon4Price1").val();
    contractRoomPrice.roomType = $(".NRoomType4").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Ncon4Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT1_W_1()
{
    encodeLT1();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Wcon1Price1").val();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Wcon1Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT1_W_2()
{
    encodeLT1();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Wcon2Price1").val();
    contractRoomPrice.roomType = $(".WRoomType2").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Wcon2Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT1_W_3()
{
    encodeLT1();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Wcon3Price1").val();
    contractRoomPrice.roomType = $(".WRoomType3").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Wcon3Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT1_W_4()
{
    encodeLT1();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Wcon4Price1").val();
    contractRoomPrice.roomType = $(".WRoomType4").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Wcon4Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT1_D_1()
{
    encodeLT1();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Dcon1Price1").val();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Dcon1Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT1_D_2()
{
    encodeLT1();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Dcon2Price1").val();
    contractRoomPrice.roomType = $(".DRoomType2").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Dcon2Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT1_D_3()
{
    encodeLT1();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Dcon3Price1").val();
    contractRoomPrice.roomType = $(".DRoomType3").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Dcon3Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT1_D_4()
{
    encodeLT1();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Dcon4Price1").val();
    contractRoomPrice.roomType = $(".DRoomType4").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Dcon4Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeLT2()
{
    contractRoomPrice={};

    var supplement =  parseInt($("#LT_consupplement2").val());
    contractRoomPrice.contractCusType = $("#LT_comtype1").text();
    contractRoomPrice.contractProjectName = $(".LT_conBasicproj2").text();
    contractRoomPrice.contractPriceType = $("#LT_conPk2").val();
    contractRoomPrice.contractPriceCode = $("#LT_conHotelCode2").val();
    contractRoomPrice.contractSupplements = supplement/100;

}

function LT2_N_1()
{
    encodeLT2();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Ncon1Price2").val();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Ncon1Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT2_N_2()
{
    encodeLT2();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Ncon2Price2").val();
    contractRoomPrice.roomType = $(".NRoomType2").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Ncon2Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT2_N_3()
{
    encodeLT2();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Ncon3Price2").val();
    contractRoomPrice.roomType = $(".NRoomType3").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Ncon3Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT2_N_4()
{
    encodeLT2();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Ncon4Price2").val();
    contractRoomPrice.roomType = $(".NRoomType4").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Ncon4Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT2_W_1()
{
    encodeLT2();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Wcon1Price2").val();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Wcon1Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT2_W_2()
{
    encodeLT2();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Wcon2Price2").val();
    contractRoomPrice.roomType = $(".WRoomType2").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Wcon2Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT2_W_3()
{
    encodeLT2();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Wcon3Price2").val();
    contractRoomPrice.roomType = $(".WRoomType3").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Wcon3Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT2_W_4()
{
    encodeLT2();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Wcon4Price2").val();
    contractRoomPrice.roomType = $(".WRoomType4").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Wcon4Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT2_D_1()
{
    encodeLT2();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Dcon1Price2").val();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Dcon1Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT2_D_2()
{
    encodeLT2();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Dcon2Price2").val();
    contractRoomPrice.roomType = $(".DRoomType2").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Dcon2Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT2_D_3()
{
    encodeLT2();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Dcon3Price2").val();
    contractRoomPrice.roomType = $(".DRoomType3").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Dcon3Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT2_D_4()
{
    encodeLT2();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Dcon4Price2").val();
    contractRoomPrice.roomType = $(".DRoomType4").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Dcon4Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeLT3()
{
    contractRoomPrice={};

    var supplement =  parseInt($("#LT_consupplement3").val());
    contractRoomPrice.contractCusType = $("#LT_comtype1").text();
    contractRoomPrice.contractProjectName = $(".LT_conBasicproj3").text();
    contractRoomPrice.contractPriceType = $("#LT_conPk3").val();
    contractRoomPrice.contractPriceCode = $("#LT_conHotelCode3").val();
    contractRoomPrice.contractSupplements = supplement/100;

}

function LT3_N_1()
{
    encodeLT3();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Ncon1Price3").val();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Ncon1Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT3_N_2()
{
    encodeLT3();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Ncon2Price3").val();
    contractRoomPrice.roomType = $(".NRoomType2").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Ncon2Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT3_N_3()
{
    encodeLT3();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Ncon3Price3").val();
    contractRoomPrice.roomType = $(".NRoomType3").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Ncon3Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT3_N_4()
{
    encodeLT3();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Ncon4Price3").val();
    contractRoomPrice.roomType = $(".NRoomType4").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Ncon4Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT3_W_1()
{
    encodeLT3();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Wcon1Price3").val();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Wcon1Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT3_W_2()
{
    encodeLT3();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Wcon2Price3").val();
    contractRoomPrice.roomType = $(".WRoomType2").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Wcon2Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT3_W_3()
{
    encodeLT3();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Wcon3Price3").val();
    contractRoomPrice.roomType = $(".WRoomType3").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Wcon3Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT3_W_4()
{
    encodeLT3();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Wcon4Price3").val();
    contractRoomPrice.roomType = $(".WRoomType4").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Wcon4Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT3_D_1()
{
    encodeLT3();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Dcon1Price3").val();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Dcon1Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT3_D_2()
{
    encodeLT3();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Dcon2Price3").val();
    contractRoomPrice.roomType = $(".DRoomType2").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Dcon2Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT3_D_3()
{
    encodeLT3();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Dcon3Price3").val();
    contractRoomPrice.roomType = $(".DRoomType3").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Dcon3Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT3_D_4()
{
    encodeLT3();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Dcon4Price3").val();
    contractRoomPrice.roomType = $(".DRoomType4").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Dcon4Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeLT4()
{
    contractRoomPrice={};

    var supplement =  parseInt($("#LT_consupplement4").val());
    contractRoomPrice.contractCusType = $("#LT_comtype1").text();
    contractRoomPrice.contractProjectName = $(".LT_conBasicproj4").text();
    contractRoomPrice.contractPriceType = $("#LT_conPk4").val();
    contractRoomPrice.contractPriceCode = $("#LT_conHotelCode4").val();
    contractRoomPrice.contractSupplements = supplement/100;

}

function LT4_N_1()
{
    encodeLT4();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Ncon1Price4").val();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Ncon1Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT4_N_2()
{
    encodeLT4();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Ncon2Price4").val();
    contractRoomPrice.roomType = $(".NRoomType2").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Ncon2Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT4_N_3()
{
    encodeLT4();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Ncon3Price4").val();
    contractRoomPrice.roomType = $(".NRoomType3").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Ncon3Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT4_N_4()
{
    encodeLT4();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Ncon4Price4").val();
    contractRoomPrice.roomType = $(".NRoomType4").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Ncon4Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT4_W_1()
{
    encodeLT4();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Wcon1Price4").val();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Wcon1Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT4_W_2()
{
    encodeLT4();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Wcon2Price4").val();
    contractRoomPrice.roomType = $(".WRoomType2").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Wcon2Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT4_W_3()
{
    encodeLT4();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Wcon3Price4").val();
    contractRoomPrice.roomType = $(".WRoomType3").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Wcon3Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT4_W_4()
{
    encodeLT4();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Wcon4Price4").val();
    contractRoomPrice.roomType = $(".WRoomType4").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Wcon4Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT4_D_1()
{
    encodeLT4();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Dcon1Price4").val();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Dcon1Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT4_D_2()
{
    encodeLT4();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Dcon2Price4").val();
    contractRoomPrice.roomType = $(".DRoomType2").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Dcon2Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT4_D_3()
{
    encodeLT4();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Dcon3Price4").val();
    contractRoomPrice.roomType = $(".DRoomType3").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Dcon3Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LT4_D_4()
{
    encodeLT4();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LT_Dcon4Price4").val();
    contractRoomPrice.roomType = $(".DRoomType4").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LT_Dcon4Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeLS1()
{
    contractRoomPrice={};

    var supplement =  parseInt($("#LS_consupplement1").val());
    contractRoomPrice.contractCusType = $("#LS_comtype1").text();
    contractRoomPrice.contractProjectName = $(".LS_conBasicproj1").text();
    contractRoomPrice.contractPriceType = $("#LS_conPk1").val();
    contractRoomPrice.contractPriceCode = $("#LS_conHotelCode1").val();
    contractRoomPrice.contractSupplements = supplement/100;

}

function LS1_N_1()
{
    encodeLS1();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Ncon1Price1").val();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Ncon1Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS1_N_2()
{
    encodeLS1();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Ncon2Price1").val();
    contractRoomPrice.roomType = $(".NRoomType2").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Ncon2Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS1_N_3()
{
    encodeLS1();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Ncon3Price1").val();
    contractRoomPrice.roomType = $(".NRoomType3").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Ncon3Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS1_N_4()
{
    encodeLS1();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Ncon4Price1").val();
    contractRoomPrice.roomType = $(".NRoomType4").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Ncon4Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS1_W_1()
{
    encodeLS1();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Wcon1Price1").val();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Wcon1Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS1_W_2()
{
    encodeLS1();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Wcon2Price1").val();
    contractRoomPrice.roomType = $(".WRoomType2").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Wcon2Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS1_W_3()
{
    encodeLS1();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Wcon3Price1").val();
    contractRoomPrice.roomType = $(".WRoomType3").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Wcon3Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS1_W_4()
{
    encodeLS1();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Wcon4Price1").val();
    contractRoomPrice.roomType = $(".WRoomType4").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Wcon4Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS1_D_1()
{
    encodeLS1();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Dcon1Price1").val();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Dcon1Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS1_D_2()
{
    encodeLS1();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Dcon2Price1").val();
    contractRoomPrice.roomType = $(".DRoomType2").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Dcon2Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS1_D_3()
{
    encodeLS1();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Dcon3Price1").val();
    contractRoomPrice.roomType = $(".DRoomType3").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Dcon3Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS1_D_4()
{
    encodeLS1();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Dcon4Price1").val();
    contractRoomPrice.roomType = $(".DRoomType4").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Dcon4Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeLS2()
{
    contractRoomPrice={};

    var supplement =  parseInt($("#LS_consupplement2").val());
    contractRoomPrice.contractCusType = $("#LS_comtype1").text();
    contractRoomPrice.contractProjectName = $(".LS_conBasicproj2").text();
    contractRoomPrice.contractPriceType = $("#LS_conPk2").val();
    contractRoomPrice.contractPriceCode = $("#LS_conHotelCode2").val();
    contractRoomPrice.contractSupplements = supplement/100;

}

function LS2_N_1()
{
    encodeLS2();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Ncon1Price2").val();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Ncon1Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS2_N_2()
{
    encodeLS2();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Ncon2Price2").val();
    contractRoomPrice.roomType = $(".NRoomType2").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Ncon2Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS2_N_3()
{
    encodeLS2();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Ncon3Price2").val();
    contractRoomPrice.roomType = $(".NRoomType3").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Ncon3Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS2_N_4()
{
    encodeLS2();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Ncon4Price2").val();
    contractRoomPrice.roomType = $(".NRoomType4").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Ncon4Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS2_W_1()
{
    encodeLS2();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Wcon1Price2").val();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Wcon1Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS2_W_2()
{
    encodeLS2();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Wcon2Price2").val();
    contractRoomPrice.roomType = $(".WRoomType2").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Wcon2Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS2_W_3()
{
    encodeLS2();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Wcon3Price2").val();
    contractRoomPrice.roomType = $(".WRoomType3").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Wcon3Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS2_W_4()
{
    encodeLS2();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Wcon4Price2").val();
    contractRoomPrice.roomType = $(".WRoomType4").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Wcon4Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS2_D_1()
{
    encodeLS2();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Dcon1Price2").val();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Dcon1Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS2_D_2()
{
    encodeLS2();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Dcon2Price2").val();
    contractRoomPrice.roomType = $(".DRoomType2").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Dcon2Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS2_D_3()
{
    encodeLS2();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Dcon3Price2").val();
    contractRoomPrice.roomType = $(".DRoomType3").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Dcon3Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS2_D_4()
{
    encodeLS2();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Dcon4Price2").val();
    contractRoomPrice.roomType = $(".DRoomType4").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Dcon4Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeLS3()
{
    contractRoomPrice={};

    var supplement =  parseInt($("#LS_consupplement3").val());
    contractRoomPrice.contractCusType = $("#LS_comtype1").text();
    contractRoomPrice.contractProjectName = $(".LS_conBasicproj3").text();
    contractRoomPrice.contractPriceType = $("#LS_conPk3").val();
    contractRoomPrice.contractPriceCode = $("#LS_conHotelCode3").val();
    contractRoomPrice.contractSupplements = supplement/100;

}

function LS3_N_1()
{
    encodeLS3();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Ncon1Price3").val();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Ncon1Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS3_N_2()
{
    encodeLS3();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Ncon2Price3").val();
    contractRoomPrice.roomType = $(".NRoomType2").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Ncon2Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS3_N_3()
{
    encodeLS3();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Ncon3Price3").val();
    contractRoomPrice.roomType = $(".NRoomType3").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Ncon3Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS3_N_4()
{
    encodeLS3();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Ncon4Price3").val();
    contractRoomPrice.roomType = $(".NRoomType4").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Ncon4Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS3_W_1()
{
    encodeLS3();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Wcon1Price3").val();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Wcon1Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS3_W_2()
{
    encodeLS3();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Wcon2Price3").val();
    contractRoomPrice.roomType = $(".WRoomType2").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Wcon2Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS3_W_3()
{
    encodeLS3();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Wcon3Price3").val();
    contractRoomPrice.roomType = $(".WRoomType3").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Wcon3Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS3_W_4()
{
    encodeLS3();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Wcon4Price3").val();
    contractRoomPrice.roomType = $(".WRoomType4").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Wcon4Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS3_D_1()
{
    encodeLS3();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Dcon1Price3").val();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Dcon1Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS3_D_2()
{
    encodeLS3();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Dcon2Price3").val();
    contractRoomPrice.roomType = $(".DRoomType2").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Dcon2Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS3_D_3()
{
    encodeLS3();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Dcon3Price3").val();
    contractRoomPrice.roomType = $(".DRoomType3").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Dcon3Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS3_D_4()
{
    encodeLS3();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Dcon4Price3").val();
    contractRoomPrice.roomType = $(".DRoomType4").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Dcon4Price3").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeLS4()
{
    contractRoomPrice={};

    var supplement =  parseInt($("#LS_consupplement4").val());
    contractRoomPrice.contractCusType = $("#LS_comtype1").text();
    contractRoomPrice.contractProjectName = $(".LS_conBasicproj4").text();
    contractRoomPrice.contractPriceType = $("#LS_conPk4").val();
    contractRoomPrice.contractPriceCode = $("#LS_conHotelCode4").val();
    contractRoomPrice.contractSupplements = supplement/100;

}

function LS4_N_1()
{
    encodeLS4();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Ncon1Price4").val();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Ncon1Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS4_N_2()
{
    encodeLS4();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Ncon2Price4").val();
    contractRoomPrice.roomType = $(".NRoomType2").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Ncon2Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS4_N_3()
{
    encodeLS4();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Ncon3Price4").val();
    contractRoomPrice.roomType = $(".NRoomType3").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Ncon3Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS4_N_4()
{
    encodeLS4();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Ncon4Price4").val();
    contractRoomPrice.roomType = $(".NRoomType4").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Ncon4Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS4_W_1()
{
    encodeLS4();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Wcon1Price4").val();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Wcon1Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS4_W_2()
{
    encodeLS4();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Wcon2Price4").val();
    contractRoomPrice.roomType = $(".WRoomType2").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Wcon2Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS4_W_3()
{
    encodeLS4();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Wcon3Price4").val();
    contractRoomPrice.roomType = $(".WRoomType3").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Wcon3Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS4_W_4()
{
    encodeLS4();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Wcon4Price4").val();
    contractRoomPrice.roomType = $(".WRoomType4").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Wcon4Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS4_D_1()
{
    encodeLS4();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Dcon1Price4").val();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Dcon1Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS4_D_2()
{
    encodeLS4();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Dcon2Price4").val();
    contractRoomPrice.roomType = $(".DRoomType2").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Dcon2Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS4_D_3()
{
    encodeLS4();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Dcon3Price4").val();
    contractRoomPrice.roomType = $(".DRoomType3").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Dcon3Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function LS4_D_4()
{
    encodeLS4();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#LS_Dcon4Price4").val();
    contractRoomPrice.roomType = $(".DRoomType4").text();

    var callback = function(resuLS)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#LS_Dcon4Price4").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeHT1()
{
    contractRoomPrice={};

    var supplement =  parseInt($("#HT_consupplement1").val());
    contractRoomPrice.contractCusType = $("#HT_comtype1").text();
    contractRoomPrice.contractProjectName = $(".HT_conBasicproj1").text();
    contractRoomPrice.contractPriceType = $("#HT_conPk1").val();
    contractRoomPrice.contractPriceCode = $("#HT_conHotelCode1").val();
    contractRoomPrice.contractSupplements = supplement/100;

}

function HT1_N_1()
{
    encodeHT1();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Ncon1Price1").val();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Ncon1Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT1_N_2()
{
    encodeHT1();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Ncon2Price1").val();
    contractRoomPrice.roomType = $(".NRoomType2").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Ncon2Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT1_N_3()
{
    encodeHT1();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Ncon3Price1").val();
    contractRoomPrice.roomType = $(".NRoomType3").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Ncon3Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT1_N_4()
{
    encodeHT1();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Ncon4Price1").val();
    contractRoomPrice.roomType = $(".NRoomType4").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Ncon4Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT1_W_1()
{
    encodeHT1();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Wcon1Price1").val();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Wcon1Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT1_W_2()
{
    encodeHT1();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Wcon2Price1").val();
    contractRoomPrice.roomType = $(".WRoomType2").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Wcon2Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT1_W_3()
{
    encodeHT1();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Wcon3Price1").val();
    contractRoomPrice.roomType = $(".WRoomType3").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Wcon3Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT1_W_4()
{
    encodeHT1();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Wcon4Price1").val();
    contractRoomPrice.roomType = $(".WRoomType4").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Wcon4Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT1_D_1()
{
    encodeHT1();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Dcon1Price1").val();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Dcon1Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT1_D_2()
{
    encodeHT1();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Dcon2Price1").val();
    contractRoomPrice.roomType = $(".DRoomType2").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Dcon2Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT1_D_3()
{
    encodeHT1();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Dcon3Price1").val();
    contractRoomPrice.roomType = $(".DRoomType3").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Dcon3Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT1_D_4()
{
    encodeHT1();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Dcon4Price1").val();
    contractRoomPrice.roomType = $(".DRoomType4").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Dcon4Price1").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeHT2()
{
    contractRoomPrice={};

    var supplement =  parseInt($("#HT_consupplement2").val());
    contractRoomPrice.contractProjectName = $(".HT_conBasicproj2").text();
    contractRoomPrice.contractPriceType = $("#HT_conPk2").val();
    contractRoomPrice.contractPriceCode = $("#HT_conHotelCode2").val();
    contractRoomPrice.contractSupplements = supplement/100;

}

function HT2_N_1()
{
    encodeHT2();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractCusType = $("#HT_comtype1").text();
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Ncon1Price2").val();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Ncon1Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT2_N_2()
{
    encodeHT2();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Ncon2Price2").val();
    contractRoomPrice.roomType = $(".NRoomType2").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Ncon2Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT2_N_3()
{
    encodeHT2();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Ncon3Price2").val();
    contractRoomPrice.roomType = $(".NRoomType3").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Ncon3Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT2_N_4()
{
    encodeHT2();
    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Ncon4Price2").val();
    contractRoomPrice.roomType = $(".NRoomType4").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Ncon4Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT2_W_1()
{
    encodeHT2();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Wcon1Price2").val();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Wcon1Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT2_W_2()
{
    encodeHT2();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Wcon2Price2").val();
    contractRoomPrice.roomType = $(".WRoomType2").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Wcon2Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT2_W_3()
{
    encodeHT2();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Wcon3Price2").val();
    contractRoomPrice.roomType = $(".WRoomType3").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Wcon3Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT2_W_4()
{
    encodeHT2();
    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Wcon4Price2").val();
    contractRoomPrice.roomType = $(".WRoomType4").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Wcon4Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT2_D_1()
{
    encodeHT2();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Dcon1Price2").val();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Dcon1Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT2_D_2()
{
    encodeHT2();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Dcon2Price2").val();
    contractRoomPrice.roomType = $(".DRoomType2").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Dcon2Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT2_D_3()
{
    encodeHT2();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Dcon3Price2").val();
    contractRoomPrice.roomType = $(".DRoomType3").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Dcon3Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function HT2_D_4()
{
    encodeHT2();
    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g,"");
    contractRoomPrice.contractPackageCode = pt1;
    contractRoomPrice.contractPrice = $("#HT_Dcon4Price2").val();
    contractRoomPrice.roomType = $(".DRoomType4").text();

    var callback = function(result)
    {
      
         if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if($("#HT_Dcon4Price2").val())
    {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}


function encodeOwnerNRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#ownerSupplement").val());
    contractRoomPrice.contractPriceType = $("#ownerPk").val();
    contractRoomPrice.contractProjectName = $(".owner").text();
    contractRoomPrice.contractPriceCode = $("#ownerHotelCode").val();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addOwnerNBaseRoomPrice() {
    encodeOwnerNRoomDealPrice();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#ownerNBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#ownerNBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addOwnerNRoom2Price() {
    encodeOwnerNRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType2").text();
    contractRoomPrice.contractPrice = $("#ownerNRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#ownerNRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addOwnerNRoom3Price() {
    encodeOwnerNRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType3").text();
    contractRoomPrice.contractPrice = $("#ownerNRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#ownerNRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addOwnerNRoom4Price() {
    encodeOwnerNRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType4").text();
    contractRoomPrice.contractPrice = $("#ownerNRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#ownerNRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeOwnerWRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#ownerSupplement").val());
    contractRoomPrice.contractPriceType = $("#ownerPk").val();
    contractRoomPrice.contractProjectName = $(".owner").text();
    contractRoomPrice.contractPriceCode = $("#ownerHotelCode").val();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addOwnerWBaseRoomPrice() {
    encodeOwnerWRoomDealPrice();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#ownerWBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#ownerWBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addOwnerWRoom2Price() {
    encodeOwnerWRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType2").text();
    contractRoomPrice.contractPrice = $("#ownerWRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#ownerWRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addOwnerWRoom3Price() {
    encodeOwnerWRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType3").text();
    contractRoomPrice.contractPrice = $("#ownerWRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#ownerWRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addOwnerWRoom4Price() {
    encodeOwnerWRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType4").text();
    contractRoomPrice.contractPrice = $("#ownerWRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#ownerWRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeOwnerDRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#ownerSupplement").val());
    contractRoomPrice.contractPriceType = $("#ownerPk").val();
    contractRoomPrice.contractProjectName = $(".owner").text();
    contractRoomPrice.contractPriceCode = $("#ownerHotelCode").val();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addOwnerDBaseRoomPrice() {
    encodeOwnerDRoomDealPrice();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#ownerDBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#ownerDBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addOwnerDRoom2Price() {
    encodeOwnerDRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType2").text();
    contractRoomPrice.contractPrice = $("#ownerDRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#ownerDRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addOwnerDRoom3Price() {
    encodeOwnerDRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType3").text();
    contractRoomPrice.contractPrice = $("#ownerDRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#ownerDRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addOwnerDRoom4Price() {
    encodeOwnerDRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType4").text();
    contractRoomPrice.contractPrice = $("#ownerDRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#ownerDRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeGovernNRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#governSupplement").val());
    contractRoomPrice.contractPriceType = $("#governPk").val();
    contractRoomPrice.contractProjectName = $(".government").text();
    contractRoomPrice.contractPriceCode = $("#governHotelCode").val();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addGovernNBaseRoomPrice() {
    encodeGovernNRoomDealPrice();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#governNBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#governNBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addGovernNRoom2Price() {
    encodeGovernNRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType2").text();
    contractRoomPrice.contractPrice = $("#governNRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#governNRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addGovernNRoom3Price() {
    encodeGovernNRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType3").text();
    contractRoomPrice.contractPrice = $("#governNRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#governNRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addGovernNRoom4Price() {
    encodeGovernNRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType4").text();
    contractRoomPrice.contractPrice = $("#governNRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#governNRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeGovernWRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#governSupplement").val());
    contractRoomPrice.contractPriceType = $("#governPk").val();
    contractRoomPrice.contractProjectName = $(".government").text();
    contractRoomPrice.contractPriceCode = $("#governHotelCode").val();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addGovernWBaseRoomPrice() {
    encodeGovernWRoomDealPrice();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#governWBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#governWBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addGovernWRoom2Price() {
    encodeGovernWRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType2").text();
    contractRoomPrice.contractPrice = $("#governWRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#governWRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addGovernWRoom3Price() {
    encodeGovernWRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType3").text();
    contractRoomPrice.contractPrice = $("#governWRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#governWRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addGovernWRoom4Price() {
    encodeGovernWRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType4").text();
    contractRoomPrice.contractPrice = $("#governWRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#governWRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeGovernDRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#governSupplement").val());
    contractRoomPrice.contractPriceType = $("#governPk").val();
    contractRoomPrice.contractProjectName = $(".government").text();
    contractRoomPrice.contractPriceCode = $("#governHotelCode").val();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addGovernDBaseRoomPrice() {
    encodeGovernDRoomDealPrice();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#governDBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#governDBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addGovernDRoom2Price() {
    encodeGovernDRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType2").text();
    contractRoomPrice.contractPrice = $("#governDRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#governDRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addGovernDRoom3Price() {
    encodeGovernDRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType3").text();
    contractRoomPrice.contractPrice = $("#governDRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#governDRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addGovernDRoom4Price() {
    encodeGovernDRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType4").text();
    contractRoomPrice.contractPrice = $("#governDRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#governDRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodePeerNRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#peerSupplement").val());
    contractRoomPrice.contractPriceType = $("#peerPk").val();
    contractRoomPrice.contractProjectName = $(".peer").text();
    contractRoomPrice.contractPriceCode = $("#peerHotelCode").val();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addPeerNBaseRoomPrice() {
    encodePeerNRoomDealPrice();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#peerNBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#peerNBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addPeerNRoom2Price() {
    encodePeerNRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType2").text();
    contractRoomPrice.contractPrice = $("#peerNRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#peerNRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addPeerNRoom3Price() {
    encodePeerNRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType3").text();
    contractRoomPrice.contractPrice = $("#peerNRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#peerNRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addPeerNRoom4Price() {
    encodePeerNRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType4").text();
    contractRoomPrice.contractPrice = $("#peerNRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#peerNRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodePeerWRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#peerSupplement").val());
    contractRoomPrice.contractPriceType = $("#peerPk").val();
    contractRoomPrice.contractProjectName = $(".peer").text();
    contractRoomPrice.contractPriceCode = $("#peerHotelCode").val();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addPeerWBaseRoomPrice() {
    encodePeerWRoomDealPrice();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#peerWBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#peerWBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addPeerWRoom2Price() {
    encodePeerWRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType2").text();
    contractRoomPrice.contractPrice = $("#peerWRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#peerWRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addPeerWRoom3Price() {
    encodePeerWRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType3").text();
    contractRoomPrice.contractPrice = $("#peerWRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#peerWRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addPeerWRoom4Price() {
    encodePeerWRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType4").text();
    contractRoomPrice.contractPrice = $("#peerWRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#peerWRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodePeerDRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#peerSupplement").val());
    contractRoomPrice.contractPriceType = $("#peerPk").val();
    contractRoomPrice.contractProjectName = $(".peer").text();
    contractRoomPrice.contractPriceCode = $("#peerHotelCode").val();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addPeerDBaseRoomPrice() {
    encodePeerDRoomDealPrice();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#peerDBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#peerDBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addPeerDRoom2Price() {
    encodePeerDRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType2").text();
    contractRoomPrice.contractPrice = $("#peerDRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#peerDRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addPeerDRoom3Price() {
    encodePeerDRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType3").text();
    contractRoomPrice.contractPrice = $("#peerDRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#peerDRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addPeerDRoom4Price() {
    encodePeerDRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType4").text();
    contractRoomPrice.contractPrice = $("#peerDRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#peerDRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeFirst1NRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#first1Supplement").val());
    contractRoomPrice.contractPriceType = $("#first1Pk").val();
    contractRoomPrice.contractProjectName = $(".first").text();
    contractRoomPrice.contractPriceCode = $("#first1HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addFirst1NBaseRoomPrice() {
    encodeFirst1NRoomDealPrice();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#first1NBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first1NBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst1NRoom2Price() {
    encodeFirst1NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType2").text();
    contractRoomPrice.contractPrice = $("#first1NRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first1NRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst1NRoom3Price() {
    encodeFirst1NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType3").text();
    contractRoomPrice.contractPrice = $("#first1NRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first1NRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst1NRoom4Price() {
    encodeFirst1NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType4").text();
    contractRoomPrice.contractPrice = $("#first1NRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first1NRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeFirst1WRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#first1Supplement").val());
    contractRoomPrice.contractPriceType = $("#first1Pk").val();
    contractRoomPrice.contractProjectName = $(".first").text();
    contractRoomPrice.contractPriceCode = $("#first1HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addFirst1WBaseRoomPrice() {
    encodeFirst1WRoomDealPrice();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#first1WBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first1WBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst1WRoom2Price() {
    encodeFirst1WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType2").text();
    contractRoomPrice.contractPrice = $("#first1WRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first1WRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst1WRoom3Price() {
    encodeFirst1WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType3").text();
    contractRoomPrice.contractPrice = $("#first1WRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first1WRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst1WRoom4Price() {
    encodeFirst1WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType4").text();
    contractRoomPrice.contractPrice = $("#first1WRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first1WRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeFirst1DRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#first1Supplement").val());
    contractRoomPrice.contractPriceType = $("#first1Pk").val();
    contractRoomPrice.contractProjectName = $(".first").text();
    contractRoomPrice.contractPriceCode = $("#first1HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addFirst1DBaseRoomPrice() {
    encodeFirst1DRoomDealPrice();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#first1DBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first1DBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst1DRoom2Price() {
    encodeFirst1DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType2").text();
    contractRoomPrice.contractPrice = $("#first1DRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first1DRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst1DRoom3Price() {
    encodeFirst1DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType3").text();
    contractRoomPrice.contractPrice = $("#first1DRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first1DRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst1DRoom4Price() {
    encodeFirst1DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType4").text();
    contractRoomPrice.contractPrice = $("#first1DRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first1DRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeFirst2NRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#first2Supplement").val());
    contractRoomPrice.contractPriceType = $("#first2Pk").val();
    contractRoomPrice.contractProjectName = $(".first").text();
    contractRoomPrice.contractPriceCode = $("#first2HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addFirst2NBaseRoomPrice() {
    encodeFirst2NRoomDealPrice();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#first2NBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first2NBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst2NRoom2Price() {
    encodeFirst2NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType2").text();
    contractRoomPrice.contractPrice = $("#first2NRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first2NRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst2NRoom3Price() {
    encodeFirst2NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType3").text();
    contractRoomPrice.contractPrice = $("#first2NRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first2NRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst2NRoom4Price() {
    encodeFirst2NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType4").text();
    contractRoomPrice.contractPrice = $("#first2NRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first2NRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeFirst2WRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#first2Supplement").val());
    contractRoomPrice.contractPriceType = $("#first2Pk").val();
    contractRoomPrice.contractProjectName = $(".first").text();
    contractRoomPrice.contractPriceCode = $("#first2HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addFirst2WBaseRoomPrice() {
    encodeFirst2WRoomDealPrice();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#first2WBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first2WBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst2WRoom2Price() {
    encodeFirst2WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType2").text();
    contractRoomPrice.contractPrice = $("#first2WRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first2WRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst2WRoom3Price() {
    encodeFirst2WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType3").text();
    contractRoomPrice.contractPrice = $("#first2WRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first2WRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst2WRoom4Price() {
    encodeFirst2WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType4").text();
    contractRoomPrice.contractPrice = $("#first2WRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first2WRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeFirst2DRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#first2Supplement").val());
    contractRoomPrice.contractPriceType = $("#first2Pk").val();
    contractRoomPrice.contractProjectName = $(".first").text();
    contractRoomPrice.contractPriceCode = $("#first2HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addFirst2DBaseRoomPrice() {
    encodeFirst2DRoomDealPrice();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#first2DBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first2DBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst2DRoom2Price() {
    encodeFirst2DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType2").text();
    contractRoomPrice.contractPrice = $("#first2DRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first2DRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst2DRoom3Price() {
    encodeFirst2DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType3").text();
    contractRoomPrice.contractPrice = $("#first2DRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first2DRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst2DRoom4Price() {
    encodeFirst2DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType4").text();
    contractRoomPrice.contractPrice = $("#first2DRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first2DRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeFirst3NRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#first3Supplement").val());
    contractRoomPrice.contractPriceType = $("#first3Pk").val();
    contractRoomPrice.contractProjectName = $(".first").text();
    contractRoomPrice.contractPriceCode = $("#first3HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addFirst3NBaseRoomPrice() {
    encodeFirst3NRoomDealPrice();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#first3NBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first3NBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst3NRoom2Price() {
    encodeFirst3NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType2").text();
    contractRoomPrice.contractPrice = $("#first3NRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first3NRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst3NRoom3Price() {
    encodeFirst3NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType3").text();
    contractRoomPrice.contractPrice = $("#first3NRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first3NRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst3NRoom4Price() {
    encodeFirst3NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType4").text();
    contractRoomPrice.contractPrice = $("#first3NRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first3NRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeFirst3WRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#first3Supplement").val());
    contractRoomPrice.contractPriceType = $("#first3Pk").val();
    contractRoomPrice.contractProjectName = $(".first").text();
    contractRoomPrice.contractPriceCode = $("#first3HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addFirst3WBaseRoomPrice() {
    encodeFirst3WRoomDealPrice();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#first3WBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first3WBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst3WRoom2Price() {
    encodeFirst3WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType2").text();
    contractRoomPrice.contractPrice = $("#first3WRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first3WRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst3WRoom3Price() {
    encodeFirst3WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType3").text();
    contractRoomPrice.contractPrice = $("#first3WRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first3WRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst3WRoom4Price() {
    encodeFirst3WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType4").text();
    contractRoomPrice.contractPrice = $("#first3WRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first3WRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeFirst3DRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#first3Supplement").val());
    contractRoomPrice.contractPriceType = $("#first3Pk").val();
    contractRoomPrice.contractProjectName = $(".first").text();
    contractRoomPrice.contractPriceCode = $("#first3HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addFirst3DBaseRoomPrice() {
    encodeFirst3DRoomDealPrice();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#first3DBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first3DBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst3DRoom2Price() {
    encodeFirst3DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType2").text();
    contractRoomPrice.contractPrice = $("#first3DRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first3DRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst3DRoom3Price() {
    encodeFirst3DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType3").text();
    contractRoomPrice.contractPrice = $("#first3DRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first3DRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst3DRoom4Price() {
    encodeFirst3DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType4").text();
    contractRoomPrice.contractPrice = $("#first3DRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first3DRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeFirst4NRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#first4Supplement").val());
    contractRoomPrice.contractPriceType = $("#first4Pk").val();
    contractRoomPrice.contractProjectName = $(".first").text();
    contractRoomPrice.contractPriceCode = $("#first4HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addFirst4NBaseRoomPrice() {
    encodeFirst4NRoomDealPrice();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#first4NBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first4NBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst4NRoom2Price() {
    encodeFirst4NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType2").text();
    contractRoomPrice.contractPrice = $("#first4NRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first4NRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst4NRoom3Price() {
    encodeFirst4NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType3").text();
    contractRoomPrice.contractPrice = $("#first4NRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first4NRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst4NRoom4Price() {
    encodeFirst4NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType4").text();
    contractRoomPrice.contractPrice = $("#first4NRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first4NRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeFirst4WRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#first4Supplement").val());
    contractRoomPrice.contractPriceType = $("#first4Pk").val();
    contractRoomPrice.contractProjectName = $(".first").text();
    contractRoomPrice.contractPriceCode = $("#first4HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addFirst4WBaseRoomPrice() {
    encodeFirst4WRoomDealPrice();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#first4WBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first4WBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst4WRoom2Price() {
    encodeFirst4WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType2").text();
    contractRoomPrice.contractPrice = $("#first4WRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first4WRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst4WRoom3Price() {
    encodeFirst4WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType3").text();
    contractRoomPrice.contractPrice = $("#first4WRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first4WRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst4WRoom4Price() {
    encodeFirst4WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType4").text();
    contractRoomPrice.contractPrice = $("#first4WRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first4WRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeFirst4DRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#first4Supplement").val());
    contractRoomPrice.contractPriceType = $("#first4Pk").val();
    contractRoomPrice.contractProjectName = $(".first").text();
    contractRoomPrice.contractPriceCode = $("#first4HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addFirst4DBaseRoomPrice() {
    encodeFirst4DRoomDealPrice();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#first4DBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first4DBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst4DRoom2Price() {
    encodeFirst4DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType2").text();
    contractRoomPrice.contractPrice = $("#first4DRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first4DRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst4DRoom3Price() {
    encodeFirst4DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType3").text();
    contractRoomPrice.contractPrice = $("#first4DRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first4DRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addFirst4DRoom4Price() {
    encodeFirst4DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType4").text();
    contractRoomPrice.contractPrice = $("#first4DRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#first4DRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeSecond1NRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#second1Supplement").val());
    contractRoomPrice.contractPriceType = $("#second1Pk").val();
    contractRoomPrice.contractProjectName = $(".second").text();
    contractRoomPrice.contractPriceCode = $("#second1HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addSecond1NBaseRoomPrice() {
    encodeSecond1NRoomDealPrice();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#second1NBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second1NBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond1NRoom2Price() {
    encodeSecond1NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType2").text();
    contractRoomPrice.contractPrice = $("#second1NRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second1NRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond1NRoom3Price() {
    encodeSecond1NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType3").text();
    contractRoomPrice.contractPrice = $("#second1NRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second1NRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond1NRoom4Price() {
    encodeSecond1NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType4").text();
    contractRoomPrice.contractPrice = $("#second1NRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second1NRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeSecond1WRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#second1Supplement").val());
    contractRoomPrice.contractPriceType = $("#second1Pk").val();
    contractRoomPrice.contractProjectName = $(".second").text();
    contractRoomPrice.contractPriceCode = $("#second1HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addSecond1WBaseRoomPrice() {
    encodeSecond1WRoomDealPrice();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#second1WBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second1WBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond1WRoom2Price() {
    encodeSecond1WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType2").text();
    contractRoomPrice.contractPrice = $("#second1WRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second1WRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond1WRoom3Price() {
    encodeSecond1WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType3").text();
    contractRoomPrice.contractPrice = $("#second1WRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second1WRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond1WRoom4Price() {
    encodeSecond1WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType4").text();
    contractRoomPrice.contractPrice = $("#second1WRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second1WRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeSecond1DRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#second1Supplement").val());
    contractRoomPrice.contractPriceType = $("#second1Pk").val();
    contractRoomPrice.contractProjectName = $(".second").text();
    contractRoomPrice.contractPriceCode = $("#second1HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addSecond1DBaseRoomPrice() {
    encodeSecond1DRoomDealPrice();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#second1DBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second1DBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond1DRoom2Price() {
    encodeSecond1DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType2").text();
    contractRoomPrice.contractPrice = $("#second1DRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second1DRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond1DRoom3Price() {
    encodeSecond1DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType3").text();
    contractRoomPrice.contractPrice = $("#second1DRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second1DRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond1DRoom4Price() {
    encodeSecond1DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType4").text();
    contractRoomPrice.contractPrice = $("#second1DRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second1DRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeSecond2NRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#second2Supplement").val());
    contractRoomPrice.contractPriceType = $("#second2Pk").val();
    contractRoomPrice.contractProjectName = $(".second").text();
    contractRoomPrice.contractPriceCode = $("#second2HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addSecond2NBaseRoomPrice() {
    encodeSecond2NRoomDealPrice();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#second2NBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second2NBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond2NRoom2Price() {
    encodeSecond2NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType2").text();
    contractRoomPrice.contractPrice = $("#second2NRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second2NRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond2NRoom3Price() {
    encodeSecond2NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType3").text();
    contractRoomPrice.contractPrice = $("#second2NRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second2NRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond2NRoom4Price() {
    encodeSecond2NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType4").text();
    contractRoomPrice.contractPrice = $("#second2NRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second2NRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeSecond2WRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#second2Supplement").val());
    contractRoomPrice.contractPriceType = $("#second2Pk").val();
    contractRoomPrice.contractProjectName = $(".second").text();
    contractRoomPrice.contractPriceCode = $("#second2HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addSecond2WBaseRoomPrice() {
    encodeSecond2WRoomDealPrice();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#second2WBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second2WBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond2WRoom2Price() {
    encodeSecond2WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType2").text();
    contractRoomPrice.contractPrice = $("#second2WRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second2WRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond2WRoom3Price() {
    encodeSecond2WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType3").text();
    contractRoomPrice.contractPrice = $("#second2WRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second2WRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond2WRoom4Price() {
    encodeSecond2WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType4").text();
    contractRoomPrice.contractPrice = $("#second2WRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second2WRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeSecond2DRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#second2Supplement").val());
    contractRoomPrice.contractPriceType = $("#second2Pk").val();
    contractRoomPrice.contractProjectName = $(".second").text();
    contractRoomPrice.contractPriceCode = $("#second2HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addSecond2DBaseRoomPrice() {
    encodeSecond2DRoomDealPrice();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#second2DBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second2DBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond2DRoom2Price() {
    encodeSecond2DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType2").text();
    contractRoomPrice.contractPrice = $("#second2DRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second2DRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond2DRoom3Price() {
    encodeSecond2DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType3").text();
    contractRoomPrice.contractPrice = $("#second2DRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second2DRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond2DRoom4Price() {
    encodeSecond2DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType4").text();
    contractRoomPrice.contractPrice = $("#second2DRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second2DRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeSecond3NRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#second3Supplement").val());
    contractRoomPrice.contractPriceType = $("#second3Pk").val();
    contractRoomPrice.contractProjectName = $(".second").text();
    contractRoomPrice.contractPriceCode = $("#second3HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addSecond3NBaseRoomPrice() {
    encodeSecond3NRoomDealPrice();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#second3NBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second3NBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond3NRoom2Price() {
    encodeSecond3NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType2").text();
    contractRoomPrice.contractPrice = $("#second3NRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second3NRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond3NRoom3Price() {
    encodeSecond3NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType3").text();
    contractRoomPrice.contractPrice = $("#second3NRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second3NRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond3NRoom4Price() {
    encodeSecond3NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType4").text();
    contractRoomPrice.contractPrice = $("#second3NRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second3NRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeSecond3WRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#second3Supplement").val());
    contractRoomPrice.contractPriceType = $("#second3Pk").val();
    contractRoomPrice.contractProjectName = $(".second").text();
    contractRoomPrice.contractPriceCode = $("#second3HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addSecond3WBaseRoomPrice() {
    encodeSecond3WRoomDealPrice();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#second3WBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second3WBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond3WRoom2Price() {
    encodeSecond3WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType2").text();
    contractRoomPrice.contractPrice = $("#second3WRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second3WRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond3WRoom3Price() {
    encodeSecond3WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType3").text();
    contractRoomPrice.contractPrice = $("#second3WRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second3WRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond3WRoom4Price() {
    encodeSecond3WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType4").text();
    contractRoomPrice.contractPrice = $("#second3WRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second3WRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeSecond3DRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#second3Supplement").val());
    contractRoomPrice.contractPriceType = $("#second3Pk").val();
    contractRoomPrice.contractProjectName = $(".second").text();
    contractRoomPrice.contractPriceCode = $("#second3HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addSecond3DBaseRoomPrice() {
    encodeSecond3DRoomDealPrice();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#second3DBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second3DBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond3DRoom2Price() {
    encodeSecond3DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType2").text();
    contractRoomPrice.contractPrice = $("#second3DRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second3DRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond3DRoom3Price() {
    encodeSecond3DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType3").text();
    contractRoomPrice.contractPrice = $("#second3DRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second3DRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond3DRoom4Price() {
    encodeSecond3DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType4").text();
    contractRoomPrice.contractPrice = $("#second3DRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second3DRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeSecond4NRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#second4Supplement").val());
    contractRoomPrice.contractPriceType = $("#second4Pk").val();
    contractRoomPrice.contractProjectName = $(".second").text();
    contractRoomPrice.contractPriceCode = $("#second4HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addSecond4NBaseRoomPrice() {
    encodeSecond4NRoomDealPrice();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#second4NBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second4NBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond4NRoom2Price() {
    encodeSecond4NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType2").text();
    contractRoomPrice.contractPrice = $("#second4NRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second4NRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond4NRoom3Price() {
    encodeSecond4NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType3").text();
    contractRoomPrice.contractPrice = $("#second4NRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second4NRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond4NRoom4Price() {
    encodeSecond4NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType4").text();
    contractRoomPrice.contractPrice = $("#second4NRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second4NRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeSecond4WRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#second4Supplement").val());
    contractRoomPrice.contractPriceType = $("#second4Pk").val();
    contractRoomPrice.contractProjectName = $(".second").text();
    contractRoomPrice.contractPriceCode = $("#second4HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addSecond4WBaseRoomPrice() {
    encodeSecond4WRoomDealPrice();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#second4WBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second4WBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond4WRoom2Price() {
    encodeSecond4WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType2").text();
    contractRoomPrice.contractPrice = $("#second4WRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second4WRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond4WRoom3Price() {
    encodeSecond4WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType3").text();
    contractRoomPrice.contractPrice = $("#second4WRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second4WRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond4WRoom4Price() {
    encodeSecond4WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType4").text();
    contractRoomPrice.contractPrice = $("#second4WRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second4WRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeSecond4DRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#second4Supplement").val());
    contractRoomPrice.contractPriceType = $("#second4Pk").val();
    contractRoomPrice.contractProjectName = $(".second").text();
    contractRoomPrice.contractPriceCode = $("#second4HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addSecond4DBaseRoomPrice() {
    encodeSecond4DRoomDealPrice();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#second4DBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second4DBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond4DRoom2Price() {
    encodeSecond4DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType2").text();
    contractRoomPrice.contractPrice = $("#second4DRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second4DRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond4DRoom3Price() {
    encodeSecond4DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType3").text();
    contractRoomPrice.contractPrice = $("#second4DRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second4DRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addSecond4DRoom4Price() {
    encodeSecond4DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType4").text();
    contractRoomPrice.contractPrice = $("#second4DRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#second4DRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeThird1NRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#third1Supplement").val());
    contractRoomPrice.contractPriceType = $("#third1Pk").val();
    contractRoomPrice.contractProjectName = $(".third").text();
    contractRoomPrice.contractPriceCode = $("#third1HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addThird1NBaseRoomPrice() {
    encodeThird1NRoomDealPrice();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#third1NBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third1NBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addThird1NRoom2Price() {
    encodeThird1NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType2").text();
    contractRoomPrice.contractPrice = $("#third1NRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third1NRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addThird1NRoom3Price() {
    encodeThird1NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType3").text();
    contractRoomPrice.contractPrice = $("#third1NRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third1NRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addThird1NRoom4Price() {
    encodeThird1NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType4").text();
    contractRoomPrice.contractPrice = $("#third1NRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third1NRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeThird1WRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#third1Supplement").val());
    contractRoomPrice.contractPriceType = $("#third1Pk").val();
    contractRoomPrice.contractProjectName = $(".third").text();
    contractRoomPrice.contractPriceCode = $("#third1HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addThird1WBaseRoomPrice() {
    encodeThird1WRoomDealPrice();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#third1WBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third1WBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addThird1WRoom2Price() {
    encodeThird1WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType2").text();
    contractRoomPrice.contractPrice = $("#third1WRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third1WRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addThird1WRoom3Price() {
    encodeThird1WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType3").text();
    contractRoomPrice.contractPrice = $("#third1WRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third1WRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addThird1WRoom4Price() {
    encodeThird1WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType4").text();
    contractRoomPrice.contractPrice = $("#third1WRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third1WRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeThird1DRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#third1Supplement").val());
    contractRoomPrice.contractPriceType = $("#third1Pk").val();
    contractRoomPrice.contractProjectName = $(".third").text();
    contractRoomPrice.contractPriceCode = $("#third1HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addThird1DBaseRoomPrice() {
    encodeThird1DRoomDealPrice();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#third1DBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third1DBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addThird1DRoom2Price() {
    encodeThird1DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType2").text();
    contractRoomPrice.contractPrice = $("#third1DRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third1DRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addThird1DRoom3Price() {
    encodeThird1DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType3").text();
    contractRoomPrice.contractPrice = $("#third1DRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third1DRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addThird1DRoom4Price() {
    encodeThird1DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType4").text();
    contractRoomPrice.contractPrice = $("#third1DRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third1DRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeThird2NRoomDealPrice() {
    
        contractRoomPrice = {};

    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#third2Supplement").val());
    contractRoomPrice.contractPriceType = $("#third2Pk").val();
    contractRoomPrice.contractProjectName = $(".third").text();
    contractRoomPrice.contractPriceCode = $("#third2HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addThird2NBaseRoomPrice() {
    encodeThird2NRoomDealPrice();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#third2NBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third2NBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addThird2NRoom2Price() {
    encodeThird2NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType2").text();
    contractRoomPrice.contractPrice = $("#third2NRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third2NRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addThird2NRoom3Price() {
    encodeThird2NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType3").text();
    contractRoomPrice.contractPrice = $("#third2NRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third2NRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addThird2NRoom4Price() {
    encodeThird2NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType4").text();
    contractRoomPrice.contractPrice = $("#third2NRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third2NRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeThird2WRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#third2Supplement").val());
    contractRoomPrice.contractPriceType = $("#third2Pk").val();
    contractRoomPrice.contractProjectName = $(".third").text();
    contractRoomPrice.contractPriceCode = $("#third2HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addThird2WBaseRoomPrice() {
    encodeThird2WRoomDealPrice();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#third2WBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third2WBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addThird2WRoom2Price() {
    encodeThird2WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType2").text();
    contractRoomPrice.contractPrice = $("#third2WRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third2WRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addThird2WRoom3Price() {
    encodeThird2WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType3").text();
    contractRoomPrice.contractPrice = $("#third2WRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third2WRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addThird2WRoom4Price() {
    encodeThird2WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType4").text();
    contractRoomPrice.contractPrice = $("#third2WRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third2WRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeThird2DRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#third2Supplement").val());
    contractRoomPrice.contractPriceType = $("#third2Pk").val();
    contractRoomPrice.contractProjectName = $(".third").text();
    contractRoomPrice.contractPriceCode = $("#third2HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addThird2DBaseRoomPrice() {
    encodeThird2DRoomDealPrice();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#third2DBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third2DBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addThird2DRoom2Price() {
    encodeThird2DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType2").text();
    contractRoomPrice.contractPrice = $("#third2DRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third2DRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addThird2DRoom3Price() {
    encodeThird2DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType3").text();
    contractRoomPrice.contractPrice = $("#third2DRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third2DRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addThird2DRoom4Price() {
    encodeThird2DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType4").text();
    contractRoomPrice.contractPrice = $("#third2DRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#third2DRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeCore1NRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#core1Supplement").val());
    contractRoomPrice.contractPriceType = $("#core1Pk").val();
    contractRoomPrice.contractProjectName = $(".core").text();
    contractRoomPrice.contractPriceCode = $("#core1HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addCore1NBaseRoomPrice() {
    encodeCore1NRoomDealPrice();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#core1NBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core1NBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addCore1NRoom2Price() {
    encodeCore1NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType2").text();
    contractRoomPrice.contractPrice = $("#core1NRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core1NRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addCore1NRoom3Price() {
    encodeCore1NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType3").text();
    contractRoomPrice.contractPrice = $("#core1NRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core1NRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addCore1NRoom4Price() {
    encodeCore1NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType4").text();
    contractRoomPrice.contractPrice = $("#core1NRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core1NRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeCore1WRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#core1Supplement").val());
    contractRoomPrice.contractPriceType = $("#core1Pk").val();
    contractRoomPrice.contractProjectName = $(".core").text();
    contractRoomPrice.contractPriceCode = $("#core1HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addCore1WBaseRoomPrice() {
    encodeCore1WRoomDealPrice();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#core1WBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core1WBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addCore1WRoom2Price() {
    encodeCore1WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType2").text();
    contractRoomPrice.contractPrice = $("#core1WRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core1WRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addCore1WRoom3Price() {
    encodeCore1WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType3").text();
    contractRoomPrice.contractPrice = $("#core1WRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core1WRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addCore1WRoom4Price() {
    encodeCore1WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType4").text();
    contractRoomPrice.contractPrice = $("#core1WRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core1WRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeCore1DRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#core1Supplement").val());
    contractRoomPrice.contractPriceType = $("#core1Pk").val();
    contractRoomPrice.contractProjectName = $(".core").text();
    contractRoomPrice.contractPriceCode = $("#core1HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addCore1DBaseRoomPrice() {
    encodeCore1DRoomDealPrice();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#core1DBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core1DBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addCore1DRoom2Price() {
    encodeCore1DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType2").text();
    contractRoomPrice.contractPrice = $("#core1DRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core1DRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addCore1DRoom3Price() {
    encodeCore1DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType3").text();
    contractRoomPrice.contractPrice = $("#core1DRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core1DRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addCore1DRoom4Price() {
    encodeCore1DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType4").text();
    contractRoomPrice.contractPrice = $("#core1DRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core1DRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeCore2NRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Npackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#core2Supplement").val());
    contractRoomPrice.contractPriceType = $("#core2Pk").val();
    contractRoomPrice.contractProjectName = $(".core").text();
    contractRoomPrice.contractPriceCode = $("#core2HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addCore2NBaseRoomPrice() {
    encodeCore2NRoomDealPrice();
    contractRoomPrice.roomType = $(".NBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#core2NBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core2NBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addCore2NRoom2Price() {
    encodeCore2NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType2").text();
    contractRoomPrice.contractPrice = $("#core2NRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core2NRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addCore2NRoom3Price() {
    encodeCore2NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType3").text();
    contractRoomPrice.contractPrice = $("#core2NRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core2NRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addCore2NRoom4Price() {
    encodeCore2NRoomDealPrice();
    contractRoomPrice.roomType = $(".NRoomType4").text();
    contractRoomPrice.contractPrice = $("#core2NRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core2NRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeCore2WRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Wpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#core2Supplement").val());
    contractRoomPrice.contractPriceType = $("#core2Pk").val();
    contractRoomPrice.contractProjectName = $(".core").text();
    contractRoomPrice.contractPriceCode = $("#core2HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addCore2WBaseRoomPrice() {
    encodeCore2WRoomDealPrice();
    contractRoomPrice.roomType = $(".WBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#core2WBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core2WBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addCore2WRoom2Price() {
    encodeCore2WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType2").text();
    contractRoomPrice.contractPrice = $("#core2WRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core2WRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addCore2WRoom3Price() {
    encodeCore2WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType3").text();
    contractRoomPrice.contractPrice = $("#core2WRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core2WRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addCore2WRoom4Price() {
    encodeCore2WRoomDealPrice();
    contractRoomPrice.roomType = $(".WRoomType4").text();
    contractRoomPrice.contractPrice = $("#core2WRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core2WRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function encodeCore2DRoomDealPrice() {

        contractRoomPrice = {};

    var pt1 = $("[name=Dpackage]").text();
    pt1 = pt1.replace(/[^\a-\z\A-\Z]/g, "");
    contractRoomPrice.contractPackageCode = pt1;
    var supplement = parseInt($("#core2Supplement").val());
    contractRoomPrice.contractPriceType = $("#core2Pk").val();
    contractRoomPrice.contractProjectName = $(".core").text();
    contractRoomPrice.contractPriceCode = $("#core2HotelCode").val();
    contractRoomPrice.contractCusType = $("#comtype1").text();
    contractRoomPrice.contractSupplements = supplement / 100;

}

function addCore2DBaseRoomPrice() {
    encodeCore2DRoomDealPrice();
    contractRoomPrice.roomType = $(".DBaseRoomType").text();
    contractRoomPrice.contractPrice = $("#core2DBasePrice").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core2DBasePrice").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addCore2DRoom2Price() {
    encodeCore2DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType2").text();
    contractRoomPrice.contractPrice = $("#core2DRoom2Price").val();
    var callback = function(result) {
          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core2DRoom2Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addCore2DRoom3Price() {
    encodeCore2DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType3").text();
    contractRoomPrice.contractPrice = $("#core2DRoom3Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core2DRoom3Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}

function addCore2DRoom4Price() {
    encodeCore2DRoomDealPrice();
    contractRoomPrice.roomType = $(".DRoomType4").text();
    contractRoomPrice.contractPrice = $("#core2DRoom4Price").val();
    var callback = function(result) {

          if(popModal === true)         {             $('#myModal_salerinfo').modal('show');             popModal = false;         }
    };

    if ($("#core2DRoom4Price").val()) {
        var operation = new Operation("酒店.酒店设置.房间价格设置.添加房型协议价格");
        operation.contractRoomPrice = contractRoomPrice;
        operation.execute(callback);
    }
}
