//window.alert("JavaScript Learning");
//document.getElementById("p1").innerHTML = "Hello World";
//console.log("How's That ???");
//document.getElementById("h2").innerHTML="Now JavaScript is Connected";

var n = parseInt(prompt("Enter the number of terms: "));
var sum = 0;
var series = "";

for (var i = 1; i <= n; i++) {
    sum = sum + (i ** 2);
    series = series + ((i ** 2).toString());
    if (i == n) {
        continue;
    }
    series = series + " + ";
}

console.log(`${series} = ${sum}`);