# 💻 Portfolio Website - PPW Week 4

## 📌 Deskripsi

Repository ini merupakan hasil pengerjaan Praktikum Minggu 04 pada mata kuliah **Pemrograman dan Pengujian Aplikasi Web (PPW)**.

Pada minggu ini, website portfolio dari Praktikum Minggu 03 dikembangkan menjadi aplikasi web dengan arsitektur yang lebih terstruktur dan decoupled. Data portfolio, profil, dan layanan dipisahkan ke dalam file JSON, kemudian dimuat secara dinamis menggunakan JavaScript dengan `fetch()` dan `async/await`.

Website juga menerapkan Dynamic Client-Side Rendering (CSR), filter kategori, universal dynamic modal, pengiriman form secara asynchronous menggunakan HTTP POST, Bootstrap Toast, serta penyimpanan data menggunakan localStorage.
---

## 👤 Profil

**Nama:** Pedro Simangunsong  
**NIM:** 12S24011  
**Program Studi:** Sistem Informasi  
**Institusi:** Institut Teknologi Del  

---





## 🎯 Tujuan

Pengembangan website pada Week 4 bertujuan untuk menerapkan konsep:

- Arsitektur web yang lebih terstruktur
- Separation of Concerns
- Pemisahan data dan tampilan
- Data provider menggunakan JSON
- Dynamic Client-Side Rendering (CSR)
- JavaScript `fetch()` dan `async/await`
- Universal Dynamic Modal
- Filter data berdasarkan kategori
- REST API menggunakan HTTP POST
- Bootstrap Toast
- Penyimpanan data menggunakan `localStorage`
- Network Profiling menggunakan Chrome DevTools

---


## 🛠️ Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Bootstrap Icons
- JSON
- Fetch API
- Async/Await
- REST API
- LocalStorage
- Visual Studio Code
- Live Server
- Git
- GitHub
- GitHub Pages

---

## 📂 Struktur Project

