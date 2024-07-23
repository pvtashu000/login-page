const wrapper = document.querySelector('.wrapper');

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    wrapper.style.maxWidth = '100%';
    wrapper.style.padding = '20px';
  } else {
    wrapper.style.maxWidth = '400px';
    wrapper.style.padding = '40px';
  }
});

window.dispatchEvent(new Event('resize'));