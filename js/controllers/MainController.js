app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
  	{ 
		icon: './img/crunchyroll.png', 
    	title: 'Crunchyroll', 
    	developer: 'Ellation', 
    	price: 0.99,
		link: 'http://www.crunchyroll.com/'
  	}, 
 	{ 
		icon: './img/hulu.png', 
    	title: 'Hulu', 
    	developer: 'Hulu LLC', 
    	price: 2.99,
		link: 'https://www.hulu.com'
  	}, 
 	{ 
		icon: './img/netflix.png', 
    	title: 'Netflix', 
    	developer: ' Netflix', 
    	price: 1.99,
		link: 'https://www.netflix.com/'
  	},  
 	{
		icon: './img/vrv.jpg', 
        title: 'VRV',
        developer: 'Ellation',
        price: 1.99,
		link: 'https://vrv.co/'
    } 
	]
}]);
