// pages/upload.js
import { useState } from 'react';

const UploadPage = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    });

    const result = await response.text();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange} required />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadPage;
