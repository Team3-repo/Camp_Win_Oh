// lib/db.js
import mysql from 'mysql2/promise';

// 設定資料庫連線
const pool = mysql.createPool({
  host: 'localhost', // MySQL 伺服器 IP 地址
  port: 3306,        // MySQL 連接埠
  user: 'camp3',     // 資料庫使用者名稱
  password: 'camp3', // 資料庫密碼
  database: 'camp3', // 資料庫名稱
});

// 測試連接
const testConnection = async () => {
  try {
    // 使用一個簡單的查詢來測試連接
    await pool.query('SELECT 1');
    console.log('成功連接到資料庫');
  } catch (error) {
    console.error('連接資料庫失敗:', error);
  }
};

testConnection();

export const query = async (sql, params) => {
  const [rows] = await pool.query(sql, params);
  return rows;
};

export default pool;
