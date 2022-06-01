import React from 'react';
import hero from '../../images/hero.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook, faInstagram, faWhatsapp, faTwitter, faStackOverflow} from '@fortawesome/free-brands-svg-icons'; 
import Wobble from 'react-reveal/Wobble';
import './Hero.css'
import Gap from '../Gap/Gap';
import Skill from '../Skill/Skill';
import Projects from '../Projects/Projects';

const Hero = () => {
    return (
        <div>
         <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 px-12  mt-10 pt-10 gap-10'>
            <div className="hero-left">
                <div className="hero-left-content">
                    <Wobble>
                        <h1 className=' text-5xl text-black mb-10 font-medium'>Hi, I'm Sayman
                        <FontAwesomeIcon className=' ml-2 text-red-500 heart' icon={faHeart}></FontAwesomeIcon>
                        </h1>
                   </Wobble>
                    <p className=' text-xl text-gray-400  leading-10 font-normal'>
                    A Passionate Full Stack Software Developer Having Experience of Building Web & Mobile Applications With Laravel, Codeigniter, Django, Android, Flutter and Other Cool Libraries & Frameworks.
                    </p>
                    <div className=' mt-10 flex  gap-3'>
                        <a href='https://github.com/SaymanRabbi' className=' w-12 h-12 flex justify-center items-center rounded-full p-2 bg-slate-800 hover:bg-black' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon className='text-white text-2xl' icon={faGithub} />
                        </a>
                        <a href='https://www.linkedin.com/in/sayman-rabbi-5b8aa11ab/' className=' w-12 h-12 flex justify-center items-center rounded-full p-2   bg-sky-900 hover:bg-black' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon className='text-white text-2xl' icon={faLinkedin} />
                        </a>
                        <a href='https://www.facebook.com/saymanrabbi/' className=' w-12 h-12 flex justify-center items-center rounded-full p-2  bg-cyan-600 hover:bg-black' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon className='text-white text-2xl' icon={faFacebook} />
                        </a>
                        <a href='https://www.instagram.com/saymanrabbi/?hl=bn' className=' w-12 h-12 flex justify-center items-center rounded-full p-2  bg-red-400 hover:bg-black' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon className='text-white text-2xl' icon={faInstagram} />
                        </a>
                        <a href='https://www.whatsapp.com/' className=' w-12 h-12 flex justify-center items-center rounded-full p-2  bg-green-600 hover:bg-black' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon className='text-white text-2xl' icon={faWhatsapp} />
                        </a>
                        <a href='https://twitter.com/rabbi_sayman' className=' w-12 h-12 flex justify-center items-center rounded-full p-2 bg-sky-400 hover:bg-black' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon className='text-white text-2xl' icon={ faTwitter} />
                        </a>
                        <a href='https://stackoverflow.com/users/16107978/sayman-rabbi' className=' w-12 h-12 flex justify-center items-center rounded-full p-2  bg-orange-500 hover:bg-black' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon className='text-white text-2xl' icon={faStackOverflow} />
                        </a>
                    </div>
                    <div className='flex gap-10 mt-10'>
                          <button className='btn bg-orange-500 px-5 font-bold hover:bg-white hover:text-orange-500 hover:translate-y-1  border-0 hover:border-2'>Contact Me</button>
                          <a href="../../images/Resume.pdf" download><button className='btn bg-orange-500 px-5 font-bold  hover:bg-white hover:text-orange-500 hover:translate-y-1 border-0 hover:border-2 hover:shadow-md'>My Resume</button></a>
                    </div>
                </div>
            </div>
            <div className="hero-right  h-full"> 
                <div className="hero-right-content">
                      <img src={hero} className=' w-full' alt="" />
                </div>
            </div>
            </div>
            <Gap />
            <Skill />
            <Gap />
            <Projects />
        </div>
    );
};

export default Hero;