Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'about'})
Router.route('/work', {name: 'allWork'});
Router.route('/timeline', {name: 'timeline'});