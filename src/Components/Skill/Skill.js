import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons';
const Skill = () => {
    const icon = [{
        name: 'devicon-html5-plain colored'
    },{
        name: 'devicon-css3-plain colored'
    },{
        name: 'devicon-bootstrap-plain colored'
    },{
        name: 'devicon-tailwindcss-original-wordmark colored'
    },{
        name: 'devicon-figma-plain colored'
    },{
        name: 'devicon-firebase-plain colored'
    },{
        name: 'devicon-github-original colored'
    },{
        name: 'devicon-heroku-plain colored'
    },{
        name: 'devicon-javascript-plain colored'
    },{
        name: 'devicon-nodejs-plain colored'
    },{
        name: 'devicon-express-original colored'
    },{
        name: 'devicon-mongodb-plain colored'
    },]
   
    return (
        <div>
            <h2 className='text-5xl text-center'>Skills <FontAwesomeIcon className=' ml-2 text-orange-500' icon={faBook}></FontAwesomeIcon></h2>
            <p className=' text-center mt-5 text-xl text-gray-500'>TECH TOOLS AND SKILLS THAT I USE IN DEVELOPMENT</p>
            <div className='mx-auto w-3/4 grid lg:grid-cols-12 md:grid-cols-6 grid-cols-4 mt-10 gap-5'>
                {icon.map((item, index) => 
                    <div key={index}>
                    <i className={`${item.name} text-5xl hover:text-orange-500 cursor-pointer`}></i>
                    </div>
                 )}
            </div>
        </div>
    );
};

export default Skill;