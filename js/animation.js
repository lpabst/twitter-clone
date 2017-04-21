$(document).ready(function(){

var compose_box = $('.tweet-compose');
var charCount = $('#char-count');

//When the user clicks on the textarea, the textarea should 
//double in size and the character count and Tweet buttons 
//should be revealed.
compose_box.click(function(){
    $('#tweet-controls').css('display', 'block');
    compose_box.css('height', '5em');
});

//As the user types, the character count should decrease.
//When there are 10 or less characters, the character 
//counter should turn red.
compose_box.keypress(function(e){
    var count = charCount.html();

    if (e.which === 8){
        count++;
    }else{
        count--;
    }
    
    charCount.html(count);

    if (charCount.html() <= 10){
        charCount.css('color', 'red');
    }

});







});//End Jquery document.ready