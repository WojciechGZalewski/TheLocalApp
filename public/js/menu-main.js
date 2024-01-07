// import '@fortawesome/fontawesome-free/css/all.css';
// Splash Screen
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var splashScreen = document.getElementById('splash-screen');
        splashScreen.style.opacity = '0';
        setTimeout(function () {
            splashScreen.style.display = 'none';
        }, 500); // Adjust the delay to match the transition duration
    }, 1000); // Adjust the time for the splash screen to disappear (in milliseconds)
});

// Cookie Policies
function showCookiePolicies() {
    var cookiePolicies = document.getElementById('cookiePolicies');
    cookiePolicies.style.display = 'flex';

    // You can add your cookie policies content here
}

function dismissCookieDiv() {
    var cookieDiv = document.getElementById('cookieDiv');
    cookieDiv.style.display = 'none';

    // Set a cookie to indicate that the user has seen the warning
    document.cookie = 'cookieWarningSeen=true; max-age=' + (60 * 60 * 24 * 365); // Set the cookie to last for one year
}

function dismissCookiePolicies() {
    var cookiePolicies = document.getElementById('cookiePolicies');
    cookiePolicies.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    var cookieDiv = document.getElementById('cookieDiv');

    // Check if the cookie warning has been seen
    var hasSeenCookieWarning = document.cookie.includes('cookieWarningSeen=true');

    // If it's the first visit, show the cookie warning div
    if (!hasSeenCookieWarning) {
        cookieDiv.style.display = 'flex';
    }
});

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default browser prompt
    event.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = event;
    // Display your custom prompt
    showAddToHomeScreenPrompt();
});

function showAddToHomeScreenPrompt() {
    // Display your custom prompt UI (you need to implement this)
    // For example, show a modal or a banner with "Add Now" and "Dismiss" buttons
    const promptContainer = document.getElementById('addToHomeScreenPrompt');
    promptContainer.style.display = 'block';

    // Add event listeners to your buttons
    const addButton = document.getElementById('addToHomeScreenButton');
    addButton.addEventListener('click', () => {
        // Trigger the deferred prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            // Reset the deferredPrompt
            deferredPrompt = null;
            // Hide the custom prompt
            promptContainer.style.display = 'none';
        });
    });

    const dismissButton = document.getElementById('dismissButton');
    dismissButton.addEventListener('click', () => {
        // Hide the custom prompt
        promptContainer.style.display = 'none';
    });
}

// Full Screen Button
function toggleFullScreen() {
    const element = document.documentElement;
    const fullscreenButton = document.getElementById('fullscreenButton');

    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        // Enter full-screen mode
        if (element.requestFullscreen) {
            element.requestFullscreen().then(() => updateButton(fullscreenButton));
        } else if (element.webkitRequestFullscreen) { /* Safari */
            element.webkitRequestFullscreen().then(() => updateButton(fullscreenButton));
        } else if (element.msRequestFullscreen) { /* IE11 */
            element.msRequestFullscreen().then(() => updateButton(fullscreenButton));
        }
    } else {
        // Exit full-screen mode
        if (document.exitFullscreen) {
            document.exitFullscreen().then(() => updateButton(fullscreenButton));
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen().then(() => updateButton(fullscreenButton));
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen().then(() => updateButton(fullscreenButton));
        }
    }
}

function updateButton(button) {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        button.textContent = 'Exit Full Screen Mode';
    } else {
        button.textContent = 'Enter Full Screen Mode';
    }
}

document.addEventListener('fullscreenchange', () => updateButton(document.getElementById('fullscreenButton')));
document.addEventListener('webkitfullscreenchange', () => updateButton(document.getElementById('fullscreenButton'))); // For Safari
document.addEventListener('MSFullscreenChange', () => updateButton(document.getElementById('fullscreenButton'))); // For IE11

function isFullScreen() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
}

function reloadPageInFullScreen() {
    if (isFullScreen()) {
        if (document.exitFullscreen) {
            document.exitFullscreen().then(() => location.reload());
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen().then(() => location.reload());
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen().then(() => location.reload());
        }
    } else {
        location.reload();
    }
}

