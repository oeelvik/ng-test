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
angular.module( 'crm.sections', [])

.factory('$sections', function() {
  var sections = [
      {
        name: 'person',
        title: 'Person',
        iconClass: 'icon-user'
      },
      {
        name: 'group',
        title: 'Group',
        iconClass: 'icon-group'
      },
      {
        name: 'event',
        title: 'Event',
        iconClass: 'icon-calendar'
      }
  ];

  return sections;
})

;