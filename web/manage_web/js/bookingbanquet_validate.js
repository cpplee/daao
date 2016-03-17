$(document).ready(function () {
    /*当一个input元素的blur事件被触发后才为该元素的keyup事件和focus事件绑定验证方法，较为美观*/
    $('form input[name="banquetContactName"],form input[name="banquetRate"],form input[name="banquetBookType"],form input[name="banquetStatus"],form input[name="banquetResId"],form input[name="BanquetCompanyName"]').blur(function () {
        inputNotNull(this);
        $(this).keyup(function () {
            inputNotNull(this);
        });
        $(this).focus(function () {
            inputNotNull(this);
        });
    });

    $('form input[name="banquetId"]').blur(function () {
        inputNumber(this);
        $(this).keyup(function () {
            inputNumber(this);
        });
        $(this).focus(function () {
            inputNumber(this);
        });
    });

    $('form input[name="banquetArrive"],form input[name="banquetDepart"],form input[name="banquetCutoff"]').change(function () {
        inputNotNull(this);
    });

    /*点击提交按钮时触发所有input元素的blur方法，以避免提交错误信息*/
    $('button').click(function () {
        $("form :input").trigger("blur");
        $("form :input").trigger("change");
        if ($(".form-group").hasClass("has-error")) {
            return false;
        }
    });
});