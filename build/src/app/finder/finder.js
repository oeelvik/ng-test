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
angular.module( 'crm.finder', [
  'ui.state',
  'itemlist'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'finder', {
    url: '/finder',
    views: {
      "main": {
        controller: 'FinderCtrl',
        templateUrl: 'finder/finder.tpl.html'
      }
    }
  });

  $stateProvider.state( 'finder.section', {
    url: '/{section:[a-z_-]{1,20}}',
    views: {
      "finder-history": {
        controller: 'FinderCtrl',
        templateUrl: 'finder/history.tpl.html'
      },
      "finder-list": {
        controller: 'FinderCtrl',
        templateUrl: 'finder/list.tpl.html'
      },
      "finder-detail": {
        controller: 'FinderCtrl',
        templateUrl: 'finder/detail.tpl.html'
      }
    }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'FinderCtrl', function FinderController( $scope, $state, $stateParams, Page, Data ) {
    $scope.state = $stateParams;
    $scope.data = Data;
    Page.setTitle($stateParams.section);
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