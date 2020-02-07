document.addEventListener("DOMContentLoaded", ready);

function ready() {
 

  document.querySelectorAll("form").forEach(form =>
    form.addEventListener("submit", submitHandler)
  );

  
 
}

function submitHandler(e) {
  e.preventDefault();
  var form = this.querySelector('button');
  var request = new XMLHttpRequest();
  var th = document.querySelector('.contact__form-thanks');

  request.onreadystatechange = function() { 
    console.log("readyState=", this.readyState, "statis=", this.status);
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        // success, show this.responseText here
        console.log("SUCCESS", this);
        th.classList.add('contact__form-thanks_active');
        form.setAttribute('disabled', 'disabled');
    }
  }
  
  request.open(this.method, this.action, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
  var data = new FormData(this);
  var dataPost;
  // for (var key of data.keys())
  //   console.log(key, data.get(key));
  data.forEach(function(value, key) {
    dataPost += '&' + key + '=' + value;
  })
  console.log(data);
    
  request.send(dataPost);
}
