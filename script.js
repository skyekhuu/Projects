//DARK MODE TOGGLE

const button = document.getElementById('darkMode');
const anchors = document.body.querySelectorAll('a');
const projects = document.body.querySelectorAll('.project');

let isDark = true;

    button.addEventListener('click', () => {
      isDark = !isDark;
      if (isDark){
        document.body.style.backgroundColor = '#141414';
        document.body.style.color = 'white';
        document.getElementById('darkMode').innerHTML = 'Light Mode';
        anchors.forEach(anchor => anchor.style.color = 'white');
        projects.forEach(project => project.style.backgroundColor = '#302f2f');
      }else{
        document.body.style.backgroundColor = '#d6d3d5';
        document.body.style.color = 'black';
        document.getElementById('darkMode').innerHTML = 'Dark Mode';
        anchors.forEach(anchor => anchor.style.color = 'black');
        projects.forEach(project => project.style.backgroundColor = '#e4e0e2');
      }
    }
    );



// EXPANDING SIDE NAVBAR FOR MOBILE DEVICES

// const openNavButton = document.getElementById('openNav');
// const closeNavButton = document.getElementById('closeNav');
// const navbar = document.getElementById('navbar');

// openNavButton.addEventListener('click', () => {
//   navbar.classList.add('open');
//   openNavButton.style.display = 'none';
// });

// closeNavButton.addEventListener('click', () => {
//   navbar.classList.remove('open');
//   openNavButton.style.display = '';
// });