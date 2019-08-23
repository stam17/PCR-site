$(document).ready(function() {
  // $.ajax();
  // $('').load();
  // $.get();
  // $.get();
  // $post();
  // $getScript();
  // $.getJSON();

  $('a').on('click', function(e) {
    e.preventDefault();
    var pageRef = $(this).attr('href');

    callPage(pageRef);
  });

  function callPage(pageRefInput) {
    $.ajax({
      url: pageRefInput,
      type: "GET",
      dataType: 'text',

      success:function(response) {
        console.log('page loaded', response);
        $('#main-content').html(response);
      },
      error: function(error) {
        console.log('page not loaded', error);
      },
      complete: function(xhr, status) {
        console.log("Request complete");
      }
    });
  }
});