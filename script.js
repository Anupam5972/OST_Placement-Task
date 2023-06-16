//Smooth Scrolling
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});


function loadJob(url) {
    document.getElementById('jobFrame').src = url;
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Function to show or hide the back-to-top button based on the scroll position
function toggleBackToTopButton() {
    var backToTopButton = document.getElementById("back-to-top-button");
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// Event listener to toggle the back-to-top button visibility on scroll
window.addEventListener("scroll", toggleBackToTopButton);
