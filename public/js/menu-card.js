// Scrollable Function
const scrollableDiv = document.querySelector('.menu-wrapper');
const chevronUp = document.querySelector('.menu-chevron--up');
const chevronDown = document.querySelector('.menu-chevron--down');

// Set up an array of menu options
const menuOptions = Array.from({ length: 10 }, (_, index) => document.getElementById(`mainMenuOption${index}`));

let isScrolling = false;

// Add a scroll event listener to the scrollable div
scrollableDiv.addEventListener('scroll', () => {
    // Use a timeout to wait for scrolling to finish
    if (isScrolling) {
        clearTimeout(isScrolling);
    }
    isScrolling = setTimeout(() => {
        // Check if the scrollable div is at the top
        chevronUp.style.display = scrollableDiv.scrollTop === 0 ? 'none' : 'block';

        // Check if the scrollable div is at the bottom
        chevronDown.style.display =
            scrollableDiv.scrollHeight - scrollableDiv.scrollTop <= scrollableDiv.clientHeight + 1
                ? 'none'
                : 'block';

        isScrolling = false;
    }, 100);
});

// Fadeout/In Function
const fadeInUpElement = (element, delay = 0) => {
    element.style.display = 'block';
    element.classList.add('animate__animated', 'animate__fadeInUp');
    setTimeout(() => {
        element.style.display = 'block';
        element.classList.remove('animate__animated', 'animate__fadeInUp');
    }, 1000);
};

const fadeOutUpElement = (element) => {
    element.classList.add('animate__animated', 'animate__fadeOutUp');
    setTimeout(() => {
        element.style.display = 'none';
        element.classList.remove('animate__animated', 'animate__fadeOutUp');
    }, 1000); // Adjust the delay as needed
};

const fadeInDownElement = (element, delay = 0) => {
    element.style.display = 'block';
    element.classList.add('animate__animated', 'animate__fadeInDown');
    setTimeout(() => {
        element.style.display = 'block';
        element.classList.remove('animate__animated', 'animate__fadeInDown');
    }, 1000);
};

const fadeOutDownElement = (element) => {
    element.classList.add('animate__animated', 'animate__fadeOutDown');
    setTimeout(() => {
        element.style.display = 'none';
        element.classList.remove('animate__animated', 'animate__fadeOutDown');
    }, 1000); // Adjust the delay as needed
};

// Logo Home - Page 0
var logoHome = document.getElementById('logo');

// Main Menu Options
var menuSelection = document.getElementById('menuSelection');
var menuSelectionClose = document.getElementById('menuSelectionClose');
var menuChevronDown = document.getElementById('mainMenuArrowBottom');
var menuOverlay = document.getElementById('bodyOverlay');

var mainMenuOptions = document.getElementById('mainMenuBody');
var mainMenuWrapper = document.getElementById('wrapperSet');

var mainMenuItem0 = document.getElementById('mainMenuItem0');
var mainMenuItem1 = document.getElementById('mainMenuItem1');
var mainMenuItem2 = document.getElementById('mainMenuItem2');
var mainMenuItem3 = document.getElementById('mainMenuItem3');
var mainMenuItem4 = document.getElementById('mainMenuItem4');
var mainMenuItem5 = document.getElementById('mainMenuItem5');
var mainMenuItem6 = document.getElementById('mainMenuItem6');
var mainMenuItem7 = document.getElementById('mainMenuItem7');
var mainMenuItem8 = document.getElementById('mainMenuItem8');
var mainMenuItem9 = document.getElementById('mainMenuItem9');

var mainMenuOption0 = document.getElementById('cardBodyZero');
var mainMenuOption1 = document.getElementById('cardBodyOne');
var mainMenuOption2 = document.getElementById('cardBodyTwo');
var mainMenuOption3 = document.getElementById('cardBodyThree');
var mainMenuOption4 = document.getElementById('cardBodyFour');
var mainMenuOption5 = document.getElementById('cardBodyFive');
var mainMenuOption6 = document.getElementById('cardBodySix');
var mainMenuOption7 = document.getElementById('cardBodySeven');
var mainMenuOption8 = document.getElementById('cardBodyEight');
var mainMenuOption9 = document.getElementById('cardBodyNine');

