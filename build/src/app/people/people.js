/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'crm.people', [
  'ui.state',
  'itemlist'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'people', {
    url: '/people',
    views: {
      "main": {
        controller: 'PeopleCtrl',
        templateUrl: 'people/people.tpl.html'
      }
    },
    data:{ pageTitle: 'People' }
  });
  
  $stateProvider.state( 'people.person', {
    url: '/:id',
    controller: function($scope, $state, $stateParams, $location, Data){
        $scope.person = $stateParams.id;
    },
    templateUrl: 'people/person.tpl.html',
    data:{ pageTitle: 'Person' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'PeopleCtrl', function PeopleController( $scope, $state, $location, Data ) {
    
    $scope.data = Data;
    
    $scope.selected = null;
    
    $scope.location = $location;
    $scope.$watch('location.path()', function(locationPath, old) {
        var pathId = locationPath.split("/")[2];
        if(typeof pathId === 'undefined') {
            $scope.selected = null;
        } else if($scope.selected != pathId) {
            $scope.selected = pathId;
        }
    });
    $scope.$watch('selected', function(newVal, oldVal){
        console.log(newVal);
        if(newVal === null) {
            $state.transitionTo('people');
        } else {
            $state.transitionTo('people.person', {id:newVal});
        }
    });
    
    angular.forEach($scope.data.people, function(value, key) {
        value.fullname = value.surname + ' ' + value.familyname;
    });
})

.factory('Data', function(){
    var data = {};
    
    data.columns = [
        {
            name: "fullname",
            label: "Name",
            primary: true
        },
        {
            name: "surname",
            label: "Surname"
        },
        {
            name: "familyname",
            label: "Familyname"
        },
        {
            name: "phone",
            label: "Phone"
        }
    ];
    
    data.people = [
        {
            id: 1,
            surname: "Øystein",
            familyname: "Elvik",
            phone: "47606544"
        },
        {
            id: 2,
            surname: "Heidi",
            familyname: "Elvik",
            phone: "98052729"
        },
        {
            id: 3,
            surname: "Harald",
            familyname: "Elvik",
            phone: "97542545"
        },
        {
            id: 4,
            surname: "Marte",
            familyname: "Elvik",
            phone: "97542545"
        }
    ];
    
    return data;
})

;

