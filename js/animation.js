$(document).ready(function(){

var compose_box = $('.tweet-compose');
var charCount = $('#char-count');
var submit_btn = $('#tweet-submit');

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

//If the user puts in more than 140 characters, the 
//tweet button should be disabled (and re-enabled when 
//there are <= 140 chars).
compose_box.keyup(function(e){
    var text = compose_box.val();
    var arr = text.split('');
    var count = arr.length;

    if (count > 140){
        submit_btn.removeClass("button");
        submit_btn.addClass("button:disabled");
        //submit_btn.css('display', 'none');
    }else if(count <= 140){
        submit_btn.removeClass("button:disabled");
        submit_btn.addClass("button");
    }
    
    charCount.html(140 - count);

    if (charCount.html() <= 10){
        charCount.css('color', 'red');
    }else{
        charCount.css('color', '#999');
    }

});

submit_btn.click(function(){
    var tweetDiv = $('<div class="tweet"></div>');
    var contentDiv = $('<div class="content"></div>');
    var photo = $('<img class="avatar" src="img/alagoon.jpg" />');
    var username = $('<span class="username">@LorenPabst</span>')
    var name = $('.content p').html();
    var fullname = $('<strong class="fullname">Loren Pabst</strong>');
    var p = $('<p class="tweet-text"></p>').text(compose_box.val());
    var newTweet  = compose_box.val();

    $('#stream').prepend(tweetDiv);
    tweetDiv.append(contentDiv);
    contentDiv.append(photo);
    contentDiv.append(fullname);
    contentDiv.append(username);
    contentDiv.append(p);

    compose_box.val('');
});

var tweetActions = $('.tweet-actions');

$('.content').hover(
    function(){
        tweetActions.css('display', 'block');
    },
    function(){
        tweetActions.css('display', 'none');
    }
);

$('.content').click(
    function(){
        $(this).children(6).css('display', 'block');
        $(this).children(7).css('display', 'block');
     }
);













});//End Jquery document.ready