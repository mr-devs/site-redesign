export function loadSoftware() {
    fetch("./data/software.json")
      .then(response => response.json())
      .then(softwareItems => {
          const container = document.getElementById("software");
          softwareItems.forEach(item => {
              container.insertAdjacentHTML("beforeend", `
                <div>
                    <a href="${item.href}" target="_blank">${item.title}</a>
                    <i class="bi bi-arrow-up-right-circle highlight"></i>
                    <p>${item.description}</p>
                </div>
              `);
          });
      })
      .catch(error => console.error("Error loading software items:", error));
}
