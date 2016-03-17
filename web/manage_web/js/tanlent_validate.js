$(document).ready(function () {
    /*当一个input元素的blur事件被触发后才为该元素的keyup事件和focus事件绑定验证方法，较为美观*/
    $('input.validate').blur(function () {
        if ($(this).val() != "" && (!/^[1-3]$/.test($(this).val()))) {
            $(this).removeClass("success error")
                .addClass("error");
        }
        else {
            $(this).removeClass("success error");
        }
    });

    $('input.validate').keyup(function () {
        if ($(this).val() != "" && (!/^[1-3]$/.test($(this).val()))) {
            $(this).removeClass("success error")
                .addClass("error");
        }
        else {
            $(this).removeClass("success error");
        }
    });

    $('button#tanlent_analysis_submit').click(function () {
        $("input.validate").trigger("blur");
        if ($("input.validate").hasClass("error")) {
            return false;
        }
    });
});
