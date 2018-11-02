let restaurantTemplateString = document.getElementById('restaurant-template').innerHTML;
let renderRestaurant = Handlebars.compile(restaurantTemplateString);

let promise = $.ajax({
  type: 'get',
  url: 'https://thejsguy.com/teaching/2018/api/restaurants.json'
});

promise.then(function(restaurantInfo) {
  // console.log(restaurantInfo);
  let renderedRestaurant = renderRestaurant({
    restaurants: restaurantInfo.data
  });

  $('#loading').css("visibility", "hidden");
  
  $('body').append(renderedRestaurant);
}, function(error) {
  console.error(error);
});
