function woosh() {
  let hor = Math.floor(Math.random()*97)
  let ver = Math.floor(Math.random()*94)

  document.getElementById('nugget').style.left=hor + '%';
  document.getElementById('nugget').style.top=ver + '%';
  console.log(ver)
  console.log(hor)
}
