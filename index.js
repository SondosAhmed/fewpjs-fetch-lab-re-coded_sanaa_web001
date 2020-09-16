function fetchBooks() {
<<<<<<< HEAD
  return fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(resp => renderBooks(resp));
=======
  fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(resp.data => renderBooks(resp));
>>>>>>> 6e97e1ec6e7d040e672ddd186106c27584efa69e


}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name
    main.appendChild(h2)
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
})
