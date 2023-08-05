//id atau nomor pengurut
let id = null;

//memanggil id
const variable = (id) => {
  eval(`const ${id} = document.querySelector("#${id}")`);
};

//input dan label
const input = (id, type = "text", label = "", placeholder = "") => {
  return `
    <label class="label">${label}</label><br>
    <input  class="input"type="${type}" id="${id}" placeholder="${placeholder}"></input><br>
    `;
  variable(id);
};

//button
const button = (id, label) => {
  return `
    <button class="btn" id="${id}">${label}</button>`;
  variable(id);
};
//penampung data
const div = (id) => {
  return `<div id="${id}"></div>`;
  variable(id);
};

//fungsi update (update)
const update = (index) => {
  namaBarang.value = data[index].nama;
  hargaBarang.value = data[index].harga;
  id = index;
};

//fungsi hapus (delete)
const deleteData = (index) => {
  data.splice(index, 1);
  loadData(data, datalist);
};

//menampilkan data (read)
const loadData = (data, element) => {
  element.innerHTML = "";
  let i = 0;
  data.forEach((item) => {
    element.innerHTML += `<p>
    Nama Barang: ${item.nama}<br>
    Harga Barang : Rp ${item.harga}<button class="btnEdit" onclick="update(${i})">edit</button>
    <button class="btnHapus" onclick="deleteData(${i})">hapus</button> 
    </p>`;
    i++;
  });
};

//fungsi untuk mengclear data di input
const clear = () => {
  namaBarang.value = null;
  hargaBarang.value = null;
  id = null;
};

//penyimpanan data
let data = [
  {
    nama: "sepatu",
    harga: 5000,
  },
  {
    nama: "tas",
    harga: 1200,
  },
];

//memanggil container
const container = document.getElementById("container");

//memasukkan input di container
container.innerHTML += input(
  "namaBarang",
  "text",
  "Nama barang",
  "masukkan nama barang"
);
container.innerHTML += input(
  "hargaBarang",
  "number",
  "Harga barang",
  "masukkan harga barang"
);

//memasukkan button
container.innerHTML += button("btnSimpan", "Simpan");
container.innerHTML += button("btnClear", "Clear");

//menampilkan data
container.innerHTML += div("datalist");
loadData(data, datalist);

//menggunakan  clear
btnClear.addEventListener("click", () => {
  clear();
});

//fungsi buat data (create)
btnSimpan.addEventListener("click", () => {
  if (id == null) {
    data.push({
      nama: namaBarang.value,
      harga: hargaBarang.value,
    });
    clear();
  } else {
    data[id].nama = namaBarang.value;
    data[id].harga = hargaBarang.value;
  }
  loadData(data, datalist);
});
