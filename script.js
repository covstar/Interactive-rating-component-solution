// input function for button one
$(".one").click(function(){
 $(".value").html(1);
});

// input function for button two
$(".two").click(function(){
 $(".value").text(2);
});

// input function for button three
$(".three").click(function(){
 $(".value").text(3);
});

// input function for button four
$(".four").click(function(){
 $(".value").text(4);
});

// input function for button five
$(".five").click(function(){
 $(".value").text(5);
});

// function declaration when submit button is clicked
$(".submitButton").click(function(){
    if ($(".value").text() == ""){
       $(".thank-you").hide();
    $(".rating").show(); 
    }
    else{
        $(".thank-you").show();
    $(".rating").hide();
    }
    
    
})