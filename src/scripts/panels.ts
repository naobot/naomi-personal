console.log('panels.ts')

const buttons = document.querySelectorAll<HTMLElement>('button[data-view]');
const allPanes = document.querySelectorAll<HTMLElement>('.pane--togglable');

allPanes.forEach(pane => pane.style.display = 'none');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.view;
    if (!target) return;

    const targetPane = document.getElementById(target);
    if (!targetPane) return;

    const panetype = targetPane.dataset.panetype;
    const isVisible = targetPane.style.display !== 'none';

    // If middle pane, also hide all right panes
    if (panetype === 'middle') {
      const rightPanes = document.querySelectorAll<HTMLElement>('.pane-right');
      rightPanes.forEach(pane => pane.style.display = 'none');
    }

    // Hide all togglable panes of the same type
    document.querySelectorAll<HTMLElement>(`.pane--togglable[data-panetype="${panetype}"]`)
      .forEach(pane => pane.style.display = 'none');

    if (!isVisible) targetPane.style.display = 'block';
  });
});