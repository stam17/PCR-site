$(document).ready(function() {


  // $('a').on('click', function(e) {
  //   e.preventDefault();
  //   var pageRef = $(this).attr('href');

  //   callPage(pageRef);
  // });

  // function callPage(pageRefInput) {
  //   $.ajax({
  //     url: pageRefInput,
  //     type: "GET",
  //     dataType: 'text',

  //     success:function(response) {
  //       console.log('page loaded', response);
  //       $('#main-content').html(response);
  //     },
  //     error: function(error) {
  //       console.log('page not loaded', error);
  //     },
  //     complete: function(xhr, status) {
  //       console.log("Request complete");
  //     }
  //   });
  // }

  $('#homepage').click(function() {
    var link = 'snippets/' + $(this).attr('id') + ".php";
    var link1 = $(this).attr('id') + ".php"
      $('#main-content').load(link);
      // window.history.pushState($(this).attr('id'), 'Title', link1);
  });

  $('.btn-secondary').click(function(){
    var link = 'snippets/' + $(this).attr('id') + ".php";
    var link1 = $(this).attr('id') + ".php"
      $('#main-content').load(link);
      // window.history.pushState($(this).attr('id'), 'Title', link1);
  });

});