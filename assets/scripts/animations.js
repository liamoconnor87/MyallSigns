$(document).ready(function(){

	// CREATES A FADE IN LOAD EFFECT FOR WEB PAGES
	$(".fade-in").delay(1200).animate({
        opacity: '1'
    });

	$(".fade-in-extd").delay(1400).animate({
        opacity: '1'
    });

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

    $(".gallery-page-fascia").click(function(){

        $(".fade-in").fadeOut(250);

        setTimeout(pageFadeOut, 251);

        // FUNCTION LOADS GALLERY HTML
        function pageFadeOut() {

            window.location.href = "gallery.html#fascia";
              
        }

    });

    $(".gallery-page-vehicle").click(function(){

        $(".fade-in").fadeOut(250);

        setTimeout(pageFadeOut, 251);

        // FUNCTION LOADS GALLERY HTML
        function pageFadeOut() {

            window.location.href = "gallery.html#vehicle";
              
        }

    });

    $(".gallery-page-vinyl").click(function(){

        $(".fade-in").fadeOut(250);

        setTimeout(pageFadeOut, 251);

        // FUNCTION LOADS GALLERY HTML
        function pageFadeOut() {

            window.location.href = "gallery.html#vinyl";
              
        }

    });

    $(".gallery-page-lettering").click(function(){

        $(".fade-in").fadeOut(250);

        setTimeout(pageFadeOut, 251);

        // FUNCTION LOADS GALLERY HTML
        function pageFadeOut() {

            window.location.href = "gallery.html#lettering";
              
        }

    });

});