const Form = Forms.defineModelForm({
  name: 'pollForm',
  collection: Polls,
  onSuccess: function() {
    routeBack();
  },
  onCancel: function() {
    routeBack();
  }
});

function routeBack() {
  Router.go('polls');
}
