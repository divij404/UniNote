  // src/components/Button.tsx
import React from 'react';
import colors from '../../theme/colors';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  onClick?: () => void;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  style,
  type = 'button',
  ...rest
}) => {
  let backgroundColor = colors.primary;
  let color = colors.surface;
  let border = 'none';

  if (variant === 'secondary') {
    backgroundColor = colors.secondary;
    color = colors.text;
  } else if (variant === 'text') {
    backgroundColor = 'transparent';
    color = colors.primary;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        backgroundColor,
        color,
        border,
        padding: '0.5rem 1rem',
        borderRadius: 4,
        cursor: 'pointer',
        fontWeight: 600,
        transition: 'background-color 0.3s ease',
        ...style,
      }}
      {...rest}
      onMouseEnter={(e) => {
        if (variant !== 'text') {
          (e.currentTarget.style.backgroundColor = variant === 'primary' ? colors.secondary : colors.primary);
          (e.currentTarget.style.color = variant === 'primary' ? colors.text : colors.surface);
        }
      }}
      onMouseLeave={(e) => {
        if (variant !== 'text') {
          (e.currentTarget.style.backgroundColor = backgroundColor);
          (e.currentTarget.style.color = color);
        }
      }}
    >
      {children}
    </button>
  );
};

export default Button;
