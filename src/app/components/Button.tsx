import Link from 'next/link';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({ 
  href, 
  children, 
  variant = 'primary', 
  onClick,
  type = 'button',
  disabled = false 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-[#3b82f6] text-white hover:bg-[#2563eb] focus:ring-[#3b82f6]',
    secondary: 'bg-[#f59e0b] text-white hover:bg-[#d97706] focus:ring-[#f59e0b]',
    accent: 'bg-[#06b6d4] text-white hover:bg-[#0891b2] focus:ring-[#06b6d4]'
  };

  const classes = `${baseClasses} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}