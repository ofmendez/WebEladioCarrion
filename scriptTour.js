
const regionButtons = document.querySelectorAll('.region-btn');
const allTables = document.querySelectorAll('.region-table');

regionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const region = btn.textContent.trim().toLowerCase();

    allTables.forEach(table => table.classList.remove('active'));

    const targetTable = document.getElementById(`table-${region}`);
    if (targetTable) {
      targetTable.classList.add('active');
    }
  });
});
