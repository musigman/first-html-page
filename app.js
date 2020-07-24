function getdogname(){
    var userName = prompt('What is your Dog`s name?');
    return userName;
}

var userName2 ="";
while (userName2 == ""){
userName2 = getdogname();

}
document.write('<h2>' + userName2 + ' is a good dog!</h2>');



//document.write('<h2>' + userName + '</h2>');



// var userName = getdogname();

// alert('Hello There...' + userName);


// alert('Good Dog, ' + userName);