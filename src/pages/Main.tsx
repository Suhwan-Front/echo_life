import React, {useState} from 'react';
import MainTitle from '../components/MainTitle';
import MainSubSection from '../components/MainSubSection';

const Main: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [homeIsHovered, setHomeIsHovered] = useState(false);
  const [contentsIsHovered, setContentsIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const homeHandleMouseEnter = () => {
    setHomeIsHovered(true);
  };

  const homeHandleMouseLeave = () => {
    setHomeIsHovered(false);
  };

  const contentsHandleMouseEnter = () => {
    setContentsIsHovered(true);
  };

  const contentsHandleMouseLeave = () => {
    setContentsIsHovered(false);
  };

  return (
    <div className="flex flex-col min-h-screen m-0 bg-main-white">
      <MainTitle
        isHovered={isHovered}
        homeIsHovered={homeIsHovered}
        contentsIsHovered={contentsIsHovered}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        homeHandleMouseEnter={homeHandleMouseEnter}
        homeHandleMouseLeave={homeHandleMouseLeave}
        contentsHandleMouseEnter={contentsHandleMouseEnter}
        contentsHandleMouseLeave={contentsHandleMouseLeave}
      />
      <div className="flex">
        <MainSubSection />
      </div>
    </div>
  );
};

export default Main;
