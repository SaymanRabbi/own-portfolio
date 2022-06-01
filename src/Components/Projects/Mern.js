import React from 'react';
import mens from '../../images/mens.png'
import bike from '../../images/bike.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Mern = () => {
    const data = [

        {
            name: 'Men’s Perfume',
            description: 'Mens Perfume is a web application where user can find brand perfume and add her card every singel person can see only her information ',
            image: mens,
            github: 'https://github.com/SaymanRabbi/mens-perfume-client',
            live: 'https://assignment-11-c3aa0.web.app/',
        },
        {
            name: 'Bike Manufacturers',
            description: 'Bike Manufacturers is web application where user can find Bike Parts and Buy it.user can give a rivew and aslo have admin functionality admin can manges everything',
            image: bike,
            github: 'https://github.com/SaymanRabbi/Bike-manufacturer-client',
            live: 'https://assignment-12-client-dde4f.web.app/',
        }
    ]
    return (
        <div className='mx-10 grid md:grid-cols-3 grid-cols-1 gap-5 mt-10'>
        {
            data.map( d=><div class="card card-compact rounded-md max-w-lg bg-base-100 shadow-xl mx-auto">
                <figure><img src={ d.image} alt=''/></figure>
            <div class="card-body">
                    <h2 class="card-title">{d.name}</h2>
                    <p>{d.description}</p>
                    
                </div>
                <div className='flex gap-5  pb-4'>
                <a href={d.live} target='_blank' rel='noreferrer' className=' text-orange-500 hover:text-black text-xl'>Live <FontAwesomeIcon icon={faUpRightFromSquare}></FontAwesomeIcon></a>
                    <a href={d.github} target='_blank' rel='noreferrer' className=' text-orange-500 hover:text-black text-xl'>Github <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                </div>
          </div>)
     }
    </div>
    );
};

export default Mern;