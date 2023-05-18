'use client'

import { useEffect } from 'react'
import Scrollbar from 'smooth-scrollbar'

const options = {
  damping: 0.05,
  thumbMinSize: 20,
}

const SmoothScroll = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Scrollbar.init(window.document.querySelector('#smooth-scroll-div'), options)
    }
  }, [])
  return null
}

export default SmoothScroll