```text
ppw-2026-week2-12S24011/
│
├── images/
│   ├── profil.jpeg
│   └── network-profiling.png
│
├── css/
│   └── custom-style.css
│
├── data/
│   ├── profile.json
│   ├── projects.json
│   └── services.json
│
├── js/
│   ├── api-service.js
│   └── app.js
│
├── index.html
└── README.md



🏗️ Arsitektur Sistem

Website menggunakan pendekatan arsitektur yang memisahkan bagian tampilan, logika aplikasi, dan sumber data.

C4 Container Model
Penjelasan Komponen
Client / Browser bertugas menampilkan website dan menjalankan JavaScript.
Static Server menyediakan file HTML, CSS, JavaScript, dan JSON.
CDN menyediakan library Bootstrap dan Bootstrap Icons.
app.js menangani logika aplikasi dan tampilan dinamis.
api-service.js bertanggung jawab terhadap proses pengambilan dan pengiriman data.
JSON Providers menyimpan data profil, proyek, dan layanan.
REST API digunakan untuk simulasi pengiriman data form menggunakan HTTP POST.


🔄 Separation of Concerns

Pada Week 4, struktur aplikasi dipisahkan berdasarkan tanggung jawab masing-masing komponen agar kode lebih terorganisir dan mudah dikembangkan.

index.html bertanggung jawab terhadap struktur dan elemen dasar halaman.
app.js bertanggung jawab terhadap logika aplikasi dan tampilan dinamis, seperti rendering proyek, filter kategori, modal, profil, layanan, dan proses form.
api-service.js bertanggung jawab terhadap proses pengambilan dan pengiriman data menggunakan fetch().
data/projects.json menyimpan data proyek.
data/services.json menyimpan data layanan.
data/profile.json menyimpan data profil.
Bootstrap digunakan untuk membantu tampilan antarmuka dan komponen UI.

Dengan pemisahan tersebut, perubahan data tidak perlu dilakukan langsung pada index.html. Data dapat diperbarui melalui file JSON, sedangkan proses pengambilan dan penampilannya ditangani oleh JavaScript.



## 📊 Before vs After

Pada Week 3, website portfolio masih menggunakan pendekatan yang lebih sederhana. Sebagian besar data proyek, profil, dan layanan masih ditulis secara langsung di dalam file HTML. Tampilan proyek juga dibuat secara statis dan setiap proyek memiliki modal masing-masing. Proses form masih menggunakan form HTML dengan validasi Bootstrap.

Pada Week 4, website dikembangkan menjadi lebih dinamis dan terstruktur. Data proyek dipindahkan ke `projects.json`, data profil ke `profile.json`, dan data layanan ke `services.json`. Data tersebut kemudian diambil menggunakan `fetch()` dan `async/await`, lalu ditampilkan ke halaman menggunakan Dynamic Client-Side Rendering (CSR).

Selain itu, Week 4 menggunakan satu **Universal Dynamic Modal** untuk menampilkan detail seluruh proyek sehingga tidak perlu membuat modal terpisah untuk setiap proyek. Website juga ditambahkan fitur filter kategori, pengiriman form secara asynchronous menggunakan HTTP POST, Bootstrap Toast sebagai notifikasi, serta `localStorage` untuk menyimpan data form secara persisten.

Dengan perubahan tersebut, Week 4 memiliki pemisahan yang lebih jelas antara struktur halaman, logika aplikasi, dan sumber data dibandingkan dengan implementasi pada Week 3.

⚙️ Fitur Utama
1. Dynamic Client-Side Rendering

Data proyek tidak lagi ditulis langsung pada HTML. Data diambil dari projects.json menggunakan fetch() dan kemudian ditampilkan secara dinamis menggunakan JavaScript.

Alur proses:

projects.json
      ↓
api-service.js
      ↓
fetchProjects()
      ↓
app.js
      ↓
renderProjects()
      ↓
HTML
2. Loading, Success, Empty, dan Error State

Aplikasi menerapkan beberapa kondisi tampilan ketika mengambil data proyek:

Loading State ketika data sedang dimuat.
Success State ketika data berhasil ditemukan dan ditampilkan.
Empty State ketika tidak terdapat proyek yang sesuai dengan filter.
Error State ketika proses pengambilan data mengalami kegagalan.
3. Filter Kategori

Pengguna dapat memfilter proyek berdasarkan kategori.

Kategori yang tersedia meliputi:

Analisis Sistem
Perancangan Produk Digital
Web Development
Database
Mobile Development

Filter dilakukan menggunakan JavaScript terhadap data yang sudah diperoleh dari projects.json.

4. Universal Dynamic Modal

Week 4 menggunakan satu modal universal untuk menampilkan detail seluruh proyek.

Setiap tombol proyek membawa ID proyek melalui:

data-project-id

Kemudian JavaScript mencari proyek berdasarkan ID tersebut dan memasukkan detailnya ke dalam modal.

Dengan pendekatan ini, tidak diperlukan modal terpisah untuk setiap proyek.

5. Dynamic Profile

Data profil dipisahkan ke dalam:

data/profile.json

Data kemudian diambil menggunakan fetch() dan ditampilkan secara dinamis pada halaman portfolio.

6. Dynamic Services

Data layanan dipisahkan ke dalam:

data/services.json

Data layanan digunakan untuk mengisi pilihan layanan pada form secara dinamis.

7. Asynchronous Form Submission

Form dikirim secara asynchronous menggunakan HTTP POST.

Alur proses:

Form
 ↓
app.js
 ↓
submitContactForm()
 ↓
api-service.js
 ↓
HTTP POST
 ↓
REST API

REST API yang digunakan untuk simulasi pengiriman data adalah:

https://httpbin.org/post

8. Bootstrap Toast

Setelah pengiriman form berhasil, aplikasi menampilkan notifikasi menggunakan Bootstrap Toast.

Pesan yang ditampilkan:

Form berhasil dikirim!
9. LocalStorage

Data form yang berhasil dikirim juga disimpan pada browser menggunakan localStorage.

Data disimpan dengan key:

contactFormData

Data disimpan dalam format JSON sehingga dapat digunakan kembali ketika dibutuhkan.

🌐 Network Profiling

Network Profiling dilakukan menggunakan Chrome DevTools → Network untuk melihat proses pemuatan data dari projects.json.

Pengujian dilakukan dengan membandingkan kondisi Cold Load dan Warm Load.

Hasil Pengujian
Kondisi	Resource	Status	TTFB
Cold Load	projects.json	200 OK	4.11 ms
Warm Load	projects.json	304 Not Modified	7.11 ms
Cold Load

Pada kondisi Cold Load, browser mengambil resource projects.json dari server sehingga request menghasilkan status 200 OK.

TTFB (Time to First Byte) yang tercatat untuk request projects.json adalah sekitar 4.11 ms pada saat pengujian.

Warm Load

Pada kondisi Warm Load, browser sudah memiliki resource sebelumnya sehingga browser dapat menggunakan mekanisme caching.

Pada salah satu pengujian, request projects.json menghasilkan status 304 Not Modified. Status tersebut menunjukkan bahwa resource pada server tidak mengalami perubahan sehingga browser dapat menggunakan versi yang sudah tersimpan.

TTFB yang tercatat pada pengujian tersebut adalah sekitar 7.11 ms.

Nilai TTFB dapat berubah pada setiap pengujian karena dipengaruhi oleh kondisi browser, server lokal, dan jaringan. Nilai di atas merupakan hasil pengukuran pada saat praktikum dilakukan.

📸 Screenshot Network Profiling

Screenshot tersebut menunjukkan proses request projects.json pada Chrome DevTools Network, termasuk status 304 Not Modified dan waterfall request.

🧪 Pengujian

Beberapa fitur yang telah diuji pada website meliputi:

Pengambilan data proyek dari projects.json
Pengambilan data profil dari profile.json
Pengambilan data layanan dari services.json
Dynamic rendering proyek
Filter kategori
Empty State
Universal Dynamic Modal
Pengiriman form menggunakan HTTP POST
Bootstrap Toast
Penyimpanan data menggunakan localStorage
Network Profiling menggunakan Chrome DevTools


📌 Kesimpulan

Pada Week 4, website portfolio dikembangkan dari website statis menjadi aplikasi web yang memiliki struktur dan pengelolaan data yang lebih terpisah.

Data proyek, profil, dan layanan dipindahkan ke file JSON dan dimuat secara dinamis menggunakan JavaScript. Website juga menerapkan Dynamic Client-Side Rendering, filter kategori, universal dynamic modal, asynchronous form submission menggunakan REST API, Bootstrap Toast, dan localStorage.

Dengan penerapan tersebut, struktur aplikasi menjadi lebih terorganisir dan pemisahan antara data, logika aplikasi, dan tampilan menjadi lebih jelas.

🚀 Deployment

Website akan dideploy menggunakan GitHub Pages setelah seluruh implementasi Week 4 selesai dan branch week4-architecture telah dipush ke repository GitHub.

Live Website:

Akan ditambahkan setelah GitHub Pages selesai dikonfigurasi.

👨‍💻 Author

Pedro Simangunsong
NIM: 12S24011
Program Studi Sistem Informasi
Institut Teknologi Del