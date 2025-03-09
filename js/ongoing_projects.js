export function loadOngoingProjects() {
    fetch("./data/ongoing_projects.json")
      .then(response => response.json())
      .then(projects => {
          const container = document.getElementById("ongoing-projects");
          projects.forEach(project => {
              container.insertAdjacentHTML("beforeend", `
                <div style='margin-bottom: 2.5em;'>
                    <p>
                        <div style='margin-bottom: 0.5em;'>
                            <strong class='highlight'>${project.title}</strong>
                            <br>
                            ${project.description}
                        </div>
                        ${project.additionalInfo ? project.additionalInfo.join('') : ''}
                    </p>
                </div>
              `);
          });
      })
      .catch(error => console.error("Error loading ongoing projects:", error));
}