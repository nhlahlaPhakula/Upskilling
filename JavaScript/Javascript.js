//This is my JS File

//JS Script for Hamburger style menu
function humburgerMenu(y) {
    y.classList.toggle("colapseMenu");
}



//A JS SCRIPT FOR SCROLL PROGRESS BAR
    
    // window.onscroll = function() {moveColor()};
 
var viewportHeight = window.innerHeight;
 
    //var scrollHeight = viewportHeight * (viewportHeight / document.body.offsetHeight);
 
 
function moveColor () {
                
 
    //Scroll progress bar
 
    //First we get the scroller value
    var windowScroll = document.body.scrollTop;
    //We now find the height difference between the entire page and the viewport
    var height = document.documentElement.scrollHeight - viewportHeight;
    //Scroll percentage
    var scrolledPercentage = (windowScroll / height) * 100;
    //console.log('Scrolled Percentage: ' + scrolledPercentage + '%');
    document.getElementById("pgrBar").style.width = scrolledPercentage + "%";
               
}


//JS FOR Drop Down Accordion

    function expandAns(x) {
        x.classList.toggle("changeState");
    }

//JS Script for Hamburger style menu
    function humburgerMenu(y) {
        y.classList.toggle("colapseMenu");
    }

//A JS script for the profile icon
    function displayProfile (x) {
        x.classList.toggle("colapseProfile");
    }

//    A JS SCRIPT FOR MORE FAQ ON MOBILE-->
    function showFaq (x) {
        x.classList.toggle("showFaqDetails");
    }


//A JS FUNCTION TO GET THE BUTTON TO DISAPPEAR ON-CLICK

    function btnDisappear() {
        document.getElementById("moreBtn").style.display = "none";
        document.getElementById("moreTvMovies").style.display = "block";
    }


//A JS SCRIPT TO REDIRECT/OPEN DESCRIPTION PAGE-->

    function openNewPage() {
        redirect.
            window.location.href = '../Pages/MovieDescription.html';
    }


//A JS FOR DROPDOWN FOR ARTICLE ACCORDION
    function articleAccordion(x) {
        x.classList.toggle("contactDetails");
    }

//Overlay functions for our popup-->
    function overlayOn() {
        document.getElementById("overlayContainer").style.display = "block";
    }

    function overlayOff() {
        document.getElementById("overlayContainer").style.display = "none";
    }

 
