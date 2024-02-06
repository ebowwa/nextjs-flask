// app/audioLibrary/components/AudioTrackList.tsx
"use client";

const AudioTrackList = () => {
  return (
    <div className="flex-1 overflow-auto p-4 space-y-2">
      {/* List of audio tracks */}
      <div className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
        <h3 className="font-medium">comedy reaction tiktoker</h3>
      </div>
      {/* Additional audio tracks omitted for brevity */}
    </div>
  );
};

export default AudioTrackList;
