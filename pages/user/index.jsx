import { useEffect, useState } from 'react'
import axios from 'axios'

export default function UsersPage() {
  const [users, setUsers] = useState([])           // 用來儲存所有用戶資料
  const [name, setName] = useState('')             // 用來新增或更新用戶的姓名
  const [email, setEmail] = useState('')           // 用來新增或更新用戶的電子郵件
  const [editingUserId, setEditingUserId] = useState(null)  // 當前編輯中的用戶 ID
  const [isAdding, setIsAdding] = useState(false)  // 是否在新增用戶模式下

  // 獲取所有用戶資料
  useEffect(() => {
    axios.get('/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error))
  }, [])

  // 新增用戶
  const handleAddUser = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/users', { name, email })
      setIsAdding(false)
      setName('')
      setEmail('')
      // 重新載入用戶列表
      const response = await axios.get('/users')
      setUsers(response.data)
    } catch (error) {
      console.error('Error adding user', error)
    }
  }

  // 編輯用戶
  const handleEditUser = (user) => {
    setEditingUserId(user.id)
    setName(user.name)
    setEmail(user.email)
  }

  // 更新用戶
  const handleUpdateUser = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`/users/${editingUserId}`, { name, email })
      setEditingUserId(null)
      setName('')
      setEmail('')
      // 重新載入用戶列表
      const response = await axios.get('/users')
      setUsers(response.data)
    } catch (error) {
      console.error('Error updating user', error)
    }
  }

  // 刪除用戶（軟刪除）
  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`/users/${id}`)
      // 重新載入用戶列表
      const response = await axios.get('/users')
      setUsers(response.data)
    } catch (error) {
      console.error('Error deleting user', error)
    }
  }

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
      <button type="submit">
        {editingUserId ? 'Update User' : 'Add User'}
      </button>
      <button type="button" onClick={() => cancelForm()}>Cancel</button>
    </form>
  )

  // 取消表單
  const cancelForm = () => {
    setEditingUserId(null)
    setName('')
    setEmail('')
    setIsAdding(false)
  }

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
              {users.map(user => (
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
  )
}
