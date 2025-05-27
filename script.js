
function spinBook() {
  const books = [
    {
      title: "Fourth Wing",
      blurb: "A thrilling fantasy of dragons, danger, and desire.",
      isbn: "1649374046"
    },
    {
      title: "Book Lovers",
      blurb: "A rom-com about bookish rivals finding love.",
      isbn: "0593334833"
    },
    {
      title: "The Housemaid",
      blurb: "A psychological thriller with shocking twists.",
      isbn: "B09V1ZLL7N"
    }
  ];

  const selected = books[Math.floor(Math.random() * books.length)];

  const coverUrl = `https://covers.openlibrary.org/b/isbn/${selected.isbn}-L.jpg`;

  document.getElementById("bookTitle").innerText = selected.title;
  document.getElementById("bookBlurb").innerText = selected.blurb;
  document.getElementById("bookImage").src = coverUrl;
  document.getElementById("buyLink").href = `https://www.amazon.com/dp/${selected.isbn}?tag=tbroulette-20`;

  document.getElementById("result").classList.remove("hidden");
}
