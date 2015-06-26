app.directive('post', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/feedsterPost.html' 
  }; 
});