async function loadBooks() {
  const jsonString = `[
    {"title": "Things Fall Apart", "author": "Chinua Achebe", "year": 1958},
    {"title": "Purple Hibiscus", "author": "Chimamanda Adichie", "year": 2003},
    {"title": "The Alchemist", "author": "Paulo Coelho", "year": 1988}
  ]`;

  const booksArray = await JSON.parse(jsonString);
  console.log(booksArray);

  let i = 0;
  let booksDiv = document.getElementById("books");
  
  while (i < booksArray.length) {
    booksDiv.innerHTML = booksDiv.innerHTML + `
      <div class="book">
        <b>${booksArray[i].title}</b> <br>
        Author: ${booksArray[i].author} <br>
        Year: ${booksArray[i].year}
      </div>
    `;
    i++;
  }
}

loadBooks();