import React from 'react';
import { FaDiscord } from 'react-icons/fa6';

const ToDiscord = () => {
  const handleDiscordRedirect = () => {
    window.open('https://discord.gg/EAkvev6FJp', '_blank');
  };

  return (
    <button
      className=" bg-gray-100 dark:bg-neutral-700 p-1.5 mr-2 rounded-full shadow-xl hover:scale-125 transition-all ease-in-out"
      onClick={handleDiscordRedirect}
      aria-label="Discord Server"
    >
      <FaDiscord
        className='text-black dark:text-white'
        size={28}
      />
    </button>
  );
};

export default ToDiscord;
