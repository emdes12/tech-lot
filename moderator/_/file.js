// switching boards
const boardBtn = document.querySelectorAll(".nav-list");

boardBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let btnParentLink = btn.parentElement.getAttribute("href").slice(1);

    const selectedBoardArea = document.getElementById(btnParentLink);

    const allBoardArea = document.querySelectorAll(".board");

    allBoardArea.forEach((board) => {
      board.classList.remove("open");
      selectedBoardArea.classList.add("open");
      console.log(board);
    });

    // console.log(boardArea);
  });
});
