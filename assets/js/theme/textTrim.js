const needToTrimTextCell = document.querySelectorAll('.message-cell');

if (needToTrimTextCell.length) {
  needToTrimTextCell.forEach(cell => {
    const MAX_LENGTH = 50;
    const fullText = cell.textContent.trim();

    if (fullText.length > MAX_LENGTH) {
      const shortText = fullText.slice(0, MAX_LENGTH) + '... ';

      // Create See More button
      const seeMoreBtn = document.createElement('button');
      seeMoreBtn.textContent = 'See more';
      seeMoreBtn.className = 'btn btn-link p-0 m-0 text-decoration-none text-info';
      seeMoreBtn.setAttribute('data-bs-toggle', 'modal');
      seeMoreBtn.setAttribute('data-bs-target', '#fullMessageModal');
      seeMoreBtn.style.cursor = 'pointer';

      // Set up modal content on click
      seeMoreBtn.addEventListener('click', () => {
        const modalBody = document.getElementById('modalMessageContent');
        console.log(modalBody)
        modalBody.textContent = fullText;
      });

      // Clear and append safely
      cell.textContent = ''; // Clear cell
      cell.appendChild(document.createTextNode(shortText));
      cell.appendChild(seeMoreBtn);
    }
  });
}