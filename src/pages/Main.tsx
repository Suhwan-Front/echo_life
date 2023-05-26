import React from 'react';
import {FaList} from 'react-icons/fa';

const Main: React.FC = () => {
  return (
    <div className="flex min-h-screen m-0 bg-main-white">
      <div className="w-1/2 bg-main-blue">
        <div className="flex justify-center items-center min-h-screen">
          <div>
            <div className="text-white text-8xl font-thin">꿈에</div>
            <div className="text-main-green text-8xl font-thin">GREEN</div>
            <div className="text-white text-8xl font-thin">삶</div>
          </div>
        </div>
      </div>
      <div className="relative w-1/2">
        <div className="flex flex-row justify-between px-16 py-10">
          <div className="flex flex-row justify-between w-40">
            <div className="font-black text-main-blue">Home</div>
            <div className="font-black text-main-blue">Contents</div>
          </div>
          <div className="flex justify-center items-center bg-main-blue rounded w-7 h-7 hover:animate-bounce-pulse m-0">
            <FaList color="white" />
          </div>
        </div>
        <div className="absolute top-1/2 translate-y-half-turn left-1/2 translate-x-half-turn">
          <div className="flex flex-col items-center">
            <div>당신의 삶을</div>
            <div>의미있게</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
