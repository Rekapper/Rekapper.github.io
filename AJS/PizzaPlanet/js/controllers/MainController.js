app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }];
  $scope.mains = [
    {
      name: 'Cheeze Pizza',
      description: 'Plain and Simple Cheese.',
      price: 14.50
    },
    {
      name: 'Pepperoni Pizza',
      description: 'Plain and Simple Pepperoni.',
      price: 15.70
    },
    {
      name: 'Hawaiian Pizza',
      description: 'Ham and Pineapple Stacked on Cheese.',
      price: 16.90
    }];
    $scope.extras = [
    {
      name: 'French Fries',
      description: 'Simple Cut Fresh Fries.',
      price: 3.85
    },
    {
      name: 'Breadsticks',
      description: 'Plain and Simple Breadsticks.',
      price: 4.00
    },
    {
      name: 'Cheese Sticks',
      description: 'Cheese on Cheese on Bread.',
      price: 5.00
    }];
}]);