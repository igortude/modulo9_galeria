$(document).ready(function () {
console.log($('header button'));
})

$('header button').click(function (){
    $('form').slideDown();
})

$('#btn-cancel').click(function (){
    $('form').slideUp();
})
