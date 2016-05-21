const TemplateClass = Template.polls;

TemplateClass.onCreated(function() {
  this.query = new ReactiveVar();
});

TemplateClass.onRendered(function() {
  Templates.bindVarToElement(this.$('input[name="search"]'), this.query);
});

TemplateClass.helpers({
  polls: () => {
    const template = Template.instance();
    const query = template.query.get();
    const selector = {};
    if (query) {
      const regex = new RegExp(query, 'i');
      selector.$or = [
        {name: regex},
        {description: regex}
      ];
    }
    return Polls.find(selector, {sort: {'dateCreated': -1}});
  },
  votes: function() {
    return Votes.find({pollId: this._id}).count();
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
