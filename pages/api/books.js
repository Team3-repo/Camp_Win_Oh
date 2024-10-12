// pages/api/books.js
import db from '@/lib/db'; // 確保這是你的 MySQL 連線檔案的正確路徑

export default async function handler(req, res) {
  const { product_id } = req.query; // 從查詢參數中取得 product_id
  
  try {
    if (product_id) {
      // 如果有提供 product_id，查詢特定書籍
      const [rows] = await db.query('SELECT * FROM books WHERE product_id = ?', [product_id]);
      
      if (rows.length > 0) {
        res.status(200).json(rows[0]); // 找到書籍，回傳單一結果
      } else {
        res.status(404).json({ message: 'Product not found' }); // 未找到書籍
      }
    } else {
      // 如果未提供 product_id，查詢所有書籍
      const [rows] = await db.query('SELECT * FROM books');
      res.status(200).json(rows); // 回傳所有書籍資料
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data' });
  }
}
