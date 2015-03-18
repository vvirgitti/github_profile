githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {

  var searchResource = $resource('https://api.github.com/search/users?access_token=d1ba947cc408fd93882dd477daffe48284fe1a31');

  $scope.doSearch = function (){
    $scope.searchResult = searchResource.get({
      q: $scope.searchTerm
    });
  };
});
