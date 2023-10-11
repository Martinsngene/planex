import { BsXLg } from "react-icons/bs";
import { Links } from "../constants/NavBar.Schema";

const Menu = ({ ctrlMenu }) => {
  return (
    <div className='fixed flex items-start justify-center w-full h-[100vh] top-0 right-0 left-0 bottom-0 bg-white'>
      {/* Close Menu Button */}
      <div className='absolute top-[5%] right-[10%]'>
        <button className='text-black text-[2rem]' onClick={ctrlMenu}>
          <BsXLg />
        </button>
      </div>
      {/* Navigation Links */}
      <ul className='flex flex-col items-center justify-around h-[50%] pt-[10rem]'>
        {Links.map((item, index) => {
          return (
            <a className='text-black' key={index} href={item.route}>
              <button onClick={ctrlMenu}>{item.link.toUpperCase()}</button>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
