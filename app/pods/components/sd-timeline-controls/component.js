import Ember from 'ember';

const {
  computed,
  on
} = Ember;

export default Ember.Component.extend({
  activeTab: null,
  isClassesMenuVisible: false,

  activeCommands: computed('activeTab', function() {
    return this.get('activeTab.commands');
  }),

  actions: {
    classesCommandClicked() {
      console.log(`commandClicked`);
      this.toggleProperty('isClassesMenuVisible');
    },

    dropDownItemClicked() {
      console.log(`dropDownItemClicked`);
    },

    holidaysCommandClicked() {
      console.log(`commandClicked`);
    },

    projectionsCommandClicked() {
      console.log(`commandClicked`);
    },

    selectTab(tab) {
      this.set('activeTab', tab);
    }
  },

  configuration: {
    tabs: [
      {
        name: 'View',
        commands: [
          {
            name: 'Classes',
            iconClass: 'ms-Icon--multiChoice',
            dropdown: true,
            dropdownItems: [
              {
                name: 'All',
                iconClass: 'ms-Icon--star',
                divider: true
              },
              {
                iconClass: 'ms-Icon--star',
                name: 'PHYS200'
              },
              {
                iconClass: 'ms-Icon--star',
                name: 'PSYC100'
              },
              {
                iconClass: 'ms-Icon--star',
                name: 'CHEM230'
              },
              {
                iconClass: 'ms-Icon--star',
                name: 'MATH100'
              }
            ]
          },
          {
            name: 'Projections',
            iconClass: 'ms-Icon--checkbox',
            dropdown: false
          },
          {
            name: 'Holidays',
            iconClass: 'ms-Icon--checkbox',
            dropdown: false
          }
        ]
      },
      {
        name: 'Insert',
        commands: [
          {
            name: 'Assignment',
            iconClass: 'ms-Icon--checkbox',
            dropdown: false
          }
        ]
      }
    ]
  },

  onInit: on('init', function () {
    console.log(`init()`);
    const tab = this.get('configuration').tabs[0];
    this.set('activeTab', tab);
  })

});
