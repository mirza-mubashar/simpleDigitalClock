let clock = document.querySelector('#clock');
setInterval(() => {
     let dateInLocalStr = new Date().toLocaleTimeString();
     clock.innerHTML = dateInLocalStr;
}, 1000);

clock.style.padding = '6px';
clock.style.margin = '6px';
clock.style.letterSpacing = '5px';
