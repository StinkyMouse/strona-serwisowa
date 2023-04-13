function myFunction(imgs) {
    var powimg = document.getElementById("powimg");
    var tekstimg = document.getElementById("tekstimg");
    powimg.src = imgs.src;
    tekstimg.innerHTML = imgs.alt;
    powimg.parentElement.style.display = "block";
  }