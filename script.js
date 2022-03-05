//Fuction for Onclick action
async function nation() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  try {
    var nat = await fetch(`https://api.nationalize.io/?name[]=${firstName}&name[]=${lastName}`);
    var nat1 = await nat.json();

    console.log(nat1);
    for (let i = 0; i < nat1.length; i++) {
      var trF = tagCreate("tr", "class", "funTable");
      var td = tagCreate("td", "rowspan", "2");
      td.innerHTML = `${nat1[i].name}`
      var td1 = document.createElement("td");
      td1.innerHTML = `${nat1[i].country[0].country_id}`;
      var td2 = document.createElement("td");
      td2.innerHTML = `${nat1[i].country[0].probability.toFixed(3)}`
      trF.append(td, td1, td2);
      tableBody.append(trF);
      var trF1 = tagCreate("tr", "class", "funTable");
      var td1 = document.createElement("td");
      td1.innerHTML = `${nat1[i].country[1].country_id}`;
      var td2 = document.createElement("td");
      td2.innerHTML = `${nat1[i].country[1].probability.toFixed(3)}`
      trF1.append(td1, td2);
      tableBody.append(trF1);
    }

  } catch (error) {
    alert(error);
  }
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
}


// Function to reset the data
function reset(){
document.getElementById('tbody').innerHTML = '';
}


// Function to shorten code length on creating element and attribute

function tagCreate(tag, attribute, value) {
  var variable = document.createElement(tag);
  variable.setAttribute(attribute, value);
  return variable;
}

// Input Values

let outerContainer = tagCreate("div", "class", "container-xl");
let innerContainer = tagCreate("div", "class", "row");
let leftContainer = tagCreate("div", "class", "col-md-4");
let form = tagCreate("div", "class", "myform");
let h1 = tagCreate("h1");
h1.innerHTML = "Nationalize API"
let divFN = tagCreate("div", "class", "Name");
let labelInput1 = tagCreate("label", "for", "firstName");
labelInput1.setAttribute("class", "leftLabel");
labelInput1.innerHTML = "First Name";
let inputFN = tagCreate("input", "type", "text");
inputFN.setAttribute("id", "firstName");
inputFN.setAttribute("required", "");

let divLN = tagCreate("div", "class", "Name");
let labelInput2 = tagCreate("label", "for", "lastName");
labelInput2.setAttribute("class", "leftLabel");
labelInput2.innerHTML = "Last Name";
let inputLN = tagCreate("input", "type", "text");
inputLN.setAttribute("id", "lastName");
inputLN.setAttribute("required", "");
let leftRow2 = tagCreate("div", "class", "row");

let divbutton = tagCreate("div", "class", "divbutton");
let button = tagCreate("button", "onclick", "nation()")
button.setAttribute("class", "button")
button.innerHTML = "Search"
let img = tagCreate("i","class","fa fa-search fa-1x");
button.append(img);

let button1 = tagCreate("button", "onclick", "reset()")
button1.setAttribute("class", "button")
button1.innerHTML = "Remove"
let img1 = tagCreate("i","class","fa fa-times fa-1x");
button1.append(img1);


/*-------------------------------------------------------------------------------------*/

// Output Values

let rightContainer = tagCreate("div", "class", "col-md-8");

let table = tagCreate("table", "class", "table-bordered table-striped table-hover table-dark");
let thead = document.createElement("thead");
var tr = document.createElement("tr");
var th1 = tagCreate("th", "class", "col-md-1 th");
th1.innerHTML = "Name";
th1.style.width = "50%";
var th2 = tagCreate("th", "class", "col-md-1 th");
th2.innerHTML = "Country ID"
th2.style.width = "50%";
var th3 = tagCreate("th", "class", "col-md-1 th");
th3.innerHTML = "Probability"
th3.style.width = "50%";


let tableBody = tagCreate("tbody", "id", "tbody")
tr.append(th1, th2, th3);
thead.append(tr);
table.append(thead);
table.append(tableBody);
rightContainer.append(table);
divFN.append(labelInput1, inputFN);
divLN.append(labelInput2, inputLN);
divbutton.append(button,button1);
form.append(h1,divFN, divLN, divbutton);
leftContainer.append(form);
innerContainer.append(leftContainer);
innerContainer.append(rightContainer);
outerContainer.append(innerContainer);
document.body.append(outerContainer);


