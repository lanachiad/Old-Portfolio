/*
 * Social Share Generator
 *
 * Grabbing anchor tags with data attributes to create custom
 * social share links based on dynamic content. All anchor tags
 * for sharing will have a data attribute (data-share-type) to
 * identify which social network to share to. The other attributes
 * are dependent upon the social network which are listed below.
 *
 * Facebook Attributes:
 *      data-url - URL of the page
 * Twitter Attributes:
 *      data-handle - Twitter handle of the client (optional)
 *      data-title - Title of the article
 *      data-url - URL of the page
 * Google Plus Attributes:
 *      data-url - URL of the page
 * Linkedin Attributes:
 *      data-title - Title of the article
 *      data-url - URL of the page
 * Email Attributes:
 *      data-title - Title of the article
 *      data-url - URL of the page
 *
 * 1. Functions
 *      1.1 email - Creating the link for an email share
 *      1.2 facebook - Creating the link for a Facebook share
 *      1.3 facilitate - Send to relevant function to create link
 *      1.4 googlePlus - Creating the link for a Google Plus share
 *      1.5 linkedin - Creating the link for a Linkedin share
 *      1.6 twitter - Creating the link for a Twitter share
 * 2. Invoking Facilitator
 *      2.1 Document Ready
 */


// Wrapping everything in an IIFE to hide the functions from the global
// scope and protect the $ alias of jQuery from any third-party javascript

(function ( window, document, $ ) {
"use strict";

/* ==============================================================================================
 * 1. Functions
 * ============================================================================================== */

    /* ============================================================
     * 1.? email - Creating the link for an email share
     * ============================================================ */

    function email ( element ) {

        var encodedURL = encodeURIComponent( element.data( 'url' ) ),
            title = element.data( 'title' ),
            emailURL = 'mailto:?&subject=' + title + '&body=' + encodedURL;

        window.open( emailURL, '_blank' );

    }

    /* ============================================================
     * 1.? facebook - Creating the link for a Facebook share
     * ============================================================ */

    function facebook ( element ) {

        var encodedURL = encodeURIComponent( element.data( 'url' ) ),
            facebookURL = 'http://www.facebook.com/sharer.php?u=' + encodedURL;

        window.open( facebookURL, '_blank' );

    }

    /* ============================================================
     * 1.? facilitate - Send to relevant function to create link
     * ============================================================ */

    function facilitate () {

        var anchors = $( '[data-share-type]' );

        anchors.on( 'click', function ( event ) {

            event.preventDefault();

            var shareType = $( this ).data( 'share-type' ),
                element = $( this );

            if ( shareType == 'email' ) {

                email( element );

            } else if ( shareType == 'facebook' ) {

                facebook( element );

            } else if ( shareType == 'google-plus' ) {

                googlePlus( element );

            } else if ( shareType == 'linkedin' ) {

                linkedin( element );

            } else if ( shareType == 'twitter' ) {

                twitter( element );

            }

        });

    }

    /* ============================================================
     * 1.? googlePlus - Creating the link for a Google Plus share
     * ============================================================ */

    function googlePlus ( element ) {

        var encodedURL = encodeURIComponent( element.data( 'url' ) ),
            googlePlusURL = 'https://plus.google.com/share?url=' + encodedURL;

        window.open( googlePlusURL, '_blank' );

    }

    /* ============================================================
     * 1.? linkedin - Creating the link for a Linkedin share
     * ============================================================ */

    function linkedin ( element ) {

        var encodedURL = encodeURIComponent( element.data( 'url' ) ),
            encodedTitle = encodeURIComponent( element.data( 'title' ) ),
            linkedinURL = 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodedURL + '&title=' + encodedTitle;

        window.open( linkedinURL, '_blank' );

    }

    /* ============================================================
     * 1.? twitter - Creating the link for a Twitter share
     * ============================================================ */

    function twitter ( element ) {

        var handle = element.data( 'handle' ),
            title = element.data( 'title' ),
            url = element.data( 'url' ),
            encodedTweet = encodeURIComponent( title + ' ' + url ),
            twitterURL = 'https://twitter.com/home?status=' + encodedTweet;

        if ( handle != '' && handle != undefined ) {

            encodedTweet = encodeURIComponent( title + ' via @' + handle + ' ' + url );
            twitterURL = 'https://twitter.com/home?status=' + encodedTweet;

        }

        window.open( twitterURL, '_blank' );

    }

/* ==============================================================================================
 * 2. Invoking Facilitator
 * ============================================================================================== */

    /* ============================================================
     * 2.1 Document Ready
     * ============================================================ */
    $( document ).ready( function() {

        facilitate();

    });

}) ( window, document, jQuery );