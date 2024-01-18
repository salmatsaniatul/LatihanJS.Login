function tampil() {
  let name = document.getElementById("name").value;
  let pw = document.getElementById("pw").value;

  if (name == "salma" && pw == "amaw") {
    alert("Selamat Anda Berhasil Untuk Login");
    window.location = "looping.html";
  } else {
    alert("Anda Gagal Login");
  }
}
document.getElementById("log in").addEventListener("submit", function (event) {
  event.preventDefault();
  tampil();
});
