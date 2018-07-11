$(document).ready(function(){

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

      $('.get-location').on('click', function(){
        let id = $(this).attr('data-hotel-id');
        let item = getById(id);
          fillModal();
          myMap(item);
      });


    var fillModal = function() {
        $('.modal-location').css('display', 'block');
    }

      let myMap = function(item) {
      let myCenter = new google.maps.LatLng(item.latitude, item.longitude);
      let mapCanvas = document.getElementById("map");
      let mapOptions = {center: myCenter, zoom: 5};
      let map = new google.maps.Map(mapCanvas, mapOptions);
      let marker = new google.maps.Marker({position:myCenter});
      marker.setMap(map);
    }

    $('.close-location').on('click', function() {
        $('.modal-location').css('display', 'none');
    });





});
