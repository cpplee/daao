$(document).ready(function () {

    $('form input[name="cname"]').blur(function () {
        inputNotNull(this);
        $(this).keyup(function () {
            inputNotNull(this);
        });
        $(this).focus(function () {
            inputNotNull(this);
        });
    });
   
    $('form input[name="hotelmanage-account"],form input[name="infoset-account"],form input[name="roombook-account"],form input[name="salercharge-account"],form input[name="meetcharge-account"],form input[name="marketcharge-account"]').blur(function () {
        inputNotNull(this);
        $(this).keyup(function () {
            inputNotNull(this);
        });
        $(this).focus(function () {
            inputNotNull(this);
        });
    });
    
    $('form input[name="telephone"],form input[name="fax"],form input[name="postAs"],form input[name="hotelCode"]').blur(function () {
        inputNumber(this);
        $(this).keyup(function () {
            inputNumber(this);
        });
        $(this).focus(function () {
            inputNumber(this);
        });
    });

    $('form input[name=email]').blur(function () {
        inputEmail(this);
        $(this).keyup(function () {
            inputEmail(this);
        });
        $(this).focus(function () {
            inputEmail(this);
        });
    });

    $('form input[name=ename]').blur(function () {
        inputLetter(this);
        $(this).keyup(function () {
            inputLetter(this);
        });
        $(this).focus(function () {
            inputLetter(this);
        });
    });


    $('form input[name="country"],form input[name="province"],form input[name="city"],form input[name="hotelCounty"],form input[name="region"]').blur(function () {
        inputNotNull(this);
        $(this).keyup(function () {
            inputNotNull(this);
        });
        $(this).focus(function () {
            inputNotNull(this);
        });
    });

    /*��ϵ��ʽ*/
    /*�绰*/
    $('form input[name="setTel"],form input[name="conTel"],form input[name="incTel"],form input[name="micTel"],form input[name="dirTel"],form input[name="manTel"]').blur(function () {
        inputNumber(this);
        $(this).keyup(function () {
            inputNumber(this);
        });
        $(this).focus(function () {
            inputNumber(this);
        });
    });

    /*�ֻ�*/
    $('form input[name="setMobile"],form input[name="conMobile"],form input[name="incMobile"],form input[name="micMobile"],form input[name="dirMobile"],form input[name="manMobile"]').blur(function () {
        inputNumber(this);
        $(this).keyup(function () {
            inputNumber(this);
        });
        $(this).focus(function () {
            inputNumber(this);
        });
    });

    /*QQ*/
    $('form input[name="setQq"],form input[name="conQq"],form input[name="incQq"],form input[name="micQq"],form input[name="dirQq"],form input[name="manQq"]').blur(function () {
        inputNumber(this);
        $(this).keyup(function () {
            inputNumber(this);
        });
        $(this).focus(function () {
            inputNumber(this);
        });
    });

    /*����*/
    $('form input[name="setEmail"],form input[name="conEmail"],form input[name="incEmail"],form input[name="micEmail"],form input[name="dirEmail"],form input[name="manEmail"]').blur(function () {
        inputEmail(this);
        $(this).keyup(function () {
            inputEmail(this);
        });
        $(this).focus(function () {
            inputEmail(this);
        });
    });

    $('form input[name="setName"],form input[name="hotelinfoSeterLoginId"],form input[name="setPosition"],form input[name="setWechat"]').blur(function () {
        inputNotNull(this);
        $(this).keyup(function () {
            inputNotNull(this);
        });
        $(this).focus(function () {
            inputNotNull(this);
        });
    });

    $('form input[name="conName"],form input[name="resercontactLoginId"],form input[name="conPosition"],form input[name="conWechat"]').blur(function () {
        inputNotNull(this);
        $(this).keyup(function () {
            inputNotNull(this);
        });
        $(this).focus(function () {
            inputNotNull(this);
        });
    });

    $('form input[name="incName"],form input[name="salechargerLoginId"],form input[name="incPosition"],form input[name="incWechat"]').blur(function () {
        inputNotNull(this);
        $(this).keyup(function () {
            inputNotNull(this);
        });
        $(this).focus(function () {
            inputNotNull(this);
        });
    });

    $('form input[name="micName"],form input[name="michotelLoginId"],form input[name="micPosition"],form input[name="micWechat"]').blur(function () {
        inputNotNull(this);
        $(this).keyup(function () {
            inputNotNull(this);
        });
        $(this).focus(function () {
            inputNotNull(this);
        });
    });

    $('form input[name="dirName"],form input[name="marketdirLoginId"],form input[name="dirPosition"],form input[name="dirWechat"]').blur(function () {
        inputNotNull(this);
        $(this).keyup(function () {
            inputNotNull(this);
        });
        $(this).focus(function () {
            inputNotNull(this);
        });
    });

    $('form input[name="manName"],form input[name="hotelmanagerLoginId"],form input[name="manPosition"],form input[name="manWechat"]').blur(function () {
        inputNotNull(this);
        $(this).keyup(function () {
            inputNotNull(this);
        });
        $(this).focus(function () {
            inputNotNull(this);
        });
    });


    /*������Ϣ*/
    $('form input[name="type"]').blur(function () {
        inputNotNull(this);
        $(this).keyup(function () {
            inputNotNull(this);
        });
        $(this).focus(function () {
            inputNotNull(this);
        });
    });

    /*�����Ϣ*/
    $('form input[name="banCode"]').blur(function () {
        inputNumber(this);
        $(this).keyup(function () {
            inputNumber(this);
        });
        $(this).focus(function () {
            inputNumber(this);
        });
    });

    $('form input[name="banName"],form input[name="banLocation"],form input[name="banSize"],form input[name="banDimension"],form input[name="banContain"]').blur(function () {
        inputNotNull(this);
        $(this).keyup(function () {
            inputNotNull(this);
        });
        $(this).focus(function () {
            inputNotNull(this);
        });
    });

    /*������Ϣ*/
    $('form input[name="rbaRbCode"],form input[name="rbaPrice"],form input[name="rbaBox"]').blur(function () {
        inputNumber(this);
        $(this).keyup(function () {
            inputNumber(this);
        });
        $(this).focus(function () {
            inputNumber(this);
        });
    });

    $('form input[name="rbaLocation"]').blur(function () {
        inputNotNull(this);
        $(this).keyup(function () {
            inputNotNull(this);
        });
        $(this).focus(function () {
            inputNotNull(this);
        });
    });

    /*ר�ŵ����*/
    $('form input[name="storeCode"]').blur(function () {
        inputNumber(this);
        $(this).keyup(function () {
            inputNumber(this);
        });
        $(this).focus(function () {
            inputNumber(this);
        });
    });

    $('form input[name="storeName"],form input[name="storeLocation"]').blur(function () {
        inputNotNull(this);
        $(this).keyup(function () {
            inputNotNull(this);
        });
        $(this).focus(function () {
            inputNotNull(this);
        });
    });
});

