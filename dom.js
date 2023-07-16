// //console.dir(document);
// //examine the document object

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent='Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// //get element by id
// console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
 //console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';

//headerTitle.innerHTML = '<h3>Hello</h3>';
//header.style.borderBottom = 'solid 3px #000';

//get element by class name
var items = document.getElementsByClassName('list-group-item');
console.log(items[1]);
textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

//items.style.backgroundColor = '#f4f4f4';

for(var i=0; i<items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4'
}

//get elements by tag name

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(var i=0; i<li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// query selector

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]')
// submit.value ="SEND";

var header  = document.querySelector('#main-header');
header.style.border5Bottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';
item.style.color = 'green';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secItem = document.querySelector('.list-group-item:nth-child(2)');
secItem.style.color = 'grey';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.color = '#f4f4f4';

//query selector all

var titles = document.querySelectorAll('.title');
console.log (titles);

titles[0].textContent = 'Arvind Keshri';
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
    even[0].style.backgroundColor = 'green';

}

v






















































































