Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {
	name: 'about'
});

Router.route('/work', {
	name: 'allWork',
	waitOn: function() { 
    return Meteor.subscribe('projects'); 
  },
  fastRender: true
});

Router.route('/timeline', {
	name: 'timeline',
	waitOn: function() { 
    	return [Meteor.subscribe('skill_categories'), Meteor.subscribe('skill_inds')]; 
  },
  fastRender: true
});