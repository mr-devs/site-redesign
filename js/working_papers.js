import { copyBibText } from "./utils.js";
window.copyBibText = copyBibText;

export function loadWorkingPapers() {
    fetch("./data/working_papers.json")
      .then(response => response.json())
      .then(papers => {
          const container = document.getElementById("circulated-working-papers");
          papers.forEach(paper => {
              container.insertAdjacentHTML("beforeend", `
                <p>
                    <a href="${paper.link}" target="_blank">${paper.title}</a>
                    <i class="bi bi-arrow-up-right-circle highlight"></i>
                    <br>
                    ${paper.authors}
                    <span class="highlight">
                        <a href="${paper.pdfPath}" target="_blank"><i class="bi bi-file-earmark-text-fill accent"></i></a>
                        <a href="#" onclick="window.copyBibText('${paper.bibPath}'); return false;">
                          <i class="bi bi-clipboard-check-fill accent"></i>
                        </a>
                    </span>
                </p>
              `);
          });
      })
      .catch(error => console.error("Error loading working papers:", error));
}
