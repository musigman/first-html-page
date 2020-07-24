
 function getuserName(){
     var userNameInFunction = prompt('What is the name of your Dog?');
     alert('Hello There... ' + userNameInFunction);
     document.write('<h2>' + userNameInFunction + '<h2>is a good dog!</h2>');
     return userNameInFunction;
}
 var userName = getuserName();

 function confirmAskQuestions(){
    confirm(userName + ', I have some questions.');
}
 confirmAskQuestions();

 function askQuestion(){
     var userCodeAnswer = prompt('Do you enjoy the Dog park? (yes or no)');
     if (userCodeAnswer == "yes"){
         alert('I do too');
     } else {
         alert('That is too bad.  It is so much fun');
    }
 }
 askQuestion();


 function askTime(){
     var userTimeInFunction = prompt('What hour is it in military time 0-24?');
     return userTimeInFunction;
 }
 var userTime = askTime();


 function checkTime(){
     if(userTime < 12){
         alert('Good Morning, What a smart dog!');
     } else if (userTime >= 12 && userTime < 18){
         alert('Good Afternoon, You are a smart dog!');
     } else {
        alert('Good Evening,You are a smart dog!');
    }
}
checkTime();
