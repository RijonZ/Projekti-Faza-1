document.querySelector('.menu-toggle').addEventListener('click', function () {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('hidden');
});

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}