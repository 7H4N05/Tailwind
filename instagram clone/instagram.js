document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const moreText = document.querySelector('.more-text');
  
    readMoreBtn.addEventListener('click', function() {
      if (moreText.classList.contains('hidden')) {
        moreText.classList.remove('hidden');
        moreText.classList.add('block');
        readMoreBtn.textContent = 'Read less';
      } else {
        moreText.classList.remove('block');
        moreText.classList.add('hidden');
        readMoreBtn.textContent = 'Read more';
      }
    });
  });