'use client'

import { useEffect } from 'react'

interface CalendlyWidgetProps {
  url?: string
  prefill?: {
    name?: string
    email?: string
    customAnswers?: {
      a1?: string
      a2?: string
      a3?: string
    }
  }
  utm?: {
    utmCampaign?: string
    utmSource?: string
    utmMedium?: string
    utmContent?: string
    utmTerm?: string
  }
}

const CalendlyWidget = ({ 
  url = 'https://calendly.com/dahor-mkt/30min',
  prefill,
  utm 
}: CalendlyWidgetProps) => {
  useEffect(() => {
    // Dynamically load Calendly script
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
    head?.appendChild(script)

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        head?.removeChild(existingScript)
      }
    }
  }, [])

  const buildCalendlyUrl = () => {
    const baseUrl = url
    const params = new URLSearchParams()

    // Add prefill parameters
    if (prefill?.name) params.append('name', prefill.name)
    if (prefill?.email) params.append('email', prefill.email)
    
    // Add custom answers
    if (prefill?.customAnswers?.a1) params.append('a1', prefill.customAnswers.a1)
    if (prefill?.customAnswers?.a2) params.append('a2', prefill.customAnswers.a2)
    if (prefill?.customAnswers?.a3) params.append('a3', prefill.customAnswers.a3)

    // Add UTM parameters
    if (utm?.utmCampaign) params.append('utm_campaign', utm.utmCampaign)
    if (utm?.utmSource) params.append('utm_source', utm.utmSource)
    if (utm?.utmMedium) params.append('utm_medium', utm.utmMedium)
    if (utm?.utmContent) params.append('utm_content', utm.utmContent)
    if (utm?.utmTerm) params.append('utm_term', utm.utmTerm)

    const queryString = params.toString()
    return queryString ? `${baseUrl}?${queryString}` : baseUrl
  }

  return (
    <div 
      className="calendly-inline-widget" 
      data-url={buildCalendlyUrl()}
      style={{ minWidth: '320px', height: '700px' }}
    />
  )
}

export default CalendlyWidget
