import React from 'react';
import '../CSS/services.css';
import { motion } from  'framer-motion';

function Research() {
  return (
    <motion.div
      className='grid-card'
      initial= {{rotate: 360, y: -200, x: -129}}
      animate={{rotate: 0, y: 0, x: 0}}
      transition = {{
        duration: 2.8
      }}
    >
        <img className='grid-img' src={require('../assets/research.jpg')} alt="" />
        <h3 className='grid-header'>Research Services</h3>
        <p className='grid-para'>Research services means the provision of analytical,evaluative or reserach as a business or a part of a business for the purpose of distilling services</p>
    </motion.div>
  )
}

export default Research