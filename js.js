var who = ['the dog','my granma','his turtle','my bird'];
var action = ['ate','peed','crushed','broke'];
var what = ['eat','pissed','crushed','broked'];
var when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];


function excuseGenerator(){
    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random());
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    document.getElementById("excuse").innerHTML = who[whoIndex] + " " + action[actionIndex] + " " + what[whatIndex] + " " + when[whenIndex];
};