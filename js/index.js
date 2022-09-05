document.addEventListener("DOMContentLoaded", function() {
    fetchingList()
});

// function renderBookList(book){
//     const titleList = document.createElement('li')
//     titleList.textContent = `${book.title}`

//     document.querySelector('#list').append(titleList)
// }

// function fetchingList(){
//     fetch('http://localhost:3000/books')
//     .then(response => response.json())
//     .then(data => data.forEach(book => renderBookList(book)))
// }



function fetchingList(){
    fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(booktitle => {
        const booklist = document.querySelector('#list')
        booktitle.forEach( book => {
            const title = document.createElement('li')
            title.textContent = book.title;
            title.addEventListener('click', BookInfo);
            booklist.appendChild(title)
        })
    })
    .catch(error => console.log(error))
}


function BookInfo(event){
    const clickedBookName = event.target.textContent;
    fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(books => {
        let sameBook = books.find(element => {
            return element.title = clickedBookName
        });
        updateBook(sameBook)
    })
    .catch(error => console.log(error))
}

function updateBook(book){
    const bookinfo = document.querySelector('#show-panel')
    const info = document.createElement('li')
    info.textContent = `${book.subtitle}
    ${book.description},
    ${book.users}`

    bookinfo.append(info)
}
