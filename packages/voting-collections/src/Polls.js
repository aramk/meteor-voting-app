Polls = new Meteor.Collection('polls');

const ChoiceSchema = new SimpleSchema({
  name: {
    type: String
  }
});

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
    type: Date,
    optional: true
  },
  choices: {
    type: [ChoiceSchema],
    minCount: 1
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
