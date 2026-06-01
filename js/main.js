// Mobile nav toggle
document.addEventListener('click', function (e) {
  if (e.target.closest('.nav-toggle')) {
    document.querySelector('.nav-links').classList.toggle('open');
  } else if (!e.target.closest('.nav-links')) {
    var links = document.querySelector('.nav-links');
    if (links) links.classList.remove('open');
  }
});
