
// Scrollable Function
const scrollableDiv = document.getElementById('menuBody');
const chevronUp = document.getElementById('menuArrowTop');
const chewdonDown = document.qgetElementById('menuArrowBottom');
let isScrolling = false;

// Add a scroll event listener to the scrollable div
scrollableDiv.addEventListener('scroll', () => {
    // Use a timeout to wait for scrolling to finish
    if (isScrolling) {
        clearTimeout(isScrolling);
    }
    isScrolling = setTimeout(() => {
        // Check if the scrollable div is at the top
        if (scrollableDiv.scrollTop === 0) {
            chevronUp.style.transition = 'visibility 0s 2s, opacity 1s linear';
            chevronUp.style.display = 'none';
        } else {
            chevronUp.style.display = 'block';
        }

        // Check if the scrollable div is at the bottom
        if (scrollableDiv.scrollHeight - scrollableDiv.scrollTop <= scrollableDiv.clientHeight + 1) {
            chewdonDown.style.transition = 'visibility 0s 2s, opacity 1s linear';
            chewdonDown.style.display = 'none';
        } else {
            chewdonDown.style.display = 'block';
        }

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


// Home
var logoHome = document.getElementById('logoHome');

var map = document.getElementById('map');

// Home
logoHome.addEventListener('click', function () {
    map.style.display = 'block';
})

// Manin Menu
// Location Selector
var locationOptions = document.getElementById('locationOptions');
var locationOptionsClose = document.getElementById('locationOptionsClose');

var locationIconResident = document.getElementById('locationIconResident');
var locationIconVisitor = document.getElementById('locationIconVisitor');
var locationIconOutsider = document.getElementById('locationIconOutsider');

const locationClose = (element) => {
    locationSelection.style.display = 'block';
    locationSelectionClose.style.display = 'none';
    bodyOverlay.style.display = 'none';
    fadeOutUpElement(locationOptions, 1000);
};

locationSelection.addEventListener('click', function () {
    locationSelection.style.display = 'none';
    locationSelectionClose.style.display = 'block';
    bodyOverlay.style.display = 'block';
    fadeInDownElement(locationOptions, 1000);
})
locationIconResident.addEventListener('click', function () {
    locationClose();
})
locationIconVisitor.addEventListener('click', function () {
    locationClose();
})
locationIconOutsider.addEventListener('click', function () {
    locationClose();
})

locationSelectionClose.addEventListener('click', function () {
    locationClose();
    fadeOutUpElement(locationOptions, 1000);
})

// Main Menu Options
var menuSelection = document.getElementById('menuSelection');
var menuSelectionClose = document.getElementById('menuSelectionClose');
var menuChevronDown = document.getElementById('mainMenuArrowBottom');
var menuOverlay = document.getElementById('bodyOverlay');

var mainMenuOptions = document.getElementById('mainMenuBody');

var mainMenuIcon1 = document.getElementById('mainMenuIcon1');
var mainMenuIcon2 = document.getElementById('mainMenuIcon2');
var mainMenuIcon3 = document.getElementById('mainMenuIcon3');
var mainMenuIcon4 = document.getElementById('mainMenuIcon4');
var mainMenuIcon5 = document.getElementById('mainMenuIcon5');
var mainMenuIcon6 = document.getElementById('mainMenuIcon6');
var mainMenuIcon7 = document.getElementById('mainMenuIcon7');

var bodyOverlay = document.getElementById('bodyOverlay');

const menuClose = (element) => {
    menuSelectionClose.style.display = 'none';
    menuSelection.style.display = 'block';
    bodyOverlay.style.display = 'none';
    menuChevronDown.style.display = 'none';
    fadeOutUpElement(mainMenuOptions, 1000);
}

menuSelection.addEventListener('click', () => {
    menuSelectionClose.style.display = 'block';
    menuSelection.style.display = 'none';
    mainMenuOptions.style.display = 'block';
    bodyOverlay.style.display = 'block';
    fadeInDownElement(mainMenuOptions, 1000);
    setTimeout(() => {
        menuChevronDown.style.display = 'block';
    }, 1000);
});

menuSelectionClose.addEventListener('click', () => {
    menuClose();
})
mainMenuIcon1.addEventListener('click', () => {
    menuClose();
})
mainMenuIcon2.addEventListener('click', () => {
    menuClose();
})
mainMenuIcon3.addEventListener('click', () => {
    menuClose();
})
mainMenuIcon4.addEventListener('click', () => {
    menuClose();
})
mainMenuIcon5.addEventListener('click', () => {
    menuClose();
})
mainMenuIcon6.addEventListener('click', () => {
    menuClose();
})
mainMenuIcon7.addEventListener('click', () => {
    menuClose();
})

// Share Selector
var shareSelection = document.getElementById('shareButtonComp');
var shareSelectionClose = document.getElementById('shareButtonCompClose');
var shareOptions = document.getElementById('shareOptions');

var shareOption1 = document.getElementById('facebook');
var shareOption2 = document.getElementById('ex');
var shareOption3 = document.getElementById('google');
var shareOption4 = document.getElementById('linkedin');
var shareOption5 = document.getElementById('pintrest');
var shareOption6 = document.getElementById('print');
var shareOption7 = document.getElementById('email');

const shareClose = (element) => {
    shareSelection.style.display = 'block';
    shareSelectionClose.style.display = 'none';
    bodyOverlay.style.display = 'none';
    fadeOutDownElement(shareOptions, 1000);
};

shareSelection.addEventListener('click', () => {
    shareSelection.style.display = 'none';
    shareSelectionClose.style.display = 'block';
    shareOptions.style.display = 'block';
    bodyOverlay.style.display = 'block';
    fadeInUpElement(shareOptions, 1000);
})
shareSelectionClose.addEventListener('click', () => {
    shareClose();
})
shareOption1.addEventListener('click', () => {
    shareClose();
})
shareOption2.addEventListener('click', () => {
    shareClose();
})
shareOption3.addEventListener('click', () => {
    shareClose();
})
shareOption4.addEventListener('click', () => {
    shareClose();
})
shareOption5.addEventListener('click', () => {
    shareClose();
})
shareOption6.addEventListener('click', () => {
    shareClose();
})
shareOption7.addEventListener('click', () => {
    shareClose();
})
// Help
var helpButton = document.getElementById('helpButton');
var helpButtonClose = document.getElementById('helpButtonClose');

var helpCardTopLeft = document.getElementById('helpCardTopLeft');
var helpCardTopRight = document.getElementById('helpCardTopRight');
var helpCardBottomLeft = document.getElementById('helpCardBottomLeft');
var helpCardBottomRight = document.getElementById('helpCardBottomRight');
var helpCardCentre = document.getElementById('helpCardCentre');

const helpClose = (element) => {
    helpButton.style.display = 'block';
    helpButtonClose.style.display = 'none';
    helpCardTopLeft.style.display = 'none';
    helpCardTopRight.style.display = 'none';
    helpCardBottomLeft.style.display = 'none';
    helpCardBottomRight.style.display = 'none';
    helpCardCentre.style.display = 'none';
    bodyOverlay.style.display = 'none';
}

helpButton.addEventListener('click', () => {
    fadeInUpElement(helpCardTopLeft, 1000);
    fadeInUpElement(helpCardTopRight, 1000);
    fadeInDownElement(helpCardBottomLeft, 1000);
    fadeInDownElement(helpCardBottomRight, 1000);

    helpCardCentre.style.display = 'block';
    helpCardCentre.classList.add('animate__animated', 'animate__fadeIn');
    helpCardCentre.addEventListener('animationend', () => {
        helpCardCentre.classList.remove('animate__animated', 'animate__fadeIn');
    });

    helpButton.style.display = 'none';
    helpButtonClose.style.display = 'block';
    bodyOverlay.style.display = 'block';
})
helpButtonClose.addEventListener('click', () => {
    helpClose();
})

bodyOverlay.addEventListener('click', () => {
    bodyOverlay.style.display = 'none';
    locationClose();
    menuClose();
    helpClose();
    shareClose();
    fadeOutUpElement(locationOptions, 1000);
});
// Card Menu
// Card Event Listeners
var menuButton = document.getElementById('menuButton');
var menuButtonClose = document.getElementById('menuButtonClose');
var menuBody = document.getElementById('menuBody');
var menuChevronDown = document.getElementById('menuArrowBottom');
var menuOverlay = document.getElementById('overlay');

const cardMenuClose = (element) => {
    menuOverlay.style.display = 'none';
    menuButtonClose.style.display = 'none';
    menuChevronDown.style.display = 'none';
    menuButton.style.display = 'block';
    fadeOutUpElement(menuBody, 1000);
}

menuButton.addEventListener('click', () => {
    menuBody.style.display = 'block';
    menuButton.style.display = 'none';
    menuOverlay.style.display = 'block';
    menuButtonClose.style.display = 'block';

    fadeInDownElement(menuBody, 1000);

    setTimeout(() => fadeInDownElement(menuChevronDown), 1000);
});

menuButtonClose.addEventListener('click', () => {
    cardMenuClose();
});

menuOverlay.addEventListener('click', () => {
    cardMenuClose();
});

var qrIcon = document.getElementById('qrIcon');
var qrIconClose = document.getElementById('qrIconClose');
var qrCode = document.getElementById('qrCode');
var overlay = document.getElementById('overlay');

const qrClose = (element) => {
    overlay.style.display = 'none';
    qrIconClose.style.display = 'none';
    qrIcon.style.display = 'block';

    fadeOutDownElement(qrCode, 1000);

    setTimeout(() => fadeOutDownElement(qrCode), 1000);
}

qrIcon.addEventListener('click', () => {
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

overlay.addEventListener('click', () => {
    qrClose();
});
