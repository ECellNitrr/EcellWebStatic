var days = document.getElementById('days');
var hrs = document.getElementById('hrs');
var mins = document.getElementById('mins');
var secs = document.getElementById('secs');

var res = new Date("2018-06-20T12:00:00Z");

var curr = new Date();
var diff = Math.round((res.getTime() - curr.getTime()) / 1000);

var diffdays = Math.round(diff / (24 * 3600));
var diffhrs = Math.round((diff / 3600)) % 24;
var diffmins = Math.round((diff / 60)) % 60;
var diffsecs = (diff % 60);

days.innerHTML = diffdays;
hrs.innerHTML = diffhrs;
mins.innerHTML = diffmins;
secs.innerHTML = diffsecs;

console.log(diffdays, diffhrs, diffmins, diffsecs);
