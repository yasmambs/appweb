function loadData(){
  const data = JSON.parse(localStorage.getItem("spmb")) || [];

  data.forEach(d => {
    document.body.innerHTML += `<p>${d.nama}</p>`;
  });
}
