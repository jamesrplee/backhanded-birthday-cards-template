import { motion } from "framer-motion"
import './styles.css'
import { ReactComponent as Present } from '../../assets/present-1.svg';
import { ReactComponent as Present2 } from '../../assets/present-2.svg';

const Frame = ({children}) => (
  <div className="Frame">
    <motion.div
      style={{
        position: 'absolute',
        bottom: '3rem',
        right: '3rem'
      }}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        loop: Infinity,
      }}>
      <Present />
    </motion.div>
    <motion.div
      style={{
        position: 'absolute',
        top: '2rem',
        left: '2rem'
      }}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        loop: Infinity,
      }}>
      <Present2 />
    </motion.div>
   {children}
  </div>
)

export default Frame
