import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import CeramicPillButton from "./CeramicPillButton";
import { cn } from "@/lib/utils";

export interface Plan {
  id: string;
  title: string;
  location: string;
  time: string;
  hostName: string;
  hostAvatar: string;
  attendeeCount: number;
  maxAttendees?: number;
}

interface PlanCardProps {
  plan: Plan;
  onJoin?: (planId: string) => void;
  className?: string;
}

const PlanCard = ({ plan, onJoin, className }: PlanCardProps) => {
  return (
    <motion.div
      className={cn(
        "bg-card rounded-lg p-4 shadow-card",
        "border border-border/50",
        className
      )}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 24,
      }}
      whileHover={{
        y: -2,
        boxShadow: "var(--shadow-elevated)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Header: Avatar + Time/Location */}
      <div className="flex items-start justify-between mb-3">
        {/* Host Avatar */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={plan.hostAvatar}
              alt={plan.hostName}
              className="w-10 h-10 rounded-full object-cover border-2 border-border"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-primary rounded-full border-2 border-card" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{plan.hostName}</p>
            <p className="text-xs text-muted-foreground">Host</p>
          </div>
        </div>

        {/* Time & Location */}
        <div className="text-right space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground justify-end">
            <Clock className="w-3.5 h-3.5" />
            <span>{plan.time}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground justify-end">
            <MapPin className="w-3.5 h-3.5" />
            <span className="max-w-24 truncate">{plan.location}</span>
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground mb-4 leading-tight">
        {plan.title}
      </h3>

      {/* Footer: Attendees + Join Button */}
      <div className="flex items-center justify-between">
        {/* Attendee Count */}
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {[...Array(Math.min(3, plan.attendeeCount))].map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-muted border-2 border-card flex items-center justify-center"
              >
                <span className="text-[10px] text-muted-foreground font-medium">
                  {String.fromCharCode(65 + i)}
                </span>
              </div>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {plan.attendeeCount}
            {plan.maxAttendees && ` / ${plan.maxAttendees}`} going
          </span>
        </div>

        {/* Join Button */}
        <CeramicPillButton
          size="sm"
          onClick={() => onJoin?.(plan.id)}
        >
          Join
        </CeramicPillButton>
      </div>
    </motion.div>
  );
};

export default PlanCard;