// Share API
// var shareButton = document.getElementById('shareButtonMobile');

// shareButton.addEventListener("click", async () => {
//     try {
//         await navigator.share({
//             title: "TheLocalApp",
//             url: "https://www.thelocalapp.co.uk",
//         });
//         console.log("Thanks for sharing!");
//     } catch (error) {
//         console.error("Error sharing:", error);
//         // Fallback or handle the error
//     }
// });
// Get the share button and the share button for computers

// const shareButton = document.getElementById('shareButton');
// const shareButtonComputer = document.getElementById('shareButtonComputer');

// // Check if the Web Share API is supported by the browser
// if (navigator.share) {
//     // Web Share API is supported, show native share button
//     shareButton.addEventListener('click', () => {
//         navigator.share({
//             title: 'Share Title',
//             text: 'Share Text',
//             url: 'https://example.com'
//         })
//             .then(() => console.log('Successful share'))
//             .catch((error) => console.log('Error sharing:', error));
//     });
// } else {
//     // Web Share API is not supported, show computer share button
//     shareButton.style.display = 'none'; // Hide native share button
//     shareButtonComputer.style.display = 'block';

//     // Add click event for computer share button
//     shareButtonComputer.addEventListener('click', () => {
//         // Add your logic for computer share here
//         console.log('Share on computer');
//     });
// }

// Variables Declaration
var logoHome = document.getElementById('logoHome');
var map = document.getElementById('map');

var bodyOverlay = document.getElementById('bodyOverlay');

// Scrollable Function
function setupScrollableDiv(scrollableDivId, chevronUpId, chevronDownId) {
    const scrollableDiv = document.getElementById(scrollableDivId);
    const chevronUp = document.getElementById(chevronUpId);
    const chevronDown = document.getElementById(chevronDownId);

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
}

// Set up scrollable divs
setupScrollableDiv('set0', 'mainMenuArrowTop', 'mainMenuArrowBottom');
setupScrollableDiv('set1', 'mainMenuArrowTop', 'mainMenuArrowBottom');
setupScrollableDiv('set2', 'mainMenuArrowTop', 'mainMenuArrowBottom');

// Fade Effect
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

