# Tugas 2 tcc Aplikasi Notes

```text
### Struktur Folder
.
├── backend/
│   ├── config/          # Konfigurasi database
│   ├── controllers/     # Logika bisnis CRUD
│   ├── models/          # Definisi tabel Sequelize
│   ├── routes/          # Definisi endpoint API
│   ├── app.js           # Entry point backend
│   └── .env             # File konfigurasi 
├── frontend/
│   ├── index.html       # Tampilan antarmuka
│   ├── style.css        # Styling aplikasi
│   └── script.js        # Logika fetch API
└── notes.sql            # Dump database untuk migrasi

Tambahin di backend .env yang isinya:
DB_HOST= #ip vm
DB_USER= #user db
DB_PASS= #password db
DB_NAME= #nama db
PORT=    #port 

Ubah ip vm di bagian app.js dan script.js

Buat tugas 3 ada tambahan
.
├── backend/
│   ├── config/          # Konfigurasi database
│   ├── controllers/     # Logika bisnis CRUD
│   ├── models/          # Definisi tabel Sequelize
│   ├── routes/          # Definisi endpoint API
│   ├── app.js           # Entry point backend
│   └── .env             # File konfigurasi 
├── frontend/
│   ├── index.html       # Tampilan antarmuka
│   ├── style.css        # Styling aplikasi
│   └── script.js        # Logika fetch API
│   └── cloudbuil.yaml   # Buat trigger
│   └── Dockerfile       
│   └── app.yaml         # Buat App Engine FE
└── Dockerfile           # Buat BE
└── cloudbuild.yaml      # Buat BE, trigger cloud build
└── notes.sql            # Dump database untuk migrasi

notes: - Harusnya docker dan cloud build buat be di folder be (karena eror ditaruh diroot)
       - Tamabahin variabel .env di cloud run 