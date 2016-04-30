let TemplateClass = Template.polls;

TemplateClass.helpers({
  polls: () => Polls.find()
});

TemplateClass.events({
  'click .create.button': function() {
    Router.go('pollCreate');
  }
});
