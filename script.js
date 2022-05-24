let newBookButton = document.querySelector("#newBook");
let formOverlay = document.querySelector(".overlay");
let newBookForm = document.querySelector("#newBookForm");
let books = document.querySelector("#books");
let myLibrary = [];

function Book(title, author, haveRead) {
	this.title = title;
	this.author = author;
	this.haveRead = haveRead;
}

Book.prototype.toggleStatus = function () {
	this.haveRead = !this.haveRead;
};

function createBookCard(book, index) {
	let card = document.createElement("div");
	let title = document.createElement("p");
	title.textContent = book.title;
	card.appendChild(title);
	let author = document.createElement("p");
	author.textContent = book.author;
	card.appendChild(author);
	let status = document.createElement("button");
	status.textContent = book.haveRead ? "Read" : "Not Read Yet";
	status.addEventListener("click", () => {
		let index = status.getAttribute("data");
		myLibrary[index].toggleStatus();
		status.textContent = book.haveRead ? "Read" : "Not Read Yet";
	});
	status.setAttribute("data", index);
	card.appendChild(status);
	return card;
}

function addBookToLibrary(e) {
	e.preventDefault();
	const title = document.querySelector("#title").value;
	const author = document.querySelector("#author").value;
	const haveRead = document.querySelector("#read").checked ? true : false;
	newBookForm.reset();
	myLibrary.push(new Book(title, author, haveRead));
	let bookCard = createBookCard(
		myLibrary[myLibrary.length - 1],
		myLibrary.length - 1
	);
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
