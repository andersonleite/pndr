const link = document.getElementById("togglePlayer")
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const playerModal = document.getElementById("playerModal")
const info = document.querySelector('.info')

// Link: Show modal and play player
link.onclick = function () {
  window.scrollTo(0,0)
  info.style.display = 'none'
  playerModal.style.display = 'flex'
  player.play()
}

// ESC: Close modal and pause player
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    closeModalOperations()
  }
});

playerModal.onclick = function () {
  closeModalOperations()
}

function closeModalOperations(){
  info.style.display = 'block'
  playerModal.style.display = 'none'
  player.pause();
}
