$(document).ready(function () {
  
  $("#des").click(function () {
    $("#des p").toggle();
    $("#des img").toggle();
  });

  $("#dev").click(function () {
    $("#dev p").toggle();
    $("#dev img").toggle();
  });

  $("#pmg").click(function () {
    $("#pmg p").toggle();
    $("#pmg img").toggle();
  });





  // form function

  // $(".form").submit(function (e) {
  //   let name = document.getElementById("name");
  //   let email = document.getElementById("email");
  //   let message = document.getElementById("sms");
    
  //   if (!name.value || !email.value || !message.value) {
  //     alert("Kindly check your entries")
  //   } else {
  //     e.preventDefault()
  //     $(this).get(0).reset()
  //     alert("Thank you! Your message has been received.")
  //   }
  // });


});