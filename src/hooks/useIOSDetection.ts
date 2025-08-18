import { useEffect, useState } from 'react'

export const useIOSDetection = () => {
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    const checkIsIOS = () => {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
             (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    }
    
    setIsIOS(checkIsIOS())
  }, [])

  return isIOS
}

export const getIOSStyles = (baseClasses: string, iosOverride?: string) => {
  if (typeof window === 'undefined') return baseClasses
  
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
               (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  
  if (isIOS && iosOverride) {
    return `${baseClasses} ${iosOverride}`
  }
  
  return baseClasses
}
