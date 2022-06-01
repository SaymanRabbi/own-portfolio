import React from 'react';
import redonion from '../../images/redonion.png'
import hphone from '../../images/hphone.png'
import explore from '../../images/explore.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Reactproject = () => {
    const data = [

        {
            name: 'Readonion',
            description: 'readonion is a wev aplication where user can search food and get the details of the food. You can also add the food to your favorite list.',
            image: redonion,
            github: 'https://github.com/SaymanRabbi/red-onion',
            live: 'https://moonlit-bonbon-a80098.netlify.app/',
        },
        {
            name: 'Hp Phone',
            description: 'HP Phone is web aplication where user can search phone and get the details of the phone. You can also add the phone to your favorite list.',
            image: hphone,
            github: 'https://github.com/SaymanRabbi/assignent-nine',
            live: 'https://hp-phone-dd75a.web.app/',
        },
        {
            name: 'Explore More',
            description: 'Explore More is a web aplication where user can search places and get the details of the places.',
            image: explore,
            github: 'https://github.com/SaymanRabbi/Independent-10',
            live: 'https://assignment-ten-b5c83.web.app/',
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

export default Reactproject;