Template.timeline.helpers({
  skill_categories: function() {
    return SkillCategories.find()
  }
})

Template.timeline.rendered = function(){
$('#timeline-container-custom-classes').timelineMe({
  labelClass: 'labelclass',
  shortContentClass: 'card-panel',
  fullContentClass: 'card-panel',
  showMoreClass: 'showmoreclass',
  showLessClass: 'showlessclass',
  items: [
    {
      type: 'bigItem',
      label: '<span class="date_box">2014</span>',
      shortContent: '<b>Analyst II</b> // OpSec Security, Inc.<br>(9/14-Present)',
      fullContent: '<p>Analyst II<br>OpSec Security, Inc.</p><p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsu</p>',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',


    },
    {
      type: 'bigItem',
      shortContent: '<b>Product Management Apprenticeship</b> // Vitals<br>(4/14-7/14)',
      fullContent: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsu',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',


    }

  ]
});
}


Template.timeline.helpers({
  skill_categories: function() {
    return SkillCategories.find()
  }
})

