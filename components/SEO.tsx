import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
  type?: string;
  author?: string;
  canonicalUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Vantixio Studio - Your Technical Co-Founder & Product Partner',
  description = 'We build brands and digital products for startups and enterprises — taking ownership from idea to launch and beyond. Fast-moving SaaS companies choose us as their in-house team alternative.',
  keywords = 'web development, product development, SaaS development, startup technical partner, digital products, React development, full-stack development, technical co-founder, Hyderabad web development',
  ogImage = 'https://vantixio-studio.com/og-image.jpg',
  url = 'https://vantixio-studio.com',
  type = 'website',
  author = 'Vantixio Studio',
  canonicalUrl
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (element) {
        element.content = content;
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.content = content;
        document.head.appendChild(element);
      }
    };

    // Basic Meta Tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', author);
    setMetaTag('robots', 'index, follow');
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph Meta Tags (Facebook, LinkedIn)
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:type', type, true);
    setMetaTag('og:site_name', 'Vantixio Studio', true);

    // Twitter Card Meta Tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // Canonical URL
    const canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    const canonical = canonicalUrl || url;
    
    if (canonicalElement) {
      canonicalElement.href = canonical;
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonical;
      document.head.appendChild(link);
    }

    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Vantixio Studio",
      "url": url,
      "logo": `${url}/assets/fav.png`,
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/in/vantixio-15862b3a3",
        "https://www.instagram.com/vantixio"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "email": "contact@vantixio.com",
          "availableLanguage": ["English", "Hindi"]
        },
        {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "telephone": "+91-9652145987",
          "contactOption": "TollFree",
          "availableLanguage": ["English", "Hindi"]
        }
      ],
      "offers": {
        "@type": "Offer",
        "category": "Web Development Services"
      }
    };

    // Add or update structured data script
    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (scriptElement) {
      scriptElement.textContent = JSON.stringify(structuredData);
    } else {
      scriptElement = document.createElement('script');
      scriptElement.type = 'application/ld+json';
      scriptElement.textContent = JSON.stringify(structuredData);
      document.head.appendChild(scriptElement);
    }

  }, [title, description, keywords, ogImage, url, type, author, canonicalUrl]);

  return null;
};

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: 'Vantixio Studio - Your Technical Co-Founder & Product Partner',
    description: 'We build brands and digital products for startups and enterprises — taking ownership from idea to launch and beyond. Based in Hyderabad, India.',
    url: 'https://vantixio-studio.com',
  },
  about: {
    title: 'About Us - Vantixio Studio | Web Development Company in Hyderabad',
    description: 'Learn about Vantixio Studio, our mission, values, and the team behind innovative digital products and technical solutions in Hyderabad, India.',
    url: 'https://vantixio-studio.com/#about',
  },
  projects: {
    title: 'Our Projects - Vantixio Studio | Portfolio',
    description: 'Explore our portfolio of successful digital products, web applications, and technical solutions for startups and enterprises.',
    url: 'https://vantixio-studio.com/#projects',
  },
  clients: {
    title: 'Our Clients - Vantixio Studio | Testimonials',
    description: 'Trusted by fast-moving SaaS companies and modern brands. See who we partner with and what they say about us.',
    url: 'https://vantixio-studio.com/#clients',
  },
  contact: {
    title: 'Contact Us - Vantixio Studio | Get in Touch',
    description: 'Get in touch with Vantixio Studio in Hyderabad. Call +91-9652145987 or email contact@vantixio.com. Book a discovery call today.',
    url: 'https://vantixio-studio.com/#contact',
  }
};