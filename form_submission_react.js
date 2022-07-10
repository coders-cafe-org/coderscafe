// var ctc_frm = $('#contactform');
// ctc_frm.submit(function (e) {
//   e.preventDefault();
//
//   $.ajax({
//       type: ctc_frm.attr('method'),
//       url: ctc_frm.attr('action'),
//       data: ctc_frm.serialize(),
//       success: function (data) {
//
//         document.getElementById("toast-success").style = "visibility:visible"
//         setTimeout(function(){document.getElementById("toast-success").style = "visibility:hidden"}, 5000);
//
//         console.log('Contact form submission was successful!');
//         console.log(data);
//
//         ctc_frm.trigger("reset");
//       },
//       error: function (data) {
//
//         //Testing code
//         //document.getElementById("toast-success").style = "visibility:visible"
//         //setTimeout(function(){document.getElementById("toast-success").style = "visibility:hidden"}, 5000);
//
//         //Actual Code
//         setTimeout(function(){document.getElementById("toast-error").style = "visibility:hidden"}, 5000);
//         document.getElementById("toast-error").style = "visibility:visible"
//         console.log('Contact form submission ended with error!');
//         console.log(data);
//
//         ctc_frm.trigger("reset");
//       },
//   });
// });
