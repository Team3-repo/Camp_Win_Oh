import { query } from '../../lib/db';

export default async function handler(req, res) {
  const { orderId } = req.query;

  if (!orderId) {
    return res.status(400).json({ error: '訂單 ID 是必需的' });
  }

  try {
    const results = await query(
      'SELECT * FROM orders WHERE id = ?',
      [orderId]
    );

    if (results.length > 0) {
      res.status(200).json(results[0]);
    } else {
      res.status(404).json({ error: '找不到訂單' });
    }
  } catch (error) {
    res.status(500).json({ error: '獲取訂單詳情時發生錯誤' });
  }
}