/**
 * Created by qichengzong on 2015/4/8.
 */
$import("rpc.js");
$import("html/form.js");

function updatePassword()
{
    var oldPass = $("#oldPass").val();
    var newPass = $("#newPass").val();
    var temPass = $("#temPass").val();
    if(newPass == temPass){
        var operation = new Operation("酒店.通用设置.修改密码");
        operation.oldPass = oldPass;
        operation.newPass = newPass;
        var callBack = function(result)
        {
            if(result.isSuccess == "true"){
                $('#warning').attr("class","hidden");
                $("#myModal_password").modal('show');
            }
            else{

            }
        }
        operation.execute(callBack);
    }
    else
    {
        alert("输入错误");
    }
}