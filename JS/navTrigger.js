
// on rajoute un event listener au DOM
document.addEventListener('keydown', (event) => {

    // on recupere le navigation menu
    const nav = document.querySelector('nav');
    
    // on check si la pressed key est Echap
    if (event.key === 'Escape') {
        // on display la navigation bar
      (nav.style.display === 'none' || !nav.style.display) ?
        nav.style.display = 'block' :
        nav.style.display = 'none';
    }
});

document.getElementsByTagName("body").click((event) => {
  const nav = document.querySelector('nav');
    
// on check si la pressed key est Echap
    // on display la navigation bar
  nav.style.display = (nav.style.display === 'none' || !nav.style.display) ? 'block' :  'none';
});

const fadeInNextPage = event => {
  document.getElementById("fadeInEffect").style.opacity = "1";
}

Array.from(document.getElementsByClassName("link")).forEach(element => {
  element.addEventListener("click", fadeInNextPage);
});