window.addEventListener('scroll', () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolledHeight = window.scrollY;
  const arrow = document.getElementById('scroll-to-bottom-arrow');

  if (scrolledHeight < scrollableHeight) {
    arrow.style.display = 'block';
  } else {
    arrow.style.display = 'none';
  }
});

document.getElementById('scroll-to-bottom-arrow').addEventListener('click', () => {
  window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
});
