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

let categories=['Personal', 'Work'];
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
    notes[category].forEach(note=>{
        const li=document.createElement('li');
        li.textContent=note;
        li.addEventListener('click',()=>{
            notecontent.value=note;
            notecontent.dataset.category=category;
            notecontent.dataset.note=note;
        })
        noteslist.appendChild(li);
    })
}


addcategoriesbtn.addEventListener('click', ()=>{
    const newcategory=newcategoryinput.value.trim();
    if(newcategory!==''){
        categories.push(newcategory);
        notes[newcategory]=[];
    displayCategories();
    newcategoryinput.value="";
    }
    else{
        alert("Enter new category before adding");
    }
});

addnotesbtn.addEventListener('click', ()=>{
    const newnote=notecontent.value.trim();
    if(newnote!==''){
     notes[currentCategory].push(newnote);
     displaynotes(currentCategory);
     console.log(notes[currentCategory]);
     notecontent.value="";
    }
    else{
     alert("Enter new note before adding");
 }
 });
 
 
editnotesbutton.addEventListener('click',()=>{
    const category=notecontent.dataset.category;
    const oldNotes=notecontent.dataset.note;
    const newNotes=notecontent.value.trim();
    console.log(category);
    console.log(oldNotes);
    console.log(newNotes);

    if(category && oldNotes && newNotes !==''){
        const index=notes[category].indexOf(oldNotes);
        if(index!==-1){
            notes[category].index=newNotes;
            displaynotes(category);
            notecontent.value='';
        }
    }
})