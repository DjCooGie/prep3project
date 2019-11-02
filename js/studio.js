// form validation

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("sms").value;

  if (name == "" && email == "" && message == "") {
    alert("Kindly write your name, email and add your message!");
    return false;
  }
  
  else if (name == "") {
    alert("Kindly write your name")
    return false;
  }
  
  else if (email == "") {
    alert("Kindly write your email address!");
    return false;
  }
  
  else if (message == "") {
    alert("Kindly add your message!")
    return false;
  }
 
  else {
    alert(name + ", your message has been received successfully. Thank you.");
  }

};





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


    $("#5p").click(function () {
      $("#5p #Hp5").toggle();
    });
  });



});