function regInfo() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
          js_onSuccess();
      } else
      if(request.readyState == 4) {
          js_onError(request.response);
      }
  };

  var subject = "Member Registration Form from " + document.getElementById('registerform-name').value;
  var message = "Email: " + document.getElementById('contactform-email').value + '\n' + 'Grade: ' + document.getElementById('registerform-grade').value + '\n' + "State: " + document.getElementById('registerform-state') + '\n' + "School: " + document.getElementById('registerform-school')  + '\n' + "Email: " + document.getElementById('registerform-email');
  data_js['subject'] = subject;
  data_js['text'] = message;
  var params = toParams(data_js);

  request.open("POST", "https://postmail.invotes.com/send", true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  request.send(params);

  return false;
}

  var data_js = {
      "access_token": "1flpu94rdg8mu30uvpbd8ak8"
  };

  function js_onSuccess() {
      alert("You successfully submitted the form")
  }

  function js_onError(error) {
      alert("An Error occured")
  }


  function toParams(data_js) {
      var form_data = [];
      for ( var key in data_js ) {
          form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
      }

      return form_data.join("&");
  }
