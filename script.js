
function spinBook() {
  const books = [
    {
      title: "Fourth Wing",
      blurb: "A thrilling fantasy of dragons, danger, and desire.",
      asin: "1649374046",
      image: "https://m.media-amazon.com/images/I/81zS4pVtuhL._SL1500_.jpg"
    },
    {
      title: "Book Lovers",
      blurb: "A rom-com about bookish rivals finding love.",
      asin: "0593334833",
      image: "https://m.media-amazon.com/images/I/71g4B9X9lmL._SL1500_.jpg"
    },
    {
      title: "The Housemaid",
      blurb: "A psychological thriller with shocking twists.",
      asin: "B09V1ZLL7N",
      image: "https://m.media-amazon.com/images/I/71MIy8A0zPL._SL1500_.jpg"
    }
  ];

  const selected = books[Math.floor(Math.random() * books.length)];

  document.getElementById("bookTitle").innerText = selected.title;
  document.getElementById("bookBlurb").innerText = selected.blurb;
  document.getElementById("bookImage").src = selected.image;
  document.getElementById("buyLink").href = `https://www.amazon.com/dp/${selected.asin}?tag=tbroulette-20`;

  document.getElementById("result").classList.remove("hidden");
}
