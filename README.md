# Tugas 2 tcc Aplikasi Notes

### Struktur Folder
```text
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
