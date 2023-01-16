$(document).ready(function () {
console.log($('header button'));
})

$('header button').click(function (){
    $('form').slideDown();
})

$('#btn-cancel').click(function (){
    $('form').slideUp();
})

$('form').on('submit', function(e){
    e.preventDefault();

    const novaImg = $('#adicionarImg').val();
    const novoItem = $('<li style="display:none"></li>');
    $(`<img src="${novaImg}" />`).appendTo(novoItem);
    $(`<div class="overlay-bar">
        <a href="${novaImg}" target="_blank" title="Ver imagem em tamanho real">
            Ver Imagem em tamanho real
        </a>
    </div>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(2000);
    $('#adicionarImg').val('');

})