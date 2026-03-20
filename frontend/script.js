// buat deploy
// const API = 'http://ip vm/notes';
// lokal
const API = 'http://localhost:3000/notes';

async function loadNotes() {
  const res = await fetch(API);
  const data = await res.json();

  const container = document.getElementById('notes');
  container.innerHTML = '';

  data.forEach(n => {
    container.innerHTML += `
      <div class="note">
        <h3>${n.title}</h3>
        <p>${n.content}</p>
        <small>${new Date(n.createdAt).toLocaleString()}</small>
        <div class="actions">
          <button class="edit" onclick="edit(${n.id}, '${n.title}', '${n.content}')">Edit</button>
          <button class="delete" onclick="hapus(${n.id})">Hapus</button>
        </div>
      </div>
    `;
  });
}

async function simpan() {
  const id = document.getElementById('noteId').value;
  const title = document.getElementById('judul').value;
  const content = document.getElementById('isi').value;

  if (!title || !content) {
    alert('Isi semua field!');
    return;
  }

  if (id) {
    // EDIT
    await fetch(`${API}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });
  } else {
    // TAMBAH
    await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });
  }

  resetForm();
  loadNotes();
}

function edit(id, title, content) {
  document.getElementById('noteId').value = id;
  document.getElementById('judul').value = title;
  document.getElementById('isi').value = content;
}

async function hapus(id) {
  if (confirm('Yakin hapus?')) {
    await fetch(`${API}/${id}`, {
      method: 'DELETE'
    });
    loadNotes();
  }
}

function resetForm() {
  document.getElementById('noteId').value = '';
  document.getElementById('judul').value = '';
  document.getElementById('isi').value = '';
}

loadNotes();