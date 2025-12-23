import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'minimal' | 'accent' | 'inverted' | 'inverted-outline' | 'unstyled';
  fullWidth?: boolean;
  href?: string;
  to?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  href,
  to,
  type = 'button',
  onClick,
  ...props 
}) => {
  const baseStyles = variant === 'unstyled' 
    ? "relative z-10 cursor-pointer block select-none active:scale-[0.99] transition-transform duration-200"
    : "relative z-10 inline-flex items-center justify-center px-8 py-4 text-[11px] uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-sm group overflow-hidden select-none active:scale-[0.98]";
  
  const variants = {
    primary: "bg-primary text-white border border-primary hover:bg-transparent hover:text-primary",
    secondary: "bg-white text-primary border border-border hover:border-primary",
    outline: "bg-transparent text-primary border border-primary/30 hover:border-primary hover:bg-primary hover:text-white",
    minimal: "bg-transparent text-primary border-b border-primary/20 hover:border-accent px-0 py-2 rounded-none hover:text-accent",
    accent: "bg-accent text-white border border-accent hover:bg-accent-dark hover:border-accent-dark shadow-lg shadow-accent/20",
    inverted: "bg-white text-primary border border-white hover:bg-transparent hover:text-white",
    "inverted-outline": "bg-transparent text-white border border-white/40 hover:bg-white hover:text-primary hover:border-white",
    unstyled: ""
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const combinedClassName = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;

  const linkTarget = href || to;

  const handleClick = (e: React.MouseEvent<any>) => {
    if (linkTarget && linkTarget.startsWith('#')) {
      e.preventDefault();
      const id = linkTarget.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        window.history.pushState(null, '', linkTarget);
      }
    }
    
    if (onClick) {
      onClick(e);
    }
  };

  if (linkTarget) {
    const isExternal = linkTarget.startsWith('http');
    const isProtocol = linkTarget.startsWith('mailto:') || linkTarget.startsWith('tel:');
    
    const shouldOpenNewTab = isExternal || isProtocol;

    return (
      <a 
        href={linkTarget}
        className={combinedClassName}
        target={shouldOpenNewTab ? "_blank" : undefined}
        rel={shouldOpenNewTab ? "noopener noreferrer" : undefined}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type}
      className={combinedClassName}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};