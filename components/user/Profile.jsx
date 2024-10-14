import { useState } from "react";

const Profile = () => {
  const initialData = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    user_name: initialData?.user_name || "",
    email: initialData?.email || "",
    user_address: initialData?.user_address || "",
    phone: initialData?.phone || "",
    birthday: initialData?.birthday || "",
    gender: initialData?.gender || "male", // 預設為 male
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 更新 localStorage
    const updatedData = { ...initialData, ...formData };
    localStorage.setItem("user", JSON.stringify(updatedData));
    alert("資料已更新！");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        名字:
        <input
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        電子郵件:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        地址:
        <input
          type="text"
          name="user_address"
          value={formData.user_address}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        電話:
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        生日:
        <input
          type="date"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        性別:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="male">男性</option>
          <option value="female">女性</option>
        </select>
      </label>
      <br />
      <button type="submit">更新資料</button>
    </form>
  );
};

export default Profile;
