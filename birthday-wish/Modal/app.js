const clickBtn = document.getElementById("open-modal");
const openModal = document.getElementById("dialog")
const closeBtn = document.querySelector(".close-btn")

clickBtn.addEventListener('click', () => openModal.showModal());
closeBtn.addEventListener('click', () => openModal.close());