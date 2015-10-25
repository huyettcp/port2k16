Template.skill_cat.helpers({
  skill_inds: function() {
    return SkillInds.find({category_id: this._id})
  }
})