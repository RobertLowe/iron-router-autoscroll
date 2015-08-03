if (Meteor.isClient){
  FlowRouter.route('/', {
    action: function(params) {
      FlowLayout.render("mainLayout", {main: "blank"});
    }
  });
  FlowRouter.route('/one', {
    action: function(params) {
      FlowLayout.render("mainLayout", {main: "one"});
    }
  });
  FlowRouter.route('/two', {
    action: function(params) {
      FlowLayout.render("mainLayout", {main: "two"});
    }
  });
  FlowRouter.route('/three') // without 'name', path is used for tracking
}
