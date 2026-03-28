const quickAccessPills = document.querySelectorAll(".quick-access__pill");

quickAccessPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    quickAccessPills.forEach((item) => item.classList.remove("is-active"));
    pill.classList.add("is-active");
  });
});
