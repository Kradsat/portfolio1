const toggleBtnIcons = document.querySelector('.toggle-icon');
const toggleBtntimes = document.querySelector('.times');
const toggleBtnBars = document.querySelector('.bars');


const linksContainer = document.querySelector('.links-container');
const navContainer = document.querySelector('.nav-links');

//getBoundaryClient();
function toggleIcons(){
    const LinksConstainerHeight = linksContainer.getBoundingClientRect().height;
    const navContainerHeight = navContainer.getBoundingClientRect().height;
    if(LinksConstainerHeight === 0){
        linksContainer.style.height = `${navContainerHeight}px`;
        toggleBtntimes.style.display = "block";
        toggleBtnBars.style.display = "none";
    }else if(LinksConstainerHeight === navContainerHeight){
        linksContainer.style.height = 0;
        toggleBtnBars.style.display = "block";
        toggleBtntimes.style.display = "none";
    }

}
toggleBtnIcons.addEventListener('click', toggleIcons);


// function sendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "anddres.a.1998@gmail.com",
//         Password : "Kuroko.1997",
//         To : 'anddres.a.1998@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "New Message from Contact Form",
//         Body : "Name: " + document.getElementById("name").value
//             + "<br> Email: " + document.getElementById("email").value
//             + "<br> Message: " + document.getElementById("message").value
//     }).then(
//       message => alert("Message Sent Succesfully")
//     );
// }
// // links items
// const links = document.querySelectorAll('.link');

// links.forEach(function (linksItem){
//     linksItem.addEventListener('click', function (item){
//         linksContainer.style.height = 0;
//         toggleBtntimes.style.display = "block";
//         toggleBtnBars.style.display = "none";
//     });
// });

const mySelf = document.querySelector('.my-self');
const switchBtn = document.querySelector('.switch-btn');
const playBall = document.querySelector('.play');
const stopBall = document.querySelector('.pause');


playBall.addEventListener('click', () => myfunction('play'));
stopBall.addEventListener('click', () => myfunction('stop'));

const myfunction = (state) => {

    if(state === 'play'){
        mySelf.classList.add('animate');
        playBall.style.display = 'none';
        stopBall.style.display = 'block';
    }
    else if(state === 'stop'){
        mySelf.classList.remove('animate');
        playBall.style.display = 'block';
        stopBall.style.display = 'none';
    }
}


// back to top icon functionality
const scrollLink = document.querySelector('.scroll-link');
window.addEventListener('scroll', function (){
    const topLink = window.pageYOffset;
    if(topLink > 500){
        scrollLink.classList.add('show-link');
    }else{
        scrollLink.classList.remove('show-link');
    }
});


// // auto type section
// let typed = new Typed('.auto-typed',{
//     strings: ['Andres,'],
//     typeSpeed: 220,
//     backSpeed: 220,
//     loop: true,
//  });