/* Motor de actividades interactivas – Ingeniería del Software II
   Cada página define window.SEMANA con los datos y llama a App.init(). */
(function () {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const h = (tag, attrs = {}, ...kids) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'class') e.className = v;
      else if (k === 'html') e.innerHTML = v;
      else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v);
    }
    kids.flat().forEach(c => e.append(c && c.nodeType ? c : document.createTextNode(c ?? '')));
    return e;
  };
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  // ---------- almacenamiento (opcional, tolerante a fallos) ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem('isw2:' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('isw2:' + k, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } }
  };

  // ---------- tema ----------
  function initTheme() {
    const saved = store.get('theme', null);
    if (saved) document.documentElement.setAttribute('data-theme', saved);
    const btn = $('#themeBtn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') ||
        (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      store.set('theme', next);
    });
  }

  // ---------- pestañas ----------
  function initTabs() {
    const tabs = [...document.querySelectorAll('.tab')];
    const show = id => {
      tabs.forEach(t => t.setAttribute('aria-selected', t.dataset.panel === id ? 'true' : 'false'));
      document.querySelectorAll('.panel').forEach(p => p.classList.toggle('active', p.id === id));
      store.set('tab:' + (window.SEMANA && SEMANA.id), id);
      if (location.hash !== '#' + id) history.replaceState(null, '', '#' + id);
    };
    tabs.forEach(t => t.addEventListener('click', () => { show(t.dataset.panel); window.scrollTo({ top: 0, behavior: 'smooth' }); }));
    const initial = (location.hash || '').slice(1) || store.get('tab:' + (window.SEMANA && SEMANA.id), tabs[0] && tabs[0].dataset.panel);
    show(tabs.some(t => t.dataset.panel === initial) ? initial : tabs[0].dataset.panel);
  }

  // ---------- resumen y explicaciones ----------
  function renderResumen(S) {
    const el = $('#resumen');
    el.append(h('h2', {}, 'Resumen de la semana'));
    el.append(h('div', { class: 'grid' }, S.resumen.map(r =>
      h('div', { class: 'card kpi' }, h('h3', { style: 'margin-top:0' }, r.t), h('div', { html: r.d })))));
    if (S.ideas) {
      el.append(h('div', { class: 'card' }, h('h3', { style: 'margin-top:0' }, 'Ideas clave para recordar'),
        h('ul', { class: 'key' }, S.ideas.map(i => h('li', { html: i })))));
    }
  }
  function renderExplicaciones(S) {
    const el = $('#explicaciones');
    el.append(h('h2', {}, 'Explicación de los temas'));
    el.append(h('p', { class: 'muted' }, 'Toque cada tema para desplegarlo. Las figuras usan el caso CaféApp de EquipoSoft.'));
    S.secciones.forEach((s, i) => {
      const d = h('details', { class: 'acc' }, h('summary', {}, s.t), h('div', { class: 'body', html: s.html }));
      if (i === 0) d.open = true;
      el.append(d);
    });
  }

  // ---------- flashcards ----------
  function renderFlash(S) {
    const el = $('#tarjetas');
    let cards = S.flash.slice(), i = 0;
    el.append(h('h2', {}, 'Tarjetas de repaso'));
    el.append(h('p', { class: 'muted' }, 'Lea el concepto, intente explicarlo en voz alta y luego toque la tarjeta para comprobar. La repetición espaciada mejora la retención.'));
    const count = h('span', { class: 'badge' });
    const front = h('div', { class: 'face front' }), back = h('div', { class: 'face back' });
    const card = h('div', { class: 'flash', role: 'button', tabindex: '0', 'aria-label': 'Voltear tarjeta' }, h('div', { class: 'inner' }, front, back));
    const draw = () => { card.classList.remove('flipped'); front.textContent = cards[i][0]; back.innerHTML = cards[i][1]; count.textContent = (i + 1) + ' / ' + cards.length; };
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    card.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); card.classList.toggle('flipped'); } });
    el.append(h('div', { class: 'card' }, h('div', { class: 'row' }, count), card,
      h('div', { class: 'row' },
        h('button', { class: 'btn ghost', onclick: () => { i = (i - 1 + cards.length) % cards.length; draw(); } }, '◀ Anterior'),
        h('button', { class: 'btn', onclick: () => { i = (i + 1) % cards.length; draw(); } }, 'Siguiente ▶'),
        h('button', { class: 'btn ghost', onclick: () => { cards = shuffle(cards); i = 0; draw(); } }, '🔀 Mezclar'))));
    draw();
  }

  // ---------- quiz ----------
  function renderQuiz(S) {
    const el = $('#quiz');
    el.append(h('h2', {}, 'Quiz de la semana'));
    const best = store.get('best:' + S.id, null);
    el.append(h('p', { class: 'muted' }, S.quiz.length + ' preguntas con retroalimentación inmediata. ' + (best !== null ? 'Su mejor puntuación: ' + best + '%.' : '')));
    const box = h('div', { class: 'card' });
    el.append(box);
    let qs, idx, ok;
    const start = () => { qs = shuffle(S.quiz).map(q => ({ ...q, order: shuffle(q.o.map((t, k) => k)) })); idx = 0; ok = 0; show(); };
    const show = () => {
      box.innerHTML = '';
      if (idx >= qs.length) return finish();
      const q = qs[idx];
      const bar = h('div', { class: 'progress' }, h('div', { style: 'width:' + (idx / qs.length * 100) + '%' }));
      const fb = h('div');
      const next = h('button', { class: 'btn', disabled: 'disabled', onclick: () => { idx++; show(); } }, idx === qs.length - 1 ? 'Ver resultado' : 'Siguiente ▶');
      const opts = h('div', { class: 'opts' }, q.order.map(k => h('button', {
        class: 'opt', onclick: e => {
          const buttons = [...opts.children];
          buttons.forEach(b => b.disabled = true);
          const right = k === q.a;
          if (right) ok++;
          e.currentTarget.classList.add(right ? 'correct' : 'wrong');
          buttons[q.order.indexOf(q.a)].classList.add('correct');
          fb.className = 'feedback ' + (right ? 'ok' : 'bad');
          fb.innerHTML = (right ? '✔ ¡Correcto! ' : '✘ Revise: ') + q.e;
          next.disabled = false; next.focus();
        }
      }, q.o[k])));
      box.append(h('div', { class: 'row muted' }, 'Pregunta ' + (idx + 1) + ' de ' + qs.length + ' · Aciertos: ' + ok), bar,
        h('div', { class: 'q' }, h('b', { html: q.q })), opts, fb, h('div', { class: 'row', style: 'margin-top:10px' }, next));
    };
    const finish = () => {
      const pct = Math.round(ok / qs.length * 100);
      const prev = store.get('best:' + S.id, 0);
      if (pct > prev) store.set('best:' + S.id, pct);
      const nivel = pct >= 90 ? '5 – Sobresaliente' : pct >= 75 ? '4 – Notable' : pct >= 60 ? '3 – Parcialmente superado' : '2 – No alcanzado: repase y vuelva a intentarlo';
      box.append(h('div', { style: 'text-align:center' }, h('div', { class: 'score' }, pct + '%'),
        h('p', {}, ok + ' de ' + qs.length + ' respuestas correctas'), h('p', {}, h('span', { class: 'badge' }, 'Nivel ' + nivel)),
        h('p', { class: 'muted' }, 'Tome una captura de pantalla de este resultado para su entrega (asignación del cuestionario).'),
        h('button', { class: 'btn', onclick: start }, '↻ Intentar de nuevo')));
    };
    start();
  }

  // ---------- juegos ----------
  function gameMatch(cont, g) {
    let pairs = shuffle(g.pares).slice(0, g.n || 6), sel = null, done = 0, errors = 0;
    const status = h('p', { class: 'muted' });
    const upd = () => status.textContent = 'Parejas: ' + done + ' / ' + pairs.length + ' · Errores: ' + errors;
    const L = h('div', { class: 'col' }), R = h('div', { class: 'col' });
    const mk = (txt, side, key) => h('button', {
      class: 'chip', onclick: e => {
        const b = e.currentTarget;
        if (b.classList.contains('ok')) return;
        if (!sel || sel.side === side) { if (sel) sel.b.classList.remove('sel'); sel = { b, side, key }; b.classList.add('sel'); return; }
        if (sel.key === key) { sel.b.classList.remove('sel'); sel.b.classList.add('ok'); b.classList.add('ok'); done++; }
        else { errors++; [sel.b, b].forEach(x => { x.classList.remove('sel'); x.classList.add('bad'); setTimeout(() => x.classList.remove('bad'), 400); }); }
        sel = null; upd();
        if (done === pairs.length) status.innerHTML = '🎉 ¡Completado con ' + errors + ' error(es)! <button class="btn ghost" id="again">Jugar otra vez</button>';
        const a = $('#again', cont); if (a) a.onclick = () => { cont.innerHTML = ''; gameMatch(cont, g); };
      }
    }, txt);
    shuffle(pairs.map((p, k) => [p[0], k])).forEach(([t, k]) => L.append(mk(t, 'L', k)));
    shuffle(pairs.map((p, k) => [p[1], k])).forEach(([t, k]) => R.append(mk(t, 'R', k)));
    cont.append(h('p', {}, g.inst || 'Toque un concepto de la izquierda y luego su pareja de la derecha.'), status, h('div', { class: 'match' }, L, R));
    upd();
  }

  function gameClassify(cont, g) {
    const items = shuffle(g.items); let sel = null, ok = 0, bad = 0;
    const status = h('p', { class: 'muted' });
    const upd = () => status.textContent = 'Clasificados: ' + ok + ' / ' + items.length + ' · Errores: ' + bad;
    const pool = h('div', { class: 'chips' });
    const buckets = h('div', { class: 'buckets' });
    items.forEach(([t, c]) => pool.append(h('button', {
      class: 'chip', onclick: e => { if (sel) sel.b.classList.remove('sel'); sel = { b: e.currentTarget, c, t }; e.currentTarget.classList.add('sel'); }
    }, t)));
    g.cats.forEach(cat => {
      const list = h('div', { class: 'chips' });
      buckets.append(h('div', {
        class: 'bucket', role: 'button', tabindex: '0', onclick: () => {
          if (!sel) return;
          if (sel.c === cat) { list.append(h('span', { class: 'chip ok' }, sel.t)); sel.b.classList.add('gone'); ok++; }
          else { bad++; const b = sel.b; b.classList.add('bad'); setTimeout(() => b.classList.remove('bad'), 400); b.classList.remove('sel'); }
          sel = null; upd();
          if (ok === items.length) status.innerHTML = '🎉 ¡Excelente! Todo clasificado con ' + bad + ' error(es).';
        }
      }, h('h4', {}, cat), list));
    });
    cont.append(h('p', {}, g.inst || 'Toque una tarjeta y luego la categoría a la que pertenece.'), status, pool, buckets);
    upd();
  }

  function gameOrder(cont, g) {
    let arr = shuffle(g.items.map((t, k) => ({ t, k })));
    while (arr.length > 1 && arr.every((x, i) => x.k === i)) arr = shuffle(arr);
    const list = h('ol', { class: 'orderlist' });
    const msg = h('div');
    const draw = () => {
      list.innerHTML = '';
      arr.forEach((x, i) => list.append(h('li', {},
        h('b', {}, (i + 1) + '.'), h('span', { class: 'txt' }, x.t),
        h('button', { 'aria-label': 'Subir', onclick: () => { if (i > 0) { [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]; draw(); } } }, '▲'),
        h('button', { 'aria-label': 'Bajar', onclick: () => { if (i < arr.length - 1) { [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]; draw(); } } }, '▼'))));
    };
    const check = () => {
      let c = 0;
      [...list.children].forEach((li, i) => { const good = arr[i].k === i; if (good) c++; li.className = good ? 'ok' : 'bad'; });
      msg.className = 'feedback ' + (c === arr.length ? 'ok' : 'bad');
      msg.innerHTML = c === arr.length ? '🎉 ¡Orden correcto! ' + (g.exp || '') : c + ' de ' + arr.length + ' en su lugar. Ajuste los elementos en rojo y vuelva a comprobar.';
    };
    cont.append(h('p', {}, g.inst), list, h('div', { class: 'row' },
      h('button', { class: 'btn', onclick: check }, '✔ Comprobar'),
      h('button', { class: 'btn ghost', onclick: () => { arr = shuffle(arr); msg.innerHTML = ''; msg.className = ''; draw(); } }, '🔀 Reordenar')), msg);
    draw();
  }

  function gameScenario(cont, g) {
    let items = shuffle(g.items), i = 0, ok = 0, streak = 0;
    const box = h('div');
    const draw = () => {
      box.innerHTML = '';
      if (i >= items.length) {
        box.append(h('div', { style: 'text-align:center' }, h('div', { class: 'score' }, ok + ' / ' + items.length),
          h('p', {}, 'escenarios resueltos correctamente'), h('button', { class: 'btn', onclick: () => { items = shuffle(g.items); i = 0; ok = 0; streak = 0; draw(); } }, '↻ Jugar otra vez')));
        return;
      }
      const [txt, ans, exp] = items[i];
      const fb = h('div');
      const opts = h('div', { class: 'opts' }, g.opciones.map(o => h('button', {
        class: 'opt', onclick: e => {
          [...opts.children].forEach(b => { b.disabled = true; if (b.textContent === ans) b.classList.add('correct'); });
          const right = o === ans; if (right) { ok++; streak++; } else { streak = 0; e.currentTarget.classList.add('wrong'); }
          fb.className = 'feedback ' + (right ? 'ok' : 'bad'); fb.innerHTML = (right ? '✔ ' : '✘ Era <b>' + ans + '</b>. ') + exp;
          box.append(h('div', { class: 'row', style: 'margin-top:10px' }, h('button', { class: 'btn', onclick: () => { i++; draw(); } }, 'Siguiente ▶')));
        }
      }, o)));
      box.append(h('div', { class: 'row muted' }, 'Escenario ' + (i + 1) + ' de ' + items.length, h('span', { class: 'badge' }, '🔥 Racha: ' + streak)),
        h('p', { class: 'scen' }, txt), opts, fb);
    };
    cont.append(h('p', {}, g.inst), box); draw();
  }

  function gameHangman(cont, g) {
    const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase();
    let bank = shuffle(g.palabras), wi = 0;
    const play = () => {
      cont.innerHTML = '';
      const [word, hint] = bank[wi % bank.length];
      const W = norm(word); const guessed = new Set(); let lives = 6;
      const disp = h('div', { class: 'hang' }); const lv = h('div', { class: 'lives' }); const msg = h('div');
      const keys = h('div', { class: 'keys' });
      const render = () => {
        disp.textContent = [...W].map(c => /[A-Z]/.test(c) ? (guessed.has(c) ? c : '_') : c).join('');
        lv.textContent = '❤'.repeat(lives) + '♡'.repeat(6 - lives);
        const won = [...W].every(c => !/[A-Z]/.test(c) || guessed.has(c));
        if (won || lives === 0) {
          [...keys.children].forEach(b => b.disabled = true);
          msg.className = 'feedback ' + (won ? 'ok' : 'bad');
          msg.innerHTML = (won ? '🎉 ¡Bien! ' : '✘ La palabra era <b>' + word + '</b>. ') + (g.exp && g.exp[word] ? g.exp[word] : '');
          msg.append(h('div', { style: 'margin-top:8px' }, h('button', { class: 'btn', onclick: () => { wi++; play(); } }, 'Otra palabra ▶')));
        }
      };
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(L => keys.append(h('button', {
        onclick: e => { e.currentTarget.disabled = true; guessed.add(L); if (!W.includes(L)) lives--; render(); }
      }, L)));
      cont.append(h('p', {}, g.inst || 'Adivine el término letra por letra. Tiene 6 vidas.'), h('div', { class: 'note tip' }, h('b', {}, 'Pista: '), hint), disp, lv, keys, msg);
      render();
    };
    play();
  }

  function gamePert(cont, g) {
    const box = h('div');
    const round = () => {
      box.innerHTML = '';
      const tarea = g.tareas[Math.floor(Math.random() * g.tareas.length)];
      let O, M, P, te;
      do { O = 2 + Math.floor(Math.random() * 6); M = O + 1 + Math.floor(Math.random() * 6); P = M + 2 + Math.floor(Math.random() * 10); te = (O + 4 * M + P) / 6; } while (Math.abs(te * 2 - Math.round(te * 2)) > 1e-9);
      const inp = h('input', { class: 'num', type: 'number', step: '0.5', inputmode: 'decimal', 'aria-label': 'Tiempo esperado' });
      const fb = h('div');
      box.append(h('p', { class: 'scen' }, 'Tarea: ' + tarea),
        h('div', { class: 'tablewrap' }, h('table', {}, h('tr', {}, h('th', {}, 'Optimista (O)'), h('th', {}, 'Más probable (M)'), h('th', {}, 'Pesimista (P)')),
          h('tr', {}, h('td', {}, O + ' días'), h('td', {}, M + ' días'), h('td', {}, P + ' días')))),
        h('p', {}, 'Calcule el tiempo esperado Te = (O + 4M + P) / 6'),
        h('div', { class: 'row' }, inp, h('span', {}, 'días'),
          h('button', { class: 'btn', onclick: () => {
            const v = parseFloat(String(inp.value).replace(',', '.'));
            const right = Math.abs(v - te) < 0.01;
            fb.className = 'feedback ' + (right ? 'ok' : 'bad');
            fb.innerHTML = (right ? '✔ ¡Correcto! ' : '✘ No es correcto. ') + 'Te = (' + O + ' + 4×' + M + ' + ' + P + ') / 6 = (' + O + ' + ' + 4 * M + ' + ' + P + ') / 6 = <b>' + te + ' días</b>.';
          } }, 'Comprobar'),
          h('button', { class: 'btn ghost', onclick: round }, 'Nueva tarea')), fb);
    };
    cont.append(h('p', {}, g.inst), box); round();
  }

  const ENGINES = { match: gameMatch, clasificar: gameClassify, ordenar: gameOrder, escenario: gameScenario, ahorcado: gameHangman, pert: gamePert };

  function renderJuegos(S) {
    const el = $('#juegos');
    el.append(h('h2', {}, 'Ejercicios lúdicos'));
    el.append(h('p', { class: 'muted' }, 'Elija un juego. Todos funcionan en el teléfono: se juega tocando, sin arrastrar.'));
    const menu = h('div', { class: 'gamegrid' });
    const stage = h('div', { class: 'card' });
    const open = (g, btn) => {
      [...menu.children].forEach(b => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
      stage.innerHTML = ''; stage.append(h('h3', { style: 'margin-top:0' }, g.icon + ' ' + g.t));
      const c = h('div'); stage.append(c); ENGINES[g.tipo](c, g);
    };
    S.juegos.forEach(g => {
      const b = h('button', { class: 'gamecard', 'aria-pressed': 'false', onclick: () => { open(g, b); stage.scrollIntoView({ behavior: 'smooth', block: 'start' }); } },
        h('b', {}, g.icon + ' ' + g.t), h('span', { class: 'muted' }, g.d));
      menu.append(b);
    });
    el.append(menu, stage);
    open(S.juegos[0], menu.children[0]);
  }

  function renderAsign(S) {
    const el = $('#asignaciones');
    el.append(h('h2', {}, 'Asignaciones de la semana'));
    el.append(h('div', { class: 'note' }, h('span', { html: S.asignIntro })));
    el.append(h('div', { class: 'tablewrap' }, h('table', {},
      h('tr', {}, ['N°', 'Asignación', 'Modalidad', 'Fecha límite'].map(t => h('th', {}, t))),
      S.asignaciones.map(r => h('tr', {}, r.map(c => h('td', { html: c })))))));
    const key = 'check:' + S.id;
    const st = store.get(key, {});
    el.append(h('h3', {}, 'Mi lista de control'));
    el.append(h('p', { class: 'muted' }, 'Marque lo que ya entregó (se guarda solo en este navegador).'));
    el.append(h('div', { class: 'card' }, S.asignaciones.map(r => {
      const id = r[0];
      const cb = h('input', { type: 'checkbox', id: 'cb' + id });
      cb.checked = !!st[id];
      cb.addEventListener('change', () => { st[id] = cb.checked; store.set(key, st); });
      return h('div', { class: 'row', style: 'margin:6px 0;flex-wrap:nowrap;align-items:flex-start' }, cb, h('label', { for: 'cb' + id, style: 'flex:1' }, id + ' – ' + r[1].replace(/<[^>]+>/g, '')));
    })));
  }

  window.App = {
    init() {
      initTheme();
      const S = window.SEMANA;
      if (S) {
        renderResumen(S); renderExplicaciones(S); renderFlash(S); renderQuiz(S); renderJuegos(S); renderAsign(S);
      }
      initTabs();
    },
    home() {
      initTheme();
      document.querySelectorAll('[data-best]').forEach(el => {
        const v = store.get('best:' + el.dataset.best, null);
        el.textContent = v === null ? 'Quiz sin intentar' : 'Mejor quiz: ' + v + '%';
      });
    }
  };
})();
