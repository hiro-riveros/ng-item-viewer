/*
==============================================================================

==============================================================================
*/

(function() {

  this.app.directive('ngItemViewer', function() {

    var template = '<div class="col-md-12" id="modal-full">'
                 + '  <div class="row">'
                 + '    <div ng-repeat="item in collection">'
                 + '      <div class="col-sm-6 col-md-4">'
                 + '        <div class="thumbnail">'
                 + '          <div class="caption">'
                 + '            <img ng-src="{{item.image}}" alt="..." class="img-responsive">'
                 + '            <h3>{{item.name}}</h3>'
                 + '            <p>{{item.description}}</p>'
                 + '            <p>'
                 + '              <a href="#" class="btn btn-primary btn-sm btn-block" role="button" ng-click="lunchItemViewer(item, true)">Información</a>'
                 + '            </p>'
                 + '          </div>'
                 + '        </div>'
                 + '      </div>'
                 + '    </div>'
                 + '  </div>'
                 + '</div>';
    return {
      restrict: 'E',
      controller: 'NgItemViewerController',
      template: template,
      link: function (scope, element, attrs, controller) {

      }
    };
  })
  .controller('NgItemViewerController', ['$scope', '$compile', function($scope, $compile) {
    $scope.isActiveItemViewer = false;
    $scope.lunchItemViewer = function(item) {
      $scope.isActiveItemViewer = true;
      $('#modal-full-container').remove();
      debugger;
      var template = '  <div class="row modal-full-container">'
                   + '    <div class="col-md-6 col-sm-6">'
                   + '      <flex-slider slide="item in item.images" class="carousel" animation="slide" animation-loop="false" item-width="300" item-margin="5"> '
                   + '         <li>'
                   + '           <img ng-src="{{item.image}}" class="img-responsive">'
                   + '        </li>'
                   + '      </flex-slider>'
                   + '    </div>'
                   + '    <div class="col-md-6 col-sm-6">'
                   + '    </div>'
                   + '  </div>';

      $('#modal-full').append($compile(template)($scope));
    };

  }]);



}).call(this);
