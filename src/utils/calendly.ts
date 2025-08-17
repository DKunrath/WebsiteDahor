// Calendly Configuration
export const CALENDLY_CONFIG = {
  // Main scheduling URL
  MAIN_URL: 'https://calendly.com/dahor-mkt/30min',
  
  // Different meeting types (if you have multiple)
  MEETING_TYPES: {
    consultation: 'https://calendly.com/dahor-mkt/30min',
    strategy: 'https://calendly.com/dahor-mkt/30min',
    project: 'https://calendly.com/dahor-mkt/30min'
  },

  // UTM tracking for different sources
  UTM_SOURCES: {
    website_header: 'website_header',
    website_hero: 'website_hero',
    website_contact: 'website_contact',
    website_portfolio: 'website_portfolio',
    website_services: 'website_services'
  }
}

// Helper function to build Calendly URLs with tracking
export const buildCalendlyUrl = (
  source: keyof typeof CALENDLY_CONFIG.UTM_SOURCES,
  meetingType: keyof typeof CALENDLY_CONFIG.MEETING_TYPES = 'consultation',
  customParams?: Record<string, string>
) => {
  const baseUrl = CALENDLY_CONFIG.MEETING_TYPES[meetingType]
  const params = new URLSearchParams()
  
  // Add UTM tracking
  params.append('utm_source', 'website')
  params.append('utm_medium', 'cta_button')
  params.append('utm_campaign', source)
  params.append('utm_content', 'dahor_website')
  
  // Add custom parameters
  if (customParams) {
    Object.entries(customParams).forEach(([key, value]) => {
      params.append(key, value)
    })
  }
  
  return `${baseUrl}?${params.toString()}`
}

// Pre-built URLs for common use cases
export const CALENDLY_URLS = {
  header: buildCalendlyUrl('website_header'),
  hero: buildCalendlyUrl('website_hero'),
  contact: buildCalendlyUrl('website_contact'),
  portfolio: buildCalendlyUrl('website_portfolio'),
  services: buildCalendlyUrl('website_services')
}
