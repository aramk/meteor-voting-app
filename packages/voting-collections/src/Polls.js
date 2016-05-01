Polls = new Meteor.Collection('polls');

let schema = new SimpleSchema({
  name: {
    type: String,
    max: 100
  },
  description: {
    type: String,
    max: 500
  },
  dateCreated: {
    type: Date
  }
});

Polls.attachSchema(schema);
Polls.allow({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Polls.before.insert(function(userId, doc) {
  doc.dateCreated = new Date();
});

if (Meteor.isServer) {
  Meteor.publish('polls', function() {
    return Polls.find();
  });
}
