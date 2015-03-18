githubUserSearch.controller('GitUserSearchController', function($scope, $resource, $http) {
  var searchResource = $resource('https://api.github.com/search/users');

  $scope.doSearch = function (){

    $scope.searchResult = searchResource.get({
      access_params: "d1ba947cc408fd93882dd477daffe48284fe1a31", 
      q: $scope.searchTerm,
    }, function(){
      var name = 'https://api.github.com/users/' + $scope.searchTerm;
      $http.get(name).
        success(function(data){
          $scope.individualData = data     
        });
    });

  };

});
