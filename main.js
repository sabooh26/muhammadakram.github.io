// let nav = document.querySelector('#ul');
// window.onscroll = function(){
//   if(window.pageYOffset >= nav.offsetTop){
//     nav.style
//   }
// }
const menu = document.querySelector('.ul-desktop');
const button = document.getElementById('toggle-switch');
const icon = document.querySelector('.fas fa-bars');
button.addEventListener('click',e =>{
  if(e.target.classList.contains('fa-bars')){
    menu.style.display = 'block'
    closeMenu()
  }

  e.preventDefault();
})
function closeMenu(e){
  if(e.target.classList.contains('fa-bars')){
    menu.style.display = 'none'
  }
}
