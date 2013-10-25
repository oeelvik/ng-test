angular.module( 'crm', [
  'templates-app',
  'templates-common',
  'crm.home',
  'crm.people',
  'crm.finder',
  'crm.sections',
  'ui.state',
  'ui.route'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.factory('Page', function() {
   var page = 'CRM';
   var title = 'default';
   return {
     getTitle: function() { return title + " | " + page; },
     setTitle: function(newTitle) { title = newTitle; }
   };
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $sections, Page ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    $scope.Page = Page;
    $scope.sections = $sections;
    if ( angular.isDefined(toState.data) && angular.isDefined( toState.data.pageTitle ) ) {
      Page.setTitle(toState.data.pageTitle);
    }
  });
})

;

