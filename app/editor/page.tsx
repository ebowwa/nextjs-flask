// app/audioLibrary/page.tsx
"use client";

import { NextPage } from 'next';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const AudioLibraryPage: NextPage = () => {
  return (
    <div className="grid h-screen grid-cols-[300px_1fr] gap-4">
      <div className="flex flex-col h-full overflow-auto">
        <div className="p-4">
          <h2 className="text-lg font-semibold">Character Library</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Select an character to overlay on your video.</p>
        </div>
        <div className="flex-1 overflow-auto p-4 space-y-2">
          {/* List of audio tracks */}
          <div className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <h3 className="font-medium">comedy reation tiktoker</h3>
          </div>
          {/* Additional audio tracks omitted for brevity */}
        </div>
        <div className="p-4 border-t">
          <Input className="mb-2" placeholder="Add new audio track title" />
          <Textarea className="mb-2 h-20" placeholder="Add new audio track description" />
          <Button className="w-full">Add to Library</Button>
        </div>
      </div>
      <div className="flex flex-col h-full overflow-auto">
        <div className="p-4">
          <h2 className="text-lg font-semibold">Audio Transcription</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Review the transcriptions of your audio tracks.</p>
        </div>
        <div className="flex-1 overflow-auto p-4 space-y-2">
          {/* List of transcriptions */}
          <div className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <h3 className="font-medium">Time: 00:01:23</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">"Hello, welcome to our podcast."</p>
          </div>
          {/* Additional transcriptions omitted for brevity */}
        </div>
        <div className="p-4 border-t">
          <Button className="w-full">Preview Transcription</Button>
        </div>
      </div>
    </div>
  );
};

export default AudioLibraryPage;
