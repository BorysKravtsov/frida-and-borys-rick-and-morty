export function createPagination(currentPage, totalPages, onPageChange) {
  const navigation = document.querySelector('[data-js="navigation"]');
  if (navigation) {
    navigation.innerHTML = `
          <button class="button button--prev" data-js="button-prev" ${
            currentPage === 1 ? "disabled" : ""
          }>previous</button>
          <span class="navigation__pagination" data-js="pagination">${currentPage} / ${
      totalPages || 1
    }</span>
          <button class="button button--next" data-js="button-next" ${
            currentPage === totalPages ? "disabled" : ""
          }>next</button>
        `;

    const prevButton = navigation.querySelector('[data-js="button-prev"]');
    const nextButton = navigation.querySelector('[data-js="button-next"]');

    // Добавляем обработчики событий для кнопок и вызываем коллбек onPageChange
    prevButton?.addEventListener("click", () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    });

    nextButton?.addEventListener("click", () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    });
  }
}
