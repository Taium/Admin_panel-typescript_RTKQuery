// import Header from './components/Header';


import { Link, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';


const Home = () => {
    
    return (
        <>
       
            
            

            <div className="flex">
            <Sidebar></Sidebar>
           
{/* all things go here... */}
<h1 className='text-place-center'>DASHBOARD</h1>
        </div>
         </>   
        
    );
};

export default Home;