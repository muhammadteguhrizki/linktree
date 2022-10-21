var toTop = document.querySelector('#to-top');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 300) {
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
});
