let library=[];

function addBook(){
    let bookName=document.getElementById('bookName').value;
    let authorName=document.getElementById('authorName').value;
    let pages=document.getElementById('pages').value;
    let genre=document.getElementById('genre').value;

    if(bookName&& authorName && pages && genre){
        let book={
            bookname:bookName,
            author:authorName,
            pages:pages,
            genre:genre
        };
        library.push(book);
        displayBooks();
    }
    else{
        alert("Please fill all fields to add new book");
    }
}

function displayBooks(books=library){
    let booksMainDiv=document.getElementById('booksMainDiv');
    booksMainDiv.innerHTML="";

    books.forEach(book=>{
        let bookDiv=document.createElement('div')
        bookDiv.classList.add('book');
        bookDiv.innerHTML=`
        <h3>${book.bookname}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Genre: ${book.genre}</p>
        `;
        booksMainDiv.appendChild(bookDiv);
    })

}

