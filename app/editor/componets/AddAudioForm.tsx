// app/editor/components/AddAudioForm.tsx
// lets rename CharaterPromptForm.tsx lets also allow signed on users the ability to save and add new prompts
// when the user clicks the prompt title on left of the webpage under the character library an overlay over the Audio Transcriptions should be the prompts 

"use client";
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { supabase } from '../../../supabase/supabaseClient'; // Adjust the path as necessary


const AddAudioForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddAudioTrack = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('audio_tracks')
      .insert([{ title, description }]);
    
    if (error) console.error("Error inserting data: ", error);
    else {
      console.log("Data inserted successfully: ", data);
      // Reset form or provide further user feedback
    }
  };

  return (
    <form onSubmit={handleAddAudioTrack} className="p-4 border-t">
      <Input
        className="mb-2"
        placeholder="Add new audio track title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        className="mb-2 h-20"
        placeholder="Add new audio track description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button className="w-full" type="submit">Add to Library</Button>
    </form>
  );
};

export default AddAudioForm;
