import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface GhostModeToggleProps {
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  className?: string;
}

const GhostModeToggle = ({ enabled, onToggle, className }: GhostModeToggleProps) => {
  return (
    <button
      onClick={() => onToggle(!enabled)}
      className={cn(
        "flex items-center gap-3 p-1 rounded-pill transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
        className
      )}
    >
      {/* Toggle Track */}
      <motion.div
        className={cn(
          "relative w-14 h-8 rounded-pill p-1 transition-colors duration-300",
          enabled ? "bg-primary" : "bg-muted"
        )}
        animate={{ backgroundColor: enabled ? "hsl(217, 100%, 58%)" : "hsl(195, 10%, 25%)" }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Thumb */}
        <motion.div
          className="w-6 h-6 rounded-full bg-foreground shadow-elevated"
          initial={false}
          animate={{
            x: enabled ? 24 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30, // High damping for "resistance" feel
          }}
        />
      </motion.div>

      {/* Label */}
      <AnimatePresence mode="wait">
        {enabled && (
          <motion.span
            key="ghost-label"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="text-xs font-bold uppercase tracking-wider text-primary"
          >
            Ghost Active
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

export default GhostModeToggle;
