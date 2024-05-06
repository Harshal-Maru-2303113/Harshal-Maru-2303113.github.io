window.onload = () => {
  const tra = document.querySelector(".transition");
  const anchors = document.querySelectorAll('a');
  setTimeout(() => {
    tra.classList.remove('is-active');
  }, 350);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target.href;

      tra.classList.add('is-active');


      setTimeout(() => {
        window.location.href = target;
      }, 350);
    }, 350);
  }
}

