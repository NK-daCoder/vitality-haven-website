import { motion } from "framer-motion"
import { FeaturedCard, Card } from "./Card"
import { useState } from "react"


const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const HeroSections = ({ data }) => {
  /* this will allow us to display data accoding to the criteria */
  const [showAll, setShowAll] = useState(false)
  const toggleShowAll = () => setShowAll(prev => !prev)

  // Determine what to display
  const displayedPosts = showAll ? data : data.slice(0, 3)


  return (
    <section className='flex flex-col gap-4 items-center justify-center container mx-auto py-20'>
      
      {/* Main Featured Card */}
      <Card data={data} />
      
      {/* Header */}
      <div className='flex justify-between items-center py-2 w-full'>
        <h2 className='text-orange-500 font-semibold'>Featured Post</h2>
        <button 
          className='text-orange-500 font-semibold'
          onClick={toggleShowAll}
        >
          {showAll ? "Show Less" : "See All Posts"}
        </button>
      </div>

      {/* Animated Featured Cards */}
      <section aria-label="featured post section">
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {
            displayedPosts.map((item, index) => (
              <motion.li
                key={`featured-card-${index}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <FeaturedCard data={item} />
              </motion.li>
            ))
          }
        </ul>
      </section>

      
    </section>
  )
}

export { HeroSections };
