app.controller('CalculatorController', function($scope) {
            $scope.result = function() {
				
				$scope.a = parseInt($scope.a, 10);
				$scope.b = parseInt($scope.b, 10);
				
                if ($scope.operator == '+') {
                    return $scope.a + $scope.b;
                }
                if ($scope.operator == '-') {
                    return $scope.a - $scope.b;
                }
                if ($scope.operator == '*') {
                    return $scope.a * $scope.b;
                }
                if ($scope.operator == '/') {
                    return $scope.a / $scope.b;
                }
            };
        });