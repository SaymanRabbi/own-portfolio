import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import Gap from '../Gap/Gap';
import './Project.css'
const Projects = () => {
    return (
      <div>
        <h2 className='text-5xl text-center'>My Project</h2>
        <p className='text-center mt-5 text-xl text-gray-500'>Some Project Recently Done By Me</p>
        <div className='mt-5 flex justify-center'>
          <div className='flex gap-8'>
          <button className='buttonCustom'><Link to='/'>JavaScript</Link></button>
           <Link className='buttonCustom' to='/react'>React</Link>
           <Link className='buttonCustom' to='/mern'>MERN</Link>
            </div>
        </div>
        <div>
            <Outlet></Outlet>
            </div>
        <Gap></Gap>
        </div>
    );
};

export default Projects;