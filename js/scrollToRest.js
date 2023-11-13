
function scroller(index)
{
    const restElem = document.getElementById(`rest-${index}`);
    restElem.style.display = "block";
    restElem?.current.scrollIntoView({behavior: "smooth"});
}



// add scrollToRest to + buttons when clicked
Array.from(document.getElementsByClassName("plus")).forEach(element => {
    element.addEventListener("click", () => {
        let index = -1;
        Array.from(document.getElementsByTagName("article")).forEach(e => {
            if (e.dataset.status === "active") index = e.dataset.index;
        });
        // change body to scroll possible
        document.getElementById("work-body").style.overflowY = "scroll";
        scroller(index);
    });
});