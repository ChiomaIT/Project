document.addEventListener("DOMContentLoaded", function() {
    // your JavaScript code goes here
    // Get the image slider element
    var slider = document.querySelector(".banner-image-wrapper");

    // Get the total number of images in the slider
    var numImages = slider.children.length;

    // Set the width of the slider to accomodate all images horizontally
    slider.style.width = numImages * 100 + "%";

    // Set the width of each image wrapper to accomodate one image
    var imageWrapperWidth = 100 / numImages;
    var imageWrappers = document.querySelectorAll(".banner-image-wrapper");
    for (var i = 0; i < imageWrappers.length; i++) {
        imageWrappers[i].style.width = imageWrapperWidth + "%";
    }
});






// // Add an event listener to the menu items
// const menuItems = document.querySelectorAll('.dashboard-header-menu-item');
// menuItems.forEach(item => {
//     item.addEventListener('click', () => {
//     // Remove the active class from all items
//     menuItems.forEach(item => {
//         item.classList.remove('active');
//     });
//     // Add the active class to the clicked item
//     item.classList.add('active');
//     });
// });

// // Add an event listener to the user dropdown menu
// const userDropdown = document.querySelector('.dashboard-header-user-dropdown');
// const userIcon = document.querySelector('.dashboard-header-user img');
// userIcon.addEventListener('click', () => {
//     userDropdown.classList.toggle('show');
// });

// // Close the dropdown menu when the user clicks outside of it
// window.addEventListener('click', event => {
//     if (!event.target.matches('.dashboard-header-user img')) {
//     userDropdown.classList.remove('show');
//     }
// });
