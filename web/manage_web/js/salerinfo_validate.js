$(document).ready(function () {
    /*当一个input元素的blur事件被触发后才为该元素的keyup事件和focus事件绑定验证方法，较为美观*/
    $('form input[name="name"],form input[name="officePhone"]').blur(function () {
        inputNotNull(this);
        $(this).keyup(function () {
            inputNotNull(this);
        });
        $(this).focus(function () {
            inputNotNull(this);
        });
    });

    $('form input[name="mobilePhone"],form input[name="fax"]').blur(function () {
        inputNumber(this);
        $(this).keyup(function () {
            inputNumber(this);
        });
        $(this).focus(function () {
            inputNumber(this);
        });
    });

    $('form input[name="email"]').blur(function () {
        inputEmail(this);
        $(this).keyup(function () {
            inputEmail(this);
        });
        $(this).focus(function () {
            inputEmail(this);
        });
    });

    /*点击提交按钮时触发所有input元素的blur方法，以避免提交错误信息*/
    $('button#tijiao_button').click(function () {
        $("form :input").trigger("blur");
        /*验证radio是否被选中*/
        if($("input:radio").is(":checked")==false){
            $("input:radio").parents("div.radio").removeClass("has-success has-error")
                .addClass("has-error");
        }
        if ($(".form-group,.radio").hasClass("has-error")) {
            return false;
        }
    });
});

