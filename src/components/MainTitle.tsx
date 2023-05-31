import React from 'react';
import {FaList} from 'react-icons/fa';
import {FiChevronDown} from 'react-icons/fi';
import '../css/bounce-horizontal.css';

interface MainTitleProps {
  isHovered: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  homeIsHovered: boolean;
  homeHandleMouseEnter: () => void;
  homeHandleMouseLeave: () => void;
  contentsIsHovered: boolean;
  contentsHandleMouseEnter: () => void;
  contentsHandleMouseLeave: () => void;
}

const MainTitle: React.FC<MainTitleProps> = ({
  isHovered,
  handleMouseEnter,
  handleMouseLeave,
  homeIsHovered,
  homeHandleMouseEnter,
  homeHandleMouseLeave,
  contentsIsHovered,
  contentsHandleMouseEnter,
  contentsHandleMouseLeave,
}) => {
  return (
    <div className="flex lg:flex-row sm:flex-col w-full">
      <div
        className={`lg:w-1/2 bg-main-blue ${
          isHovered ? 'animate-bounce-horizontal' : ''
        }`}
      >
        <div className="flex justify-center items-center min-h-screen">
          <div>
            <div className="text-white text-8xl font-thin">프로젝트</div>
            <div className="flex justify-center text-main-green text-8xl font-thin">
              만들기
            </div>
            <div className="flex justify-center pt-10">
              <button className="px-7 py-3 bg-main-white text-main-blue font-black">
                프로젝트 만들기
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-1/2">
        <div
          className={`flex flex-row justify-between px-16 py-10 ${
            isHovered ? 'animate-bounce-horizontal' : ''
          }`}
        >
          <div className="flex flex-row justify-between w-40">
            <div
              className="font-black text-main-blue"
              onMouseEnter={homeHandleMouseEnter}
              onMouseLeave={homeHandleMouseLeave}
            >
              Home
            </div>
            {homeIsHovered && <FiChevronDown />}
            <div
              className="font-black text-main-blue"
              onMouseEnter={contentsHandleMouseEnter}
              onMouseLeave={contentsHandleMouseLeave}
            >
              Contents
            </div>
            {contentsIsHovered && <FiChevronDown />}
          </div>
          <div className="flex justify-center items-center bg-main-blue rounded w-7 h-7 hover:animate-bounce-pulse m-0">
            <FaList color="white" />
          </div>
        </div>
        <div className="absolute top-1/2 translate-y-half-turn left-1/2 translate-x-half-turn">
          <div className="flex flex-col items-center">
            <div className="text-main-blue text-6xl font-black">펀딩</div>
            <div className="text-main-blue text-6xl">참여하기</div>
            <button
              className="mt-10 px-5 py-2 bg-main-blue text-main-white font-black hover:animate-pulse"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              JOIN US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTitle;
