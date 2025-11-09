import { useState } from "react";
import { Slider } from "./ui/slider";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { X } from "lucide-react";

export interface Filters {
  priceRange: [number, number];
  distance: number;
  genderPolicy: "any" | "boys" | "girls" | "co-living";
  amenities: {
    meals: boolean;
    ac: boolean;
    wifi: boolean;
    attachedBath: boolean;
  };
  noCurfew: boolean;
}

interface FilterBarProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  onReset: () => void;
}

export const FilterBar = ({ filters, onFiltersChange, onReset }: FilterBarProps) => {
  const updateFilter = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const updateAmenity = (amenity: keyof Filters["amenities"], value: boolean) => {
    onFiltersChange({
      ...filters,
      amenities: { ...filters.amenities, [amenity]: value },
    });
  };

  return (
    <div className="bg-elevated rounded-xl border border-border p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Filters</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onReset}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4 mr-1" />
          Reset
        </Button>
      </div>

      <div className="space-y-4">
        <div className="space-y-3">
          <Label className="text-foreground">Price Range (₹/month)</Label>
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => updateFilter("priceRange", value as [number, number])}
            min={3000}
            max={30000}
            step={500}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>₹{filters.priceRange[0].toLocaleString()}</span>
            <span>₹{filters.priceRange[1].toLocaleString()}</span>
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-foreground">Distance (km)</Label>
          <Slider
            value={[filters.distance]}
            onValueChange={(value) => updateFilter("distance", value[0])}
            min={0.5}
            max={10}
            step={0.5}
            className="w-full"
          />
          <div className="text-sm text-muted-foreground text-right">
            {filters.distance} km
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-foreground">Gender Policy</Label>
          <div className="grid grid-cols-2 gap-2">
            {(["any", "boys", "girls", "co-living"] as const).map((policy) => (
              <Button
                key={policy}
                variant={filters.genderPolicy === policy ? "default" : "outline"}
                size="sm"
                onClick={() => updateFilter("genderPolicy", policy)}
                className="capitalize"
              >
                {policy === "any" ? "Any" : policy.replace("-", " ")}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-foreground">Amenities</Label>
          <div className="space-y-2">
            {(Object.keys(filters.amenities) as Array<keyof Filters["amenities"]>).map((amenity) => (
              <div key={amenity} className="flex items-center justify-between">
                <span className="text-sm text-foreground capitalize">
                  {amenity === "attachedBath" ? "Attached Bath" : amenity}
                </span>
                <Switch
                  checked={filters.amenities[amenity]}
                  onCheckedChange={(checked) => updateAmenity(amenity, checked)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-sm text-foreground">No Curfew</span>
          <Switch
            checked={filters.noCurfew}
            onCheckedChange={(checked) => updateFilter("noCurfew", checked)}
          />
        </div>
      </div>
    </div>
  );
};
