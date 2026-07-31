(function () {
  // Reveal sections on scroll, with a hard fallback so content is never
  // stuck invisible if IntersectionObserver is unavailable or JS errors out.
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && els.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // The whole blob group drifts gently toward the pointer, layered on top of
  // each blob's own idle animation (parent transform + child transform compose).
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var group = document.querySelector('.liquid-blobs');
  var heroEl = document.querySelector('.hero');
  if (!reduceMotion && group && heroEl) {
    var targetX = 0, targetY = 0, curX = 0, curY = 0;
    var strength = 22; // max px of parallax drift

    heroEl.addEventListener('mousemove', function (e) {
      var rect = heroEl.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    });

    function tick() {
      curX += (targetX - curX) * 0.04;
      curY += (targetY - curY) * 0.04;
      group.style.transform = 'translate3d(' + (curX * strength).toFixed(2) + 'px, ' + (curY * strength).toFixed(2) + 'px, 0)';
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // Page-wide spotlight that follows the cursor, visible everywhere (not just the hero)
  var spotlight = document.querySelector('.spotlight');
  if (!reduceMotion && spotlight) {
    document.addEventListener('mousemove', function (e) {
      spotlight.style.setProperty('--mx', e.clientX + 'px');
      spotlight.style.setProperty('--my', e.clientY + 'px');
      spotlight.classList.add('is-active');
    });
    document.addEventListener('mouseleave', function () {
      spotlight.classList.remove('is-active');
    });
  }

  // Each work card gets its own cursor-tracked highlight
  var cards = document.querySelectorAll('.work-item');
  cards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      card.style.setProperty('--cx', (e.clientX - rect.left) + 'px');
      card.style.setProperty('--cy', (e.clientY - rect.top) + 'px');
    });
  });

  // A subtle magnetic pull on the primary button
  var magnetBtn = document.querySelector('.btn-primary');
  if (!reduceMotion && magnetBtn) {
    magnetBtn.addEventListener('mousemove', function (e) {
      var rect = magnetBtn.getBoundingClientRect();
      var mx = (e.clientX - rect.left - rect.width / 2) * 0.25;
      var my = (e.clientY - rect.top - rect.height / 2) * 0.35;
      magnetBtn.style.transform = 'translate(' + mx.toFixed(1) + 'px, ' + my.toFixed(1) + 'px)';
    });
    magnetBtn.addEventListener('mouseleave', function () {
      magnetBtn.style.transform = 'translate(0, 0)';
    });
  }
})();
