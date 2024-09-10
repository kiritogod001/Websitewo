// Cache elements in variables
const sidebarToggle = document.getElementById('sidebar-toggle');
const headerSidebarToggle = document.getElementById('header-sidebar-toggle');
const darkModeToggle = document.getElementById('toggle-dark-mode');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('main');
const videoCards = document.querySelectorAll('.video-card');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

// Function to redirect to a new page
function redirectToPage(pageUrl) {
  window.location.href = pageUrl;
}

// Function to open video player in new index
function openVideoPlayer(videoPage) {
  redirectToPage(videoPage);
}

// Function to open profile sign-up page
function openProfilePage() {
  redirectToPage('signup.html');
}

// Function to navigate home
function navigateHome() {
  redirectToPage('index.html');
}

// Toggle dark mode and save preference to localStorage
darkModeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  videoCards.forEach(function(card) {
    card.classList.toggle('dark-mode');
  });
  header.classList.toggle('dark-mode');
  sidebar.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');

  // Save dark mode preference
  const darkModeEnabled = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', darkModeEnabled ? 'enabled' : 'disabled');
});

// Check localStorage and apply dark mode on page load
window.addEventListener('load', function() {
  const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
  if (darkModeEnabled) {
    document.body.classList.add('dark-mode');
    videoCards.forEach(function(card) {
      card.classList.add('dark-mode');
    });
    header.classList.add('dark-mode');
    sidebar.classList.add('dark-mode');
    footer.classList.add('dark-mode');
  }
});

// Toggle sidebar visibility
sidebarToggle.addEventListener('click', function() {
  sidebar.classList.toggle('open');
  main.classList.toggle('shifted');
});

// Toggle sidebar visibility
headerSidebarToggle.addEventListener('click', function() {
    sidebar.classList.toggle('open');
    main.classList.toggle('shifted');
});
