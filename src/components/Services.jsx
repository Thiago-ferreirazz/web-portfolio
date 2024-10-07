import { Link } from "react-router-dom";
import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../../variants';

// services data
const services = [
  {
    name: 'UI/UX Design',
    description:
      'Expert in creating user-centered interfaces with a focus on usability and visual experience. Skilled in transforming business needs into functional and intuitive designs.',
    link: 'Learn more',
  },
  {
    name: 'Software Engineering',
    description:
      'Skilled in developing robust software using Python, Java, C#, JavaScript, and TypeScript for both backend and frontend solutions.',
    link: 'Learn more',
  },
  {
    name: 'Frontend Development',
    description:
      'Expertise in building responsive, modern interfaces with React, Tailwind, and Bootstrap, focusing on performance and reusability.',
    link: 'Learn more',
  },
  {
    name: 'Agile Methodologies',
    description:
      'Experienced in Scrum and Kanban, emphasizing continuous value delivery and process improvement in software projects.',
    link: 'Learn more',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-9'>
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services" 
          >
            <h2 className='h2 text-6xl text-accent mb-7'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
            I'm a Software Engineer and a FIAP student
            </h3>
            <Link to={"/projects"}>
            <button className='btn btn-sm scale-125 '>See my work</button>
            </Link>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a
                        href='#'
                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
