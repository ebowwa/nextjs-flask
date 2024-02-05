// app/components/ui/Logo.tsx
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="absolute top-0 left-0 mt-4 ml-4">
        <h1 className="text-xl font-bold">voiceovers</h1>
      </div>
    </div>
  );
};

export default Logo;
