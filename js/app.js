/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = Array.from(document.querySelectorAll("section"));
const navigationList = document.getElementById('navbar__list');
let sectionsCount = sections.length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isActiveSection(elem) {
    let section = elem.getBoundingClientRect();
    return (section.top >= 0);
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function creatSectionItem() {
    for (section of sections) {
        let sectionName = section.getAttribute('data-nav');
        let sectionLink = section.getAttribute('id');
        let sectionItem = document.createElement('li');
        sectionItem.innerHTML =`<a class="menu__link" href="#${sectionLink}">${sectionName}</a>`;
        navigationList.appendChild(sectionItem);
    }
}

// Add class 'active' to section when near top of viewport
// getting the largest value that's less or equal to the number
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeActive = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};
// adding the active class
const addActive = (conditional, section) => {
    if (conditional) {
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: coral;";
    };
};


const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;

        removeActive(section);
        addActive(inviewport(), section);
    });
};

window.addEventListener('scroll', sectionActivation);


// Scroll to anchor ID using scrollTO event
const scrollingToSection = () => {

    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for (i = 0; i < sections; i++) {
                sections[i].addEventListener("click", sectionScroll(link));
            }
        });
    });

};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
creatSectionItem();

// Scroll to section on link click

scrollingToSection();

// Set sections as active

