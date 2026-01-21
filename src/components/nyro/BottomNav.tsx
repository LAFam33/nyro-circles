import { motion } from "framer-motion";
import { Radio, Map, Users } from "lucide-react";
import { cn } from "@/lib/utils";

type NavTab = "radar" | "lens" | "circles";

interface BottomNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

const tabs = [
  { id: "radar" as NavTab, label: "Radar", icon: Radio },
  { id: "lens" as NavTab, label: "Lens", icon: Map },
  { id: "circles" as NavTab, label: "Circles", icon: Users },
];

const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border/50 px-6 py-2 z-50">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "relative flex flex-col items-center gap-1 py-2 px-4 rounded-lg",
                "transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-card"
              )}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Active Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/10 rounded-lg"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              <Icon
                className={cn(
                  "w-5 h-5 relative z-10 transition-colors duration-200",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              />
              <span
                className={cn(
                  "text-xs font-medium relative z-10 transition-colors duration-200",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {tab.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
