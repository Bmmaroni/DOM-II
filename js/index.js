// Your code goes here
const funBus = document.querySelector('img');

    funBus.addEventListener ('mouseenter', (e) => {
        funBus.style.transform = 'scale(.7)';
        funBus.style.transition = 'transform 1s';
    });

    funBus.addEventListener ('mouseleave', (e) => {
        funBus.style.transform = 'scale(1)';
    });

const logo = document.querySelector('.logo-heading');

    logo.addEventListener ('click', (e) => {
        e.stopPropagation();
        logo.style.color = 'forestgreen';
        logo.style.backgroundColor = 'black';
        logo.style.border = 'none';
    });

    logo.addEventListener ('dblclick', (e) => {
        logo.style.color = 'dodgerblue';
        logo.style.backgroundColor = 'white';
        logo.style.border = '3px solid dodgerblue';
    });

const bod = document.querySelector('body');

    bod.addEventListener('mouseover', (e) => {
        bod.style.backgroundColor = 'forestgreen';
    });

    bod.addEventListener('wheel', (e) => {
        bod.style.backgroundColor = 'hotpink';
    });

    bod.addEventListener('scroll', (e) => {
        bod.style.backgroundColor = 'black';
    });

const imgs = document.querySelectorAll('img');

    window.addEventListener('resize', (e) => {
        imgs.forEach((pic) => {
            pic.style.border = '5px dotted black';
        })
    });

const head = document.querySelector('header');

    head.addEventListener('click', (e) => {
        e.stopPropagation();
        head.style.backgroundColor = 'hotpink';
    });

const navs = document.querySelectorAll('a');

    navs[0].addEventListener('click', (e) => {
        e.preventDefault();
    });

    navs[1].addEventListener('click', (e) => {
        e.preventDefault();
    });

    navs[2].addEventListener('click', (e) => {
        e.preventDefault();
    });

    navs[3].addEventListener('click', (e) => {
        e.preventDefault();
    });

const para = document.querySelectorAll('p');

    document.addEventListener('auxclick', (e) => {
        para.forEach((par) => {
            par.style.color = "white";
        })
    });

    