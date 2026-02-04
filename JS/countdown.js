// Fix real mobile height
function setVH(){
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setVH();
window.addEventListener('resize', setVH);

// Countdown target
const targetDate = new Date('2026-02-05T08:30:00-04:00').getTime();


const dDesktop = document.getElementById('countdownDesktop');
const mH = document.getElementById('mHours');
const mM = document.getElementById('mMinutes');
const mS = document.getElementById('mSeconds');

function updateCountdown(){
  const now = new Date().getTime();
  const diff = targetDate - now;

  if(diff <= 0){
    dDesktop.innerHTML = '00H ∙ 00M ∙ 00S';
    mH.innerHTML = '00H';
    mM.innerHTML = '00M';
    mS.innerHTML = '00S';
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const h = String(hours).padStart(2,'0');
  const m = String(minutes).padStart(2,'0');
  const s = String(seconds).padStart(2,'0');

  dDesktop.innerHTML = `${h}H ∙ ${m}M · ${s}S`;
  mH.innerHTML = `${h}H`;
  mM.innerHTML = `${m}M`;
  mS.innerHTML = `${s}S`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
