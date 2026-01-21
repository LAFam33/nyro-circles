import { useState } from "react";
import BottomNav from "@/components/nyro/BottomNav";
import RadarScreen from "@/pages/RadarScreen";
import LensScreen from "@/pages/LensScreen";
import CirclesScreen from "@/pages/CirclesScreen";
import { AnimatePresence, motion } from "framer-motion";

type NavTab = "radar" | "lens" | "circles";

const Index = () => {
  const [activeTab, setActiveTab] = useState<NavTab>("radar");

  const renderScreen = () => {
    switch (activeTab) {
      case "radar":
        return <RadarScreen />;
      case "lens":
        return <LensScreen />;
      case "circles":
        return <CirclesScreen />;
      default:
        return <RadarScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
