import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <section className='flex justify-between px-10 shadow-lg py-7'>
                <div>
                    <h1 className='text-2xl font-bold'>Amazon</h1>
                </div>
                <nav >
                    <ul className='flex gap-5'>

                        
                  <NavLink to="/"
                       className={({ isActive, isPending }) =>
                       isPending ? "pending" : isActive ? "underline" : "" }>Home
                 </NavLink>

                 <NavLink to="/products"
                       className={({ isActive, isPending }) =>
                       isPending ? "pending" : isActive ? "underline" : "" }>Products
                 </NavLink>

                 <NavLink to="/dashboard"
                       className={({ isActive, isPending }) =>
                       isPending ? "pending" : isActive ? "underline" : "" }>Dashboard
                 </NavLink>

                </ul>
                </nav>
            </section>

           <div className='min-h-screen'>
                <Outlet></Outlet>
           </div>
     
              <Footer></Footer>

        </div>
    );
};

export default MainLayout;
