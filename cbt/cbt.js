let soal = JSON.parse(localStorage.getItem("soal")) || [];
let index = 0;
let skor = 0;

function tampil(){
  let s = soal[index];
  document.getElementById("soal").innerText = s.soal;

  let opsi = document.getElementById("opsi");
  opsi.innerHTML = "";

  s.pilihan.forEach(p => {
    let b = document.createElement("button");
    b.innerText = p;
    b.onclick = () => jawab(p);
    opsi.appendChild(b);
  });
}

function jawab(p){
  if(p === soal[index].jawaban) skor++;
  index++;

  if(index < soal.length){
    tampil();
  } else {
    localStorage.setItem("skor", skor);
    window.location.href = "result.html";
  }
}

tampil();
