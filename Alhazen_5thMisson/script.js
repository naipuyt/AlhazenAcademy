const citySelect = document.getElementById("city");
const tableBody = document.getElementById("tableBody");
const loadingText = document.getElementById("loading");
const errorText = document.getElementById("error");

const year = new Date().getFullYear();
const month = String(new Date().getMonth() + 1).padStart(2, "0");
const today = new Date().toISOString().split("T")[0];

async function fetchJadwal(cityId){

loadingText.style.display = "block";
errorText.textContent = "";
tableBody.innerHTML = "";

try{

const response = await fetch(`https://api.myquran.com/v2/sholat/jadwal/${cityId}/${year}/${month}`);
const result = await response.json();

const jadwal = result.data.jadwal;

renderTable(jadwal);

loadingText.style.display = "none";

}catch(error){

loadingText.style.display = "none";
errorText.textContent = "Gagal memuat data";

}

}

function renderTable(data){

data.forEach(item => {

const tr = document.createElement("tr");

if(item.date === today){
tr.classList.add("today");
}

tr.innerHTML = `
<td>${item.tanggal}</td>
<td>${item.imsak}</td>
<td>${item.subuh}</td>
<td>${item.dzuhur}</td>
<td>${item.ashar}</td>
<td>${item.maghrib}</td>
<td>${item.isya}</td>
`;

tableBody.appendChild(tr);

});

}

citySelect.addEventListener("change", () => {
fetchJadwal(citySelect.value);
});

fetchJadwal(citySelect.value);