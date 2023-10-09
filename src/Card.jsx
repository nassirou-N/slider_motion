import React from 'react'
import image1 from './assets/1.jpg'
import image2 from './assets/2.jpg'
import image3 from './assets/3.jpg'
import image4 from './assets/4.jpg'
import image5 from './assets/5.jpg'
import {motion} from 'framer-motion'


const Card = () => {

    const [expendedIndex ,setExpandedIndex] = useState(null)

    const handleCardclick = (index) => {
     console.log('hello clik');
      setExpandedIndex(index === expendedIndex ? -1: index)
    }
  
  
    const cardVariants = {
      expanded: {
        width: "400px"
      },
      collapsed: {
        width: "200px"
      }
    }
    const cardImage = [image1,image2,image3,image4,image5]
    const cardDescription = [
      'this is a description: write whatever you need here, this is just textfor a test',
      'this is a description: write whatever you need here, this is just textfor a test',
      'this is a description: write whatever you need here, this is just textfor a test',
      'this is a description: write whatever you need here, this is just textfor a test',
      'this is a description: write whatever you need here, this is just textfor a test',
    ]
  

  return (
    <section className='flex flex-col gap-7 justify-center items-center bg-gradient-to-r from-purple-600 to-indigo-500 '>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className='center text-2xl mt-4'>Slider motion</h1>
        </div>
        <div className="flex gap-4">
        {[0,1,2,3,4].map((index) =>(
        <motion.div key={index} className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${index === expendedIndex ? 'expanded':''}`} variants = {cardVariants} initial = "collapsed" animate = {index === expendedIndex ? 'expanded':'collapsed'} transition={{duration:0.5}} onClick ={() => handleCardclick(index)}  style = {{
            backgroundImage: `url(${cardImage[index]})`,
        }}>
            <div className="card-content h-full flex flex-col justify-end">
            <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                <h2 className='text-xl font-semibold text-white text-center'>card {index+1}</h2>
                {
                index === expendedIndex && (
                    <p className='mt-2 text-gray-300 text-center'>{cardDescription[index]}</p>
                )
                }
            </div>
            </div>
        </motion.div>
        ))}
        </div>
   </section>
  )
}

export default Card
