import { MapPin, Wifi, Wind, Utensils, Bath, Shield } from "lucide-react";
import { Badge } from "./ui/badge";

export interface PGCardProps {
  id: string;
  name: string;
  slug: string;
  coverUrl: string;
  distanceKm: number;
  priceMin: number;
  priceMax: number;
  trustedScore: number;
  verifiedPct: number;
  ownerClaimed: boolean;
  amenities: {
    wifi: boolean;
    ac: boolean;
    meals: boolean;
    attachedBath: boolean;
  };
}

export const PGCard = ({
  name,
  slug,
  coverUrl,
  distanceKm,
  priceMin,
  priceMax,
  trustedScore,
  verifiedPct,
  ownerClaimed,
  amenities,
}: PGCardProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 4) return "text-success";
    if (score >= 3) return "text-warning";
    return "text-danger";
  };

  return (
    <a
      href={`/pg/${slug}`}
      className="block rounded-xl bg-elevated border border-border hover:border-primary/50 transition-all overflow-hidden shadow-md hover:shadow-lg"
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={coverUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          {ownerClaimed && (
            <Badge className="bg-primary/20 text-primary border-primary/30">
              Claimed
            </Badge>
          )}
          {verifiedPct >= 60 && (
            <Badge className="bg-success/20 text-success border-success/30">
              {verifiedPct}% Verified
            </Badge>
          )}
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-lg text-foreground line-clamp-1">
            {name}
          </h3>
          <div className={`flex items-center gap-1 font-bold text-xl shrink-0 ${getScoreColor(trustedScore)}`}>
            <Shield className="w-5 h-5" />
            {trustedScore.toFixed(1)}
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{distanceKm.toFixed(1)} km away</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {amenities.wifi && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Wifi className="w-3.5 h-3.5" />
              <span>Wi-Fi</span>
            </div>
          )}
          {amenities.ac && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Wind className="w-3.5 h-3.5" />
              <span>AC</span>
            </div>
          )}
          {amenities.meals && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Utensils className="w-3.5 h-3.5" />
              <span>Meals</span>
            </div>
          )}
          {amenities.attachedBath && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Bath className="w-3.5 h-3.5" />
              <span>Attached Bath</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="text-lg font-bold text-foreground">
            ₹{priceMin.toLocaleString()} - ₹{priceMax.toLocaleString()}
            <span className="text-xs font-normal text-muted-foreground">/mo</span>
          </div>
        </div>
      </div>
    </a>
  );
};
