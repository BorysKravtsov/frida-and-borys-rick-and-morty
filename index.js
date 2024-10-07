import { createCharacterCard } from "./components/card/card.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";

const main = document.querySelector("main");

let maxPage;
let searchQuery = "";
let pageIndex = 1;

async function fetchCharacters(pageIndex, searchQuery = "") {
  main.innerHTML = "";
  createSearchBar((event) => {
    event.preventDefault();
    const inputText = event.target.elements.query.value;
    searchQuery = "&name=" + inputText;
    pageIndex = 1;
    fetchCharacters(pageIndex, searchQuery);
  });

  try {
    const charactersData = await fetch(
      `https://rickandmortyapi.com/api/character?page=${pageIndex}${searchQuery}`
    );
    const data = await charactersData.json();

    maxPage = data.info.pages;
    createPagination(pageIndex, maxPage, (newPageIndex) => {
      pageIndex = newPageIndex;
      fetchCharacters(pageIndex, searchQuery);
    });

    data.results.forEach((element) => {
      createCharacterCard(
        element.image,
        element.name,
        element.status,
        element.type,
        element.episode.length
      );
    });
  } catch (error) {
    console.error("Failed to fetch characters:", error);

    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = "Character not found";
    main.append(errorMessage);
    createPagination(1, 1);
  }
}

fetchCharacters(pageIndex, searchQuery);
