const categorieslist=document.getElementById('categorieslist');
const noteslist=document.getElementById('noteslist');
const newcategoryinput=document.getElementById('newcategoryinput');
const addcategoriesbtn=document.getElementById('addcategoriesbtn');
const searchcategoryinput=document.getElementById('searchcategoryinput');
const searchcategoriesbtn=document.getElementById('searchcategoriesbtn');
const notecontent=document.getElementById('notecontent');
const addnotesbtn=document.getElementById('addnotesbtn');
const editnotesbutton=document.getElementById('editnotesbutton');
const deletenotesbutton=document.getElementById('deletenotesbutton');

let categories=['Personal', 'Work', 'Plans'];
let currentCategory='Personal';

let notes={
    'Personal':['Buy Milk', 'Buy Fruits'],
    'Work':['Finish Report', 'Finish Project', 'Meeting'],
}

function displayCategories(){
    categorieslist.innerHTML="";
    categories.forEach(category=>{
        const li=document.createElement('li');
        li.textContent=category;
        li.addEventListener('click',()=>{
            currentCategory=category;
            displaynotes(category);
        })
        categorieslist.appendChild(li);
    })
}
displayCategories();

function displaynotes(category){
    noteslist.innerHTML="";
    notes[category].forEach(notes=>{
        const li=document.createElement('li');
        li.textContent=notes;
        noteslist.appendChild(li);
    })
}