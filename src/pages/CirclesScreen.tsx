import { motion } from "framer-motion";
import { Users, Plus, ChevronRight } from "lucide-react";
import CeramicPillButton from "@/components/nyro/CeramicPillButton";
import { cn } from "@/lib/utils";

interface Circle {
  id: string;
  name: string;
  memberCount: number;
  avatars: string[];
  lastActive: string;
}

const mockCircles: Circle[] = [
  {
    id: "1",
    name: "The Core Crew",
    memberCount: 8,
    avatars: [
      "https://api.dicebear.com/7.x/avataaars/svg?seed=a1",
      "https://api.dicebear.com/7.x/avataaars/svg?seed=b2",
      "https://api.dicebear.com/7.x/avataaars/svg?seed=c3",
    ],
    lastActive: "Active now",
  },
  {
    id: "2",
    name: "Hiking Squad",
    memberCount: 12,
    avatars: [
      "https://api.dicebear.com/7.x/avataaars/svg?seed=d4",
      "https://api.dicebear.com/7.x/avataaars/svg?seed=e5",
      "https://api.dicebear.com/7.x/avataaars/svg?seed=f6",
    ],
    lastActive: "2h ago",
  },
  {
    id: "3",
    name: "Work Friends",
    memberCount: 5,
    avatars: [
      "https://api.dicebear.com/7.x/avataaars/svg?seed=g7",
      "https://api.dicebear.com/7.x/avataaars/svg?seed=h8",
      "https://api.dicebear.com/7.x/avataaars/svg?seed=i9",
    ],
    lastActive: "Yesterday",
  },
  {
    id: "4",
    name: "Basketball Crew",
    memberCount: 10,
    avatars: [
      "https://api.dicebear.com/7.x/avataaars/svg?seed=j0",
      "https://api.dicebear.com/7.x/avataaars/svg?seed=k1",
      "https://api.dicebear.com/7.x/avataaars/svg?seed=l2",
    ],
    lastActive: "3d ago",
  },
];

const CircleCard = ({ circle, index }: { circle: Circle; index: number }) => (
  <motion.div
    className={cn(
      "bg-card rounded-lg p-4 shadow-card border border-border/50",
      "flex items-center gap-4 cursor-pointer"
    )}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 24,
      delay: index * 0.08,
    }}
    whileHover={{ x: 4 }}
    whileTap={{ scale: 0.98 }}
  >
    {/* Stacked Avatars */}
    <div className="flex -space-x-3">
      {circle.avatars.map((avatar, i) => (
        <img
          key={i}
          src={avatar}
          alt=""
          className="w-10 h-10 rounded-full border-2 border-card object-cover"
          style={{ zIndex: 3 - i }}
        />
      ))}
    </div>

    {/* Info */}
    <div className="flex-1 min-w-0">
      <h3 className="font-semibold text-foreground truncate">{circle.name}</h3>
      <p className="text-sm text-muted-foreground">
        {circle.memberCount} members • {circle.lastActive}
      </p>
    </div>

    {/* Chevron */}
    <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
  </motion.div>
);

const CirclesScreen = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="flex items-center justify-between px-4 py-4 max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">Circles</h1>
          </div>
          <CeramicPillButton size="sm">
            <Plus className="w-4 h-4 mr-1" />
            New
          </CeramicPillButton>
        </div>
      </header>

      {/* Circles List */}
      <main className="px-4 py-4 max-w-md mx-auto">
        <p className="text-sm text-muted-foreground mb-4">
          Your trusted groups for coordinating plans
        </p>

        <div className="space-y-3">
          {mockCircles.map((circle, index) => (
            <CircleCard key={circle.id} circle={circle} index={index} />
          ))}
        </div>

        {/* Empty state hint */}
        <motion.div
          className="mt-8 text-center p-6 border-2 border-dashed border-border rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Users className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">
            Create circles with people you trust to coordinate plans together
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default CirclesScreen;
