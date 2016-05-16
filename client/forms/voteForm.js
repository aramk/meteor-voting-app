const formId = 'voteForm';
const Form = Forms.defineModelForm({
  name: formId,
  collection: Votes,
  resetOnSuccess: true,
  hooks: {
    formToDoc: function(doc) {
      doc.pollId = Form.getTemplate(this.template).data.pollId;
      return doc;
    },
    formToDocOnUpdate: true
  }
});

Form.helpers({
  choices: function() {
    const poll = Polls.findOne({_id: this.pollId});
    if (!poll) return;
    const polls = poll.choices.map(choice => {
      return {
        label: choice.name,
        value: choice.name
      }
    });
    // polls.unshift({label: '', value: null});
    return polls;
  }
});

function routeBack() {
  Router.go('polls');
}
