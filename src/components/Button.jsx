const Button = ({ children, onClick, className = "", variant = "primary" }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105";
  
  const variants = {
    primary: "bg-primary text-black hover:bg-primary/90 hover:shadow-glow",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
    ghost: "text-foreground hover:bg-accent hover:text-accent-foreground"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
