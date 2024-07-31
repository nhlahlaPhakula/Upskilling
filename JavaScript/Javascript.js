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


//HERO SLIDER FUNCTION
 
       //counter, onClick it increments 
       let counter = -1;

       //first we need to find all the classes with "homepageSlide"
       function findMatching() {
        let slideArray =  document.getElementsByClassName("homepageSlide");

        //we need a counter variable. counter and array indexing will work together
        counter++;
        
        //now we check the array for content with classes "homepageSlide"
        if(slideArray.length > 0) {

           //give the results found a new variable
           let slideValue = slideArray[counter].innerHTML;

           //display slidevalue based on onclick increment and array indexing
           document.getElementById('homepageSlider-container').innerHTML = slideValue;
        }else {
           console.log("No Match!");
           //document.getElementById("three-col-comp").innerHTML = "There is no match";
        }

       }

       //A js function to show slides on decrement
       function showPrevious() {
           
           //decrement variable
           counter--;

           //find content under "slide" class that matches the decrement
           let slideArray = document.getElementsByClassName("homepageSlide");

           //display others as long as previous button is clicked
           if (slideArray.length > 0) {
               
               //set a new variable for your results
               let slideValue = slideArray[counter].innerHTML;

               //display slidevalue based onclick decrement
               document.getElementById('homepageSlider-container').innerHTML = slideValue;
           }else {
               console.log("No Match!");
               //document.getElementById("three-col-comp").innerHTML = "There is no match";
           }

       }


//A JS SCRIPT TO DIABLE THE NEXT BUTTON
let count = 0;
//var button = document.getElementById("next");
function disableButton() {
    count++;

    //find all the staff with "slide" class
    let slideArray = document.getElementsByClassName("homepageSlide");

    let arraySize = slideArray.length;
    //console.log("Array Size: " + arraySize);
    if(count == arraySize - 1) {
        document.getElementById("nextBtn").disabled = true;
        console.log("Count:" + count);
    }else {
        //document.getElementById("next").disabled = false;
    };

    
}

//a function to enable the next button 

function enableButton() {
    count--;
    //find all the results under "slide" class
    let slideArray = document.getElementsByClassName("homepageSlide");

    let arraySize = slideArray.length;
    if(count < arraySize) {
        document.getElementById("nextBtn").disabled = false;
    };


}



//a function t disable the previous button
function disablePrev() {
    //count--;
    //find all the results under "slide" class

    if(count == 0) {
        document.getElementById("previous").disabled = true;
    }
}


//a function to enable the previous button
function enablePrev() {
    if(count > 0) {
        document.getElementById("previous").disabled = false;
    }
}



       


 
