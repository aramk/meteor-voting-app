Meteor.startup(function() {
  const poll = {
    name: 'US Presidents 2016',
    description: 'Either way, your planet is doomed!',
    choices: [
      {name: 'Donald "The Wall" Trump'},
      {name: 'Ted "Zodiac Killer" Cruz'},
      {name: 'Bernie Sanders'},
      {name: 'Hillary Clinton'}
    ]
  }

  if (!Polls.findOne({name: poll.name})) {
    Polls.insert(poll);
  }
});
