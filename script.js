
function spinBook() {
  const manualInput = document.getElementById("manualInput").value.trim();
  let bookList = [];

  if (manualInput) {
    bookList = manualInput.split('\n').filter(line => line.trim() !== '');
  } else {
    alert("Please paste book titles or ISBNs to use Plot Twist.");
    return;
  }

  // Show loading text
  const resultDiv = document.getElementById("result");
  resultDiv.classList.remove("hidden");
  resultDiv.innerHTML = "<p class='loading'>🔮 Consulting the TBR gods...</p>";

  // Simulate delay and then show result
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
  }, 1500); // delay for 1.5 seconds
}
