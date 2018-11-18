//import Math;

//zalgo html color fader by Brenly github.com/brenly
//code partials borrowed from:
//zalgo code:
// https://stackoverflow.com/questions/26927419/zalgo-text-in-java
// posted by user https://stackoverflow.com/users/3826188/mihaic
//hexadecimal color fader code:
//https://www.stuffbydavid.com/textcolorizer/source
//https://www.stuffbydavid.com/textcolorizer
//http://www.eeemo.net/
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_charat
//https://mothereff.in/js-escapes#1%E6%BC%A2%E5%AD%97


var zalgo_up = [ /* up */
  '\u030d', /*     ̍     */
  '\u030e', /*     ̎     */
  '\u0304', /*     ̄     */
  '\u0305', /*     ̅     */
  '\u033f', /*     ̿     */
  '\u0311', /*     ̑     */
  '\u0306', /*     ̆     */
  '\u0310', /*     ̐     */
  '\u0352', /*     ͒     */
  '\u0357', /*     ͗     */
  '\u0351', /*     ͑     */
  '\u0307', /*     ̇     */
  '\u0308', /*     ̈     */
  '\u030a', /*     ̊     */
  '\u0342', /*     ͂     */
  '\u0343', /*     ̓     */
  '\u0344', /*     ̈́     */
  '\u034a', /*     ͊     */
  '\u034b', /*     ͋     */
  '\u034c', /*     ͌     */
  '\u0303', /*     ̃     */
  '\u0302', /*     ̂     */
  '\u030c', /*     ̌     */
  '\u0350', /*     ͐     */
  '\u0300', /*     ̀     */
  '\u0301', /*     ́     */
  '\u030b', /*     ̋     */
  '\u030f', /*     ̏     */
  '\u0312', /*     ̒     */
  '\u0313', /*     ̓     */
  '\u0314', /*     ̔     */
  '\u033d', /*     ̽     */
  '\u0309', /*     ̉     */
  '\u0363', /*     ͣ     */
  '\u0364', /*     ͤ     */
  '\u0365', /*     ͥ     */
  '\u0366', /*     ͦ     */
  '\u0367', /*     ͧ     */
  '\u0368', /*     ͨ     */
  '\u0369', /*     ͩ     */
  '\u036a', /*     ͪ     */
  '\u036b', /*     ͫ     */
  '\u036c', /*     ͬ     */
  '\u036d', /*     ͭ     */
  '\u036e', /*     ͮ     */
  '\u036f', /*     ͯ     */
  '\u033e', /*     ̾     */
  '\u035b', /*     ͛     */
  '\u0346', /*     ͆     */
  '\u031a'  /*     ̚     */
];
var zalgo_down = [ /* down */
  '\u0316', /*     ̖     */
  '\u0317', /*     ̗     */
  '\u0318', /*     ̘     */
  '\u0319', /*     ̙     */
  '\u031c', /*     ̜     */
  '\u031d', /*     ̝     */
  '\u031e', /*     ̞     */
  '\u031f', /*     ̟     */
  '\u0320', /*     ̠     */
  '\u0324', /*     ̤     */
  '\u0325', /*     ̥     */
  '\u0326', /*     ̦     */
  '\u0329', /*     ̩     */
  '\u032a', /*     ̪     */
  '\u032b', /*     ̫     */
  '\u032c', /*     ̬     */
  '\u032d', /*     ̭     */
  '\u032e', /*     ̮     */
  '\u032f', /*     ̯     */
  '\u0330', /*     ̰     */
  '\u0331', /*     ̱     */
  '\u0332', /*     ̲     */
  '\u0333', /*     ̳     */
  '\u0339', /*     ̹     */
  '\u033a', /*     ̺     */
  '\u033b', /*     ̻     */
  '\u033c', /*     ̼     */
  '\u0345', /*     ͅ     */
  '\u0347', /*     ͇     */
  '\u0348', /*     ͈     */
  '\u0349', /*     ͉     */
  '\u034d', /*     ͍     */
  '\u034e', /*     ͎     */
  '\u0353', /*     ͓     */
  '\u0354', /*     ͔     */
  '\u0355', /*     ͕     */
  '\u0356', /*     ͖     */
  '\u0359', /*     ͙     */
  '\u035a', /*     ͚     */
  '\u0323'  /*     ̣     */
];
var zalgo_mid = [ /* mid */
  '\u0315', /*     ̕     */
  '\u031b', /*     ̛     */
  '\u0340', /*     ̀     */
  '\u0341', /*     ́     */
  '\u0358', /*     ͘     */
  '\u0321', /*     ̡     */
  '\u0322', /*     ̢     */
  '\u0327', /*     ̧     */
  '\u0328', /*     ̨     */
  '\u0334', /*     ̴     */
  '\u0335', /*     ̵     */
  '\u0336', /*     ̶     */
  '\u034f', /*     ͏     */
  '\u035c', /*     ͜     */
  '\u035d', /*     ͝     */
  '\u035e', /*     ͞     */
  '\u035f', /*     ͟     */
  '\u0360', /*     ͠     */
  '\u0362', /*     ͢     */
  '\u0338', /*     ̸     */
  '\u0337', /*     ̷      */
  '\u0361', /*     ͡     */
  '\u0489' /*     ҉_     */
];

