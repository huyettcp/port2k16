if (Projects.find().count() === 0) {

	Projects.insert({
		title: 'Sabergraphs',
		description: 'Sabergraphs is a data visualization of MLB team\'s payrolls and player\'s cost vs. performance score. This was my final project for General Assembly\'s Web Development Immersive.',
		url: 'http://whispering-temple-2020.herokuapp.com/',
		technology_1: 'Ruby on Rails',
		technology_1_link: 'http://rubyonrails.org/',
		technology_2: 'D3.js',
		technology_2_link: 'http://d3js.org/',
		image_url: 'http://huyettcp.github.io/images/saber_screenshot.png'

	});

	Projects.insert({
		title: 'Chippy Brew',
		description: 'Simple RateBeer/Beer Advocate type beer review site. My first website built with Meteor.',
		url: 'http://chippybrew.meteor.com/',
		technology_1: 'Meteor.js',
		technology_1_link: 'https://www.meteor.com/',
		technology_2: 'Materialize',
		technology_2_link: 'http://materializecss.com/',
		image_url: 'images/chippy_brew_screenshot.png'

	});

	var languagesId = SkillCategories.insert({
		category_title: 'Languages'

	});

	var frameworkId = SkillCategories.insert({
		category_title: 'Frameworks'

	});

	var frontEndId = SkillCategories.insert({
		category_title: 'Front-End'

	});


	var databasesId = SkillCategories.insert({
		category_title: 'Databases'

	});

	var pmId = SkillCategories.insert({
		category_title: 'Product/Project Management'

	});

	SkillInds.insert({
		skill_title: 'JavaScript',
		category_id: languagesId
	});

	SkillInds.insert({
		skill_title: 'Ruby',
		category_id: languagesId
	});

	SkillInds.insert({
		skill_title: 'HTML5',
		category_id: languagesId
	});

	SkillInds.insert({
		skill_title: 'CSS3',
		category_id: languagesId
	});

	SkillInds.insert({
		skill_title: 'D3.js',
		category_id: frontEndId
	});

	SkillInds.insert({
		skill_title: 'jQuery',
		category_id:frontEndId
	});

	SkillInds.insert({
		skill_title: 'Materialize',
		category_id:frontEndId
	});

	SkillInds.insert({
		skill_title: 'Meteor.js',
		category_id: frameworkId
	});

	SkillInds.insert({
		skill_title: 'Ruby on Rails',
		category_id: frameworkId
	});

	SkillInds.insert({
		skill_title: 'Sinatra',
		category_id: frameworkId
	});

	SkillInds.insert({
		skill_title: 'SQL',
		category_id: databasesId
	});

	SkillInds.insert({
		skill_title: 'PostgreSQL',
		category_id: databasesId
	});


	SkillInds.insert({
		skill_title: 'MongoDB',
		category_id: databasesId
	});


	SkillInds.insert({
		skill_title: 'GitHub',
		category_id: pmId
	});

	SkillInds.insert({
		skill_title: 'Jira',
		category_id: pmId
	});

	SkillInds.insert({
		skill_title: 'Office Suite',
		category_id: pmId
	});

	SkillInds.insert({
		skill_title: 'Tableau',
		category_id: pmId
	});

	SkillInds.insert({
		skill_title: 'Balsamiq',
		category_id: pmId
	});
}














