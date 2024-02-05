"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UploadCloudIcon } from 'lucide-react';

function Component() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:3000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.output_video_path) {
        setUploadStatus(`Upload successful! Video processed at: ${response.data.output_video_path}`);
      } else {
        setUploadStatus('Upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('Error uploading file.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md items-center space-y-4">
      <div className="flex w-full items-center space-x-2">
      <Label htmlFor="file">File</Label>
      <Input className="flex-grow" id="url" placeholder="Enter URL" type="text" />
        <Label htmlFor="url">URL</Label>
        <input
          className="flex-grow"
          id="file"
          type="file"
          onChange={handleFileChange}
        />

      </div>
      <Button type="submit" className="flex items-center space-x-2">
        <UploadCloudIcon className="h-5 w-5" />
        <span>Upload</span>
      </Button>
      {uploadStatus && <div className="mt-4 text-center">{uploadStatus}</div>}
    </form>
  );
}

function uploadPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Component />
    </div>
  );
}

export default uploadPage;
