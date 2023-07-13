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
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

//items.style.backgroundColor = '#f4f4f4';

for(var i=0; i<items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4'
}

//get elements by tag name




























