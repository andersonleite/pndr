const poppa = document.querySelector('#poppa');

const letters = document.querySelectorAll('.poppa-letter');

poppa.addEventListener("mouseover", (event)=>{
  letters.forEach((l)=>{
    l.style.marginLeft = '200px'
  })
})

poppa.addEventListener("mouseout", (event)=>{
  letters.forEach((l)=>{
    l.style.marginLeft = '0px'
  })
})

