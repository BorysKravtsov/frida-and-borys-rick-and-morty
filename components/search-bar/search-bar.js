export function createSearchBar(onSubmit) {
  const searchBarContainer = document.createElement("div");
  searchBarContainer.classList.add("search-bar-container");
  searchBarContainer.innerHTML = `
    <form action="" class="search-bar" data-js="search-bar">
      <input
        id="search-input"
        name="query"
        class="search-bar__input"
        type="text"
        placeholder="Search characters"
        aria-label="character name"
      />
      <button class="search-bar__button" aria-label="search for character">
        <img
          class="search-bar__icon"
          src="assets/magnifying-glass.png"
          alt=""
        />
      </button>
    </form>
  `;

  const main = document.querySelector("main");
  main.prepend(searchBarContainer);
  const form = searchBarContainer.querySelector('[data-js="search-bar"]');
  form.addEventListener("submit", onSubmit);
}
