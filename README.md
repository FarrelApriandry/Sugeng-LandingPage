# 🌐 Sugeng-LandingPage — Landing Page Resmi SUGENG (sugenghub.my.id)
> **Sistem Unggulan Pengelolaan & Monitoring Sampah Kota Magelang (Studi Kasus: TPSA Banyuurip)**  
> Portal informasi publik & dokumentasi riset berbasis **HTML5**, **CSS3 (Design Tokens)**, dan **Vanilla JavaScript**.

---

## 📌 Gambaran Umum & Pemetaan Domain
Website ini adalah landing page publik resmi untuk ekosistem **SUGENG** yang ditujukan bagi masyarakat umum, investor, dinas pemerintahan, dan kalangan akademik yang ingin mengetahui:
1. **Apa itu SUGENG?** (Urgensi krisis sampah TPSA Banyuurip & profil sistem)
2. **Apa yang bisa dilakukan SUGENG?** (Fitur 4 modul dashboard operasional)
3. **Bagaimana SUGENG bekerja?** (Alur 3 langkah: Sensor IoT $\rightarrow$ Cloud PostGIS $\rightarrow$ Optimasi CVRP Armada)

### Struktur Domain & Subdomain
* **`sugenghub.my.id`** $\rightarrow$ **Landing Page Utama (Repositori ini)**  
  Menyajikan penjelasan umum, arsitektur, dampak efisiensi BBM/emisi, dan tombol CTA langsung menuju ruang kendali operasi.
* **`dash.sugenghub.my.id`** $\rightarrow$ **Pusat Operasi & Dashboard SIG ([Sugeng-Dashboard](https://github.com/FarrelApriandry/Sugeng-Web-Dashboard))**  
  Aplikasi web interaktif (*Astro + React + Leaflet*) untuk pemantauan 9 TPS, eksekusi CVRP rute truk, telemetri live sensor, dan inventaris master.

---

## 🎨 Desain & Identitas Visual
* **Palet Warna:** Identik dengan `Sugeng-Dashboard` (*Forest Green* `#176b49`, *Dark Green* `#0f2b1d`, *Canvas* `#f5f7f5`, *Surface* `#ffffff`, *Lime Accent* `#d9ef8b`, *Red Alert* `#c94e47`).
* **Tipografi:** Google Fonts *Plus Jakarta Sans*, *DM Sans*, dan *IBM Plex Mono*.
* **Widget Simulasi Interaktif:** Pengunjung dapat mencoba pergantian skenario kondisi TPS (*Kritis Tuguran*, *Siaga Bau Alun-Alun*, *Aman Rejowinangun*) langsung di layar hero.
* **Responsif Penuh:** Mengikuti panduan *Three-State Reflow* (`antislop-layoutmobile`) untuk desktop ($\ge 1024\text{px}$), tablet ($768\text{px}-1023\text{px}$), dan smartphone ($< 768\text{px}$). Target sentuh $\ge 44\text{px}$ dengan zero horizontal scroll leak.

---

## 📂 Struktur Berkas
```text
Sugeng-LandingPage/
├── assets/
│   └── img/
│       ├── favicon.svg              # Logo ikon tab browser
│       ├── LOGO_SUGENG_IMUP.png     # Logo resmi SUGENG transparan
│       ├── Logo_SUGENG_opt.png      # Logo poster & banner
│       └── Logo_SUGENG.png          # Master hi-res logo
├── css/
│   └── style.css                    # Stylesheet responsif & design tokens
├── js/
│   └── main.js                      # Interaktivitas UI, drawer, & simulasi widget
├── favicon.svg                      # Root favicon shortcut
├── index.html                       # Berkas halaman utama landing page
└── README.md                        # Dokumentasi repositori
```

---

## 🚀 Menjalankan Secara Lokal

Repositori ini murni menggunakan HTML, CSS, dan JavaScript tanpa *build step* yang rumit, sehingga dapat dijalankan dengan server lokal apa saja:

### 1. Menggunakan Python (Built-in)
```bash
cd ~/Development/UE/GitHub/Sugeng-LandingPage
python3 -m http.server 3030
```
Buka peramban di `http://localhost:3030/`.

### 2. Menggunakan Bun / Node
```bash
cd ~/Development/UE/GitHub/Sugeng-LandingPage
bun x serve . -p 3030
```

---

## 🌐 Panduan Deployment & Konfigurasi DNS (`sugenghub.my.id`)

### 1. Konfigurasi DNS Record (Cloudflare / Namecheap / Niagahoster)
| Type | Name / Host | Value / Target | Keterangan |
| :--- | :--- | :--- | :--- |
| `A` / `CNAME` | `@` (atau `sugenghub.my.id`) | `<IP / CNAME Vercel / Cloudflare>` | Mengarah ke **Sugeng-LandingPage** |
| `A` / `CNAME` | `dash` | `<IP / CNAME Vercel / Cloudflare>` | Mengarah ke **Sugeng-Dashboard** |

### 2. Opsi Deployment Gratis & Cepat
* **Cloudflare Pages / Vercel:** Hubungkan repositori GitHub `Sugeng-LandingPage`, pilih framework `Other / Static HTML`, direktori root `./`.
* **GitHub Pages:** Masuk ke Settings $\rightarrow$ Pages $\rightarrow$ Branch `main` $\rightarrow$ Folder `/ (root)`.

---

## 👥 Tim Peneliti & Pengembang
* **Farrel Apriandry Ciu** (NPM. 2430506056) — *Hardware & Technical Lead*
* **Nabila Syafiqah Zahran Firlina** (NPM. 2430506058) — *Data & System Analyst*
* **Muhamad Maksum Hidayat, S.Kom., M.Kom.** (NIP. 199506302025061003) — *Dosen Pengampu*

**Program Studi S-1 Teknologi Informasi — Fakultas Teknik — Universitas Tidar (2026)**  
*Studi Kasus: Dinas Lingkungan Hidup (DLH) Kota Magelang & TPSA Banyuurip*
