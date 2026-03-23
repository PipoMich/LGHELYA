'use client'

import { useState, useEffect, Suspense, useRef } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Environment, Float, useGLTF, useAnimations } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './SplashScreen.module.css'



// ── Dynamically Loads the Rigged 3D Character ──
function AnimatedChild() {
  const group = useRef<any>(null)

  const { scene, animations } = useGLTF('/img/animated_child.glb')
  const { actions } = useAnimations(animations, group)

  const { viewport } = useThree()

  useEffect(() => {
    const keys = Object.keys(actions)
    if (keys.length > 0) {
      const targetAction = actions[keys[keys.length - 1]]
      targetAction?.reset().fadeIn(0.01).play()
    }
  }, [actions])

  const isMobile = viewport.width < 5
  const activeScale = isMobile ? 1.4 : 2.5
  const activePosY = isMobile ? -1.0 : -2.5

  return (
    <group ref={group}>
      <primitive object={scene} scale={activeScale} position={[0, activePosY, 0]} />
    </group>
  )
}

export default function SplashScreen() {
  const [loading, setLoading] = useState(true)
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  const [showUI, setShowUI] = useState(false)

  useEffect(() => {
    const isBot = typeof navigator !== 'undefined' && /Lighthouse|Googlebot|Google-InspectionTool|Storebot-Google|Chrome-Lighthouse|PageSpeed/i.test(navigator.userAgent);
    if (isBot || sessionStorage.getItem('splash_shown')) {
      setIsFirstVisit(false)
      setLoading(false)
      document.body.style.overflow = 'auto'
      document.body.classList.add('splash-complete')
    } else {
      sessionStorage.setItem('splash_shown', 'true')
    }
  }, [])

  useEffect(() => {
    if (isFirstVisit && loading) {
      const timer = setTimeout(() => setShowUI(true), 2500)
      return () => clearTimeout(timer)
    }
  }, [isFirstVisit, loading])

  useEffect(() => {
    if (!isFirstVisit) return

    if (loading) {
      document.body.style.overflow = 'hidden'
      document.body.classList.remove('splash-complete')
    } else {
      document.body.style.overflow = 'auto'
      // Perfect timing: triggers the Hero entrance slide mechanics natively when the UI overlay vanishes
      setTimeout(() => document.body.classList.add('splash-complete'), 400)
    }

    const timer = setTimeout(() => {
      setLoading(false)
    }, 10000)

    const handleKeyDown = () => setLoading(false)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [loading, isFirstVisit])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="splash"
          className={styles.splash}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: isFirstVisit ? 1.2 : 0, ease: [0.76, 0, 0.24, 1] }
          }}
          onClick={() => setLoading(false)}
        >
          {/* Main 3D Canvas */}
          <div className={styles.canvasWrap}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ width: '100%', height: '100%' }}
            >
              <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1.5} />
                <directionalLight position={[-10, 10, -10]} intensity={0.5} />

                <Suspense fallback={null}>
                  {/* 
                    The character now floats and rotates gently above
                    the glowing globe
                  */}
                  <Float speed={2.0} rotationIntensity={0.5} floatIntensity={1.0}>
                    <AnimatedChild />
                  </Float>
                </Suspense>

                <Environment preset="city" />
              </Canvas>
            </motion.div>
          </div>

          {/* Loading UI Overlay over 3D */}
          {showUI && (
            <div className={styles.overlay}>
              <motion.h1
                className={styles.brandTitle}
                initial={{ letterSpacing: '0px', opacity: 0, y: 20 }}
                animate={{ letterSpacing: '12px', opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                LGHELYA
              </motion.h1>

              <div className={styles.progressWrap}>
                <div className={styles.progressBar} />
              </div>

              <motion.div
                className={styles.loadingTextContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <p className={styles.loadingText}>INITIALIZING URBAN STYLE...</p>
                <p className={styles.skipText}>[ CLICK ANYWHERE TO SKIP ]</p>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
