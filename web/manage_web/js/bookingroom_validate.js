$(document).ready(function () {
    /*当一个input元素的blur事件被触发后才为该元素的keyup事件和focus事件绑定验证方法，较为美观*/
    $('form input[name="roomcompanyname"],form input[name="roomContactName"],form input[name="roomHouseMthd"],form input[name="roomAvgRate"],form input[name="roomType"],form input[name="roomStatus"],form input[name="roomBookType"],form input[name="roomComm"],form input[name="marketSeg"],form input[name="roomResId"],form input[name="roomComps"]').blur(function () {
        inputNotNull(this);
        $(this).keyup(function () {
            inputNotNull(this);
        });
        $(this).focus(function () {
            inputNotNull(this);
        });
    });

    $('form input[name="roomBookingNum"],form input[name="roomId"],form input[name="roomNum"],form input[name="comContactQq"]').blur(function () {
        inputNumber(this);
        $(this).keyup(function () {
            inputNumber(this);
        });
        $(this).focus(function () {
            inputNumber(this);
        });
    });

    $('form input[name="roomArrive"],form input[name="roomDepart"],form input[name="roomCutoff"]').change(function () {
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