function tambah(){
  let soal = JSON.parse(localStorage.getItem("soal")) || [];

  soal.push({
    soal: document.getElementById("soal").value,
    pilihan: ["A","B","C","D"],
    jawaban: document.getElementById("jawaban").value
  });

  localStorage.setItem("soal", JSON.stringify(soal));

  alert("Soal masuk CBT");
}
