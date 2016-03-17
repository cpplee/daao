$(document).ready(function () {
    /*当一个input元素的blur事件被触发后才为该元素的keyup事件和focus事件绑定验证方法，较为美观*/
    $('form input[name="cname"],form input[name="salername"],form input[name="address1"],form input[name="address2"],form input[name="address3"],form input[name="city"],form input[name="province"],form input[name="country"],form input[name="webAddress"],form input[name="comWechat"],form input[name="comAccountCode"],form input[name="comFrequency"],form input[name="keynotes"]').blur(function () {
        inputNotNull(this);
        $(this).keyup(function () {
            inputNotNull(this);
        });
        $(this).focus(function () {
            inputNotNull(this);
        });
    });

    $('form input[name="postal"],form input[name="comFax"],form input[name="comTelphone"]').blur(function () {
        inputNumber(this);
        $(this).keyup(function () {
            inputNumber(this);
        });
        $(this).focus(function () {
            inputNumber(this);
        });
    });

    $('form input[name="comEmail"]').blur(function () {
        inputEmail(this);
        $(this).keyup(function () {
            inputEmail(this);
        });
        $(this).focus(function () {
            inputEmail(this);
        });
    });

    $('form input[name="banquetArrive"],form input[name="banquetDepart"],form input[name="banquetCutoff"]').change(function () {
        inputNotNull(this);
    });

    /*点击提交按钮时触发所有input元素的blur方法，以避免提交错误信息*/
    $('input.form_sub').click(function () {
        $("form :input").trigger("blur");
        $("form :input").trigger("change");
        if ($(".form-group").hasClass("has-error")) {
            return false;
        }
    });
});