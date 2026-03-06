const jenisZakat = document.getElementById("jenisZakat")
const formPenghasilan = document.getElementById("formPenghasilan")
const formEmas = document.getElementById("formEmas")

jenisZakat.addEventListener("change", function(){

if(jenisZakat.value === "penghasilan"){
formPenghasilan.style.display = "block"
formEmas.style.display = "none"
}

else{
formPenghasilan.style.display = "none"
formEmas.style.display = "block"
}

})

function formatRupiah(angka){
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(angka);
}

function hitungZakat(){

let hargaEmas = parseFloat(document.getElementById("hargaEmas").value)

if(!hargaEmas){
alert("Harga emas harus diisi")
return
}

let nisab = hargaEmas * 85
let total = 0

if(jenisZakat.value === "penghasilan"){

let gaji = parseFloat(document.getElementById("gaji").value) || 0
let lain = parseFloat(document.getElementById("lain").value) || 0

total = gaji + lain

}

else{

let emas = parseFloat(document.getElementById("emas").value)

if(!emas){
alert("Jumlah emas harus diisi")
return
}

total = emas * hargaEmas

}

let status = ""
let zakat = 0

if(total >= nisab){

status = "Wajib Zakat"
zakat = total * 0.025

}

else{

status = "Tidak Wajib"

}

document.getElementById("hasil").style.display = "block"

document.getElementById("total").innerText = formatRupiah(total)
document.getElementById("nisab").innerText = formatRupiah(nisab)
document.getElementById("status").innerText = status
document.getElementById("zakat").innerText = formatRupiah(zakat)

}