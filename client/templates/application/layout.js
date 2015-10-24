Template.layout.rendered = function (){
	$(document).ready(function(){
		$('ul.tabs').tabs();
		$('#timeline-container-basic').timelineMe({
  items: [
    {
      type: 'milestone',
      label: 'my label 1'
    },
    {
      type: 'smallItem',
      label: 'my label 2',
      shortContent: 'short description',
      fullContent: 'big description <br> with more lines <br> than the short one. <br> <div style="text-align: center;"><img src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png" style="width: 50%;" /></div>',
      showMore: 'show more',
      showLess: 'show less'
    },
    {
      type: 'bigItem',
      label: '<span style="background-color: #8DD8DD;">my label 3</span>',
      shortContent: 'short description',
      fullContent: 'big description <br> with more lines <br> than the short one. <br> <div style="text-align: center;"><img src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png" style="width: 50%;" /></div>',
      showMore: 'show more',
      showLess: 'show less'
    }
  ]
});
	});
}
