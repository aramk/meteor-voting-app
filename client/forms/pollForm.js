let Form = Forms.defineModelForm({
  name: 'pollForm',
  collection: Polls,
  onSuccess: function() {
    Router.go('polls');
  }
});
