$(document).ready(function(){
    var recipes = [];

    $.getJSON( "https://api.myjson.com/bins/di6v4")
        .done(function(data){
            $.each(data, function (index, value) {
                recipes.push(value);
            });
    });

    var getById = function(id) {
        let filteredItems = recipes.filter(a => {if (a.id === id) return a});

        return filteredItems[0]; // понеже филтър функцията винаги връща редица, така взимаме единственият й елемент
                               // ако данните са грешни и има дублиращи се id-та се застраховаме от грешки
    }

    var fillModal = function(item) {
        $('.modal').css('display', 'block');
        $('.modal h2').text(item.title);
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
