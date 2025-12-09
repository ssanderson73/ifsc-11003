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







//select all map areas
const areas =document.querySelectorAll("map[name='workmap'] area");

//add hover listeners
areas.forEach(area => {
  const keyValue = area.dataset.key;

  area.addEventListener("mouseenter", () => {
    const li = document.querySelector(`.key li[data-key="${keyValue}"]`);
    if (li) li.classList.add("highlight");
  });

  area.addEventListener("mouseleave", () => {
    const li = document.querySelector(`.key li[data-key="${keyValue}"]`);
    if (li) li.classList.remove("highlight");
  });
});