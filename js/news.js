export function loadNews() {
    fetch("./data/news.json")
      .then(response => response.json())
      .then(newsData => {
          // Sort news in reverse chronological order.
          newsData.sort((a, b) => parseInt(b.year) - parseInt(a.year));
          const container = document.getElementById("news");
          container.innerHTML = `
            <div class="accordion" id="newsAccordion">
              <!-- Accordion items will be added here -->
            </div>
          `;
          const accordion = document.getElementById("newsAccordion");
          newsData.forEach((yearData, index) => {
              const collapseId = `collapse${yearData.year}`;
              const headingId = `heading${yearData.year}`;
              let itemsHTML = '';
              yearData.items.forEach(item => {
                  itemsHTML += `
                    <p>
                        <span class="badge border light">${item.type}</span> ${item.htmltext}
                    </p>
                  `;
              });
              const accordionItem = `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="${headingId}">
                      <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="${collapseId}">
                        ${yearData.year}
                      </button>
                    </h2>
                    <div id="${collapseId}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="${headingId}" data-bs-parent="#newsAccordion">
                      <div class="accordion-body">
                        ${itemsHTML}
                      </div>
                    </div>
                </div>
              `;
              accordion.insertAdjacentHTML("beforeend", accordionItem);
          });
      })
      .catch(error => console.error("Error loading news:", error));
}
