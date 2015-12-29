Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});



Router.route('/', {
  template: 'about',
	name: 'about',
  waitOn: function() { 
    return [Meteor.subscribe('projects'), Meteor.subscribe('skill_categories'), Meteor.subscribe('skill_inds') ]; 
  },
  fastRender: true,
});

Router.route('/work', {
  template: 'allWork',
	name: 'allWork',
	waitOn: function() { 
    return Meteor.subscribe('projects'); 
  },
  fastRender: true
});

Router.route('/timeline', {
  template: 'timeline',
	name: 'timeline',
	waitOn: function() { 
    	return [Meteor.subscribe('skill_categories'), Meteor.subscribe('skill_inds')]; 
  },

  fastRender: true
});