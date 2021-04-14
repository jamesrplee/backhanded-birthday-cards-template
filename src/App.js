import 'minireset.css';
import { motion } from "framer-motion"

import Frame from './components/Frame'
import './App.css';

function App({ toName, ccName, theme, lines }) {
  const containerVariants = {
    active: {
      transition: {
        staggerChildren: 3,
      }
    },
    inactive: {
      transition: { duration: 2 }
    }
  }

  const childVariants = {
    active: {
      x: [1500, 0, 0, -1500],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.3, 0.8, 1],
      }
    }
  }

  return (
    <div className={`App ${theme}`}>
      <Frame>
        <motion.div
          variants={containerVariants}
          animate="active"
          className="container"
        >
          <motion.h1
            variants={childVariants}
          >
            Dear <span>{toName}</span>,
          </motion.h1>
          {lines.map((line) => (
            <motion.h1
              variants={childVariants}
            >
              {line}
            </motion.h1>
          ))}
          <motion.h1
            variants={childVariants}
          >
            From,<br/>
            <span>{ccName}</span>.
          </motion.h1>
          <motion.h2
            variants={childVariants}
          >
            Backhanded<br />Birthday Cards
          </motion.h2>
        </motion.div>
      </Frame>
    </div>
  );
}

export default App;

App.defaultProps = {
  toName: 'James',
  ccName: 'John',
  lines: [
    'Another year has gone by,',
    'But you haven\'t gotten any wiser.',
    'Oh well...',
    'Happy birthday 🍾',
  ],
  theme: 'another'
}

// compliment: {
//   lines: [
//     'Age may just be a number,',
//     'But look in the mirror and you\'ll change your mind.',
//     'Happy birthday! 🎉',
//   ],
//   theme: 'age'
// }

// compliment: {
//   lines: [
//     'Smart, good looking and funny.',
//     'But enough about me...',
//     'Happy birthday. 🥳',
//   ],
//   theme: 'smart'
// }

// compliment: {
//   lines: [
//     'Facebook told me it was your birthday,',
//     'Happy birthday 🎂',
//   ],
//   theme: 'facebook'
// }

// compliment: {
//   lines: [
//     'We know you're growing old,',
//     'But you'll always be young on the inside',
//     'Happy birthday 🙏',
//   ],
//   theme: 'old'
// }

// compliment: {
//   lines: [
//     'You are cool, amazing and wise,',
//     'But don't get too excited,',
//     'I'm only saying all these things because it's your birthday today.',
//     'Happy birthday 🎁',
//   ],
//   theme: 'amazing'
// }

// compliment: {
//   lines: [
//     'Another year has gone by,',
//     'But you haven't gotten any wiser.,',
//     'Oh well...',
//     'Happy birthday 🍾',
//   ],
//   theme: 'another'
// }
