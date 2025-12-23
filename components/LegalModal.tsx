import React from 'react';
import { X } from 'lucide-react';

type LegalType = 'privacy' | 'cookies' | 'terms' | null;

interface LegalModalProps {
  isOpen: boolean;
  type: LegalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const titles = {
    privacy: 'Privacy Policy',
    cookies: 'Cookie Policy',
    terms: 'Terms of Service',
  };

  const content = {
    privacy: (
      <div className="space-y-4">
        <p><strong>Last Updated: January 2025</strong></p>
        <p>At Vantixio Studio, we value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.</p>
        
        <h3 className="text-lg font-bold mt-4">1. Information We Collect</h3>
        <p>We collect information you provide directly to us, such as when you fill out a contact form, request a discovery call, or communicate with us via email. This may include your name, email address, company name, and any other details you choose to provide.</p>

        <h3 className="text-lg font-bold mt-4">2. How We Use Your Information</h3>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Respond to your inquiries and provide customer support.</li>
          <li>Schedule and conduct discovery calls.</li>
          <li>Send you updates, proposals, or invoices related to our services.</li>
          <li>Improve our website and service offerings.</li>
        </ul>

        <h3 className="text-lg font-bold mt-4">3. Data Protection</h3>
        <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>

        <h3 className="text-lg font-bold mt-4">4. Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@vantixio.com" className="text-accent underline">contact@vantixio.com</a>.</p>
      </div>
    ),
    cookies: (
      <div className="space-y-4">
        <p><strong>Last Updated: January 2025</strong></p>
        <p>This Cookie Policy explains how Vantixio Studio uses cookies and similar technologies to recognize you when you visit our website.</p>
        
        <h3 className="text-lg font-bold mt-4">1. What are Cookies?</h3>
        <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>

        <h3 className="text-lg font-bold mt-4">2. How We Use Cookies</h3>
        <p>We use cookies for the following purposes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly.</li>
          <li><strong>Analytics Cookies:</strong> We may use these to understand how visitors interact with our website (e.g., which pages are visited most often).</li>
        </ul>

        <h3 className="text-lg font-bold mt-4">3. Managing Cookies</h3>
        <p>You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies.</p>
      </div>
    ),
    terms: (
      <div className="space-y-4">
        <p><strong>Last Updated: January 2025</strong></p>
        <p>Welcome to Vantixio Studio. By accessing or using our website and services, you agree to be bound by these Terms of Service.</p>

        <h3 className="text-lg font-bold mt-4">1. Services</h3>
        <p>Vantixio Studio provides digital product development, design, and strategy services. Specific deliverables and terms for client projects are defined in individual service agreements or contracts.</p>

        <h3 className="text-lg font-bold mt-4">2. Intellectual Property</h3>
        <p>Unless otherwise agreed in writing, all materials produced by Vantixio Studio prior to a specific client engagement remain the property of Vantixio Studio. Client project IP ownership is governed by the specific Master Services Agreement (MSA) signed with each client.</p>

        <h3 className="text-lg font-bold mt-4">3. Limitation of Liability</h3>
        <p>To the fullest extent permitted by law, Vantixio Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.</p>

        <h3 className="text-lg font-bold mt-4">4. Governing Law</h3>
        <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Vantixio Studio is registered.</p>
      </div>
    )
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity animate-fade-in" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl flex flex-col max-h-[90vh] animate-zoom-in">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-primary">{titles[type]}</h2>
          <button 
            onClick={onClose}
            className="text-secondary hover:text-primary transition-colors p-1 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto text-secondary text-sm leading-relaxed">
          {content[type]}
        </div>
        <div className="p-6 border-t border-border bg-gray-50 rounded-b-lg flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-primary text-white text-sm font-medium hover:bg-black transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};