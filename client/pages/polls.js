const TemplateClass = Template.polls;

TemplateClass.helpers({
  polls: () => Polls.find(),
  votes: function() {
    return Votes.find({_id: this._id}).count();
  },
  sinceCreated: function() {
    return moment(this.dateCreated).fromNow();
  }
});

TemplateClass.events({
  'click .create.button': function() {
    Router.go('pollCreate');
  },
  'click .card .edit.item': function() {
    Router.go('pollEdit', {_id: this._id});
  },
  'click .card .delete.item': function() {
    if (confirm('Are you sure you want to delete this poll?')) {
      Polls.remove({_id: this._id});
    }
  }
});
