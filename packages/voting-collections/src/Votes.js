Votes = new Meteor.Collection('votes');

let schema = new SimpleSchema({
  pollId: {
    type: String
  },
  owner: {
    type: String
  }
});

Votes.attachSchema(schema);
Votes.allow({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Polls.after.remove(function(userId, doc) {
  Votes.remove({pollId: doc._id});
});

if (Meteor.isServer) {
  Meteor.publish('votes', function() {
    return Votes.find();
  });
}
