'use strict';
(async () => {
  const icon = document.querySelector('#favicon');
  if (!icon) return;
  // Inline full-size frames avoid asynchronous URL reloads in browser chrome.
  const frames = [{"src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACqklEQVR4nMWUv0vrahzGP613cmkTCp2kjYVmMyHQWTu5ugidFPsPqLMiHZ3EwbEoKoJLoCAImYxbF1+TzSU0delSmr5bt/cOh+S2p3qFs5wHAsk37/fJ8/2RJ2eaJj8hDEOVJAlSSqrVKpZl5b47+8/viXEcLyUlScLt7S2u63J/f7/0IQBN07AsK5efJwyCgMPDQ4IgIAxDlcallARBgK7rC2riOKbT6dDpdEiJFxQCTCYTnp+fqVQq+L6vpJS8vb0hhMAwDIbDIb7vK4Ber0e32+Xq6gpN05YJK5UKjuPw+PjI6uoqg8EAIQSfn5+Mx2OklJyenuI4DoZh4Louu7u7NJvNrEULhJqmYds2vV6Pk5MTSqUSAOPxGMdxcBwHACEE3W6XUqlEu92mUCgsDyUMQ/X6+kqv18tejsfj7F4IQbvdZmdnJy0b13W5vr4GwPd9tbW1lcM0TWazmer3+6rRaKhyuaxWVla+vFqtlhqNRirN8TxPtVot1Wg01MPDg5rNZiqfrsXl5SVSygVVvyOKIqSUAFiWldvc3OTo6Ahd13l6eiKOY/IAw+GQl5eXb4lSSCmZTqfZs2VZOdu2aTabCCGYTqe/ehhF0f8qm0exWFyKra2tYRgGxWLxl8JarUatVvuRzDCMhYmmg7y7u8tieQDbtjk+PgbIVuUrNJvNbIF931eu63JxccFkMmFvb49qtQqmaWKaJqPRSJ2fn6t6vf7lpMvlsvI8T318fKh+v6/Ozs5UvV5X29vbyvM8NZvNlGma/+2hpmns7+8D4LpuVloURaRV3NzckCQJg8EgU3xwcIBt29mfkpu3r9QQgiDg/f2dIAgQQgCg6zqaplEoFLBtm/X1dTY2NjKXSTly3/nhvAfOo1AoZH38yhe/JfxT5H8+8pcJ/wUU4lgHSy93fQAAAABJRU5ErkJggg==", "duration": 100}, {"src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACjUlEQVR4nMWUsU7rShCGv6DTZ22J2rYUKaVZIVEhYVPQRjgvkI4O4bwA4gGCS0rTpQvwBLafwHbl0qRLZdadu70F177hksORbnNHcuOZ/XY1/8w/mk6n/BRlWWqlFABCCFzXHf1U/+vQ4f2DSileXl6o65rlcvntsjzPkVIO9Uf/Tj4+PlLXNWVZ6j5X1zVFUfDx8fEFFscx5+fn5Hl++IVKKdI0BWC5XJJlma7rmrZtUUpRFAWvr6/aMAzyPCeOY+bzOY7jfAe6rjvKskwHQcBqtcI0Teq6Jk1TmqahaRpub28xTRPXdTEMg7Ztub6+Rghx+IV/9w4pJavVCoCmaYZ8D+6/yWTyTZQvPUyShCiKUErhOM4X2H40TYNpmgBEUUQcx2RZpgdgL8j9/T1KKYIgoG3bg7B96Gw2w7Zt4jgmSRLKstRHvRhRFAHw8PDAbDb7EQZgmia+7xOGIUKIYbSO4HMskiQhCAKklDiOg+d5PwJ930dKiZSSy8tLyrJEKfUJfH9/HxrdD/Xd3R3z+fwgbDKZEIYhFxcXIwDLsrAsCyHEp8q2bXN6ekpRFOR5TlmWuh8j27YpioLtdst4PMa2bcIwREo5CBnH8T+3TadTuq7TT09P+vj4WN/c3OiqqnTXdbrP7XY7XVWVrqpK73Y73f9br9f66upKn52d6fV6rbuu06PeHLIs08/Pz2w2G6SUeJ6HbdsIITAMA2BYvX6/397esCyLMAzxfR/XdUfDYAshWCwWAGw2G9I0xbIsHMdhPB7T91opxXa7BcDzPBaLxRdzGO3bV28IeZ5TFMVgCPv2ZRgGJycn2LaNlPKbpY1+54e9le07DIBhGMPuHvLG3wL/axz9ueR/Bv4FazR71OaQg6UAAAAASUVORK5CYII=", "duration": 100}, {"src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACuElEQVR4nMWUr0/rbBTHP2Ovf9aMZK5tZmoQbZpUY7CMDIMjw8zCf4AE1f0FLDM1hCVFoMg6uQSxZaqClBYzA+kPVfdcwbu+2x33XnOT9yRNnvQ855Pz4/ucmmEY+L4PgK7rEiCO4xobJoSQvu/T6XTI87zy6bou0zRFUZQqZm/TGccxk8mkAq8tSRJc12U+n2/50jRlNBptxextBk6nU66urr6FAmRZVp11XZdBEDAej3l/f6/+V8A4jmumaQLg+z5pmiKEkICMogghBEVREMcxQggZxzGPj48IITBNsyr5n80MNE3j9PSU5+dnRqMRb29vzOdz8jwnyzJc1+Xu7o52u41pmsznc3q93hrIDlBRFA4ODnh4eMB1XTRNw7Isms0mURQRBAFZlpEkCff399i2jaqqW22pgLquy8lkwnA4RAhBr9fj8PAQTdPwfZ/b29ufW0qSJAwGA4qioNPpyDzPaxiGQVmWcjabScdxpOM40vM8uVqtZBiGlGUpz87OZL1e//YzDEMahiE9z5NlWcq99fgHgwEA19fXdLvdSm9pmhJF0U52a3t9fQVgOBwSx/HXlJMkIQgCut0ulmVtCTvPc/I8/yUQvuS0XC7Jsuyrh1EU8fHxQVEUKIqyBRBCIIT4LbDRaKCqKo1G4yvDdruNbdu8vLywWCx2RN1ut38LXFcC/wrbNE0uLi5YLpdVL9ZQRVE4Pj7+JWh/fx8hBJeXl+i6DoZhEIYhq9VK3tzcSMdxZL/fl57nydlsJsMwlGEYyn6/X0221WrJVqsl6/W6PDo6kk9PT7IsSxmG4X86VBSF8/NzAMbjMdPpFFVVt8q1bXurvycnJ5svpQZQ+259LRYLFotF9ew+Pz8BaDabCCGwLAtVVbEsa2t17QA3bb3rfpaMEAJFUYDdvVkB/6bt/fnK/wz8Aa9depAXNqGmAAAAAElFTkSuQmCC", "duration": 100}, {"src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACyklEQVR4nMVUPUvzUBR+qs7xGsgm/UK4UyF+QEZtFbqmQ1aro4vmZ2TRRWgHoaQOTtri1E2zZbIGumSQlGTJVmKWO553kIYEtS/v9B44kHvPc5+c7xLnHKZp4jc5Ozsjz/NQrVbBGINt26W8DUDhbi1v1HWddF2nJRAAwjCEaZoYDoc//shxHOTxa3nQcDjE5eUlwjAsgJbESZIUzjc3NxgMBgjDMLsvEEqSBMdxcH9/jyRJoOs6zedzMMYQBAE8z0Oz2aRms0nT6RRRFGF/fx+VSiXj2Fh+2LZdarVaNJvN8PT0BEmSEIYhptMpgiAAAJimCcYYyuUyoigCABweHhZSsZE/VCoVNBoNPD4+4vr6GvV6HXt7ezg+PoYkSVmoLy8v+Pj4wMnJSSENAADOOfr9PoQQNJlMqN1uk6IodHFxQa7rUhzHJIQgIQTFcUxxHJPrumRZFmmaRpqmUa/XoziOqd/vo8Q5h+d55Hle1j7dbhedTgcA8Pr6iiRJkKYpJEnC7u4uVFUFADiOg8FggCiKcHV19fWGc444jskwDNI0jSaTCQkhyPd9MgyD1tfXC7r03vd9EkKQ67rUbrfJMAzyfZ/AOYfruqQoClmWlYX2E1leDcPI0mFZFnHOyXVdWgOA+XyOxWKBNE0BAOPxGKPRCKtkNBrh9vYWSZKgXC6jWq1ia2vrq8q1Wg0HBwd4e3uD4zjfpuI3ubu7w/b2Np6fn4tVFkJQr9cjRVHIMAxSFGVluHldVvrh4YGEELQBfDV1p9OhNE0xHo8hyzIWi8VK72RZBgAwxmCaJo6OjmDbdilrbMYYut1ulsOdnZ3s8U/ksiyj1Wrh9PQUqqpmG6eUX1/LheB5Ht7f3zGbzRAEQTYNjDHU63U0Gg3UajWoqvptpRVGL284Pz+nJEnw+flZ8GxzcxOMsW/4pZQ45ytz9a+y9nfIfyb8A++3oJBwseIrAAAAAElFTkSuQmCC", "duration": 100}];
  const frameDuration = 250;
  try {
    await Promise.all(frames.map(frame => new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = resolve;
      image.onerror = reject;
      image.src = frame.src;
    })));
    icon.type = 'image/png';
    let index = 0;
    let timer = null;
    let running = false;
    function tick() {
      if (!running) return;
      const frame = frames[index];
      icon.href = frame.src;
      index = (index + 1) % frames.length;
      timer = setTimeout(tick, frameDuration);
    }
    function start() {
      if (running) return;
      running = true;
      tick();
    }
    function stop() {
      running = false;
      clearTimeout(timer);
      timer = null;
    }
    window.addEventListener('pagehide', stop);
    window.addEventListener('pageshow', event => { if (event.persisted) start(); });
    start();
  } catch (_) {
    // Keep the inline fallback icon when animation is unavailable.

  }
})();
