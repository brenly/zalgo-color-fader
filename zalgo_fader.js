import Math;

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

final char[] zalgo_up =
    { '\u030d', /*     �?     */'\u030e', /*     ̎     */'\u0304', /*     ̄     */'\u0305', /*     ̅     */
        '\u033f', /*     ̿     */'\u0311', /*     ̑     */'\u0306', /*     ̆     */'\u0310', /*     �?     */
        '\u0352', /*     ͒     */'\u0357', /*     ͗     */'\u0351', /*     ͑     */'\u0307', /*     ̇     */
        '\u0308', /*     ̈     */'\u030a', /*     ̊     */'\u0342', /*     ͂     */'\u0343', /*     ̓     */
        '\u0344', /*     ̈�?     */'\u034a', /*     ͊     */'\u034b', /*     ͋     */'\u034c', /*     ͌     */
        '\u0303', /*     ̃     */'\u0302', /*     ̂     */'\u030c', /*     ̌     */'\u0350', /*     �?     */
        '\u0300', /*     ̀     */'\u0301', /*     �?     */'\u030b', /*     ̋     */'\u030f', /*     �?     */
        '\u0312', /*     ̒     */'\u0313', /*     ̓     */'\u0314', /*     ̔     */'\u033d', /*     ̽     */
        '\u0309', /*     ̉     */'\u0363', /*     ͣ     */'\u0364', /*     ͤ     */'\u0365', /*     ͥ     */
        '\u0366', /*     ͦ     */'\u0367', /*     ͧ     */'\u0368', /*     ͨ     */'\u0369', /*     ͩ     */
        '\u036a', /*     ͪ     */'\u036b', /*     ͫ     */'\u036c', /*     ͬ     */'\u036d', /*     ͭ     */
        '\u036e', /*     ͮ     */'\u036f', /*     ͯ     */'\u033e', /*     ̾     */'\u035b', /*     ͛     */
        '\u0346', /*     ͆     */'\u031a' /*     ̚     */
        } ;
final char[] zalgo_down =
    { '\u0316', /*     ̖     */'\u0317', /*     ̗     */'\u0318', /*     ̘     */'\u0319', /*     ̙     */
        '\u031c', /*     ̜     */'\u031d', /*     �?     */'\u031e', /*     ̞     */'\u031f', /*     ̟     */
        '\u0331', /*     ̱     */'\u0332', /*     ̲     */'\u0333', /*     ̳     */'\u0339', /*     ̹     */
        '\u0320', /*     �      */'\u0324', /*     ̤     */'\u0325', /*     ̥     */'\u0326', /*     ̦     */
        '\u0329', /*     ̩     */'\u032a', /*     ̪     */'\u032b', /*     ̫     */'\u032c', /*     ̬     */
        '\u032d', /*     ̭     */'\u032e', /*     ̮     */'\u032f', /*     ̯     */'\u0330', /*     ̰     */
        '\u033a', /*     ̺     */'\u033b', /*     ̻     */'\u033c', /*     ̼     */'\u0345', /*     ͅ     */
        '\u0347', /*     ͇     */'\u0348', /*     ͈     */'\u0349', /*     ͉     */'\u034d', /*     �?     */
        '\u034e', /*     ͎     */'\u0353', /*     ͓     */'\u0354', /*     ͔     */'\u0355', /*     ͕     */
        '\u0356', /*     ͖     */'\u0359', /*     ͙     */'\u035a', /*     ͚     */'\u0323' /*     ̣     */
        } ;

    //those always stay in the middle
final char[] zalgo_mid =
    { '\u0315', /*     ̕     */'\u031b', /*     ̛     */'\u0340', /*     ̀     */'\u0341', /*     �?     */
        '\u0358', /*     ͘     */'\u0321', /*     ̡     */'\u0322', /*     ̢     */'\u0327', /*     ̧     */
        '\u0328', /*     ̨     */'\u0334', /*     ̴     */'\u0335', /*     ̵     */'\u0336', /*     ̶     */
        '\u034f', /*     �?     */'\u035c', /*     ͜     */'\u035d', /*     �?     */'\u035e', /*     ͞     */
        '\u035f', /*     ͟     */'\u0360', /*     �      */'\u0362', /*     ͢     */'\u0338', /*     ̸     */
        '\u0337', /*     ̷     */'\u0361', /*     ͡     */'\u0489' /*     ҉_     */
        } ;


