import { motion } from "framer-motion";
import { Map, Navigation, ZoomIn, ZoomOut } from "lucide-react";
import CeramicPillButton from "@/components/nyro/CeramicPillButton";

const LensScreen = () => {
  return (
    <div className="min-h-screen bg-background pb-24 relative overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-40 bg-gradient-to-b from-background via-background/80 to-transparent">
        <div className="flex items-center justify-between px-4 py-4 max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <Map className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">Lens</h1>
          </div>
          <CeramicPillButton size="sm" variant="ghost">
            Nearby
          </CeramicPillButton>
        </div>
      </header>

      {/* Placeholder Map */}
      <div className="absolute inset-0 bg-background">
        {/* Dark styled grid to simulate map */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--border)/0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border)/0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }} />

        {/* Simulated roads */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice">
          {/* Horizontal roads */}
          <line x1="0" y1="200" x2="400" y2="200" stroke="hsl(195, 8%, 30%)" strokeWidth="8" />
          <line x1="0" y1="400" x2="400" y2="400" stroke="hsl(195, 8%, 30%)" strokeWidth="12" />
          <line x1="0" y1="600" x2="400" y2="600" stroke="hsl(195, 8%, 30%)" strokeWidth="6" />
          
          {/* Vertical roads */}
          <line x1="100" y1="0" x2="100" y2="800" stroke="hsl(195, 8%, 30%)" strokeWidth="6" />
          <line x1="200" y1="0" x2="200" y2="800" stroke="hsl(195, 8%, 30%)" strokeWidth="10" />
          <line x1="300" y1="0" x2="300" y2="800" stroke="hsl(195, 8%, 30%)" strokeWidth="8" />
          
          {/* Diagonal road */}
          <line x1="0" y1="300" x2="400" y2="500" stroke="hsl(195, 8%, 30%)" strokeWidth="6" />
        </svg>

        {/* Plan markers */}
        {[
          { x: "25%", y: "30%", count: 4 },
          { x: "60%", y: "45%", count: 7 },
          { x: "40%", y: "65%", count: 3 },
          { x: "75%", y: "25%", count: 8 },
          { x: "15%", y: "75%", count: 12 },
        ].map((marker, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: marker.x, top: marker.y }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: i * 0.1,
            }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Pulse ring */}
              <motion.div
                className="absolute -inset-2 rounded-full bg-primary/20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
              
              {/* Marker */}
              <div className="w-10 h-10 rounded-full bg-primary shadow-elevated flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">
                  {marker.count}
                </span>
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Current location indicator */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.5 }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-4 rounded-full bg-nyro-blue/20"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <div className="w-5 h-5 rounded-full bg-nyro-blue border-4 border-foreground shadow-elevated" />
          </div>
        </motion.div>
      </div>

      {/* Map Controls */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-30">
        <motion.button
          className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center text-foreground shadow-card"
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <ZoomIn className="w-5 h-5" />
        </motion.button>
        <motion.button
          className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center text-foreground shadow-card"
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <ZoomOut className="w-5 h-5" />
        </motion.button>
        <motion.button
          className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow-card"
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Navigation className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Bottom info card */}
      <motion.div
        className="absolute bottom-24 left-4 right-4 bg-card rounded-lg p-4 shadow-elevated border border-border/50 z-30"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 24,
          delay: 0.3,
        }}
      >
        <p className="text-sm text-muted-foreground mb-1">Plans nearby</p>
        <p className="text-2xl font-bold text-foreground">5 Active Plans</p>
        <p className="text-sm text-muted-foreground mt-1">
          Within 2 miles • Tap a marker to view
        </p>
      </motion.div>
    </div>
  );
};

export default LensScreen;
