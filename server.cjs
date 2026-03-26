const express = require('express');
const Database = require('better-sqlite3');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (for admin page)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

// Initialize SQLite database
const db = new Database(path.join(__dirname, 'leads.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ref_number TEXT NOT NULL,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    products TEXT,
    selections TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Generate sequential ref number: TPH-0001, TPH-0002, ...
function getNextRefNumber() {
  const row = db.prepare('SELECT MAX(id) as maxId FROM leads').get();
  const next = (row.maxId || 0) + 1;
  return 'TPH-' + String(next).padStart(4, '0');
}

// API: Save a new lead
app.post('/api/leads', (req, res) => {
  const { name, phone, email, products, selections } = req.body;

  if (!name || !phone || !email) {
    return res.status(400).json({ error: 'Name, phone, and email are required.' });
  }

  const refNumber = getNextRefNumber();

  const stmt = db.prepare(`
    INSERT INTO leads (ref_number, name, phone, email, products, selections)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  try {
    const result = stmt.run(
      refNumber,
      name,
      phone,
      email,
      products || '',
      selections ? JSON.stringify(selections) : '{}'
    );
    res.json({ success: true, id: result.lastInsertRowid, ref_number: refNumber });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save lead.' });
  }
});

// API: Get all leads (newest first)
app.get('/api/leads', (req, res) => {
  const leads = db.prepare('SELECT * FROM leads ORDER BY created_at DESC').all();
  // Parse selections JSON
  leads.forEach(lead => {
    try { lead.selections = JSON.parse(lead.selections); } catch (e) { lead.selections = {}; }
  });
  res.json(leads);
});

// API: Delete a lead
app.delete('/api/leads/:id', (req, res) => {
  const stmt = db.prepare('DELETE FROM leads WHERE id = ?');
  stmt.run(req.params.id);
  res.json({ success: true });
});

// Serve admin page
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Admin panel: http://localhost:${PORT}/admin`);
});
