$(document).ready(function () {
    /*当一个input元素的blur事件被触发后才为该元素的keyup事件和focus事件绑定验证方法，较为美观*/
    $('form input#oldPass,form input#newPass').blur(function () {
        inputNotNull(this);
        $(this).keyup(function () {
            inputNotNull(this);
        });
        $(this).focus(function () {
            inputNotNull(this);
        });
    });

    $('form input#oldPass,form input#newPass').blur(function () {
        inputNotNull(this);
        $(this).keyup(function () {
            inputNotNull(this);
        });
        $(this).focus(function () {
            inputNotNull(this);
        });
    });

    $('form input#temPass').blur(function (){
        if ($('form input#temPass').val() == "" || $('form input#temPass').val() != $('form input#newPass').val()) {
            $(this).parents("div.form-group").children("span.tip").remove();
            $(this).parents("div.form-group").append("<span class='glyphicon glyphicon-remove form-control-feedback tip'></span>")
                .append("<span class='tip' style = 'margin-left:30%;color:red;'><strong>输入的密码不一致</strong></span>")
                .removeClass("has-success has-error has-feedback")
                .addClass("has-error has-feedback");
        }
        else {
            $(this).parents("div.form-group").children("span.tip").remove();
            $(this).parents("div.form-group").append("<span class='glyphicon glyphicon-ok form-control-feedback tip'></span>")
                .removeClass("has-success has-error has-feedback")
                .addClass("has-success has-feedback");
        }

        $('form input#temPass').keyup(function (){
            if ($('form input#temPass').val() == "" || $('form input#temPass').val() != $('form input#newPass').val()) {
                $(this).parents("div.form-group").children("span.tip").remove();
                $(this).parents("div.form-group").append("<span class='glyphicon glyphicon-remove form-control-feedback tip'></span>")
                    .append("<span class='tip' style = 'margin-left:30%;color:red;'><strong>输入的密码不一致</strong></span>")
                    .removeClass("has-success has-error has-feedback")
                    .addClass("has-error has-feedback");
            }
            else {
                $(this).parents("div.form-group").children("span.tip").remove();
                $(this).parents("div.form-group").append("<span class='glyphicon glyphicon-ok form-control-feedback tip'></span>")
                    .removeClass("has-success has-error has-feedback")
                    .addClass("has-success has-feedback");
            }
        });

        $('form input#temPass').focus(function (){
            if ($('form input#temPass').val() == "" || $('form input#temPass').val() != $('form input#newPass').val()){
                $(this).parents("div.form-group").children("span.tip").remove();
                $(this).parents("div.form-group").append("<span class='glyphicon glyphicon-remove form-control-feedback tip'></span>")
                    .append("<span class='tip' style = 'margin-left:30%;color:red;'><strong>输入的密码不一致</strong></span>")
                    .removeClass("has-success has-error has-feedback")
                    .addClass("has-error has-feedback");
            }
            else {
                $(this).parents("div.form-group").children("span.tip").remove();
                $(this).parents("div.form-group").append("<span class='glyphicon glyphicon-ok form-control-feedback tip'></span>")
                    .removeClass("has-success has-error has-feedback")
                    .addClass("has-success has-feedback");
            }
        });
    });

    $('button.btn-success').click(function () {
        $("form :input").trigger("blur");
        if ($(".form-group").hasClass("has-error")) {
            return false;
        }
    });
});