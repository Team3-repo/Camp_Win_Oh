// pages/form.js
import { useState } from 'react';

const FormPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [avatar, setAvatar] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('address', address);
        formData.append('avatar', avatar);

        try {
            const response = await fetch('localhost:3005/user-api/submit', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('資料已成功提交！');
            } else {
                alert('提交失敗！');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>使用者名稱：</label>
                <input
                    type="text"
                    value={user_name}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>電子郵件：</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>地址：</label>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>上傳頭像：</label>
                <input
                    type="file"
                    onChange={(e) => setAvatar(e.target.files[0])}
                    accept="image/*"
                    required
                />
            </div>
            <button type="submit">提交</button>
        </form>
    );
};

export default FormPage;
