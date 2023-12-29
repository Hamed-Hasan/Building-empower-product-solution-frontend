import React, { useState, useEffect } from "react";
import { PickerOverlay } from "filestack-react";
import CanvasDraw from "react-canvas-draw";
import "./FileUploader.css";

function FileUploader() {
  const [showPicker, setShowPicker] = useState(false);
  const [uploadHistory, setUploadHistory] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Load upload history from local storage on component mount
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("uploadHistory")) || [];
    setUploadHistory(history);
  }, []);

  
function handleClick() {
  setShowPicker((prevState) => !prevState);
}

function handleDelete(handle) {
  const updatedHistory = uploadHistory.filter(
    (upload) => upload.handle !== handle
  );
  localStorage.setItem("uploadHistory", JSON.stringify(updatedHistory));
  setUploadHistory(updatedHistory);
}

function handleUploadDone(res) {
  const updatedHistory = [...uploadHistory];
  res.filesUploaded.map((file) => {
    const newUpload = {
      handle: file.handle,
      fileName: file.filename,
      timestamp: new Date().toLocaleString(),
    };
    updatedHistory.push(newUpload);
  });
  localStorage.setItem("uploadHistory", JSON.stringify(updatedHistory));
  setUploadHistory(updatedHistory);
  setSelectedImage(null);
  setShowPicker(false);
}

function handleViewButtonClick(upload) {
  const fileNameLowerCase = upload.fileName.toLowerCase();

  if (fileNameLowerCase.endsWith(".pdf")) {
    // Open PDF in a new window
    window.open(`https://cdn.filestackcontent.com/${upload.handle}`);
  } else if (fileNameLowerCase.endsWith(".mp4") || fileNameLowerCase.endsWith(".mp3")) {
    // Open MP4 or MP3 in a new window
    window.open(`https://cdn.filestackcontent.com/${upload.handle}`);
  } else if (fileNameLowerCase.endsWith(".jpg") || fileNameLowerCase.endsWith(".jpeg") || fileNameLowerCase.endsWith(".png")) {
    // Display image using CanvasDraw
    setSelectedImage(`https://cdn.filestackcontent.com/${upload.handle}`);
  } else {
    // Handle other file types as needed
    console.warn(`Unsupported file type: ${upload.fileName}`);
  }
}


  return (
    <section className="">
      <div className="App">
    <button className="upload-button" onClick={handleClick}>
      Upload
    </button>
    <div className="upload-history bg-[#111827]">
      <h3>Upload history:</h3>
      {uploadHistory.length === 0 && <p>No files have been uploaded yet</p>}
      <ul>
        {uploadHistory.map((upload) => (
          <li key={upload.handle}>
            <span>{upload.fileName}</span>
            <span>{upload.timestamp}</span>
            <button
              className="upload-history-button bg-[#E99400] text-slate-50"
              onClick={() => handleViewButtonClick(upload)}
            >
              View
            </button>
            <button
              className="delete-history-button"
              onClick={() => handleDelete(upload.handle)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    {showPicker && (
      <PickerOverlay
        apikey={import.meta.env.VITE_FILESTACK_API_KEY}
        onUploadDone={(res) => {
          console.log(res);
          handleUploadDone(res);
        }}
      />
    )}
    {selectedImage && (
      <CanvasDraw
        imgSrc={selectedImage}
        canvasWidth={500}
        canvasHeight={500}
        brushRadius={10}
        brushColor="#FF0000"
      />
    )}
  </div>
    </section>
  );
}

export default FileUploader;
