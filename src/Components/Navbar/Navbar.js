import React from 'react';
import { Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar px-5 bg-light-100">
  <div class="flex-1">
                <Link to='/' class="btn btn-ghost normal-case text-2xl hover:bg-transparent">
                    <span className=' text-orange-500' style={{fontFamily:'Pacifico , cursive'}}>
                        Sayman Rabbi
                    </span>

    </Link>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
            <li className='text-xl  font-medium'>
            <Link to='/'>Skill</Link>
          </li>
            <li className='text-xl  font-medium'>
            <Link to='/'>Project</Link>
          </li>
            <li className='text-xl  font-medium'>
            <Link to='/'>Contacts</Link>
          </li>
            <li className='text-xl  font-medium'>
            <Link to='/'>Blogs</Link>
          </li>
     
    </ul>
  </div>
</div>
    );
};

export default Navbar;