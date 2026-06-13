console.log('daylight.ts')

const bodyElement = document.querySelector('body');

setInterval(() => {
  const now = new Date();
  const currentHour = now.getHours();
  // const currentHour = now.getMinutes() % 24;

  if (bodyElement?.className && bodyElement.className !== `day-${currentHour}`) {
    bodyElement.className = `day-${currentHour}`;
  }
}, 1000);