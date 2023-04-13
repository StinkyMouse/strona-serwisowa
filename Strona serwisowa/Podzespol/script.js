function przycisk(evt, NazwaPrzycisku) {
    var i, content, link;
  
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }

    link = document.getElementsByClassName("link");
    for (i = 0; i < link.length; i++) {
      link[i].className = link[i].className.replace(" active", "");
    }
  
    document.getElementById(NazwaPrzycisku).style.display = "block";
    evt.currentTarget.className += " active";
    
  }

function podprzycisk(evt, NazwaPrzycisku) {
    var i, podcontent, podlink;

    podcontent = document.getElementsByClassName("podcontent");
    for (i = 0; i < podcontent.length; i++) {
        podcontent[i].style.display = "none";
    }

    podlink = document.getElementsByClassName("podlink");
    for (i = 0; i < podlink.length; i++) {
        podlink[i].className = podlink[i].className.replace(" active", "");
    }

    document.getElementById(NazwaPrzycisku).style.display = "block";
    evt.currentTarget.className += " active";

}