int rand(int max) {
            return (int)Math.floor(Math.random() * max);
        }

        //gets a random char from a zalgo char table

char rand_zalgo(char[] array) {
            int ind = (int)Math.floor(Math.random() * array.length);
            return array[ind];
        }

        //hide show element
        //lookup char to know if its a zalgo char or not

boolean is_zalgo_char(char c) {
            for (int i = 0; i < zalgo_up.length; i++)
                if (c == zalgo_up[i])
                    return true;
            for (int i = 0; i < zalgo_down.length; i++)
                if (c == zalgo_down[i])
                    return true;
            for (int i = 0; i < zalgo_mid.length; i++)
                if (c == zalgo_mid[i])
                    return true;
            return false;
        }

void color_calc () {
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

void he_comes(iText, boolean zalgo_opt_mini, boolean zalgo_opt_normal, boolean zalgo_up,
                                     boolean zalgo_down, boolean zalgo_mid, color1, color2, colormid) {

            var output_colorized = document.getElementById('output_colorized');
            var output_html = document.getElementById('output_html');
            int num_up;
            int num_mid;
            int num_down;

            //this is no longer needed. there is no string to pass back. only a strict print to html div
            //String zalgoTxt = "";

            for (int i = 0; i < iText.length(); i++) {
                if (is_zalgo_char(iText.charAt(i)))
                    continue;


                //add the normal character
                zalgoTxt += iText.charAt(i);

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
            //output_colorized.insertAdjacentHTML('beforeend', htmlcolorfunctin(insert));
            //output_html.insertAdjacentText('beforeend', htmlcolorfunctin(insert));
                if (up)
                    for (int j = 0; j < num_up; j++)
                      //IF VERTICAL == TRUE
                      // vertical color open
                        output_colorized.insertAdjacentText('beforeend', rand_zalgo(zalgo_up));
                        output_html.insertAdjacentText('beforeend', rand_zalgo(zalgo_up));
                        //IF VERTICAL == true
                        //output_colorized.insertAdjacentHTML('beforeend', "</FONT>");
                        //output_html.insertAdjacentText('beforeend', "</FONT>");
                if (mid)
                    for (int j = 0; j < num_mid; j++)
                    //IF MIDSPECIAL == TRUE
                    //mid special color open
                    //IF VERTICAL == TRUE
                    //VERTICAL COLOR open
                        output_colorized.insertAdjacentText('beforeend', rand_zalgo(zalgo_mid));
                        output_html.insertAdjacentText('beforeend', rand_zalgo(zalgo_mid));
                    //if midspecial == true
                    //output_colorized.insertAdjacentHTML('beforeend', "</FONT>");
                    //output_html.insertAdjacentText('beforeend', "</FONT>");
                    //if vertical == true
                    //output_colorized.insertAdjacentHTML('beforeend', "</FONT>");
                    //output_html.insertAdjacentText('beforeend', "</FONT>");
                if (down)
                    for (int j = 0; j < num_down; j++)
                    //vertical color open
                        output_colorized.insertAdjacentText('beforeend', rand_zalgo(zalgo_down));
                        output_html.insertAdjacentText('beforeend', rand_zalgo(zalgo_down));
                    //if vertical == TRUE
                    //output_colorized.insertAdjacentHTML('beforeend', "</FONT>");
                    //output_html.insertAdjacentText('beforeend', "</FONT>");

                  //IF HORIZONTAL == TRUE
                  //output_colorized.insertAdjacentHTML('beforeend', "</FONT>");
                  //output_html.insertAdjacentText('beforeend', "</FONT>");
            }


            return zalgoTxt;
        }
        /*
        public static void main(String[] args){
            final String zalgoTxt = goZalgo("To invoke the hive-mind representing chaos.\n" +
                    "Invoking the feeling of chaos.\n" +
                    "With out order.\n" +
                    "The Nezperdian hive-mind of chaos. Zalgo.    \n" +
                    "He who Waits Behind The Wall.\n" +
                    "ZALGO!", true, false, true, true, true);
                  }
      */
}


/*
//calls different color schemes horizontal / vertical
function he_comes()
{

}
*/

/*
//BORROWED BLOCK OF CODE
//just a quick bit of hexadecimal math that i did not feel necessary to write from scratch!
//credit to:
//https://www.stuffbydavid.com/textcolorizer/source
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
//END BORROWED BLOCK OF CODE
*/


*/
