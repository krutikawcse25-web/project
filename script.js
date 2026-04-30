// SPA Page switch function
function showPage(pageId) {
    let pages = document.querySelectorAll('.page');

    pages.forEach(page => {
        page.style.display = "none";
    });

    document.getElementById(pageId).style.display = "block";
}

// Default page load
window.onload = function () {
    showPage('home');
};
