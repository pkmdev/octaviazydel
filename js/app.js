var toggles = document.querySelectorAll('[data-toggle-target]');

toggles.forEach(toggle => {

  toggle.addEventListener('click', function(e){
    console.log(this);
    this.classList.toggle('toggled');
    var target = document.getElementById(this.dataset.toggleTarget);
    if (target) {
      target.classList.toggle('toggled')
    }
  })
})

function renderMenu(first = false) {
  var menu = document.getElementById('values_menu');
  if (!menu) return;
  var items = Array.from(menu.getElementsByClassName('menu_item'));
  var theta = 2.0*Math.PI/items.length;
  var offset = getComputedStyle(menu).getPropertyValue('--rotationOffset') * Math.PI/180;;
  var menuRadius = getComputedStyle(menu).getPropertyValue('--menuRadius');

  if ('IntersectionObserver' in window) {
    // IntersectionObserver Supported
    let config = {
          root: null,
          rootMargin: '-25%',
          threshold: 1
        };

    let observer = new IntersectionObserver(onChange, config);
    observer.observe(menu);

    function onChange(changes, observer) {
      changes.forEach(change => {
        if (change.intersectionRatio > 0) {
          menu.classList.add('visible');
        } else {
          menu.classList.remove('visible');
        }
      });
    }

  }

  menu.style.setProperty('--theta', theta);
  items.forEach(function(item, i) {
      var radius = item.dataset.radius;
      var highlight = item.dataset.color;
      var target = document.getElementById(item.dataset.target);
      var xpos = ( parseInt(menuRadius) * Math.sin(theta * i + offset));
      var ypos = ( parseInt(menuRadius) * Math.cos(theta * i + offset));
      var heading = Array.from(target.getElementsByTagName('h3'))[0];

      // Set toggle CSS properties
      item.style.setProperty('--radius', radius);
      item.style.setProperty('--highlight', highlight);
      item.style.setProperty('--order', i);
      item.style.setProperty('--xpos', xpos);
      item.style.setProperty('--ypos', ypos);


      //Set target position class
      if (xpos >= 0 && ypos >= 0) target.classList.add('bottom-left');
      if (xpos >= 0 && ypos < 0) target.classList.add('top-left');
      if (xpos < 0 && ypos >= 0) target.classList.add('bottom-right');
      if (xpos < 0 && ypos < 0) target.classList.add('top-right');

      if (xpos > 0) {
        var c = (menu.getBoundingClientRect().top - ypos - heading.getBoundingClientRect().bottom);
       var a = menu.getBoundingClientRect().left + (menu.getBoundingClientRect().left - menu.getBoundingClientRect().right)/2 + xpos - Math.abs(c) - heading.getBoundingClientRect().left;
      } else {
        var c = (menu.getBoundingClientRect().top - ypos - heading.getBoundingClientRect().bottom);
        var a = menu.getBoundingClientRect().left + (menu.getBoundingClientRect().left - menu.getBoundingClientRect().right)/2 - xpos - Math.abs(c) - (window.innerWidth - heading.getBoundingClientRect().right);
      }


      heading.style.setProperty('--horzWidth', Math.abs(a));
      heading.style.setProperty('--rayLength', Math.abs(c) * Math.sqrt(2));

  })

  window.addEventListener('resize', renderMenu);
  window.addEventListener('scroll', renderMenu);
}

renderMenu(true);
