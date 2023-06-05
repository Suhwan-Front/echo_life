import React from 'react';

const MainSubSection: React.FC = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex justify-center">주요 기능</div>
      <div className="flex justify-center">
        <div className="flex justify-center bg-main-blue rounded w-40 h-40">
          <div className="flex h-full items-center text-main-white">123</div>
        </div>
        <div className="flex justify-center bg-main-blue rounded w-40 h-40">
          <div className="flex h-full items-center text-main-white">123</div>
        </div>
        <div className="flex justify-center bg-main-blue rounded w-40 h-40">
          <div className="flex h-full items-center text-main-white">123</div>
        </div>
      </div>
    </div>
  );
};

export default MainSubSection;
