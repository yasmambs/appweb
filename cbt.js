function tambahSoal(){
  let soal = JSON.parse(localStorage.getItem("soal")) || [];

  soal.push({
    soal: document.getElementById("soal").value,
    jawaban: document.getElementById("jawaban").value
  });

  localStorage.setItem("soal", JSON.stringify(soal));
  alert("Soal ditambah");
}
