(function() {

  // if (Modernizr.cssanimations && Modernizr.csstransforms) {
  //   document.getElementById("circles").style.display = "block";
  // }
  
  var contact = document.getElementById("contact")
  var email = ["om", ".c", "pl", "om", "nc", "@i", "th", "mi", "gs"].reverse().join("");
  contact.style.display = "inline";
  contact.innerHTML = email;
  contact.href = "mailto:" + email;

  window.onresize = function(event) {
    document.getElementById("circles").style.display = "none";
  }

})();