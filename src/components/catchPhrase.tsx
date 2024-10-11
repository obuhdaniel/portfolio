import React from "react";

import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";


interface PhraseProps{
    subPhrase: string;
    mainPhrase: string;
    subColor?: string;
    mainColor?: string;
    subText?: any;
}

const CatchPhrase: React.FC<PhraseProps> = ({subPhrase, mainPhrase, subColor, mainColor, subText}) => {
    return(
        <>
        <div className="lg:mt-44 mt-20 font-poppins justify-between text-center flex flex-col gap-8 items-center"
        >
            <motion.span className={`lg:text-4xl text-3xl font-medium ${subColor || ''}`}
            initial= {{opacity: 0, x:50}}
            animate= {{opacity: 1, x:0}}
            transition= {{duration: 2}}>{subPhrase}</motion.span>
              <motion.span 
              className={`lg:text-[4rem] font-black text-5xl  ${mainColor}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              >{mainPhrase}
              </motion.span>
             <ReactTyped
                strings={[subText]}
                typeSpeed={50}
                backDelay={2000}
                backSpeed={10}
                loop
                className= {`lg:text-2xl text-xl font-normal  text-start lg:mx-20 mx-6  ${subColor || ''}`}

            >
                
              
             </ReactTyped>

              
        </div>

        <div>
            
        </div>


        </>
    );
}

export default CatchPhrase;