

var dataModule = (function () {

  var publicAPI = {

    hotelsPromise: $.ajax({
      method: 'GET',
      url: '/api/hotels'
    }),

    restaurantsPromise: $.ajax({
      method: 'GET',
      url: '/api/restaurants'
    }),

    dayPostPromise: $.ajax({
      method: 'POST',
      url: '/api/days'
    }),

    dayGetPromise: $.ajax({
      method: 'GET',
      url: '/api/days'
    }),

    activitiesPromise: $.ajax({
      method: 'GET',
      url: '/api/activities'
    })

  };

  return publicAPI;

}());
