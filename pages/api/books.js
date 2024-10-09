// pages/api/books.js
import db from '@/lib/db'; // 確保這是你的 MySQL 連線檔案的正確路徑

export default async function handler(req, res) {
  try {
    const [rows] = await db.query('SELECT * FROM books');
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data' });
  }
}
