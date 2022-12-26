import React from 'react';
import useFirestore from '../Hook/useFirestore';
import {motion} from 'framer-motion';



function ImageGrid({setSelectedImg}) {
const {docs} = useFirestore('images');
console.log(docs);

  return (

    <div >

      <div className='img-grid'>
      {docs && docs.map (doc =>(
        
      <motion.div className='img-wrap' key={doc.id}
      layout
      whileHover={{opacity:1}}
  
      onClick={() => setSelectedImg(doc.url)}
      >
        <motion.img src={doc.url} alt="uploaded-pic"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1}}

        />

      </motion.div>

     ))}
      </div>

    </div>
  );
}

export default ImageGrid;
