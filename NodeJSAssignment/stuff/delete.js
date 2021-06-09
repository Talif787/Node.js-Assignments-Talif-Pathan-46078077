console.log("Hello");
// $(document).ready(function(){
  // var app1 = require('../app.js');

  $("li").on("click",function(){
    console.log("Bye");
    var itemq = $(this).text();
    var n = itemq.indexOf(" &");
    var finalitem = itemq.slice(7,n);
    console.log(finalitem.toString());

    $.ajax({
        type: 'DELETE',
        url: '/items/' + finalitem,
        success: function(data){
          location.reload();
      }
    });
  });

  $(".test").on('click',function(){
    console.log("Hii");

    // module.exports = name;
    var value = $("#ItemId").val();
    var finalitems = value.toString();
    console.log(finalitems);
    $.ajax({
        type: 'PUT',
        url: '/items/' + finalitems,
        success: function(data1){
          location.reload();
      }
    });
  });

// });
