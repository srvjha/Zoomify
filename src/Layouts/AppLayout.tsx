import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <main className='min-h-screen'>

      <Header />
      <Outlet/>
      </main>
     <Footer/>
    

     

    </div>
  )
}

export default AppLayout;
