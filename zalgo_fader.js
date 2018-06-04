
//zalgo html color fader by Brenly
//design concepts and code partials borrowed from:
//https://www.stuffbydavid.com/textcolorizer/source
//https://www.stuffbydavid.com/textcolorizer
//http://www.eeemo.net/
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_charat
//https://mothereff.in/js-escapes#1%E6%BC%A2%E5%AD%97

var zalgo_top ["&#x030;", "&#x300;", "&#x301;", "&#x302;", "&#x303;", "&#x304;", "&#x305;", "&#x306;", "&#x307;", "&#x308;", "&#x309;", "&#x30A;", "&#x30B;", "&#x30C;", "&#x30D;", "&#x30E;", "&#x30F;", "&#x310;", "&#x311;", "&#x312;", "&#x313;", "&#x314;", "&#x33D;", "&#x33E;", "&#x33F;", "&#x342;", "&#x343;", "&#x344;", "&#34A;", "&#34B;", "&#34C;", "&#x351;", "&#x352;", "&#x357;"];
var zalgo_middle ["&#x315;", "&#x321;", "&#x322;", "&#x327;", "&#x328;", "&#x31B;", "&#x334;", "&#x335;", "&#x336;", "&#x337;", "&#x338;", "&#x35C;", "&#x35D;", "&#x35E;", "&#x35F;", "&#x340;", "&#x341;", "&#x358;", "&#x360;", "&#x361;", "&#x488;", "&#x489;"];
var zalgo_bottom ["&#x316;", "&#x317;", "&#x318;", "&#x319;", "&#x31A;", "&#x31C;", "&#x31D;", "&#x31E;", "&#x31F;", "&#x320;", "&#x323;", "&#x324;", "&#x325;", "&#x326;", "&#x329;", "&#x32A;", "&#x32B;", "&#x32C;", "&#x32D;", "&#x32E;", "&#x32F;", "&#x330;", "&#x331;", "&#x332;", "&#x333;", "&#x339;", "&#x33A;", "&#x33C;"];

var zalgo_top_size = 0;
var zalgo_middle_size = 12;
var zalgo_bottom_size = 0;

var input_string = "Test phrase";
var output_string = "";

var input_string_length = input_string.length;



function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
function toHex(n) {
    n = parseInt(n,10);
    if (isNaN(n)) return "00";
    n = Math.max(0,Math.min(n,255));
    return "0123456789ABCDEF".charAt((n-n%16)/16)
    + "0123456789ABCDEF".charAt(n%16);
}


for (i = 0; i < input_string_length; i++) {
	output_string += input_string.charAt(i);
	
}