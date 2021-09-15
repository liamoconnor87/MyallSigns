$(document).ready(function(){

	// CREATES A FADE IN LOAD EFFECT FOR WEB PAGES
	$(".fade-in").fadeIn(250);

	$(".fade-in-extd").fadeIn(600);

	// CREATES A FADE OUT EFFECT WHEN USER CLICKS A NAVIAGTION LINK
	// INDEX PAGE
	$(".index-page").click(function(){

        $(".fade-in").fadeOut(250);

        setTimeout(pageFadeOut, 251);

        // FUNCTION LOADS INDEX HTML
        function pageFadeOut() {

            window.location.href = "index.html";
              
        }

    });
    // CONTACT PAGE
	$(".contact-page").click(function(){

        $(".fade-in").fadeOut(250);

        setTimeout(pageFadeOut, 251);

        // FUNCTION LOADS CONTACT HTML
        function pageFadeOut() {

            window.location.href = "contact.html";
              
        }

    });
    // GALLERY PAGE
	$(".gallery-page").click(function(){

        $(".fade-in").fadeOut(250);

        setTimeout(pageFadeOut, 251);

        // FUNCTION LOADS GALLERY HTML
        function pageFadeOut() {

            window.location.href = "gallery.html";
              
        }

    });

});