Meteor.publish('polls', () => Polls.find());
Meteor.publish('votes', () => Votes.find());
