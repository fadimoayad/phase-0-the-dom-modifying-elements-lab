// Write your code here!

document.getElementById('main').remove();
let newHeader=document.createElement('h1');
newHeader.setAttribute('id','victory')
newHeader.textContent="is the champion";
const main = document.getElementById("main");
main.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";
const element = document.createElement("div");
document.body.appendChild(element);

const ul=document.createElement('ul');

for(let i=0;i<3;i++){
    const li=document.createElement('li');
    li.textContent=(i+1).toString();
    ul.appendChild(li);
}
element.appendChild(ul)