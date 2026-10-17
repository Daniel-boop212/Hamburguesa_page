(() => {
  'use strict';
  const init = () => {
    const burger = document.querySelector('#burger-visual');
    const stage = burger.closest('.burger-stage');
    const toggle = document.querySelector('#toggle-burger');
    const reset = document.querySelector('#reset-burger');
    const hint = document.querySelector('#interaction-hint');
    const panel = document.querySelector('#ingredient-panel');
    const close = document.querySelector('#close-panel');
    const label = toggle.querySelector('.button__label');
    const ingredients = new Map((window.BURGER_INGREDIENTS || []).map(item => [item.id, item]));
    let exploded = false;
    const fields = {
      title: document.querySelector('#panel-title'), description: document.querySelector('#panel-description'),
      flavor: document.querySelector('#panel-flavor'), texture: document.querySelector('#panel-texture'),
      role: document.querySelector('#panel-role'), fact: document.querySelector('#panel-fact'), number: document.querySelector('#panel-number')
    };
    const selectIngredient = id => {
      const item = ingredients.get(id);
      if (!item || !item.name || !item.description || !item.flavor || !item.texture || !item.role || !item.fact) return;
      if (!exploded) setExploded(true);
      burger.querySelectorAll('.burger__ingredient').forEach(button => {
        const active = button.dataset.ingredient === id;
        button.classList.toggle('burger__ingredient--selected', active);
        button.setAttribute('aria-pressed', String(active));
      });
      const order = [...ingredients.keys()].indexOf(id) + 1;
      fields.title.textContent = item.name;
      fields.description.textContent = item.description;
      fields.flavor.textContent = item.flavor;
      fields.texture.textContent = item.texture;
      fields.role.textContent = item.role;
      fields.fact.textContent = item.fact;
      fields.number.textContent = `${String(order).padStart(2, '0')} / ${String(ingredients.size).padStart(2, '0')}`;
      panel.hidden = false;
      hint.textContent = 'Elige otra capa o vuelve a ensamblar';
    };
    const clearSelection = () => {
      burger.querySelectorAll('.burger__ingredient').forEach(button => {
        button.classList.remove('burger__ingredient--selected');
        button.setAttribute('aria-pressed', 'false');
      });
      panel.hidden = true;
    };
    const setExploded = value => {
      exploded = value;
      burger.classList.toggle('burger--exploded', exploded);
      stage.classList.toggle('burger-stage--exploded', exploded);
      toggle.setAttribute('aria-expanded', String(exploded));
      label.textContent = exploded ? 'Volver a ensamblar' : 'Descubrir capas';
      hint.textContent = exploded ? 'Selecciona una capa para conocerla' : 'Toca la hamburguesa para descubrir sus ingredientes';
      if (!exploded) clearSelection();
    };
    burger.addEventListener('click', event => {
      const button = event.target.closest('.burger__ingredient');
      if (button) selectIngredient(button.dataset.ingredient);
    });
    toggle.addEventListener('click', () => setExploded(!exploded));
    reset.addEventListener('click', () => { setExploded(false); });
    close.addEventListener('click', () => {
      clearSelection();
      if (exploded) hint.textContent = 'Selecciona otra capa para conocerla';
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
