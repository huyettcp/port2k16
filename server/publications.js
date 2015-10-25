Meteor.publish('projects', function() {
  return Projects.find();
});

Meteor.publish('skill_categories', function() {
  return SkillCategories.find();
});

Meteor.publish('skill_inds', function() {
	return SkillInds.find();
});