import { Badge } from "./ui/badge";
import { ShieldCheck, ThumbsUp } from "lucide-react";
import { ScoreBar } from "./ScoreBar";

interface ReviewProps {
  userName: string;
  isVerified: boolean;
  campus?: string;
  year?: string;
  semester: string;
  wouldStayAgain: boolean;
  text: string;
  ratings: {
    hygiene: number;
    owner: number;
    safety: number;
    internet: number;
    food: number;
    noise: number;
    value: number;
  };
  createdAt: string;
  ownerReply?: string;
}

export const Review = ({
  userName,
  isVerified,
  campus,
  year,
  semester,
  wouldStayAgain,
  text,
  ratings,
  createdAt,
  ownerReply,
}: ReviewProps) => {
  return (
    <div className="bg-elevated rounded-xl border border-border p-6 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">{userName}</span>
            {isVerified && campus && year && (
              <Badge className="bg-success/20 text-success border-success/30 gap-1">
                <ShieldCheck className="w-3 h-3" />
                Verified Student – {campus} {year}
              </Badge>
            )}
          </div>
          <div className="text-sm text-muted-foreground">
            {semester} • {new Date(createdAt).toLocaleDateString("en-IN", {
              month: "short",
              year: "numeric",
            })}
          </div>
        </div>
        {wouldStayAgain && (
          <Badge className="bg-primary/20 text-primary border-primary/30 gap-1">
            <ThumbsUp className="w-3 h-3" />
            Would stay again
          </Badge>
        )}
      </div>

      <p className="text-foreground leading-relaxed">{text}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
        {Object.entries(ratings).map(([category, score]) => (
          <ScoreBar
            key={category}
            label={category.charAt(0).toUpperCase() + category.slice(1)}
            score={score}
          />
        ))}
      </div>

      {ownerReply && (
        <div className="mt-4 pl-4 border-l-2 border-primary bg-primary/5 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-foreground">Owner Reply</span>
            <Badge variant="outline" className="text-xs">
              Official Response
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{ownerReply}</p>
        </div>
      )}
    </div>
  );
};
