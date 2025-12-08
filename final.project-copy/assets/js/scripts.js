var acc = document.getElementsByClassName("accordian");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


function highlightItem(elemment) {
    elemment.classList.add("highlight");
}

function removeHighlight(elemment) {
    elemment.classList.remove("highlight")
}