const fadeInDownElement = (element) => {
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

const fadeInElement = (element, delay = 0, callback) => {
    element.style.display = 'block';
    element.classList.add('animate__animated', 'animate__fadeIn');
    setTimeout(() => {
        element.style.display = 'block';
        element.classList.remove('animate__animated', 'animate__fadeIn');
        if (callback) {
            callback();
        }
    }, 1000 + delay);
};

// Home
logoHome.addEventListener('click', function () {
    // mainMenuOption1.style.display = 'none';
    map.style.display = 'block';
    welcomeDivResident.style.display = 'none';
    welcomeDivVisitor.style.display = 'none';
    welcomeDivOutsider.style.display = 'none';
})
// Help
var helpButton = document.getElementById('helpButton');
var helpButtonClose = document.getElementById('helpButtonClose');
var helpCardTopLeft = document.getElementById('helpCardTopLeft');

var helpCardTopRight = document.getElementById('helpCardTopRight');
var helpCardBottomLeft = document.getElementById('helpCardBottomLeft');
var helpCardBottomRight = document.getElementById('helpCardBottomRight');
const locationWelcomeUnderlay = document.getElementById('locationWelcomeUnderlay');

const helpClose = () => {
    helpButton.style.display = 'block';
    helpButtonClose.style.display = 'none';
    helpCardTopLeft.style.display = 'none';
    helpCardTopRight.style.display = 'none';
    helpCardBottomLeft.style.display = 'none';
    helpCardBottomRight.style.display = 'none';
    locationWelcomeUnderlay.style.display = 'none';
    bodyOverlay.style.display = 'none';
};

helpButton.addEventListener('click', () => {
    shareClose();
    menuClose();
    locationClose();
    fadeInUpElement(helpCardTopLeft, 1000);
    fadeInUpElement(helpCardTopRight, 1000);
    fadeInDownElement(helpCardBottomLeft, 1000);
    fadeInDownElement(helpCardBottomRight, 1000);
    locationWelcomeUnderlay.style.display = 'block';
    locationWelcomeUnderlay.classList.add('animate__animated', 'animate__fadeIn');
    locationWelcomeUnderlay.addEventListener('animationend', () => {
        locationWelcomeUnderlay.classList.remove('animate__animated', 'animate__fadeIn');
    });
    helpButton.style.display = 'none';
    helpButtonClose.style.display = 'block';
    bodyOverlay.style.display = 'block';
})
helpButtonClose.addEventListener('click', () => {
    helpClose();
    helpButton.style.display = 'block';
})

// Welcome divs
const welcomeDivResident = document.getElementById('welcomeResident');
const welcomeDivVisitor = document.getElementById('welcomeVisitor');
const welcomeDivOutsider = document.getElementById('welcomeOutsider');
const welcomeDivNotSelected = document.getElementById('set3');

// Function to set a cookie with a given name, value, and expiration date
const locationOptionResident = document.getElementById('menuOptionResident');
const locationOptionVisitor = document.getElementById('menuOptionVisitor');
const locationOptionOutsider = document.getElementById('menuOptionOutsider');
// const locationOptionNotSelected = document.getElementById('menuOptionNotSelected');

// Function to hide all welcome divs
function hideWelcomeDivs() {
    welcomeDivResident.style.display = 'none';
    welcomeDivVisitor.style.display = 'none';
    welcomeDivOutsider.style.display = 'none';
    welcomeDivNotSelected.style.display = 'none';
}

// Function to show the welcome div based on the location
function showWelcomeDiv(location) {
    welcomeDivResident.style.display = (location === '0') ? 'block' : 'none';
    welcomeDivVisitor.style.display = (location === '1') ? 'block' : 'none';
    welcomeDivOutsider.style.display = (location === '2') ? 'block' : 'none';
    welcomeDivNotSelected.style.display = (location === '3') ? 'block' : 'none';
}

const sets = document.querySelectorAll('.option-set');

function setCookie(name, value, days) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
}

// Function to get the value of a cookie by name
function getCookie(name) {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName)) {
            return cookie.substring(cookieName.length);
        }
    }
    return null;
}

// Location Selector
var locationOptions = document.getElementById('locationOptions');
var locationOptionsClose = document.getElementById('locationOptionsClose');
var locationMenuBody = document.getElementById('locationMenuBody');

const locationClose = () => {
    bodyOverlay.style.display = 'none';  // Hide overlay first
    locationOptions.style.display = 'block';
    locationOptionsClose.style.display = 'none';
    fadeOutDownElement(locationMenuBody, 1000);
};

locationOptions.addEventListener('click', function () {
    helpClose();
    shareClose();
    menuClose();
    bodyOverlay.style.display = 'block';  // Show overlay first
    locationOptions.style.display = 'none';
    locationOptionsClose.style.display = 'block';
    fadeInUpElement(locationMenuBody, 1000);
});

locationOptionsClose.addEventListener('click', function () {
    locationClose();
});

locationOptionResident.addEventListener('click', function () {
    locationClose();
    handleLocationOptionClick('0');
    showWelcomeDiv('0'); // Show the welcome div for residents dynamically
});

locationOptionVisitor.addEventListener('click', function () {
    locationClose();
    handleLocationOptionClick('1');
    showWelcomeDiv('1'); // Show the welcome div for visitors dynamically
});

locationOptionOutsider.addEventListener('click', function () {
    locationClose();
    handleLocationOptionClick('2');
    showWelcomeDiv('2'); // Show the welcome div for outsiders dynamically
});

// Function to handle location option click
function handleLocationOptionClick(location) {
    setCookie('selectedLocation', location, 30);
    showMainMenuSet(location);
    // Call the function to handle the display of additional elements
    handleLocationSelection();
}

// Function to show the corresponding set of options in the main menu
function showMainMenuSet(location) {
    sets.forEach(set => {
        set.style.display = 'none';
    });

    const selectedSet = document.getElementById(`set${location}`);
    if (selectedSet) {
        selectedSet.style.display = 'block';
    }
}

