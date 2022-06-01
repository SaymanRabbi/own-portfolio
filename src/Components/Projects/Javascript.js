import React from 'react';
import clone from '../../images/clone.png'
import pin from '../../images/pin.png'
import guess from '../../images/guess.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
const Javascript = () => {
    const data = [

        {
            name: 'Clone Netlify',
            description: 'Netlify is Only Music Paltform Whre user Can play Music And Share With Others. This is a Clone of Netlify.',
            image: clone,
            github: 'https://github.com/SaymanRabbi/Clone-netlifly',
            live: 'https://saymanrabbi.github.io/Clone-netlifly/index.html',
        },
        {
            name: 'Pin Genarator',
            description: 'Pin Genarator is a simple web app where user can generate a pin and share it with others.You have 6 Changes But If you worng 6 Times You will be blocked.',
            image: pin,
            github: 'https://github.com/SaymanRabbi/Pin-Genarator',
            live: 'https://saymanrabbi.github.io/Pin-Genarator/',
        },
        {
            name: 'Guess My Number',
            description: 'Guess My Number where you can play with computer and guess the number that computer generate. You have 20 Changes But If you worng 20 Times You will be blocked.',
            image: guess,
            github: 'https://github.com/SaymanRabbi/Guess',
            live: 'https://saymanrabbi.github.io/Guess/',
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

export default Javascript;