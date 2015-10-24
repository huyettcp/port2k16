Template.timeline.rendered = function(){
$('#timeline-container-custom-classes').timelineMe({
  labelClass: 'labelclass',
  shortContentClass: 'card-panel',
  fullContentClass: 'card-panel',
  showMoreClass: 'showmoreclass',
  showLessClass: 'showlessclass',
  items: [
    {
      type: 'smallItem',
      label: 'September 2014 - Present',
      shortContent: 'short description 1',
      fullContent: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsu',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
    },
    {
      type: 'smallItem',
      label: '',
      shortContent: 'short description 1',
      fullContent: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsu',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
    }

  ]
});
}

