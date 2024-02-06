import React, { useState } from 'react';
import axios from 'axios';
import './index.css'




const App = () => {
  const [localFile, setLocalFile] = useState(null);
  
  

  const handleLocalFileChange = (e) => {
    setLocalFile(e.target.files[0]);
  };



  const handleLocalFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', localFile);

    try {
      await axios.post('http://localhost:8000/api/v1/upload/localFileUpload', formData);
      alert('Local file uploaded successfully');
    } catch (error) {
      console.error('Error uploading local file:', error);
    }
  };
  
  return (
  <div className='flex'>

  <div className="flex flex-col w-screen h-screen  items-center justify-center mt-2">
  <h2 className="text-2xl font-bold mb-4"> Upload your file</h2>
  <input type="file" onChange={handleLocalFileChange} className="mb-4 pl-20 " />
  <button onClick={handleLocalFileUpload} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
    Upload Local File
  </button>
  </div>
  
  </div>
  )
}

export default App
