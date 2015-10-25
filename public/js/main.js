var babyclick = babyclick || {};

babyclick.brand = {
  // put
  update: function(formObject, formAction, event) {
    event.preventDefault();
    var dataString = jQuery(formObject).serialize();

    jQuery.ajax({
      type: 'PUT',
      url: formAction,
      data: dataString,
      success: function(data) {
        console.log(data);
      },
      error: function(e) {
        console.log(e.message);
      }
    });
  },

  // create
  create: function(formObject, formAction, event) {
    event.preventDefault();
    var dataString = jQuery(formObject).serialize();

    jQuery.ajax({
      type: 'POST',
      url: formAction,
      data: dataString,
      success: function(data) {
        console.log(data);
      },
      error: function(e) {
        console.log(e.message);
      }
    });
  },

  // get
  show: function(formObject, formAction, event) {
    event.preventDefault();
    var dataString = jQuery(formObject).serialize();

    jQuery.ajax({
      type: 'GET',
      url: formAction,
      data: dataString,
      success: function(data) {
        console.log(data);
      },
      error: function(e) {
        console.log(e.message);
      }
    });
  },

  // Delete.
  delete: function(formObject, formAction, event) {
    event.preventDefault();
    var dataString = jQuery(formObject).serialize();

    jQuery.ajax({
      type: 'DELETE',
      url: formAction,
      data: dataString,
      success: function(data) {
        console.log(data);
      },
      error: function(e) {
        console.log(e.message);
      }
    });
  },
};
