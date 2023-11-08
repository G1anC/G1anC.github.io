const alphabet = "abcdefghijklmnopqrstuvwxyz";
let interval = null;


function chooseWhichLetter (e, index, i) {
  if (index < i) {
    return e.dataset.value[index];
  }
  return alphabet[Math.floor(Math.random() * 26)]
}


const letterChanger = event => {
  let i = 0;
  clearInterval(interval);
  interval = setInterval(() => {

    let e = event.target;


    // contact form placeholders

    if (!e.value && (e.type === "text" || e.type === "textarea")) {
      e.placeholder = e.placeholder
        .split("")
        .map((letter, index) => {
          return chooseWhichLetter(e, index, i);
        }).join("");
    }
    else if (e.type === "button") {
      e.value = e.value.split("").map((letter, index) => { return chooseWhichLetter(e, index, i); }).join("");
    }

    // navigation menu links

    else if (e.innerText) {
      console.log(e);
      e.innerText = e.innerText
        .split("")
        .map((letter, index) => {
          if(index < i) {
            return e.dataset.value[index];
          }
          return alphabet[Math.floor(Math.random() * 26)]
        })
        .join("");
    }

      // _______________________________________________________________________________________________________________ //
    
    if(i >= e.dataset.value.length) { 
      clearInterval(interval);
    }
    i += 1/2;
  }, 20);
}

Array.from(document.getElementsByClassName("cript-js")).forEach(e => {
  e.onmouseenter = letterChanger;
});
