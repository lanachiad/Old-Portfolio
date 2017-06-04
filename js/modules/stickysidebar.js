/*
 * Sticky Sidebar Module
 *
 * The object section contains all of the logic for the sticky
 * sidebar and the plugin section is receiving the selector for
 * the sticky element and instantiating a new object, creating
 * the sticky action. Each method/property in the object is in
 * alphabetical order and listed in the index below:
 *
 * 1. Creating The Sticky Object
 *      1.1 calcHeight - Calculating Height of Set of Elements
 *      1.2 equalHeight - Getting Elements and Setting Height
 *      1.3 makeSticky - Setting the CSS to Make Element Sticky
 *      1.4 init - Initializing Sticky Sidebar
 *      1.5 runFunctions - Running Functions
 *      1.6 setLength - Setting the Length and Offset
 *      1.7 setOptions - Setting Options
 * 2. Setting Up The jQuery Plugin
 */

 // Before we start (for browser compatibility purposes), creating
 // the Object.create method in case it doesn't exist because we
 // are using it in the code below. Using Object.create instead
 // of the new keyword because we don't need a contructor function
 // and listing methods in an object rather than a prototype is much
 // more cleaner

 if ( typeof Object.create !== 'function' ) {

    Object.create = function ( obj ) {

        function F() {}
        F.prototype = obj;

        return new F();

    };

}


// Wrapping everything in an IIFE to hide the object and protect the
// $ alias of jQuery from any third-party javascript

