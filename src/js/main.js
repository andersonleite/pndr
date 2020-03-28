// lOGO
// ==========================================================================
const poppa = document.querySelector('.logo');
const poppaContainer = document.querySelector('.poppa-container');
poppaContainer.addEventListener("mouseover", (event)=>{

  // start logo anim
  poppa.classList.add('pulse')

  // start letters anim
  for( var i = 0; i <= 4; i++ ) {
    var letter = document.querySelector( '.poppa-' + i );
    letter.classList.add( 'animate' );
  }

})

poppaContainer.addEventListener("animationend", (event)=> {

  // stop logo anim
  poppa.classList.remove('pulse')

  // stop letters anim
  for( var i = 0; i <= 4; i++ ) {
    var letter = document.querySelector( '.poppa-' + i );
    letter.classList.remove( 'animate' );
  }

})


// LETTERS
// ==========================================================================
// for( var i = 0; i <= 4; i++ ) {
//   var letter = document.querySelector( '.poppa-' + i );
//   letter.addEventListener( 'mouseover', function() {
//     this.classList.add( 'animate' );
//   });
//   letter.addEventListener( 'animationend', function() {
//     this.classList.remove( 'animate' );
//   });
// }
