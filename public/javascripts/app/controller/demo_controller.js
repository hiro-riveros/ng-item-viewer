/*
===================================
CONTROLLER DEFINITION
===================================
*/
(function() {

  this.app.controller('DemoController', ['$scope', function($scope) {
    /*
    ===================================
    SCOPE DEFINITION
    ===================================
    */
    $scope.collection = [
      {
        id: 0,
        name: 'static-seed',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg',
        images: [
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' }
        ]
      },
      {
        id: 1,
        name: 'static-seed',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg',
        images: [
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' }
        ]
      },
      {
        id: 2,
        name: 'static-seed',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg',
        images: [
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' }
        ]
      },
      {
        id: 3,
        name: 'static-seed',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg',
        images: [
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' }
        ]
      },
      {
        id: 4,
        name: 'static-seed',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg',
        images: [
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' }
        ]
      },
      {
        id: 5,
        name: 'static-seed',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg',
        images: [
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' }
        ]
      },
      {
        id: 6,
        name: 'static-seed',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg',
        images: [
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' }
        ]
      },
      {
        id: 7,
        name: 'static-seed',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg',
        images: [
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' }
        ]
      },
      {
        id: 8,
        name: 'static-seed',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg',
        images: [
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' }
        ]
      },
      {
        id: 9,
        name: 'static-seed',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg',
        images: [
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' }
        ]
      },
      {
        id: 10,
        name: 'static-seed',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg',
        images: [
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' }
        ]
      },
      {
        id: 11,
        name: 'static-seed',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg',
        images: [
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' }
        ]
      },
      {
        id: 12,
        name: 'static-seed',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg',
        images: [
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' },
          { image: 'https://s3-us-west-1.amazonaws.com/prospektas/prospekta_images/images/000/000/001/large/prospektum_22.jpeg' }
        ]
      }
    ];

  }]);

}).call(this);
