var who = ['the dog','my granma','his turtle','my bird'];
var what = ['eat','pissed','crushed','broked'];
var when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

function excuseGenerator(){
    let whoIndex = Math.floor(Math.random() * who.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    document.getElementById("excuse").innerHTML = who[whoIndex] + " " + what[whatIndex] + " " + when[whenIndex];
};