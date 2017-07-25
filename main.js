//Welcoming anuglar with pre buit function
//foodapp is the variable name
// each of super power is called module(eg..ngRoute)
var foodapp = angular.module('foodapp',['ngRoute']);//where array can be used in future for more super powers to our app

// Adding Routes to our websites
// Every URL tells which view to show
foodapp.config(function($routeProvider){
  // routeProvider is object used to setup routes or URL
  //routeProvider has function called 'when' which takes two parameter, one is url and second is object
  $routeProvider
  .when('/',{
    templateUrl: 'pages/login.html',
    controller:'loginController'
  })
  .when('/home',{
    templateUrl:'pages/main.html',
    controller:'mainController'
  })

})
//Creating controller for each specific function just like hod for each department
foodapp.controller('mainController',function($scope){
//Here scope is model(MVC) which stores and handles the data

// $scope.restaurants = ['Farzi Cafe','Pizza Hut','Wenger\'s Delhi','Sagar Ratna'];

// Making array of objects
$scope.restaurants = [{
	name: 'The Great Indian Pub',
	address: '138/345, Rajpur Road, Jakhan, Dehradun',
	location: 'Jakhan',
	category: 'Casual Dining, Bar',
	vote: '4.3',
	cuisines: 'North Indian',
	cost: '1500',
	hours: '12 Noon to 11 PM (Mon-Fri)',
	image: 'https://www.foodnreview.com/wp-content/uploads/2017/02/index.jpg',
    },
    {
      name: 'Orchard',
      address: '3 D, Dak Patti, Near Mdda Park',
      location: 'Rajpur',
      category: 'Casual Dining',
      vote: '4.5',
      cuisines: 'Chinese, Tibetan, Thai',
      cost: '800',
      hours:'12:30 PM to 10 PM (Mon, Wed, Thu, Fri, Sat, Sun)',
      image: 'https://b.zmtcdn.com/data/pictures/8/3500078/e38a0308f2567dcb89113c66eb0b58ce_featured_v2.jpg',
    },
    {
      name: 'Barbeque Nation',
      address: 'Chaudhary Plaza, Rajpur Road, Rajpur, Dehradun',
      location: 'Rajpur',
      category: 'Casual Dining',
      vote: '4.3',
      cuisines: 'North Indian, Mediterranean, Asian, Chinese',
      cost: '1600',
      hours:'12 Noon to 3 PM, 6:30 PM to 11 PM (Mon-Sun)',
      image: 'http://www.barbeque-nation.com/storage/app/media/news/images/Casual_dining.png',
    },
    {
      name: 'Jalapenos',
      address: 'Mussourie Diversion, Pacific Hills,Rajpur Road, Rajpur, Dehradun',
      location: 'Rajpur',
      category: 'Cafe',
      vote: '4.4',
      cuisines: 'Cafe, Mexican',
      cost: '500',
      hours:'11 AM to 11 PM (Mon-Sun)',
      image: 'https://i1.wp.com/www.iloveuttarakhand.com/wp-content/uploads/2017/03/Screenshot_9-8.png?fit=388%2C542',
    }
]

})

// Creating controller for login
foodapp.controller('loginController',function($scope){
})
