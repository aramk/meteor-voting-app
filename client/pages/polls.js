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
  'click .card .edit.item': function(e) {
    Router.go('pollEdit', {_id: this._id});
    return false;
  },
  'click .card .delete.item': function(e) {
    if (confirm('Are you sure you want to delete this poll?')) {
      Polls.remove(this._id);
    }
    return false;
  },
  'click .polls .ui.card': function(e, template) {
    if ($(e.target).parent('a.item').length === 0 && !$(e.target).is('a.item')) {
      Router.go('poll', {_id: this._id});
      return false;
    }
  }
});
