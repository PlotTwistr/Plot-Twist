
function spinBook() {
  const amazonInput = document.getElementById("amazonInput").value.trim();
  const manualInput = document.getElementById("manualInput").value.trim();
  const csvUpload = document.getElementById("csvUpload").files[0];
  const resultDiv = document.getElementById("result");

  resultDiv.classList.remove("hidden");
  resultDiv.innerHTML = "<p class='loading'>🔮 Consulting the TBR gods...</p>";

  if (csvUpload) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const text = e.target.result;
      const rows = text.split('\n');
      const bookList = rows.map(row => row.split(',')[0].replace(/"/g, '')).filter(Boolean);

      const selected = bookList[Math.floor(Math.random() * bookList.length)];
      const isbnCandidate = selected.replace(/[^0-9X]/gi, '').substring(0, 13);
      const coverUrl = `https://covers.openlibrary.org/b/isbn/${isbnCandidate}-L.jpg`;

      setTimeout(() => {
        resultDiv.innerHTML = `
          <img src="${coverUrl}" alt="Book cover">
          <h2>${selected}</h2>
          <p>Randomly selected from your uploaded TBR</p>
          <a href="https://www.amazon.com/s?k=${encodeURIComponent(selected)}&tag=tbroulette-20" target="_blank">Read It on Amazon</a>
        `;
      }, 1500);
    };
    reader.readAsText(csvUpload);
    return;
  }

  if (amazonInput && !manualInput) {
    setTimeout(() => {
      const fakeBooks = [
        "Fourth Wing", "Book Lovers", "The Housemaid", "Things We Never Got Over", "Happy Place"
      ];
      const selected = fakeBooks[Math.floor(Math.random() * fakeBooks.length)];
      const isbnCandidate = selected.replace(/[^0-9X]/gi, '').substring(0, 13);
      const coverUrl = `https://covers.openlibrary.org/b/isbn/${isbnCandidate}-L.jpg`;

      resultDiv.innerHTML = `
        <img src="${coverUrl}" alt="Book cover">
        <h2>${selected}</h2>
        <p>Picked from your Amazon wishlist*</p>
        <a href="https://www.amazon.com/s?k=${encodeURIComponent(selected)}&tag=tbroulette-20" target="_blank">Read It on Amazon</a>
      `;
    }, 1500);
    return;
  }

  if (!manualInput && !amazonInput && !csvUpload) {
    alert("Please paste a wishlist URL, book list, or upload a CSV.");
    resultDiv.classList.add("hidden");
    return;
  }

  const bookList = manualInput.split('\n').filter(line => line.trim() !== '');

  setTimeout(() => {
    const selected = bookList[Math.floor(Math.random() * bookList.length)];
    const isbnCandidate = selected.replace(/[^0-9X]/gi, '').substring(0, 13);
    const coverUrl = `https://covers.openlibrary.org/b/isbn/${isbnCandidate}-L.jpg`;

    resultDiv.innerHTML = `
      <img src="${coverUrl}" alt="Book cover">
      <h2>${selected}</h2>
      <p>We'll guess the blurb based on title soon!</p>
      <a href="https://www.amazon.com/s?k=${encodeURIComponent(selected)}&tag=tbroulette-20" target="_blank">Read It on Amazon</a>
    `;
  }, 1500);
}
