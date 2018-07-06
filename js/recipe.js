$(document).ready(function(){
    var recipes = [];

    $.getJSON("https://api.myjson.com/bins/z3m2a")
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
        $('.modal-header h1').text(item.title);

        $('.modal .modal-footer h1').text(item.time);
        var arrIngredients = item.ingredients.split(',');
        var arrInstructions = item.instructions.split(',');

        for (let i = 0; i < 1; i++){
          $('.modal .modal-body h2').text("");
          for(let j = 0; j < arrIngredients.length - 1; j++){
            $('.modal .modal-body h2').append('<li>' + arrIngredients[j] + '</li>');
          }
          $('.modal .modal-body h2').append('</br>' + item.instructions);
        }
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
