$(document).ready(function(){
    var recipes = [];

    $.getJSON("https://api.myjson.com/bins/118k4i")
        .done(function(data){
            $.each(data, function (index, value) {
                recipes.push(value);
            });
    });

    var getById = function(id) {
        let filteredItems = recipes.filter(a => {if (a.id === id) return a});

        return filteredItems[0];
    }

    var fillModal = function(item) {
        $('.modal').css('display', 'block');
        $('.modal h2').text(item.ingredients).append('<br>' + item.instructions);
    }

    $('.recipe-btn').on('click', function(){
        let id = $(this).attr('data-recipe-id');
        let item = getById(id);
        fillModal(item);
    });

    $('.close-btn').on('click', function(){
        $('.modal').css('display', 'none');
    });

});
