window.onload = function() {


  // Grab modal
    // C2
    var modal1 = document.getElementById('C2Modal');
    // CMG
    var modal2 = document.getElementById('CMGModal');
    // VW
    var modal3 = document.getElementById('VWModal');
    // Portfolio
    var modal4 = document.getElementById('PortModal');
    // DS
    var modal5 = document.getElementById('DSOModal');
    var modal6 = document.getElementById('DSNModal');
    // Spartan
    var modal7 = document.getElementById('SRModal');
    // CARCHEX
    var modal8 = document.getElementById('CCVModal');
    var modal9 = document.getElementById('CCHModal');
    // Writer's Block
    var modal11 = document.getElementById('WBRPModal');
    // Personification
    var modal12 = document.getElementById('POSModal');
    // DOT Speech
    var modal13 = document.getElementById('DOTSModal');
    // DOT PR
    var modal14 = document.getElementById('DOTPRModal');
    // QT Raleigh
    var modal15 = document.getElementById('QTRModal');
    // QT Charlotte
    var modal16 = document.getElementById('QTCModal');


  // Get the button that opens the modal
    // C2
    var btn1 = document.getElementById("C2Btn");
    // CMG
    var btn2 = document.getElementById("CMGBtn");
    // VW
    var btn3 = document.getElementById("VWBtn");
    // Port
    var btn4 = document.getElementById("PortBtn");
    // DS
    var btn5 = document.getElementById("DSOBtn");
    var btn6 = document.getElementById("DSNBtn");
    // Spartan
    var btn7 = document.getElementById("SRBtn");
    // CARCHEX
    var btn8 = document.getElementById("CCVBtn");
    var btn9 = document.getElementById("CCHBtn");
    // Writer's Block
    var btn11 = document.getElementById("WBRPBtn");
    // Personification
    var btn12 = document.getElementById("POSBtn");
    // DOT Speech
    var btn13 = document.getElementById("DOTSBtn");
    // DOT PR
    var btn14 = document.getElementById("DOTPRBtn");
    // QT Raleigh
    var btn15 = document.getElementById("QTRBtn");
    // QT Charlotte
    var btn16 = document.getElementById("QTCBtn");



  // Get the <span> element that closes the modal
    // C2
    var span1 = document.getElementsByClassName("C2Close")[0];
    // CMG
    var span2 = document.getElementsByClassName("CMGClose")[0];
    // VW
    var span3 = document.getElementsByClassName("VWClose")[0];
    // Port
    var span4 = document.getElementsByClassName("PortClose")[0];
    // DS
    var span5 = document.getElementsByClassName("DSOClose")[0];
    var span6 = document.getElementsByClassName("DSNClose")[0];
    // Spartan
    var span7 = document.getElementsByClassName("SRClose")[0];
    // CARCHEX
    var span8 = document.getElementsByClassName("CCVClose")[0];
    var span9 = document.getElementsByClassName("CCHClose")[0];
    // Writer's Block
    var span11 = document.getElementsByClassName("WBRPClose")[0];
    // Personification
    var span12 = document.getElementsByClassName("POSClose")[0];
    // DOT Speech
    var span13 = document.getElementsByClassName("DOTSClose")[0];
    // DOT PR
    var span14 = document.getElementsByClassName("DOTPRClose")[0];
    // QT Raleigh
    var span15 = document.getElementsByClassName("QTRClose")[0];
    // QT Charlotte
    var span16 = document.getElementsByClassName("QTCClose")[0];




  // When the user clicks on the button, open the modal 
    btn1.onclick = function() {
        modal1.style.display = "block";
    };
    btn2.onclick = function() {
        modal2.style.display = "block";
    };
    btn3.onclick = function() {
        modal3.style.display = "block";
    };
    btn4.onclick = function() {
        modal4.style.display = "block";
    };
    btn5.onclick = function() {
        modal5.style.display = "block";
    };
    btn6.onclick = function() {
        modal6.style.display = "block";
    };
    btn7.onclick = function() {
        modal7.style.display = "block";
    };
    btn8.onclick = function() {
        modal8.style.display = "block";
    };
    btn9.onclick = function() {
        modal9.style.display = "block";
    };
    btn11.onclick = function() {
        modal11.style.display = "block";
    };
    btn12.onclick = function() {
        modal12.style.display = "block";
    };
    btn13.onclick = function() {
        modal13.style.display = "block";
    };
    btn14.onclick = function() {
        modal14.style.display = "block";
    };
    btn15.onclick = function() {
        modal15.style.display = "block";
    };
    btn16.onclick = function() {
        modal16.style.display = "block";
    };


  // When the user clicks on <span>, close the modal
    span1.onclick = function() {
        modal1.style.display = "none";
    }
    span2.onclick = function() {
        modal2.style.display = "none";
    }
    span3.onclick = function() {
        modal3.style.display = "none";
    }
    span4.onclick = function() {
        modal4.style.display = "none";
    }
    span5.onclick = function() {
        modal5.style.display = "none";
    }
    span6.onclick = function() {
        modal6.style.display = "none";
    }
    span7.onclick = function() {
        modal7.style.display = "none";
    }
    span8.onclick = function() {
        modal8.style.display = "none";
    }
    span9.onclick = function() {
        modal9.style.display = "none";
    }
    span11.onclick = function() {
        modal11.style.display = "none";
    }
    span12.onclick = function() {
        modal12.style.display = "none";
    }
    span13.onclick = function() {
        modal13.style.display = "none";
    }
    span14.onclick = function() {
        modal14.style.display = "none";
    }
    span15.onclick = function() {
        modal15.style.display = "none";
    }
    span16.onclick = function() {
        modal16.style.display = "none";
    }


  // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        };
        if (event.target == modal2) {
            modal2.style.display = "none";
        };
        if (event.target == modal3) {
            modal3.style.display = "none";
        };
        if (event.target == modal4) {
            modal4.style.display = "none";
        };
        if (event.target == modal5) {
            modal5.style.display = "none";
        };
        if (event.target == modal6) {
            modal6.style.display = "none";
        };
        if (event.target == modal7) {
            modal7.style.display = "none";
        }
        if (event.target == modal8) {
            modal8.style.display = "none";
        }
        if (event.target == modal9) {
            modal9.style.display = "none";
        }
        if (event.target == modal11) {
            modal11.style.display = "none";
        };
        if (event.target == modal12) {
            modal12.style.display = "none";
        };
        if (event.target == modal13) {
            modal13.style.display = "none";
        };
        if (event.target == modal14) {
            modal14.style.display = "none";
        };
        if (event.target == modal15) {
            modal15.style.display = "none";
        };
        if (event.target == modal16) {
            modal16.style.display = "none";
        };
    };
};