function rand(max) {
  return Math.floor(Math.random() * max);
}

//FUNCTION COLOR CALC NEEDS LOTS OF CLEAN UP. ILLEGAL RETURN STATEMENT ERRORS.
/*
function color_calc () {
  function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
  function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
  function hexToG(h) {return parsoutput_zalgoeInt((cutHex(h)).substring(2,4),16)}
  function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
  function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
  function toHex(n) {
      n = parseInt(n,10);
      if (isNaN(n)) return "00";
      n = Math.max(0,Math.min(n,255));
      return "0123456789ABCDEF".charAt((n-n%16)/16)
      + "0123456789ABCDEF".charAt(n%16);
  }
}
*/

/* OLD FUNCTION HEADER FOR SAFEKEEPING
function he_comes(iText, zalgo_opt_mini, zalgo_opt_normal, zalgo_up, zalgo_down, zalgo_mid, color1, color2, colormid) {*/

function he_comes() {

  var iText = document.getElementById("iText").innerHTML;
  document.getElementById("output_zalgo").innerHTML = "";
  document.getElementById("output_colorized").innerHTML = "";
  document.getElementById("output_html").innerHTML = "";

  var zalgo_opt_mini = document.getElementById("zalgo_opt_mini").checked;
  var zalgo_opt_normal = document.getElementById("zalgo_opt_normal").checked;
  var zalgo_opt_maxi = document.getElementById("zalgo_opt_maxi").checked;

  var up_opt = document.getElementById("up_opt").checked;
  var down_opt = document.getElementById("down_opt").checked;
  var mid_opt = document.getElementById("mid_opt").checked;

  //how to retrieve value of a color input?
  //var color1 = document.getElementById("color1").innerHTML;
  //var color2 = document.getElementById("color2").innerHTML;

  //custom mid color yes/no?
  var colormid = document.getElementById("colormid").checked;

  var num_up;
  var num_mid;
  var num_down;

  //options
  if (zalgo_opt_mini) {
    num_up = rand(8);
    num_mid = rand(2);
    num_down = rand(8);
  } else if (zalgo_opt_normal) {
    num_up = rand(16) / 2 + 1;
    num_mid = rand(6) / 2;
    num_down = rand(16) / 2 + 1;
  } else //maxi
  {
    num_up = rand(64) / 4 + 3;
    num_mid = rand(16) / 4 + 1;
    num_down = rand(64) / 4 + 3;
  }

  //horizontal color open
  //IF HORIZONTAL == TRUE
  for (var i = 0; i < iText.length; i++) {
     document.getElementById("output_zalgo").insertAdjacentHTML('beforeEnd', iText.charAt(i));
    if (up_opt == true) {
      for (j = 0; j < num_up; j++) {
        //IF VERTICAL == TRUE
        // vertical color open
        //document.getElementById("output_zalgo").appendChild("A");
        document.getElementById("output_zalgo").insertAdjacentHTML('beforeend', zalgo_up[Math.floor(Math.random() * zalgo_up.length)]);
        //document.getElementById("output_zalgo").insertAdjacentHTML('beforeend', "&#829;");
        //output_colorized.insertAdjacentText('beforeend', rand_zalgo(zalgo_up));
        //output_html.insertAdjacentText('beforeend', rand_zalgo(zalgo_up));
        //IF VERTICAL == true
        //output_colorized.insertAdjacentHTML('beforeend', "</FONT>");
        //output_html.insertAdjacentText('beforeend', "</FONT>");
      }
    }
    if (mid_opt == true) {
      for (j = 0; j < num_mid; j++) {
        document.getElementById("output_zalgo").insertAdjacentHTML('beforeend', zalgo_mid[Math.floor(Math.random() * zalgo_mid.length)]);
        //if (colormid == true)
        //mid special color open
        //IF VERTICAL == TRUE
        //VERTICAL COLOR open
        //output_colorized.insertAdjacentText('beforeend', rand_zalgo(zalgo_mid));
        //output_html.insertAdjacentText('beforeend', rand_zalgo(zalgo_mid));
        //if midspecial == true
        //output_colorized.insertAdjacentHTML('beforeend', "</FONT>");
        //output_html.insertAdjacentText('beforeend', "</FONT>");
        //if vertical == true
        //output_colorized.insertAdjacentHTML('beforeend', "</FONT>");
        //output_html.insertAdjacentText('beforeend', "</FONT>");
      }
    }
    if (down_opt == true) {
      for (j = 0; j < num_down; j++) {
        //vertical color open
        document.getElementById("output_zalgo").insertAdjacentHTML('beforeend', zalgo_down[Math.floor(Math.random() * zalgo_down.length)]);
        //output_colorized.insertAdjacentText('beforeend', rand_zalgo(zalgo_down));
        //output_html.insertAdjacentText('beforeend', rand_zalgo(zalgo_down));
        //if vertical == TRUE
        //output_colorized.insertAdjacentHTML('beforeend', "</FONT>");
        //output_html.insertAdjacentText('beforeend', "</FONT>");

        //IF HORIZONTAL == TRUE
        //output_colorized.insertAdjacentHTML('beforeend', "</FONT>");
        //output_html.insertAdjacentText('beforeend', "</FONT>");
      }
    }
  }
  return;
}
