$(document).ready(function() {
    var hotels = [];

    $.getJSON("https://api.myjson.com/bins/nbyr2")
        .done(function(data) {
            $.each(data, function(index, value) {
                hotels.push(value);
            });
        });

    $('.hotel-btn').on('click', function() {
        var id = $(this).attr('data-hotel-id');
        var item = getById(id);
        fillModal(item);
    });

    var getById = function(id) {
        let filteredItems = hotels.filter(a => { if (a.id === id) return a });

        return filteredItems[0];
    }

    var fillModal = function(item) {
        $('.modal').css('display', 'block');
        $('.modal-header h1').text(item.title);

        $('.calculate-price').on('click', function() {
            var nights = $('#nights').val();
            var pickedDate = $('#datepicker').val();
            var getPrice = item.price;
            var totalPrice = getPrice * nights;
            $('#priceBGN').css('display', 'block').text("The total sum would be " + totalPrice + " BGN");
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