document.querySelectorAll<HTMLElement>('[data-window]').forEach(win => {
  const handle = win.querySelector<HTMLElement>('[data-drag-handle]');
  const closeBtn = win.querySelector<HTMLElement>('[data-close-window]');

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  handle?.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - win.getBoundingClientRect().left;
    offsetY = e.clientY - win.getBoundingClientRect().top;
    win.style.zIndex = '1001';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    win.style.left = `${e.clientX - offsetX}px`;
    win.style.top = `${e.clientY - offsetY}px`;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    win.style.zIndex = '1000';
  });

  closeBtn?.addEventListener('click', () => {
    win.style.display = 'none';
  });
});