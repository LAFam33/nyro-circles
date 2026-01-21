import { useState } from "react";
import { motion } from "framer-motion";
import PlanCard from "@/components/nyro/PlanCard";
import GhostModeToggle from "@/components/nyro/GhostModeToggle";
import { mockPlans } from "@/data/mockPlans";
import { Radio } from "lucide-react";
import { toast } from "sonner";

const RadarScreen = () => {
  const [ghostMode, setGhostMode] = useState(false);

  const handleJoin = (planId: string) => {
    const plan = mockPlans.find((p) => p.id === planId);
    toast.success(`Joined "${plan?.title}"`, {
      description: "You're in! Check your circles for updates.",
    });
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="flex items-center justify-between px-4 py-4 max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <Radio className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">Radar</h1>
          </div>
          <GhostModeToggle enabled={ghostMode} onToggle={setGhostMode} />
        </div>
      </header>

      {/* Plans Feed */}
      <main className="px-4 py-4 max-w-md mx-auto">
        <motion.div
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {mockPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 24,
              }}
            >
              <PlanCard plan={plan} onJoin={handleJoin} />
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default RadarScreen;
