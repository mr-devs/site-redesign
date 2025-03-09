import "./theme-switcher.js";
import { loadPublications } from "./publications.js";
import { loadWorkingPapers } from "./working_papers.js";
import { loadOngoingProjects } from "./ongoing_projects.js";
import { loadSoftware } from "./software.js";
import { loadNews } from "./news.js";

document.addEventListener("DOMContentLoaded", () => {
    loadPublications();
    loadWorkingPapers();
    loadOngoingProjects();
    loadSoftware();
    loadNews();
});
