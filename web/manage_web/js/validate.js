/*传入一个input元素，判断该input元素是否为空，并动态改变该input元素所在的form-group类的样式*/

function inputNotNull(input) {
    if (input.value == "") {
        $(input).parents("div.form-group").children("span.tip").remove();
        $(input).parents("div.form-group").append("<span class='glyphicon glyphicon-remove form-control-feedback tip'></span>")
            .removeClass("has-success has-error has-feedback")
            .addClass("has-error has-feedback");
    }
    else {
        $(input).parents("div.form-group").children("span.tip").remove();
        $(input).parents("div.form-group").append("<span class='glyphicon glyphicon-ok form-control-feedback tip'></span>")
            .removeClass("has-success has-error has-feedback")
            .addClass("has-success has-feedback");
    }
}
/*传入一个input元素，判断该input元素是否为邮箱地址，并动态改变该input元素所在的form-group类的样式*/
function inputEmail(input) {
    if (input.value == "" || (input.value != "" && !/^.+@.+\.[a-zA-Z]{2,4}$/.test(input.value))) {
        $(input).parents("div.form-group").children("span.tip").remove();
        $(input).parents("div.form-group").append("<span class='glyphicon glyphicon-remove form-control-feedback tip'></span>")
            .removeClass("has-success has-error has-feedback")
            .addClass("has-error has-feedback");
    }
    else {
        $(input).parents("div.form-group").children("span.tip").remove();
        $(input).parents("div.form-group").append("<span class='glyphicon glyphicon-ok form-control-feedback tip'></span>")
            .removeClass("has-success has-error has-feedback")
            .addClass("has-success has-feedback");
    }
}
/*传入一个input元素，判断该input元素是否为数字，并动态改变该input元素所在的form-group类的样式*/
function inputNumber(input) {
    if (input.value == "" || (input.value != "" && !/^[0-9]+$/.test(input.value))) {
        $(input).parents("div.form-group").children("span.tip").remove();
        $(input).parents("div.form-group").append("<span class='glyphicon glyphicon-remove form-control-feedback tip'></span>")
            .removeClass("has-success has-error has-feedback")
            .addClass("has-error has-feedback");
    }
    else {
        $(input).parents("div.form-group").children("span.tip").remove();
        $(input).parents("div.form-group").append("<span class='glyphicon glyphicon-ok form-control-feedback tip'></span>")
            .removeClass("has-success has-error has-feedback")
            .addClass("has-success has-feedback");
    }
}

/*传入一个input元素，判断该input元素是否为字母，并动态改变该input元素所在的form-group类的样式*/
function inputLetter(input) {
    if (input.value == "" || (input.value != "" && !/^([A-Za-z]|\s)+$/.test(input.value))) {
        $(input).parents("div.form-group").children("span.tip").remove();
        $(input).parents("div.form-group").append("<span class='glyphicon glyphicon-remove form-control-feedback tip'></span>")
            .removeClass("has-success has-error has-feedback")
            .addClass("has-error has-feedback");
    }
    else {
        $(input).parents("div.form-group").children("span.tip").remove();
        $(input).parents("div.form-group").append("<span class='glyphicon glyphicon-ok form-control-feedback tip'></span>")
            .removeClass("has-success has-error has-feedback")
            .addClass("has-success has-feedback");
    }
}

