const bookDetailsForm=document.getElementById('bookDetailForm');
const searchForm=document.getElementById('searchForm')
const responsediv=document.getElementById('responsediv');

let library=[];
bookDetailsForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const bookName=document.getElementById('bookName').value;
    const authorName=document.getElementById('authorName').value;
    const pages=document.getElementById('pages').value;
    const genre=document.getElementById('genre').value;

    if (bookName && authorName && pages && genre) {
        let book = {
            title: bookName,
            author: authorName,
            pages: pages,
            genre: genre
        };
        library.push(book);
        displayBooks();
    } else {
        alert('Please fill in all fields.');
    }
})

function displayBooks(books=library){
    let booksMainDiv=document.getElementById('responsediv');
    booksMainDiv.innerHTML="";

    books.forEach(book=>{
        let bookDiv=document.createElement('div');
        bookDiv.setAttribute("id", "bookDivId");
        bookDiv.classList.add('book');
        bookDiv.innerHTML=`
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Genre: ${book.genre}</p>
        `;
        booksMainDiv.appendChild(bookDiv);
    })

}
searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchbook=document.getElementById('searchbook').value.toLowerCase();
    let searchResult = library.filter(book => book.title.toLowerCase().includes(searchbook));
    displayBooks(searchResult);
})