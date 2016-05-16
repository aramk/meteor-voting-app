const TemplateClass = Template.poll;

TemplateClass.helpers({
  votes: function() {
    return getVotes.call(this);
  },
  hasVotes: function() {
    return getVotes.call(this).count() > 0;
  },
  choiceStats: function() {
    const choiceMap = {};
    let voteCount = 0;
    this.doc.choices.forEach((choice) => {
      choiceMap[choice.name] = {
        choice: choice.name,
        freq: 0,
        percent: 0
      };
    });
    getVotes.call(this).forEach((vote) => {
      const stats = choiceMap[vote.value];
      stats.freq++;
      voteCount++;
    });
    const stats = this.doc.choices.map((choice) => {
      const item = choiceMap[choice.name];
      item.percent = (item.freq / voteCount) || 0;
      return item;
    }).sort((a, b) => b.freq - a.freq);
    if (stats[0].freq > stats[1].freq) {
      stats[0].isWinner = true;
    }
    return stats;
  }
});

TemplateClass.events({
  'click .back.item': function() {
    Router.go('polls');
  },
  'click .edit.item': function(e, template) {
    Router.go('pollEdit', {_id: template.data.doc._id});
  }
});

function getVotes() {
  return Votes.find({pollId: this.doc._id})
}

Blaze.registerHelper('percentage', function(value) {
  return (value * 100).toFixed(2) + '%';
});
