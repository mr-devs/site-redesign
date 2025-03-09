import { copyBibText } from "./utils.js";
window.copyBibText = copyBibText;

let allPublications = [];

export function loadPublications() {
    fetch("./data/publications.json")
      .then(response => response.json())
      .then(publications => {
          allPublications = publications;
          renderPublications(allPublications);
          const searchInput = document.getElementById("pub-search");
          searchInput.addEventListener("input", (e) => {
              const query = e.target.value.toLowerCase();
              const filtered = allPublications.filter(pub => {
                  return (
                      pub.title.toLowerCase().includes(query) ||
                      pub.authors.toLowerCase().includes(query) ||
                      pub.publication.toLowerCase().includes(query) ||
                      pub.year.toLowerCase().includes(query)
                  );
              });
              renderPublications(filtered);
          });
      })
      .catch(error => console.error("Error loading publications:", error));
}

function renderPublications(publications) {
    const container = document.getElementById("peer-reviewed-publications");
    container.innerHTML = ""; // Clear existing items
    publications.forEach(pub => {
        // Wrap "Matthew R. DeVerna" in a <code> element
        const formattedAuthors = pub.authors.replace(/Matthew R\. DeVerna/g, '<code class="accent">Matthew R. DeVerna</code>');
        container.insertAdjacentHTML("beforeend", `
            <p>
                <i class="bi bi-arrow-up-right-circle highlight"></i>
                <a href="${pub.href}" target="_blank">${pub.title}</a>
                <br>
                ${formattedAuthors}. 
                <em><strong>${pub.publication}</strong></em>. ${pub.year}
                <span class="highlight">
                    <a href="${pub.pdfLink}" target="_blank">
                        <i class="bi bi-file-earmark-text-fill accent"></i>
                    </a>
                    <a href="#" onclick="window.copyBibText('${pub.bibPath}'); return false;">
                        <i class="bi bi-clipboard-check-fill accent"></i>
                    </a>
                </span>
                <br>
                ${pub.additionalInfo ? pub.additionalInfo.join('') : ''}
            </p>
        `);
    });
}
