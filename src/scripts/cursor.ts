console.log('cursor.ts')
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.getElementById('cursor');
  let activeHoverImage: HTMLElement | null = null;

  document.addEventListener('mousemove', (e) => {
    if (!cursor) return;
    cursor.style.translate = `${e.clientX - 16}px ${e.clientY - 16}px`;

    if (activeHoverImage) {
      activeHoverImage.style.left = `${e.clientX}px`;
      activeHoverImage.style.top = `${e.clientY}px`;
    }
  });

  document.querySelectorAll<HTMLElement>('.hover-image').forEach(span => {
    span.addEventListener('mouseenter', () => {
      const imageId = span.dataset.image;
      if (!imageId) return;
      const imageEl = document.getElementById(`hover-image-${imageId}`);
      if (!imageEl) return;
      activeHoverImage = imageEl;
      imageEl.style.display = 'block';
    });

    span.addEventListener('mouseleave', () => {
      if (activeHoverImage) {
        activeHoverImage.style.display = 'none';
        activeHoverImage = null;
      }
    });
  });
})