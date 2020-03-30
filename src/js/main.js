// lOGO
// ==========================================================================
const poppa = document.querySelector('img.logo');
const poppaContainer = document.querySelector('.poppa-container');
poppa.addEventListener("mouseover", (event)=>{

  // start logo anim
  poppa.classList.add('animate')

  // start letters anim
  // for( var i = 0; i <= 4; i++ ) {
  //   var letter = document.querySelector( '.poppa-' + i );
  //   letter.classList.add( 'animate' );
  // }

})

// poppaContainer.addEventListener("animationend", (event)=> {
poppaContainer.addEventListener("mouseout", (event)=> {

  // stop logo anim
  poppa.classList.remove('animate')
  // poppa.classList.add('poppa-init')

  // stop letters anim
  // for( var i = 0; i <= 4; i++ ) {
  //   var letter = document.querySelector( '.poppa-' + i );
  //   letter.classList.remove( 'animate' );
  // }

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
