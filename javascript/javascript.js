/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var danceRadio = document.getElementById("dance");
var form = document.getElementById("filter");



danceRadio.addEventListener("click", function () {
    form.submit();
});
