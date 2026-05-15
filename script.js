function openInvitation(){

  document.getElementById('cover')
  .style.display='none';

  document.getElementById('mainContent')
  .style.display='block';

  document.getElementById('music')
  .play();
}

/* MUSIC */

const music =
document.getElementById('music');

const musicBtn =
document.getElementById('musicBtn');

let isPlaying = true;

musicBtn.addEventListener('click',()=>{

  if(isPlaying){

    music.pause();
    musicBtn.innerHTML='🔇';

  }else{

    music.play();
    musicBtn.innerHTML='🎵';

  }

  isPlaying=!isPlaying;

});

/* NAMA TAMU */

const urlParams =
new URLSearchParams(window.location.search);

const guest =
urlParams.get('to');

if(guest){

  document.getElementById('guestName')
  .innerHTML =
  decodeURIComponent(guest);

}

/* COUNTDOWN */

const targetDate =
new Date("June 10, 2026 10:00:00")
.getTime();

setInterval(()=>{

  const now =
  new Date().getTime();

  const distance =
  targetDate-now;

  const days =
  Math.floor(distance/
  (1000*60*60*24));

  const hours =
  Math.floor((distance%
  (1000*60*60*24))/
  (1000*60*60));

  const minutes =
  Math.floor((distance%
  (1000*60*60))/
  (1000*60));

  const seconds =
  Math.floor((distance%
  (1000*60))/1000);

  document.getElementById('days')
  .innerHTML=days;

  document.getElementById('hours')
  .innerHTML=hours;

  document.getElementById('minutes')
  .innerHTML=minutes;

  document.getElementById('seconds')
  .innerHTML=seconds;

},1000);

/* COPY REKENING */

function copyRekening(){

  navigator.clipboard.writeText(
    "1234567890"
  );

  alert(
    "Nomor rekening berhasil disalin"
  );
}

/* UCAPAN */

/* ================= UCAPAN ================= */

function kirimUcapan(){

  const nama =
    document.getElementById('nama').value.trim();

  const ucapan =
    document.getElementById('ucapan').value.trim();

  if(nama === '' || ucapan === ''){
    alert('Isi nama dan ucapan');
    return;
  }

  const list =
    document.getElementById('listUcapan');

  const item =
    document.createElement('div');

  item.classList.add('ucapan-item');

  item.innerHTML = `
    <h4>${nama}</h4>
    <p>${ucapan}</p>
  `;

  // tampil paling atas
  list.prepend(item);

  // simpan ke localStorage
  let data =
    JSON.parse(localStorage.getItem('ucapanList')) || [];

  data.unshift({ nama, ucapan });

  localStorage.setItem('ucapanList', JSON.stringify(data));

  // reset form
  document.getElementById('nama').value = '';
  document.getElementById('ucapan').value = '';
}

/* ================= LOAD RIWAYAT UCAPAN ================= */

window.addEventListener('DOMContentLoaded', () => {

  const list =
    document.getElementById('listUcapan');

  let data =
    JSON.parse(localStorage.getItem('ucapanList')) || [];

  data.forEach(item => {

    const div =
      document.createElement('div');

    div.classList.add('ucapan-item');

    div.innerHTML = `
      <h4>${item.nama}</h4>
      <p>${item.ucapan}</p>
    `;

    list.appendChild(div);

  });

});

/* ANIMASI MUSIC BUTTON */

musicBtn.classList.add('playing');

musicBtn.addEventListener('click',()=>{

  if(isPlaying){

    musicBtn.classList.remove('playing');

  }else{

    musicBtn.classList.add('playing');

  }

});