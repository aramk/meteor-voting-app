Votes = new Meteor.Collection('votes');

let schema = new SimpleSchema({
  pollId: {
    type: String
  },
  author: {
    type: String
  },
  value: {
    type: String
  }
});

Votes.attachSchema(schema);
Votes.allow({
  insert: () => true,
  update: () => true,
  remove: () => true
});

if (Meteor.isServer) {
  // Remove all votes associated with a poll.
  Polls.after.remove(function(userId, doc) {
    Votes.remove({pollId: doc._id});
  });

  // Remove previous votes by the same use for the same poll.
  Votes.before.insert(function(userId, doc) {
    Votes.remove({pollId: doc.pollId, author: doc.author});
  });
}
