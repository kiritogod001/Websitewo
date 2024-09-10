// script.js

document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('.sidebar').classList.toggle('dark-mode');
    document.querySelectorAll('.video-card').forEach(card => {
        card.classList.toggle('dark-mode');
    });
    document.querySelector('footer').classList.toggle('dark-mode');
});

document.getElementById('sidebar-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('open');
    document.querySelector('main').classList.toggle('shifted');
    
});



