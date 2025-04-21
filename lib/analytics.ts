// Simple analytics implementation
// In a production environment, you would replace this with a real analytics service like Google Analytics, Plausible, or Fathom

export type AnalyticsEvent = {
  name: string;
  properties?: Record<string, any>;
};

class Analytics {
  private enabled: boolean;
  private debugMode: boolean;

  constructor() {
    this.enabled = process.env.NODE_ENV === 'production';
    this.debugMode = process.env.DEBUG_ANALYTICS === 'true';
  }

  // Track page views
  trackPageView(url: string) {
    if (!this.enabled) return;
    
    if (this.debugMode) {
      console.log(`[Analytics] Page view: ${url}`);
    }
    
    // In a real implementation, you would send this to your analytics service
    // Example: window.gtag('config', 'GA-ID', { page_path: url });
  }

  // Track events
  trackEvent(event: AnalyticsEvent) {
    if (!this.enabled) return;
    
    if (this.debugMode) {
      console.log(`[Analytics] Event: ${event.name}`, event.properties);
    }
    
    // In a real implementation, you would send this to your analytics service
    // Example: window.gtag('event', event.name, event.properties);
  }

  // Enable or disable analytics
  setEnabled(enabled: boolean) {
    this.enabled = enabled;
    
    // Store user preference in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('analytics-enabled', enabled ? 'true' : 'false');
    }
  }

  // Check if analytics is enabled
  isEnabled(): boolean {
    // Check localStorage for user preference
    if (typeof window !== 'undefined') {
      const storedPreference = localStorage.getItem('analytics-enabled');
      if (storedPreference !== null) {
        return storedPreference === 'true';
      }
    }
    
    return this.enabled;
  }
}

// Export a singleton instance
export const analytics = new Analytics();
