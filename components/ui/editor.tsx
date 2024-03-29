/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/4AkL5HMrI2q
 */
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function editor() {
  return (
    <div className="grid h-screen grid-cols-[300px_1fr] gap-4">
      <div className="flex flex-col h-full overflow-auto">
        <div className="p-4">
          <h2 className="text-lg font-semibold">reaction library</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Select an audio track to overlay on your video.</p>
        </div>
        <div className="flex-1 overflow-auto p-4 space-y-2">
          <div className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <h3 className="font-medium">Generative Stream-Chat Audio</h3>
          </div>
          <div className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <h3 className="font-medium">Sports Announcer Commentary</h3>
          </div>
          <div className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <h3 className="font-medium">Pop Music</h3>
          </div>
          <div className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <h3 className="font-medium">Rock Music</h3>
          </div>
          <div className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <h3 className="font-medium">Classical Music</h3>
          </div>
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
          <div className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <h3 className="font-medium">Time: 00:01:23</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">"Hello, welcome to our podcast."</p>
          </div>
          <div className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <h3 className="font-medium">Time: 00:03:45</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">"Today we are discussing AI."</p>
          </div>
          <div className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <h3 className="font-medium">Time: 00:05:12</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">"Let's dive into the topic."</p>
          </div>
        </div>
        <div className="p-4 border-t">
          <Button className="w-full">Preview Transcription</Button>
        </div>
      </div>
    </div>
  )
}
