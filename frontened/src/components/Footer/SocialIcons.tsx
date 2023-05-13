import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
const Icons = [
  { name: FaFacebookF, link: '#' },
  { name: FaLinkedinIn, link: '#' },
  { name: FaInstagram, link: '#' },
  { name: FaTwitter, link: '#' },
  { name: FaYoutube, link: '#' },
];
export const SocialIcons = () => {
  return (
    <div  className="text-teal-500">
      {Icons.map((icon, index) => {
        const IconComponent = icon.name;
        return (
          <a key={index} href={icon.link} className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 
               hover:bg-teal-500 duration 300"   rel="noopener noreferrer">
            <IconComponent />
          </a>
        );
      })}
    </div>
  );
}
