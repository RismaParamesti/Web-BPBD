// Mengimpor library mysql2 untuk koneksi ke database MySQL
const mysql = require("mysql2");

// Memuat variabel lingkungan dari file .env
require("dotenv").config();

// Membuat pool koneksi untuk menghindari error "connection closed"
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db;
