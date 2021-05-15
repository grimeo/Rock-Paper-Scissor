var op ;

var ls = 0;
var cs = 0;

function rock() {
    var x = Math.random();

    if (x >= 0 && x <= 0.3333){
        op = "Rock";
    } else if (x >= 0.3334 && x <= 0.6667 ) {
        op = "Paper";
    } else {
        op = "Scissors";
    }
    document.getElementById("op").innerHTML = op;

    if (op == "Rock") {
        ls += 0;
        cs += 0;
        document.getElementById("ls").innerHTML = ls;
        document.getElementById("cs").innerHTML = cs;
    } else if (op == "Paper") {
        ls += 0;
        cs += 1;
        document.getElementById("ls").innerHTML = ls;
        document.getElementById("cs").innerHTML = cs;
    } else if (op == "Scissors") {
        ls += 1;
        cs += 0;
        document.getElementById("ls").innerHTML = ls;
        document.getElementById("cs").innerHTML = cs;
    }

}

function paper() {
    var x = Math.random();

    if (x >= 0 && x <= 0.3333){
        op = "Rock";
    } else if (x >= 0.3334 && x <= 0.6667 ) {
        op = "Paper";
    } else {
        op = "Scissors";
    }
    document.getElementById("op").innerHTML = op;

    if (op == "Rock") {
        ls += 1;
        cs += 0;
        document.getElementById("ls").innerHTML = ls;
        document.getElementById("cs").innerHTML = cs;
    } else if (op == "Paper") {
        ls += 0;
        cs += 0;
        document.getElementById("ls").innerHTML = ls;
        document.getElementById("cs").innerHTML = cs;
    } else if (op == "Scissors") {
        ls += 0;
        cs += 1;
        document.getElementById("ls").innerHTML = ls;
        document.getElementById("cs").innerHTML = cs;
    }

}

function scissors() {
    var x = Math.random();

    if (x >= 0 && x <= 0.3333){
        op = "Rock";
    } else if (x >= 0.3334 && x <= 0.6667 ) {
        op = "Paper";
    } else {
        op = "Scissors";
    }
    document.getElementById("op").innerHTML = op;

    if (op == "Rock") {
        ls += 0;
        cs += 1;
        document.getElementById("ls").innerHTML = ls;
        document.getElementById("cs").innerHTML = cs;
    } else if (op == "Paper") {
        ls += 1;
        cs += 0;
        document.getElementById("ls").innerHTML = ls;
        document.getElementById("cs").innerHTML = cs;
    } else if (op == "Scissors") {
        ls += 0;
        cs += 0;
        document.getElementById("ls").innerHTML = ls;
        document.getElementById("cs").innerHTML = cs;
    }

}