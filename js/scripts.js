// Below is a sample of a good way to organize Javascript code, but
// please feel free to delete all of this and do you own thing!


/*
 * Scripts
 *
 * The functions are listed in alphabetical order and the index below
 * indicates where each function exists. They are then invoked in the
 * Running Functions section, which also lists the functions in
 * alphabetical order.
 *
 * 1. Functions
 *      1.1 First Function
 * 2. Running Functions
 *      2.1 Document Ready
 *      2.2 Window Load
 *      2.3 Window Scroll
 *      2.4 Window Resize
 */


// Wrapping everything in an IIFE to hide all functions and variables
// from being accessed or clashing with any third party javascript

(function( window, document, $ ) {
"use strict";

/* ==============================================================================================
 * 1. Functions
 * ============================================================================================== */

    /* ============================================================
     * 1.1 First Function
     * ============================================================ */
    function firstFunction() {

        
    }

/* ==============================================================================================
 * 2. Running Functions
 * ============================================================================================== */

    /* ============================================================
     * 2.1 Document Ready
     * ============================================================ */
    $( document ).ready( function() {
        $(function() {
            $('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                    }
                }
            });
        });
    }); 

    /* ============================================================
     * 2.2 Window Load
     * ============================================================ */
    window.onload = function() {

    // // Grab modal
    // // C2
    // var modal1 = document.getElementById('C2Modal');
    // // CMG
    // var modal2 = document.getElementById('CMGModal');
    // // VW
    // var modal3 = document.getElementById('VWModal');
    // // Portfolio
    // var modal4 = document.getElementById('PortModal');
    // // DS
    // var modal5 = document.getElementById('DSOModal');
    // var modal6 = document.getElementById('DSNModal');
    // // Design 2
    // var modal7 = document.getElementById('');
    // var modal8 = document.getElementById('');
    // // Design 3
    // var modal9 = document.getElementById('');
    // var modal10 = document.getElementById('');

    // // Get the button that opens the modal
    // // C2
    // var btn1 = document.getElementById("C2Btn");
    // // CMG
    // var btn2 = document.getElementById("CMGBtn");
    // // VW
    // var btn3 = document.getElementById("VWBtn");
    // // Port
    // var btn4 = document.getElementById("PortBtn");
    // // DS
    // var btn5 = document.getElementById("DSOBtn");
    // var btn6 = document.getElementById("DSNBtn");
    // // Design 2
    // var btn7 = document.getElementById("");
    // var btn8 = document.getElementById("");
    // // Design 3
    // var btn9 = document.getElementById("");
    // var btn10 = document.getElementById("");

    // // Get the <span> element that closes the modal
    // // C2
    // var span1 = document.getElementsByClassName("C2Close")[0];
    // // CMG
    // var span2 = document.getElementsByClassName("CMGClose")[0];
    // // VW
    // var span3 = document.getElementsByClassName("VWClose")[0];
    // // Port
    // var span4 = document.getElementsByClassName("PortClose")[0];
    // // DS
    // var span5 = document.getElementsByClassName("DSOClose")[0];
    // var span6 = document.getElementsByClassName("DSNClose")[0];
    // // Design 2
    // var span7 = document.getElementsByClassName("")[0];
    // var span8 = document.getElementsByClassName("")[0];
    // // Design 3
    // var span9 = document.getElementsByClassName("")[0];
    // var span10 = document.getElementsByClassName("")[0];

    // // When the user clicks on the button, open the modal 
    // btn1.onclick = function() {
    //     modal1.style.display = "block";
    // }
    // btn2.onclick = function() {
    //     modal2.style.display = "block";
    // }
    // btn3.onclick = function() {
    //     modal3.style.display = "block";
    // }
    // btn4.onclick = function() {
    //     modal4.style.display = "block";
    // }
    // btn5.onclick = function() {
    //     modal5.style.display = "block";
    // }
    // btn6.onclick = function() {
    //     modal6.style.display = "block";
    // }
    // btn7.onclick = function() {
    //     modal7.style.display = "block";
    // }
    // btn8.onclick = function() {
    //     modal8.style.display = "block";
    // }
    // btn9.onclick = function() {
    //     modal9.style.display = "block";
    // }
    // btn10.onclick = function() {
    //     modal10.style.display = "block";
    // }

    // // When the user clicks on <span> (x), close the modal
    // span1.onclick = function() {
    //     modal1.style.display = "none";
    // }
    // span2.onclick = function() {
    //     modal2.style.display = "none";
    // }
    // span3.onclick = function() {
    //     modal3.style.display = "none";
    // }
    // span4.onclick = function() {
    //     modal4.style.display = "none";
    // }
    // span5.onclick = function() {
    //     modal5.style.display = "none";
    // }
    // span6.onclick = function() {
    //     modal6.style.display = "none";
    // }
    // span7.onclick = function() {
    //     modal7.style.display = "none";
    // }
    // span8.onclick = function() {
    //     modal8.style.display = "none";
    // }
    // span9.onclick = function() {
    //     modal9.style.display = "none";
    // }
    // span10.onclick = function() {
    //     modal10.style.display = "none";
    // }

    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //     if (event.target == modal1) {
    //         modal1.style.display = "none";
    //     }
    //     if (event.target == modal2) {
    //         modal2.style.display = "none";
    //     }
    //     if (event.target == modal3) {
    //         modal3.style.display = "none";
    //     }
    //     if (event.target == modal4) {
    //         modal4.style.display = "none";
    //     }
    //     if (event.target == modal5) {
    //         modal5.style.display = "none";
    //     }
    //     if (event.target == modal6) {
    //         modal6.style.display = "none";
    //     }
    //     if (event.target == modal7) {
    //         modal7.style.display = "none";
    //     }
    //     if (event.target == modal8) {
    //         modal8.style.display = "none";
    //     }
    //     if (event.target == modal9) {
    //         modal9.style.display = "none";
    //     }
    //     if (event.target == modal10) {
    //         modal10.style.display = "none";
    //     }
    // }
};

    /* ============================================================
     * 2.3 Window Scroll
     * ============================================================ */
    $( window ).scroll( function() {

        
        
    });

    /* ============================================================
     * 2.4 Window Resize
     * ============================================================ */
    $( window ).resize( function() {

        

    });

}) ( window, document, jQuery );