/**
 * Created by qichengzong on 2015/4/5.
 */
function alertLevel(kind){
    if(kind == 1) {
        if ($(".form1 input.validate").hasClass("error")) return;
        calculatLevel(calculateTotalScore1(), kind);
    }
    else
    {
        if ($(".form2 input.validate").hasClass("error")) return;
        calculatLevel(calculateTotalScore2(),kind);
    }
}

function calculatLevel(totalScore,kind){
    if(kind == 1) {
        if (totalScore <= 27) {
            $('#myModal_Stop').modal('show');
        }
        else if (totalScore > 27 && totalScore <= 49) {
            $('#myModal_Prospect').modal('show');
        }
        else {
            $('#myModal_Key_Prospect').modal('show');
        }
    }
    else
    {
        if (totalScore <= 23) {
            $('#myModal_Stop').modal('show');;
        }
        else if (totalScore > 24 && totalScore <= 44) {
            $('#myModal_Prospect').modal('show');
        }
        else {
            $('#myModal_Key_Prospect').modal('show');
        }
    }
}
function calculateTotalScore1(){
    var totalScore = $('#PotentialRoomNights').val() * 3;
    totalScore += $('#RateTolerance').val() * 3;
    totalScore += $('#CompanyProfile').val() * 1;
    totalScore += $('#UsersProfile').val() * 2;
    totalScore += $('#AvgLengthofStay').val() * 3;
    totalScore += $('#RoomMix').val() * 1;
    totalScore += $('#BusinessMix').val() * 3;
    totalScore += $('#WillingnesstoTryOurHotel').val() * 2;
    totalScore += $('#AbilitytoFulfillClientRequirements').val() * 2;
    totalScore += $('#TermContract').val() * 1;
    totalScore += $('#LocationofOffice').val() * 1;
    totalScore += $('#PaymentTerms').val() * 1;
    $('#TotalScore1').val(totalScore);
    return totalScore;
}

function calculateTotalScore2(){
    var totalScore = $('#Commitment').val() * 3;
    totalScore += $('#Seasonality').val() * 2;
    totalScore += $('#Rate').val() * 3;
    totalScore += $('#Credit_terms').val() * 2;
    totalScore += $('#Business_mix').val() * 3;
    totalScore += $('#Contact_level').val() * 1;
    totalScore += $('#Company_profile').val() * 2;
    totalScore += $('#Market_share').val() * 2;
    totalScore += $('#Joint_mktg_promo').val() * 1;
    totalScore += $('#Source_of_pax').val() * 1;
    $('#TotalScore2').val(totalScore);
    return totalScore;
}

