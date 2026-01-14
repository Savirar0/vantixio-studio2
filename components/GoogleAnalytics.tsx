import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ measurementId }) => {
  useEffect(() => {
    // Check if we're in production and measurementId is provided
    if (!measurementId || import.meta.env.DEV) {
      console.log('Google Analytics disabled in development');
      return;
    }

    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Initialize gtag
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        page_path: window.location.pathname,
        send_page_view: true
      });
    `;
    document.head.appendChild(script2);

    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [measurementId]);

  return null;
};

// Utility functions for tracking events
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url,
    });
  }
};

// Common event tracking functions
export const analytics = {
  // Track button clicks
  trackButtonClick: (buttonName: string, location: string) => {
    trackEvent('button_click', {
      button_name: buttonName,
      location: location,
    });
  },

  // Track form submissions
  trackFormSubmit: (formName: string) => {
    trackEvent('form_submit', {
      form_name: formName,
    });
  },

  // Track section views
  trackSectionView: (sectionName: string) => {
    trackEvent('section_view', {
      section_name: sectionName,
    });
  },

  // Track contact attempts
  trackContactAttempt: (method: string) => {
    trackEvent('contact_attempt', {
      contact_method: method,
    });
  },

  // Track project views
  trackProjectView: (projectName: string) => {
    trackEvent('project_view', {
      project_name: projectName,
    });
  },
};