const TemplateClass = Template.mainLayout;

TemplateClass.helpers({
  routeName: function() {
    return Router.getReactiveCurrentName();
  },
  isLoginPage: function() {
    return Router.getReactiveCurrentName() === 'login';
  },
  notificationSettings: function() {
    return {
      closeAll: true
    };
  }
});
