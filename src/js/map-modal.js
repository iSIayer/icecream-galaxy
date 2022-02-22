(() => {
    const refs = {
      openMapBtn: document.querySelector('[data-map-open]'),
      closeMapBtn: document.querySelector('[data-map-close]'),
      map: document.querySelector('[data-map]'),
      body: document.querySelector("body"),
    };
  
    refs.openMapBtn.addEventListener('click', toggleMap);
    refs.closeMapBtn.addEventListener('click', toggleMap);
  
    function toggleMap() {
        refs.map.classList.toggle('is-hidden-contacts')
        refs.body.classList.toggle('no-scroll');
    }
  })();