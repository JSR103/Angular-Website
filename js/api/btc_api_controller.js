app.controller('bitconapi', function($scope, $http) {
    $http.get('https://blockchain.info/ticker').
        then(function(response) {
            $scope.data = response.data;
    });
});