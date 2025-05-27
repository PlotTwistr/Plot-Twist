
function spinBook() {
  const amazonInput = document.getElementById("amazonInput").value.trim();
  const manualInput = document.getElementById("manualInput").value.trim();
  let bookList = [];

  const resultDiv = document.getElementById("result");
  resultDiv.classList.remove("hidden");
  resultDiv.innerHTML = "<p class='loading'>🔮 Consulting the TBR gods...</p>";

  if (amazonInput && !manualInput) {
    // Placeholder spin for Amazon wishlist (real integration to come)
    setTimeout(() => {
      const fakeBooks = [
        "Fourth Wing",
        "Book Lovers",
        "The Housemaid",
        "Things We Never Got Over",
        "Happy Place"
      ];
      const selected = fakeBooks[Math.floor(Math.random() * fakeBooks.length)];
      const isbnCandidate = selected.replace(/[^0-9X]/gi, '').substring(0, 13);
      const coverUrl = `https://covers.openlibrary.org/b/isbn/${isbnCandidate}-L.jpg`;

      resultDiv.innerHTML = `
        <img id="bookImage" src="${coverUrl}" alt="Book cover">
        <h2 id="bookTitle">${selected}</h2>
        <p id="bookBlurb">Picked from your Amazon wishlist*</p>
        <a id="buyLink" href="https://www.amazon.com/s?k=${encodeURIComponent(selected)}&tag=tbroulette-20" target="_blank">Read It on Amazon</a>
      `;
      resultDiv.style.animation = "none";
      void resultDiv.offsetWidth;
      resultDiv.style.animation = "fadeInScale 0.6s ease-in-out forwards";
    }, 1500);
    return;
  }

  if (!manualInput && !amazonInput) {
    alert("Please paste either an Amazon Wish List URL or a list of books.");
    resultDiv.classList.add("hidden");
    return;
  }

  // Handle manual list
  bookList = manualInput.split('\n').filter(line => line.trim() !== '');

  setTimeout(() => {
    const selected = bookList[Math.floor(Math.random() * bookList.length)];
    const isbnCandidate = selected.replace(/[^0-9X]/gi, '').substring(0, 13);
    const coverUrl = `https://covers.openlibrary.org/b/isbn/${isbnCandidate}-L.jpg`;

    resultDiv.innerHTML = `
      <img id="bookImage" src="${coverUrl}" alt="Book cover">
      <h2 id="bookTitle">${selected}</h2>
      <p id="bookBlurb">We'll guess the blurb based on title soon!</p>
      <a id="buyLink" href="https://www.amazon.com/s?k=${encodeURIComponent(selected)}&tag=tbroulette-20" target="_blank">Read It on Amazon</a>
    `;
    resultDiv.style.animation = "none";
    void resultDiv.offsetWidth;
    resultDiv.style.animation = "fadeInScale 0.6s ease-in-out forwards";
  }, 1500);
}
