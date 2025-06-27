const sidebar = document.querySelector('.sidebar');
const overlay = document.getElementById('overlay');

function showSidebar() {
    sidebar.classList.add('active');
    overlay.style.display = 'block';
}

function hideSidebar() {
    sidebar.classList.remove('active');
    overlay.style.display = 'none';
}

// Hide sidebar when overlay is clicked
overlay.addEventListener('click', hideSidebar);

// Hide sidebar when any sidebar link is clicked
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', hideSidebar);
});

// Optional: Prevent clicks inside sidebar from closing it
sidebar.addEventListener('click', function(event) {
    event.stopPropagation();
});