angular
  .module('savor.review',['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'ngDialog'])
  .controller('reviewController', function($scope, $http, ngDialog) {
      
    // $scope.restaurant = {
    //   name: '',
    //   address: '',
    // }
    
    // $scope.price = '';
    // $scope.priceCategories = [{rating:1, text: "Expensive"}, {rating: 2, text: "Affordable"}, {rating: 3, text: "Cheap!" }];
    
    // $scope.service = '';
    // $scope.serviceCategories = [{rating:1, text: "It was OK"}, {rating: 2, text: "Good!"}, {rating: 3, text: "Phenomenal!" }];
    
    // $scope.food = '';
    // $scope.foodCategories = [{rating:1, text: "Decent"}, {rating: 2, text: "Yummy!"}, {rating: 3, text: "Transcendental" }];
    
    // $scope.ambience = '';
    // $scope.ambienceCategories = [{rating:1, text: "Not a priority"}, {rating: 2, text: "Welcoming"}, {rating: 3, text: "Something special" }];
    
    
    $scope.sendPost = function () {

        var data = ({
            restaurantName: $scope.restaurant.name,
            restaurantAddress: $scope.restaurant.address,
            priceRating: $scope.price,
            serviceRating: $scope.service,
            foodRating: $scope.food,
            ambianceRating: $scope.ambiance,
            restaurantReview: $scope.restaurant.review,
            userEmail: JSON.parse(window.localStorage.profile).email
        });
        console.log("data", data);
        //console.log("user", JSON.parse(window.localStorage.profile).email);
        
    
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        
        $http({
          method: "POST",
          data: data,
          url: '/api/restaurants'
        })

        ngDialog.close();
        

        
      };
    
  });
  