(function ( window, document, $ ) {
"use strict";

/* ==============================================================================================
 * 1. Creating The Sticky Object
 * ============================================================================================== */

    var Sticky = {

        /* ============================================================
         * 1.1 calcHeight - Calculating Height of Set of Elements
         * ============================================================ */

        calcHeight: function ( elements, callback ) {

            // Looping through elements, calculating which element is the
            // tallest and setting all of the elements to the tallest height.
            // Once the height is set, run the callback that will calculate
            // the length that the element has to travel

            var stickyObject = this,
                currentTallest = 0,
                currentDiv,
                rowDivs = new Array(),
                element,
                i = 0;

            $.each( elements, function() {

                i++;

                element = $( this );
                $( element ).outerHeight( 'auto' );

                rowDivs.push( element );
                currentTallest = ( currentTallest < element.outerHeight() ) ? ( element.outerHeight() ) : ( currentTallest );
           
                for ( currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++ ) {

                    rowDivs[ currentDiv ].outerHeight( currentTallest );

                }

                // Once the loop is at its last element, run the callback

                if ( i == $( elements ).length && typeof callback == 'function' ) {

                    callback( stickyObject );

                }

            });

        },

        /* ============================================================
         * 1.2 equalHeight - Getting Elements and Setting Height
         * ============================================================ */

        equalHeight: function () {

            // Pushing the elements adjacent to the container to an elements
            // array and calling the calcHeight function to set the height
            // of each element. If there is a queryWidth set, then set the
            // height unless the viewport width is less than the query width

            // using this instead of $( window ).width() for accuracy

            var stickyObject = this,
                windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                elements = new Array(),
                siblings = stickyObject.settings.element.parent().siblings(),
                queryWidth = stickyObject.settings.queryWidth;

            elements.push( stickyObject.settings.container );

            $.each( siblings, function () {

                elements.push( $( this ) );

            });

            if ( queryWidth != null ) {

                if ( windowWidth >= queryWidth ) {

                    // If the element isn't currently sticky, add the sticky
                    // class and set the isSticky property to true

                    if ( stickyObject.settings.isSticky == false ) {

                        stickyObject.settings.element.addClass( 'ds-sticky' );
                        stickyObject.settings.isSticky = true;

                    }

                    // Calculate the height. Passing the setLength method so
                    // that the method doesn't run until the heights are set

                    stickyObject.calcHeight( elements, stickyObject.setLength );

                } else {

                    // If the viewport is smaller than the query width, remove
                    // the height from the container and its siblings

                    $.each( elements, function () {

                        $( this ).removeAttr( 'style' );

                    });

                    // Removing the styling and sticky class and setting the property
                    // isSticky to false because the element should no longer be sticky

                    stickyObject.settings.element.removeAttr( 'style' ).removeClass( 'ds-sticky' );
                    stickyObject.settings.isSticky = false;

                }

            } else {

                // If the element isn't currently sticky, add the sticky
                // class and set the isSticky property to true

                if ( stickyObject.settings.isSticky == false ) {

                    stickyObject.settings.element.addClass( 'ds-sticky' );
                    stickyObject.settings.isSticky = true;

                }

                // Calculate the height. Passing the setLength method so
                // that the method doesn't run until the heights are set

                stickyObject.calcHeight( elements, stickyObject.setLength );

            }

        },

        /* ============================================================
         * 1.3 makeSticky - Setting the CSS to Make Element Sticky
         * ============================================================ */

        makeSticky: function () {

            // Setting the CSS based on the length the element has to travel
            // and the offset of the element's container

            var stickyObject = this,
                elementContainer = stickyObject.settings.container,
                element = stickyObject.settings.element,
                stickyHeader = stickyObject.settings.stickyHeader,
                scroll = $( window ).scrollTop(),
                elementWidth = stickyObject.settings.width,
                length = stickyObject.settings.length,
                offset = stickyObject.settings.offset,
                top;

            if ( elementWidth === null ) {

                elementWidth = elementContainer.width();

            }

            if ( stickyObject.settings.stickyHeader != null ) {

                top = stickyObject.settings.stickyHeader.outerHeight() + 30;

            } else {

                top = 30;

            }
            
            if ( typeof offset != 'undefined' && stickyObject.settings.isSticky == true ) {

                if ( scroll <= offset ) {

                    element.css({

                        'bottom': 'auto',
                        'position': 'relative',
                        'top': 'auto',
                        'width': elementWidth

                    });

                } else if ( scroll >= length ) {

                    element.css({

                        'bottom': '0',
                        'position': 'absolute',
                        'top': 'auto',
                        'width': elementWidth

                    });

                } else {

                    element.css({

                        'bottom': 'auto',
                        'position': 'fixed',
                        'top': top,
                        'width': elementWidth

                    });

                }

            }

        },

        /* ============================================================
         * 1.4 init - Initializing Sticky Sidebar
         * ============================================================ */

        init: function ( element, options ) {

            var stickyObject = this,
                el = $( element );

            if ( !el.hasClass( 'ds-sticky' ) ) {

                el.parent().css( 'min-height', 1 );

                stickyObject.setOptions( element, options );
                stickyObject.runFunctions();

            }

        },

        /* ============================================================
         * 1.5 runFunctions - Running Functions
         * ============================================================ */

        runFunctions: function () {

            var stickyObject = this;

            $( window ).load( function () {

                stickyObject.equalHeight();

            });

            $( window ).resize( function () {

                stickyObject.equalHeight();

            });

        },

        /* ============================================================
         * 1.6 setLength - Setting the Length and Offset
         * ============================================================ */

        setLength: function ( stickyObject ) {

            // Calculating the length the element has to travel before
            // stopping and the offset in which the element should start
            // moving

            var elementContainer = stickyObject.settings.container,
                element = stickyObject.settings.element,
                stickyHeader = stickyObject.settings.stickyHeader,
                length,
                offset;

            if ( typeof elementContainer.offset() != 'undefined' ) {

                if ( stickyHeader != null ) {

                    length = elementContainer.outerHeight() - element.outerHeight() + elementContainer.offset().top - stickyHeader.outerHeight() - 30;
                    offset = elementContainer.offset().top - stickyHeader.outerHeight() - 30;

                } else {

                    length = elementContainer.outerHeight() - element.outerHeight() + elementContainer.offset().top - 30;
                    offset = elementContainer.offset().top - 30;

                }

                stickyObject.settings.length = length;
                stickyObject.settings.offset = offset;
            
            }

            // Once the length and offset are set, run the makeSticky
            // method. Also running the scroll function once the length
            // and offset are set because the scroll function could trigger
            // before they are set on window load

            stickyObject.makeSticky();

            $( window ).scroll( function () {

                stickyObject.makeSticky();

            });

        },

        /* ============================================================
         * 1.7 setOptions - Setting Options
         * ============================================================ */

        setOptions: function ( element, options ) {

            var stickyObject = this,
                el = $( element );

            // Setting the default options for the sticky element

            stickyObject.defaults = {

                container: el.parent(),
                element: el,
                isSticky: false,
                length: null,
                offset: null,
                queryWidth: null,
                stickyHeader: null,
                width: null

            };

            // Adding the defaults and options passed with the plugin selector
            // to the settings property. Put options as the last argument of
            // the extend method so that it will override the defaults

            stickyObject.settings = $.extend( {}, stickyObject.defaults, options );

        },

    }
        

/* ==============================================================================================
 * 2. Setting Up The jQuery Plugin
 * ============================================================================================== */

    $.fn.dsStickySidebar = function ( options ) {

        return this.each( function () {

            // Instantiating each of the elements matching the
            // selector that the plugin was called for

            var sticky = Object.create( Sticky );

            sticky.init( this, options );

        });

    };
    

}) ( window, document, jQuery );