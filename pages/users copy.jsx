// pageshttp://localhost:3000/users.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function UsersPage() {
  const { data: users, error, mutate } = useSWR('http://localhost:3000/users', fetcher);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editingUserId, setEditingUserId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  // 新增用戶
  const handleAddUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:3000/users', { name, email });
      mutate(); // 重新加載用戶資料
      setIsAdding(false);
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error adding user', error);
    } finally {
      setLoading(false);
    }
  };

  // 編輯用戶
  const handleEditUser = (user) => {
    setEditingUserId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  // 更新用戶
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`http://localhost:3000/users/${editingUserId}`, { name, email });
      mutate(); // 重新加載用戶資料
      setEditingUserId(null);
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error updating user', error);
    } finally {
      setLoading(false);
    }
  };

  // 刪除用戶（軟刪除）
  const handleDeleteUser = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      mutate(); // 重新加載用戶資料
    } catch (error) {
      console.error('Error deleting user', error);
    } finally {
      setLoading(false);
    }
  };

  // 返回表單
  const renderForm = () => (
    <form onSubmit={editingUserId ? handleUpdateUser : handleAddUser}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {editingUserId ? 'Update User' : 'Add User'}
      </button>
      <button type="button" onClick={() => cancelForm()}>Cancel</button>
    </form>
  );

  // 取消表單
  const cancelForm = () => {
    setEditingUserId(null);
    setName('');
    setEmail('');
    setIsAdding(false);
  };

  if (error) return <div>Failed to load users</div>;
  if (!users) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Management</h1>
      {isAdding || editingUserId ? (
        renderForm()
      ) : (
        <div>
          <button onClick={() => setIsAdding(true)}>Add New User</button>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => handleEditUser(user)}>Edit</button>
                    <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
