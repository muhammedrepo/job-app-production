import { useState } from 'react';
import { FaAlignLeft, FaCaretDown, FaUserCircle } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/Navbar';
import { useAppContext } from '../context/appContext';
import Button from './Button';
import Logo from './Logo';

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, toggleSidebar, logoutUser } = useAppContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <Button
            primary
            type="button"
            className="flex items-center justify-center shadow-shadow2 relative gap-y-0 gap-x-2"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </Button>
          <div className={showLogout ? `dropdown show-dropdown` : `dropdown`}>
            <Button outline type="button" onClick={logoutUser}>
              logout
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;

// const Navbar = () => {
//   return (
//     <div className="h-navHeight flex items-center justify-center shadow-shadow1 lg:sticky top-0">
//       <div className="nav-center flex items-center justify-between w-[90vw] lg:w-[90%]">
//         <button
//           type="button"
//           className="bg-transparent border-transparent text-base text-primary-500 flex items-center cursor-pointer"
//           onClick={() => console.log('toggle sidebar')}
//         >
//           <FaAlignLeft />
//         </button>
//         <div className="flex items-center w-24 lg:hidden">
//           <Logo />
//           <h3 className="hidden m-0 lg:block">dashboard</h3>
//         </div>
//         <div className="relative">
//           <Button
//             primary
//             type="button"
//             className="flex items-center justify-center shadow-shadow2 relative gap-y-0 gap-x-2"
//             onClick={() => console.log('show logout')}
//           >
//             <FaUserCircle />
//             John
//             <FaCaretDown />
//           </Button>
//           <div className={`dropdown show-dropdown`}>
//             <Button
//               outline
//               type="button"
//               onClick={() => console.log('logout user')}
//             >
//               logout
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Navbar;
