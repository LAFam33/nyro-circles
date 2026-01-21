import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CeramicPillButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

const CeramicPillButton = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className,
  disabled = false,
}: CeramicPillButtonProps) => {
  const variants = {
    primary: "bg-primary text-primary-foreground",
    ghost: "bg-transparent border border-border text-foreground hover:bg-card",
    destructive: "bg-destructive text-destructive-foreground",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "rounded-pill font-bold uppercase tracking-wider",
        "transition-colors duration-200",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
        "disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      {children}
    </motion.button>
  );
};

export default CeramicPillButton;
