// Meteor package definition.
Package.describe({
  name: 'voting:collections',
  version: '0.1.0',
  summary: 'Meteor collections used in meteor-voting-app'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2.0.1');
  api.use([
    'ecmascript',
    'underscore',
    'aldeed:collection2@2.3.3',
    'aldeed:simple-schema@1.3.3',
    'aramk:utility@0.10.0',
    'matb33:collection-hooks@0.8.0'
  ]);
  api.export([
    'Polls',
    'Votes'
  ], ['client', 'server']);
  api.addFiles([
    'src/Polls.js',
    'src/Votes.js'
  ], ['client', 'server']);
});
