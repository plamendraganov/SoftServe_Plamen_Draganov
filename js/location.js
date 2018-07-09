$(document).ready(function(){

  var hotels = [];

  $.getJSON("https://api.myjson.com/bins/1fta3e")
      .done(function(data) {
          $.each(data, function(index, value) {
              hotels.push(value);
          });
      });

      var getById = function(id) {
          let filteredItems = hotels.filter(a => { if (a.id === id) return a });

          return filteredItems[0];
      }

      $('.get-location').on('click', function(){
        var id = $(this).attr('data-hotel-id');
        var item = getById(id);
          fillModal();
          myMap(item);
      });


    var fillModal = function() {
        $('.modal-location').css('display', 'block');
    }

      var myMap = function(item) {
      var myCenter = new google.maps.LatLng(item.latitude, item.longitude);
      var mapCanvas = document.getElementById("map");
      var mapOptions = {center: myCenter, zoom: 5};
      var map = new google.maps.Map(mapCanvas, mapOptions);
      var marker = new google.maps.Marker({position:myCenter});
      marker.setMap(map);
    }

    $('.close-location').on('click', function() {
        $('.modal-location').css('display', 'none');
    });





});
