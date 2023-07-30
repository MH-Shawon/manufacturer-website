
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';





const Header = () =>
{

    const [ user ] = useAuthState( auth );

    const logout = () =>
    {
        signOut( auth );
    };

    const mainMenu = <>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/tools">Tools</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li>{user ? <div className="dropdown">
            <label tabIndex={0} className="">{user.displayName}</label>
            <ul tabIndex={0} className="mt-24  shadow menu menu-sm dropdown-content bg-gray-600  rounded-xl">
                
                <li className='text-white' onClick={logout}><a>Log Out</a></li>
                
            </ul>
        </div> :
            <Link to="/login">Login</Link>}</li>
    </>



    return (
        <div className="navbar bg-sky-300 rounded">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost py-3 lg:invisible">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-1 shadow uppercase text-white bg-base-100 rounded-box w-52">
                        {mainMenu}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <div>
                        <Link to="/">
                            <button className='btn-ghost font-bold pt-1 text-2xl ml-6  font-[Playfair]'>Manufacture <span className='text-red-600'>Tools</span></button>
                        </Link>
                    </div>

                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal uppercase mr-23 font-bold text-black mt-1">
                    {mainMenu}
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost py-3 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default Header;