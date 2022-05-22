let newBookButton = document.querySelector("#newBook");
let formOverlay = document.querySelector(".overlay");
let newBookForm = document.querySelector("#newBookForm");
let books = document.querySelector("#books");
let myLibrary = [];

function Book(title, author) {
	this.title = title;
	this.author = author;
}

function createBookCard(book) {
	let card = document.createElement("div");
	let title = document.createElement("p");
	title.textContent = book.title;
	card.appendChild(title);
	let author = document.createElement("p");
	author.textContent = book.author;
	card.appendChild(author);
	return card;
}

function addBookToLibrary(e) {
	e.preventDefault();
	const title = document.querySelector("#title").value;
	const author = document.querySelector("#author").value;
	newBookForm.reset();
	myLibrary.push(new Book(title, author));
	let bookCard = createBookCard(myLibrary[myLibrary.length - 1]);
	books.appendChild(bookCard);
	formOverlay.style.display = "none";
}

function setEventListeners() {
	newBookButton.addEventListener(
		"click",
		() => (formOverlay.style.display = "flex")
	);
	formOverlay.addEventListener(
		"click",
		() => (formOverlay.style.display = "none")
	);
	newBookForm.addEventListener("click", (e) => e.stopPropagation());
	newBookForm.addEventListener("submit", addBookToLibrary);
}

setEventListeners();
