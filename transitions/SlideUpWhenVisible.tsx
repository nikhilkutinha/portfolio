import { ReactNode } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

type SlideUpWhenVisibleProps = {
  children: ReactNode
  className?: string
  threshold?: number
  delay?: number
  onComplete?: () => void
}

const DEFAULT_THRESHOLD = 0
const DEFAULT_DELAY = 0

export const SlideUpWhenVisible = ({
  children,
  className,
  threshold = DEFAULT_THRESHOLD,
  delay = DEFAULT_DELAY,
  onComplete,
}: SlideUpWhenVisibleProps) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.4, delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      className={className}
      onAnimationComplete={onComplete}
    >
      {children}
    </motion.div>
  )
}
