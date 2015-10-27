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
      label: '<span class="date_box">Current Role</span>',
      shortContent: '<b>Analyst II</b> // OpSec Security, Inc.<br><i>Leader in e-commerce fraud identification and remediation</i><br>Boston, MA (9/2014-Present)',
      fullContent: '<b>Analyst II</b> // OpSec Security, Inc.<br><i>Leader in e-commerce fraud identification and remediation</i><br>(9/2014-Present)<br><ul><li>&bull; Prepared comprehensive online marketplace reports for several of the largest pharmaceutical companies in the world as head analyst for our pharmaceutical clients. </li><li>&bull; Designed and implemented more efficient data collection and reporting procedures, reducing the number of analysts required for report generation by 50%.</li><li>&bull; Worked with developers to design features that would automate existing manual processes for the next generation of our proprietary in-house software.</li></ul>',
      showMore: '<a class="custom-show-btn"><i class="material-icons plus">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons plus">remove</i></a>',


    },
    {
      type: 'bigItem',
      label: '<span class="date_box">2015</span>',
      shortContent: '<b>Data Analytics Student</b> // General Assembly<br>Boston, MA (9/2015-11/2015)',
      fullContent: '<b>Data Analytics Student</b> // General Assembly<br>Boston, MA (9/2015-11/2015)<br><ul><li>&bull; 10-Week Part-Time Course</li><li>&bull; Training in SQL, Excel, and Tableau</li><li>&bull; Link to Final Project</li></ul>',
      showMore: '<a class="custom-show-btn"><i class="material-icons plus">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons plus">remove</i></a>',


    },
    {
      type: 'bigItem',
      label: '<span class="date_box">2014</span>',
      shortContent: '<b>Product Management Apprenticeship</b> // Vitals<br><i>Health provider and medical facility search service</i><br>New York, NY (4/2014-7/2014)',
      fullContent: '<b>Product Management Apprenticeship</b> // Vitals<br><i>Health provider and medical facility search service</i><br>New York, NY(4/2014-7/2014)<br><p>Twelve week long apprenticeship working directly under the product managers on the enterprise healthcare provider-finder platform “VitalsChoice”.</p><ul><li>&bull;  Worked with multiple health insurers on customizing the VitalsChoice platform to their specific needs and/or preferences.</li><li>&bull;  Wire-framed data visualization that displayed a user’s current and projected financial standing with their health insurer. </li><li>&bull; Configured dashboards on Google Analytics.</li><li>&bull; QA’d several features, such as a PDF generator.</li></ul>',
      showMore: '<a class="custom-show-btn"><i class="material-icons plus">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons plus">remove</i></a>',


    }, 
    {
      type: 'bigItem',
      label: '<span class="date_box">2013</span>',
      shortContent: '<b>Web Development Immersive Graduate</b> // General Assembly<br>New York, NY (8/2014-11/2014)',
      fullContent: '<b>Web Development Immersive Graduate</b> // General Assembly<br>New York, NY (8/2014-11/2014)<ul><li>&bull; Twelve week long full-stack web development bootcamp.</li><li>&bull; Training primarily in Ruby and JavaScript.</li></ul>',
      showMore: '<a class="custom-show-btn"><i class="material-icons plus">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons plus">remove</i></a>',


    },

    {
      type: 'bigItem',
      label: '<span></span>',
      shortContent: '<b>Gettysburg College Graduate</b><br>Gettysburg, PA (9/2010-5/2013)'


    },

    {
      type: 'bigItem',
      label: '<span class="date_box">2012</span>',
      shortContent: '<b>Public Relations Intern</b> // Marine Biological Laboratory<br>Woods Hole, MA (6/2012-8/2012)'


    },

    {
      type: 'bigItem',
      label: '<span class="date_box">2009</span>',
      shortContent: '<b>National Outdoor Leadership School Graduate</b> Tucson, AZ/Conway, WA (2/2009-5/2009)',
      fullContent: '<b>National Outdoor Leadership School Graduate</b> Tucson, AZ/Conway, WA (2/2009-5/2009)<ul><li>&bull; Three-month long wilderness trip that consisted of hiking, rock climbing, sea kayaking, and sailing.</li></ul>',
      showMore: '<a class="custom-show-btn"><i class="material-icons plus">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons plus">remove</i></a>',


    },

    {
      type: 'bigItem',
      label: '<span></span>',
      shortContent: '<b>Concord Carlisle High School Graduate</b><br>Concord, MA'


    }







  ]
});
}


