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