const menuOptionsClose = (element) => {
    mainMenuOption0.style.display = 'block';
    mainMenuOption1.style.display = 'none';
    mainMenuOption2.style.display = 'none';
    mainMenuOption3.style.display = 'none';
    mainMenuOption4.style.display = 'none';
    mainMenuOption5.style.display = 'none';
    mainMenuOption6.style.display = 'none';
    mainMenuOption7.style.display = 'none';
    mainMenuOption8.style.display = 'none';
    mainMenuOption9.style.display = 'none';
}

const menuClose = (element) => {
    menuSelectionClose.style.display = 'none';
    menuSelection.style.display = 'block';
    bodyOverlay.style.display = 'none';
    menuChevronDown.style.display = 'none';
    chevronUp.style.display = 'none';
    mainMenuWrapper.style.display = 'none';
    fadeOutDownElement(mainMenuOptions, 1000);
}

menuSelectionClose.addEventListener('click', () => {
    menuClose();
})
menuSelection.addEventListener('click', () => {
    menuSelectionClose.style.display = 'block';
    menuSelection.style.display = 'none';
    mainMenuOptions.style.display = 'block';
    qrClose();
    fadeInUpElement(mainMenuOptions, 2000);
    setTimeout(() => {
        menuChevronDown.style.display = 'block';
        // mainMenuWrapper.style.display = 'block';
    }, 1000);
    mainMenuWrapper.style.display = 'block';
    bodyOverlay.style.display = 'block';
});

logoHome.addEventListener('click', () => {
    menuOptionsClose();
    menuClose();
    mainMenuOption0.style.display = 'block';
})

mainMenuItem0.addEventListener('click', () => {
    menuOptionsClose();
    menuClose();
    mainMenuOption0.style.display = 'block';
})
mainMenuItem1.addEventListener('click', () => {
    menuOptionsClose();
    menuClose();
    mainMenuOption1.style.display = 'block';
})
mainMenuItem2.addEventListener('click', () => {
    menuOptionsClose();
    menuClose();
    mainMenuOption2.style.display = 'block';
})
mainMenuItem3.addEventListener('click', () => {
    menuOptionsClose();
    menuClose();
    mainMenuOption3.style.display = 'block';
})
mainMenuItem4.addEventListener('click', () => {
    menuOptionsClose();
    menuClose();
    mainMenuOption4.style.display = 'block';
})
mainMenuItem5.addEventListener('click', () => {
    menuOptionsClose();
    menuClose();
    mainMenuOption5.style.display = 'block';
})
mainMenuItem6.addEventListener('click', () => {
    menuOptionsClose();
    menuClose();
    mainMenuOption6.style.display = 'block';
})
mainMenuItem7.addEventListener('click', () => {
    menuOptionsClose();
    menuClose();
    mainMenuOption5.style.display = 'block';
})
mainMenuItem8.addEventListener('click', () => {
    menuOptionsClose();
    menuClose();
    mainMenuOption8.style.display = 'block';
})
mainMenuItem9.addEventListener('click', () => {
    menuOptionsClose();
    menuClose();
    mainMenuOption9.style.display = 'block';
})

var qrIcon = document.getElementById('qrIcon');
var qrIconClose = document.getElementById('qrIconClose');
var qrCode = document.getElementById('qrCode');
var overlay = document.getElementById('bodyOverlay');

const qrClose = (element) => {
    qrIconClose.style.display = 'none';
    qrIcon.style.display = 'block';
    overlay.style.display = 'none';
    fadeOutDownElement(qrCode, 1000);
    setTimeout(() => fadeOutDownElement(qrCode), 1000);
}

qrIcon.addEventListener('click', () => {
    menuClose();
    qrIcon.style.display = 'none';
    qrIconClose.style.display = 'block';
    overlay.style.display = 'block';
    qrCode.style.display = 'block';
    fadeInUpElement(qrCode, 1000);
    setTimeout(() => fadeInUpElement(qrCode), 1000);
});

qrIconClose.addEventListener('click', () => {
    qrClose();
});

bodyOverlay.addEventListener('click', () => {
    menuClose();
    qrClose();
});

