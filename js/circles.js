(function() {

  if (Modernizr.cssanimations && Modernizr.csstransforms) {
    document.getElementById("circles").style.display = "block";
  }
  
  var contact = document.getElementById("contact")
  var email = ["com", "l.", "mp", "co", "in", "@", "th", "mi", "gs"].reverse().join("");
  contact.style.display = "inline";
  contact.innerHTML = email;
  contact.href = "mailto:" + email;

})();