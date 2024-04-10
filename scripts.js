document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const listContainer = document.querySelector('.list-container');
    const mobileList = document.querySelector('.mobile-list');
    const close = document.querySelector('.close');

    const listItems = [
        'Features',
        'Solutions',
        'Templates',
        'Pricing',
        'Developers',
        'Resource',
        'App',
        'English'
    ];

    // Function to populate list items
    function populateListItems() {
        // Clear previous list items
        mobileList.innerHTML = '';

        // Create and append new list items
        listItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            mobileList.appendChild(li);
        });
    }

    // Toggle the visibility of list container and populate list items when hamburger is clicked
    hamburger.addEventListener('click', function () {
        if (listContainer.classList.contains('active')) {
            listContainer.classList.remove('active');
            close.style.display = 'none';
        } else {
            listContainer.classList.add('active');
            close.style.display = 'block';
            populateListItems();
        }
    });

    // Hide the container and close button when close button is clicked
    close.addEventListener("click", () => {
        listContainer.classList.remove('active');
        close.style.display = 'none';
    });
});
