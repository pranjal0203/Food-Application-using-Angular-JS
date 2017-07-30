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
  .when('/',{   //By default this will open( / (slash) means root)
    templateUrl: 'pages/login.html',
    controller:'loginController'
  })
  .when('/home',{
    templateUrl:'pages/home.html',
    controller:'mainController'
  })
  //id is route parameter and id can take any random value
  .when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
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
  id:'1',
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
      bestDish: {
                  name:'Chinese Noodles',
                  image:'https://www.gimmesomeoven.com/wp-content/uploads/2009/10/sesame-noodles.jpg'
                },
      vote: '4.5',
      id:'2',
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
      id:'4',
      vote: '4.3',
      cuisines: 'North Indian, Mediterranean, Asian, Chinese',
      bestDish: {
                    name: 'Tandoori Chicken',
                    image: 'https://i.ytimg.com/vi/-CKvt1KNU74/maxresdefault.jpg'
                },
      cost: '1600',
      hours:'12 Noon to 3 PM, 6:30 PM to 11 PM (Mon-Sun)',
      image: 'http://www.barbeque-nation.com/storage/app/media/news/images/Casual_dining.png',
    },
    {
      name: 'Jalapenos',
      address: 'Mussourie Diversion, Pacific Hills,Rajpur Road, Rajpur, Dehradun',
      location: 'Rajpur',
      category: 'Cafe',
      id:'4',
      vote: '4.4',
      cuisines: 'Cafe, Mexican',
      bestDish: {
                name: 'Corn Pizza',
                image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
              },
      cost: '500',
      hours:'11 AM to 11 PM (Mon-Sun)',
      image: 'https://i1.wp.com/www.iloveuttarakhand.com/wp-content/uploads/2017/03/Screenshot_9-8.png?fit=388%2C542',
    }
]

})

// Creating controller for login
foodapp.controller('loginController',function($scope,$location){

      //goToHome is property of object $scope of angularjs and it can contain function too just like array and other variables
      $scope.goToHome = function() {
        //location is another property of angularjs
    		$location.url('home')
    	}
})

//Creating controller for restaurant
foodapp.controller('restaurantController',function($scope,$routeParams,$http) {
  //Array containing protein rich foods
  var protein = ['meat','chicken','pork','beaf','fish'];
  //Array containing carbs rich foods
  var carbs = ['potato','beans','vegetable','wheat','noodle','carbohydrate'];
  //Array containing fat rich foods
  var fat = ['cheese','oil'];

	$scope.restaurantId = $routeParams.id;
	var restaurants = [{
            	name: 'The Great Indian Pub',
            	address: '138/345, Rajpur Road, Jakhan, Dehradun',
            	location: 'Jakhan',
            	category: 'Casual Dining, Bar',
            	vote: '4.3',
            	cuisines: 'North Indian',
              id:'1',
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
                  id:'2',
                  cost: '800',
                  bestDish: {
                              name:'Chinese Noodles',
                              image:'https://www.gimmesomeoven.com/wp-content/uploads/2009/10/sesame-noodles.jpg'
                            },
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
                  id:'3',
                  bestDish: {
                                name: 'Tandoori Chicken',
                                image: 'https://i.ytimg.com/vi/-CKvt1KNU74/maxresdefault.jpg'
                            },
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
                  bestDish: {
                          	name: 'Corn Pizza',
                          	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
                          },
                  id:'4',
                  cost: '500',
                  hours:'11 AM to 11 PM (Mon-Sun)',
                  image: 'https://i1.wp.com/www.iloveuttarakhand.com/wp-content/uploads/2017/03/Screenshot_9-8.png?fit=388%2C542',
                }
            ]
	$scope.restaurant = restaurants[$routeParams.id - 1];
  $scope.ingredients = [];
  var ing=[];
  var val=[];
  //Function for getting ingredients
  $scope.getIngredients = function(url) {
                      //Ajax call
                      var data = '{"inputs":[{"data":{"image":{"url":"' + url +'"}}}]}'
                      $http({
                      'method': 'POST', //Sending some information
                      'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
                      'headers': { //used for extra information to be given
                      'Authorization': 'Key a3eaf7b9faca4b2386e90a436c1c7fd7', //api Key
                      'Content-Type': 'application/json' //format of data
                    },
                        'data': data, //image url
                    }).then(function (response) {
                              var list = response.data.outputs[0].data.concepts;
                              for (var i =0;i < list.length ;i++) {
                                $scope.ingredients.push(list[i].name);
                                ing.push(list[i].name);
                                val.push(list[i].value);
                              }
                            },function (xhr) {
                                console.log(xhr);
                              })
                                  setTimeout(function(){ //Setting time because clarifai takes some time to display list of items
                                      $(".button").removeClass("hidden"); //Enabling button to check for protein carbs and fat
                                  },1700);
                  };

$scope.isItHealthy = function(){
  //Checking wheather food is high in protein,fat or carbs
                $scope.foodRichIn;
                var flag = 0;
                  for(var j=0;j < ing.length ; j++){

                    for(var k=0;k<protein.length;k++){
                      if(ing[j] == protein[k]){
                          if(val[j] * 100 > 75){
                            $scope.foodRichIn = "Food rich in protein";
                            flag=1;
                            break;
                          }
                      }
                    }
                    if(flag == 1)
                      break;
                  }
                  //Checking for carbs
                  if(flag!=1){

                          for(var j=0;j < ing.length ; j++){

                            for(var k=0;k<carbs.length;k++){
                              if(ing[j] == carbs[k]){
                                if(val[j] * 100 > 75){
                                  $scope.foodRichIn = "Food rich in carbs";
                                  flag=1;
                                  break;
                                }
                              }
                            }
                            if(flag == 1)
                              break;
                          }
                  }

                  //Checking for fat
                  if(flag!=1){

                      for(var j=0;j <ing.length ; j++){

                        for(var k=0;k<fat.length;k++){
                          if(ing[j] == fat[k]){
                            if(val[j]* 100 > 75){
                              $scope.foodRichIn = "Food rich in fat";
                              flag=1;
                              break;
                            }
                          }
                        }
                        if(flag == 1)
                          break;
                      }
                  }

                  if(flag == 0){
                    $scope.foodRichIn = "No Protein carbs and fat";
                  }

}

  })
