const projectName=document.getElementById("projectName");
console.log(projectName);
console.log(projectName.innerText);

console.log(`==========getElementsByTagName() API ==========`);
const liElements = document.getElementsByTagName("li")
console.log(liElements[0].innerHTML);
console.log(liElements[1].innerHTML);
console.log(liElements[2].innerHTML);
// console.log(typeof liElements);

console.log(`==========getElementsByClassName() API ==========`);
const liRoles = document.getElementsByClassName("roles");
console.log(liRoles[0].innerHTML);
console.log(liRoles[1].innerHTML);

console.log(`==========querySelector() API with Tag or element name==========`);
const elementP = document.querySelector("p");
console.log(typeof elementP);
console.log(elementP.innerHTML);

console.log(`==========querySelector() API with id ==========`);
const elementLiFirst = document.querySelector("#firstRole");
console.log(elementLiFirst.innerHTML);

console.log(`==========querySelector() API with class ==========`);
const elementsRole = document.querySelector(".roles");
console.log(elementsRole.innerHTML);

console.log(`==========querySelectorAll() API with element name or Tag name ==========`);
const elementsP = document.querySelectorAll('p');
for (const element of elementsP) {
    console.log(element.innerHTML);
}
console.log(elementsP[0].innerHTML);

console.log(`==== Changing Project name========`);
projectName.innerHTML="Project Name: College Management";
console.log(projectName.innerHTML);

console.log(`======Applying CSS property==========`);
projectName.style.color='white';
projectName.style.backgroundColor="black";

for (const element of elementsP) {
    element.style.color="red";
    element.style.background="yellow";
}

console.log(`========== Changing Attribute ==========`); 
const elementLink=document.querySelector("#visitLink");
elementLink.setAttribute('href',"https://in.search.yahoo.com/search?fr=mcafee&type=E210IN105G0&p=javacript");
elementLink.setAttribute('target',"_self");

console.log("Creating new Node");
const h2Element=document.createElement("h2");
const textNodeStrength=document.createTextNode("I am self Motivated, Hardworking, i have good mommunication skill, i am quick learner");
h2Element.append(textNodeStrength);

const strengthElement = document.querySelector('.strength');
strengthElement.appendChild(h2Element);

console.log("=======Remove Element======");
const elementRolesList = document.querySelector('#rolesList');
const elementRole3 = document.querySelector('#role3');
elementRolesList.removeChild(elementRole3);

    

