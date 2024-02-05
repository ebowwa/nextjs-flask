"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UploadCloudIcon } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon, CheckIcon, DotFilledIcon, ChevronRightIcon } from '@radix-ui/react-icons';

const DropdownMenuDemo = () => {
  // Dropdown menu state and logic here (same as your provided dropdown menu code)
};

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
      {/* URL Input with Label on the side */}
      <div className="flex w-full items-center space-x-2">
        <Label htmlFor="url" className="min-w-[80px]">URL:</Label>
        <Input className="flex-grow" id="url" placeholder="Enter URL" type="text" />
      </div>

      {/* File Upload with Label on the side */}
      <div className="flex w-full items-center space-x-2">
        <Label htmlFor="file" className="min-w-[80px]">File:</Label>
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

// Modified uploadPage component with title in the top left corner and dropdown menu in the top right corner
const UploadPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {/* Title Section in the top left corner */}
      <div className="absolute top-0 left-0 mt-4 ml-4">
        <h1 className="text-xl font-bold">voiceovers</h1>
      </div>
      
      {/* Dropdown Menu positioned at the top right corner */}
      <div className="absolute top-0 right-0 mt-4 mr-4">
        <DropdownMenuDemo />
      </div>

      {/* Main content centering the component (assuming Component is defined/imported) */}
      <div className="flex justify-center items-center flex-grow">
        <Component /> {/* Replace Component with your actual component */}
      </div>
    </div>
  );
};


export default UploadPage;