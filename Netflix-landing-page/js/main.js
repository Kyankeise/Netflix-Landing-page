// Author: Kyan Keise
// Date: 19/05/2022
// Title: Netflix Landing page

const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item

function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    // add show class
    tabContentItem.classList.add('show');
}
// remove red border
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

// remove show to display correct tab
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
