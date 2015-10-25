if (Projects.find().count() === 0) {

	Projects.insert({
		title: 'Sabergraphs',
		description: 'Sabergraphs is a data visualization of MLB team\'s payrolls and player\'s cost vs. performance score. This was my final project for General Assembly\'s Web Development Immersive.',
		url: 'http://whispering-temple-2020.herokuapp.com/',
		technology_1: 'Meteor.js',
		technology_1_link: 'https://www.meteor.com/',
		technology_2: 'Materialize front-end framework',
		technology_2_link: 'http://materializecss.com/',
		image_url: 'http://www.massvacation.com/blog/wp-content/uploads/2013/12/Colonial-Inn-in-Concord-MA.jpg'

	});

	Projects.insert({
		title: 'Chippy Brew',
		description: 'Simple RateBeer/Beer Advocate type beer review site. My first website built with Meteor.',
		url: 'http://whispering-temple-2020.herokuapp.com/',
		technology_1: 'Ruby on Rails',
		technology_1_link: 'https://www.meteor.com/',
		technology_2: 'D3.js',
		technology_2_link: 'http://materializecss.com/',
		image_url: 'http://euroclub.mit.edu/uploads/concord.jpg'

	});

	SkillCategories.insert({
		category_title: 'Languages'

	});

	SkillCategories.insert({
		category_title: 'Front-End'

	});

	SkillCategories.insert({
		category_title: 'Back-End'

	});

	SkillCategories.insert({
		category_title: 'Databases'

	});

	SkillCategories.insert({
		category_title: 'Product/Product Management'

	});





}