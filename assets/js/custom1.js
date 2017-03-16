function PullAccordionDownUp(){
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}
}

var terms = ["term 1", "term 2", "term 3"]; //array of terms to rotate

function rotateTerm() {
  var ct = $("#rotate").data("term") || 0;
  $("#rotate").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct])
              .fadeIn().delay(2000).fadeOut(200, rotateTerm);
}
$(rotateTerm); //start it on document.ready
