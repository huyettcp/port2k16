Template.layout.rendered = function(){
	$(document).ready(function(){
		$('ul.tabs').tabs();

	});

	Session.set('context', 'about')
}


Template.layout.events({
	"click #work": function(){
		Router.go('allWork')
	},
	"click #resume": function(){
		Router.go('timeline')
	},
	"click #about": function(){
		Router.go('about')
	}

});

