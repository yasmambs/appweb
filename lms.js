function tambahMateri(){
  let materi = JSON.parse(localStorage.getItem("materi")) || [];

  materi.push({
    judul: document.getElementById("judul").value,
    isi: document.getElementById("isi").value
  });

  localStorage.setItem("materi", JSON.stringify(materi));
}
