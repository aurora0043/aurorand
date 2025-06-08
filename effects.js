// effects.js - 星星光暈與淡入動畫與漂浮圖標定位

document.addEventListener("DOMContentLoaded", () => {
  // 頁面淡入
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 1.5s ease";
  requestAnimationFrame(() => {
    document.body.style.opacity = 1;
  });

  // 滑鼠光暈效果
  const glow = document.createElement("div");
  glow.style.position = "fixed";
  glow.style.width = "80px";
  glow.style.height = "80px";
  glow.style.borderRadius = "50%";
  glow.style.background = "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)";
  glow.style.pointerEvents = "none";
  glow.style.zIndex = "9999";
  glow.style.transform = "translate(-50%, -50%)";
  glow.style.transition = "left 0.05s ease, top 0.05s ease";
  document.body.appendChild(glow);

  document.addEventListener("mousemove", (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });

  // 讓漂浮圖標隨機出現在 floating-pngs 區域
const floatItems = document.querySelectorAll('.float-item');
floatItems.forEach(item => {
  const parent = document.querySelector('.floating-pngs');
  const maxX = parent.offsetWidth - 100;
  const maxY = parent.offsetHeight - 100;
  const randX = Math.random() * maxX;
  const randY = Math.random() * maxY;
  item.style.left = `${randX}px`;
  item.style.top = `${randY}px`;
});

document.addEventListener("DOMContentLoaded", () => {
  const floatItems = document.querySelectorAll('.float-item');
  const parent = document.querySelector('.floating-pngs');
  const positions = [];

  floatItems.forEach(item => {
    const maxX = parent.offsetWidth - 100;
    const maxY = parent.offsetHeight - 100;
    let randX, randY;
    let tries = 0;
    let overlap = true;

    while (overlap && tries < 100) {
      overlap = false;
      randX = Math.random() * maxX;
      randY = Math.random() * maxY;

      for (let pos of positions) {
        const dx = randX - pos.x;
        const dy = randY - pos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 120) { // 最小距離，根據圖標大小調整
          overlap = true;
          break;
        }
      }
      tries++;
    }

    positions.push({ x: randX, y: randY });
    item.style.left = `${randX}px`;
    item.style.top = `${randY}px`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".photo-item").forEach(item => {
    const rand = Math.random(); // 0 ~ 1
    item.style.setProperty("--rand", rand.toFixed(2));
  });
});


});
