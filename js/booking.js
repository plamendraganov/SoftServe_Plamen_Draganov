$(document).ready(function() {
    let hotels = [];

    $.getJSON("https://api.myjson.com/bins/1fta3e")
        .done(function(data) {
            $.each(data, function(index, value) {
                hotels.push(value);
            });
        });

        let getById = function(id) {
            let filteredItems = hotels.filter(a => { if (a.id === id) return a });

            return filteredItems[0];
        }

    $('.hotel-btn').on('click', function() {
        let id = $(this).attr('data-hotel-id');
        let item = getById(id);
        fillModal(item);
    });

    let fillModal = function(item) {
        $('.modal').css('display', 'block');
        $('.modal-header h1').text(item.title);

        $('.calculate-price').on('click', function() {
            let nights = $('#nights').val();
            let getPrice = item.price;
            let totalPrice = getPrice * nights;
            let pickedDate = $('#datepicker').val().split('/');
            if(pickedDate[0] < 5 || pickedDate[0] > 9){
              totalPrice = totalPrice / 2;
            }
            $('#priceBGN').css('display', 'block').text("The total sum would be: " + totalPrice + " BGN");
        })

    }

    $('.close-btn').on('click', function() {
        $('#priceBGN').css('display', 'block').text("");
        $('.modal').css('display', 'none');
    });
    $(function() {
        $("#datepicker").datepicker();
    });
});
