
function alertLevel(kind){
    if(kind == 1) {
        if ($(".form1 input.validate").hasClass("error")) return;
        calculatLevel(calculateTotalScore3(), kind);
        updateComAccountType();
        addTalentAnalysis();
    }
}

function calculatLevel(totalScore,kind){
    if(kind == 1) {

        if (totalScore <= 27) {
            alert('潜在客户');
        }
        if (totalScore > 27 && totalScore <= 38) {
            alert('潜力客户');
        }
        if(totalScore > 38 &&totalScore <= 49){
        	alert('忠实客户');
        }
        if(totalScore > 50){
            alert('核心客户');
        }
    }
   
}

function calculateTotalScore3(){
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
    $('#TotalScore3').val(totalScore);
    return totalScore;
}
