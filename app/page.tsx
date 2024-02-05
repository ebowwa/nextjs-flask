import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UploadCloudIcon } from 'lucide-react';

function Component() {
  return (
    <div className="flex flex-col w-full max-w-md items-center space-y-4">
      <div className="flex w-full items-center space-x-2">
        <Label htmlFor="url">URL</Label>
        <Input className="flex-grow" id="url" placeholder="Enter URL" type="text" />
      </div>
      <Button className="flex items-center space-x-2" type="submit">
        <UploadCloudIcon className="h-5 w-5" />
        <span>Upload</span>
      </Button>
    </div>
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
