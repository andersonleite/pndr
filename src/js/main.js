let x1 = x2 = 0; // left/right limit
let y1 = y2 = 0; // top/bottom limit

const poppa1 = document.querySelector('.poppa-1');
const poppa2 = document.querySelector('.poppa-2');
const poppa3 = document.querySelector('.poppa-3');
const poppa4 = document.querySelector('.poppa-4');
const poppa5 = document.querySelector('.poppa-5');

const poppaContainer = document.querySelector('.poppa-container');

// define bounderies
window.onload = function() {

  poppaContainer.classList.add('loaded')

  // horizontal bounderies
  x1 = (window.innerWidth * .23);
  x2 = window.innerWidth - x1;

  // vertical boundaries
  y1 = (window.innerHeight * .25);
  y2 = 2 * y1;

};

let flicker = 0;

const poppa = new (function() {
  this.anim = function(event){
    event.preventDefault();

    // const v = 0.5;
    const v = Math.random(10);

      if(Math.abs(flicker-event.pageX)>100) {

        // LERP
        if (event.pageX < x1 || event.pageX > x2) {
          poppa1.style.transform = `perspective(500px) translate3d(0px, 0, 0px)`;
          poppa2.style.transform = `perspective(500px) translate3d(0px, 0, 0px)`;
          poppa3.style.transform = `perspective(500px) translate3d(0px, 0, 0px)`;
          poppa4.style.transform = `perspective(500px) translate3d(0px, 0, 0px)`;
          poppa5.style.transform = `perspective(500px) translate3d(0px, 0, 0px)`;

        } else {
          poppa1.style.transform = `translate3d(-${x1 * v}px, ${y1 * v}px, 0px) rotate(-45deg)`;
          poppa2.style.transform = `translate3d(${x1 / 2 * v}px, -${y1 * v}px, 0px) rotate(45deg)`;
          poppa3.style.transform = `translate3d(${x1 * v}px, ${y1 / 2 * v}px, 0px) rotate(180deg)`;
          poppa4.style.transform = `translate3d(${x1 / 2 * v}px, ${y1 * v}px, 0px) rotate(-150deg)`;
          poppa5.style.transform = `translate3d(-${x1 * v}px, -${y1 * v}px, 0px) rotate(-150deg)`;

        }
        flicker = event.pageX
      }

    }
})();

// will be letters.forEach...
document.onmousemove = poppa.anim;
