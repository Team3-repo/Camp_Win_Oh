import { query } from '@/lib/db'; // 確保已經配置好資料庫連接

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, email, address, notes } = req.body;

    if (!name || !phone || !email || !address) {
      return res.status(400).json({ error: '所有必填欄位都需要填寫' });
    }

    try {
      const result = await query(
        'INSERT INTO orders (name, phone, email, address, notes) VALUES (?, ?, ?, ?, ?)',
        [name, phone, email, address, notes]
      );

      res.status(200).json({ message: '資料已成功插入' });
    } catch (error) {
      // 這裡是你應該添加的錯誤處理程式碼
      console.error("Database Error:", error); // 在伺服器端打印完整的錯誤訊息
      res.status(500).json({ error: '資料庫操作失敗', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