// Function to handle location selection
function handleLocationSelection() {
    const selectedLocation = getCookie('selectedLocation');

    // Hide all sets initially
    sets.forEach(set => {
        set.style.display = 'none';
    });

    if (selectedLocation) {
        // Location already selected, hide the elements
        locationWelcomeUnderlay.style.display = 'none';
        helpCardTopLeft.style.display = 'none';
        welcomeDivNotSelected.style.display = 'none';  // Hide the "Not Selected" div

        // Display the corresponding set based on the selected location
        const selectedSet = document.getElementById(`set${selectedLocation}`);
        if (selectedSet) {
            selectedSet.style.display = 'block';
        }
    } else {
        // Location not selected, show the elements
        locationWelcomeUnderlay.style.display = 'block';
        helpCardTopLeft.style.display = 'block';
        welcomeDivNotSelected.style.display = 'block';  // Show the "Not Selected" div
        showWelcomeDiv('3');  // Display the "Not Selected" div
    }
}

// Call the function to handle the initial state
handleLocationSelection();

// Main Menu Functions
var menuSelection = document.getElementById('menuSelection');
var menuSelectionClose = document.getElementById('menuSelectionClose');
var menuBodyFader = document.querySelector('menu-body--fader');
var removeMap = document.getElementById('map');
var menuChevronDown = document.getElementById('mainMenuArrowBottom');
var cardClose = document.querySelector('card');

var mainMenuOptions = document.getElementById('mainMenuBody');

var menuItems = Array.from(document.querySelectorAll('[id^="mainMenuItem"]'));
var menuOptions = Array.from(document.querySelectorAll('[id^="cardTemplate"]'));

// Function to close all menu options
function closeAllMenuOptions() {
    menuOptions.forEach(option => {
        option.style.display = 'none';
        map.style.display = 'none';
    });
}

// Helper function to set up event listener for each menu item
function setupMenuItemEventListeners(index) {
    var menuItem = document.getElementById(`mainMenuItem${index}`);
    var menuOption = document.getElementById(`cardTemplate${index}`);

    menuItem.addEventListener('click', () => {
        menuClose();
        removeMap.style.display = 'none';
        closeAllMenuOptions(); // Close all other options
        menuOption.style.display = 'block'; // Display the clicked option
    });
}

// Set up event listeners for each menu item
for (let i = 0; i < 30; i++) {
    setupMenuItemEventListeners(i);
}

const menuClose = () => {
    menuSelectionClose.style.display = 'none';
    menuSelection.style.display = 'block';
    menuChevronDown.style.display = 'none';
    bodyOverlay.style.display = 'none';
    welcomeDivResident.style.display = 'none';
    welcomeDivVisitor.style.display = 'none';
    welcomeDivOutsider.style.display = 'none';
    fadeOutDownElement(mainMenuOptions, 1000);
};

menuSelection.addEventListener('click', function () {
    helpClose();
    shareClose();
    locationClose();
    menuSelectionClose.style.display = 'block';
    menuSelection.style.display = 'none';
    setTimeout(() => {
        menuChevronDown.style.display = 'block';
    }, 1000);
    bodyOverlay.style.display = 'block';
    mainMenuOptions.style.display = 'block'
    fadeInUpElement(mainMenuOptions, 1000);
});

menuSelectionClose.addEventListener('click', function () {
    menuClose();
});

// Function to close all menu options
function closeAllMenuOptions() {
    menuOptions.forEach(option => {
        option.style.display = 'none';
    });
}

// Event listener for each menu item
menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener('click', () => {
        menuClose();
        removeMap.style.display = 'none';
        closeAllMenuOptions(); // Close all other options
        menuOptions[index].style.display = 'block'; // Display the clicked option
    });
});

// Set up event listeners for each menu item
for (let i = 0; i < 30; i++) {
    setupMenuItemEventListeners(i);
}

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
    menuClose();
    locationClose();
    helpClose();
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

bodyOverlay.addEventListener('click', () => {
    bodyOverlay.style.display = 'none';
    locationClose();
    menuClose();
    helpClose();
    shareClose();
    helpButton.style.display = 'block';
});

