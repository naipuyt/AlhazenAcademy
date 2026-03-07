let stats = { shalat: 0, quran: 0 };

function updateHeader() {
    const total = (stats.shalat + stats.quran) / 2;
    document.getElementById('mainFill').style.width = total + "%";
    document.getElementById('percent').innerText = Math.round(total) + "%";
}

function saveShalat() {
    const checks = document.querySelectorAll('.sh-input');
    let count = 0;
    checks.forEach(c => { if(c.checked) count++; });
    stats.shalat = (count / 5) * 100;
    updateHeader();
}

function saveQuran() {
    const t = document.getElementById('targetQ').value;
    const d = document.getElementById('doneQ').value;
    if(t > 0) stats.quran = Math.min((d / t) * 100, 100);
    updateHeader();
}

// Generate kalender puasa
const pGrid = document.getElementById('puasaGrid');
for(let i=1; i<=30; i++) {
    const d = document.createElement('div');
    d.className = 'day';
    d.innerText = i;
    d.onclick = () => {
        d.classList.toggle('active');
        let done = document.querySelectorAll('.day.active').length;
        document.getElementById('puasaText').innerText = `Puasa ${done} dari 30 hari`;
    };
    pGrid.appendChild(d);
}