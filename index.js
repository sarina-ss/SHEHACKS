//function incomeWeekly(allowance, job, gifts, miscellaneous) {
    //totalIncome = allowance + job + gifts + miscellaneous;
  //  console.log(totalIncome);
//}

//class financialInformation {
  //  constructor(age, financialKnowledge, mostExpenditure, )
//}

const express = require("express");
const app = express();

app.use(express.static("public"));
// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});
function getText(){
  console.log("hello world",document.getElementById('here').value);
  localStorage.setItem('here',document.getElementById('here').value);
  }

class User {
  constructor(userID,budget){
    this.userID = document.getElementFromID('username');
    this.budget = 0
  }
  
  getUserID() {
    return this.userID
  }
}
function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
    mainContainer.appendChild(div);
  }
}
function calc(){
  var data = {
  firstname : document.getElementById("firstName").value,
  lastname : document.getElementById("lastName").value
  }

  console.log(data);
}

function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const value = data.get('email');

  console.log({ value });
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);