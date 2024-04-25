let open = false;

const modal = document.querySelector('.modal')

document.querySelector('.close-modal').addEventListener('click', function(e) {
    modal.close()

})

document.querySelector('.menu-icon').addEventListener('click', function(e) {
    modal.showModal();
})
