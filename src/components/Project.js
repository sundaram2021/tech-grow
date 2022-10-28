import React from 'react'
import '../CSS/services.css'
import { motion } from 'framer-motion';

function Project() {
  return (
    <motion.div className='grid-card'
      initial= {{rotate: 360, y: -200, x: -129}}
      animate={{rotate: 0, y: 0, x: 0}}
      transition = {{
        duration: 2.8
      }}
    >
        <img className='grid-img' src={require('../assets/project.jpg')} alt="" />
        <h3 className='grid-header'>Project Consultancies</h3>
        <p className='grid-para'>Project service is a practice of intiting planning, executing, controlling and closing the work of a team to achieve specific goals</p>
    </motion.div>
  )
}

export default Project