import React, { useEffect } from 'react';
import useStorage from '../Hook/useStorage';
import {motion} from 'framer-motion';

function ProgressBar({file,setFile}) {
const { url ,progress} =useStorage(file);

useEffect(()=>{
if(url){
  setFile(null);
}

},[url,setFile])

  return (

    <div>
      <div className='progress-parent1'>

        <div  className='progress-parent2' >
        <motion.div className="progress-bar" 
        initial={{width:0}}
        animate={{width: progress +'%'}}
        //  style={{width: progress +'%'}} 
        >
             
        </motion.div>
        </div>
 
      </div>
         
    </div>
  );
}

export default ProgressBar;


   
