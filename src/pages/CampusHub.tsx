import { useState } from "react";
import { MapPin, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { PGCard, PGCardProps } from "@/components/PGCard";
import { FilterBar, Filters } from "@/components/FilterBar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CampusHub = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    priceRange: [3000, 30000],
    distance: 5,
    genderPolicy: "any",
    amenities: {
      meals: false,
      ac: false,
      wifi: false,
      attachedBath: false,
    },
    noCurfew: false,
  });

  // Mock data
  const campus = {
    name: "IIT Delhi",
    slug: "iit-delhi",
    pgCount: 120,
    lastUpdated: "2025-01-15",
  };

  const mockPGs: PGCardProps[] = [
    {
      id: "1",
      name: "Sunshine PG for Boys",
      slug: "sunshine-pg-boys",
      coverUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      distanceKm: 0.8,
      priceMin: 8000,
      priceMax: 12000,
      trustedScore: 4.3,
      verifiedPct: 75,
      ownerClaimed: true,
      amenities: {
        wifi: true,
        ac: true,
        meals: true,
        attachedBath: true,
      },
    },
    {
      id: "2",
      name: "Green Valley Girls Hostel",
      slug: "green-valley-girls",
      coverUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
      distanceKm: 1.2,
      priceMin: 9000,
      priceMax: 14000,
      trustedScore: 4.6,
      verifiedPct: 82,
      ownerClaimed: true,
      amenities: {
        wifi: true,
        ac: false,
        meals: true,
        attachedBath: true,
      },
    },
    {
      id: "3",
      name: "Metro View PG",
      slug: "metro-view-pg",
      coverUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
      distanceKm: 2.1,
      priceMin: 6500,
      priceMax: 9500,
      trustedScore: 3.8,
      verifiedPct: 64,
      ownerClaimed: false,
      amenities: {
        wifi: true,
        ac: false,
        meals: false,
        attachedBath: false,
      },
    },
  ];

  const resetFilters = () => {
    setFilters({
      priceRange: [3000, 30000],
      distance: 5,
      genderPolicy: "any",
      amenities: {
        meals: false,
        ac: false,
        wifi: false,
        attachedBath: false,
      },
      noCurfew: false,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground">PG Reviews</span>
          </a>
          <Button variant="outline">Sign In</Button>
        </div>
      </header>

      {/* Campus Info */}
      <section className="bg-surface border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {campus.name}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{campus.pgCount} PGs listed</span>
                <span>•</span>
                <span>Last updated: {new Date(campus.lastUpdated).toLocaleDateString()}</span>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Quick Filters */}
          <div className="flex gap-2 mt-4 flex-wrap">
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              Under ₹10k
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              Near Main Gate
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              High Internet
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              No Curfew
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <aside className={`lg:block ${showFilters ? "block" : "hidden"}`}>
            <FilterBar
              filters={filters}
              onFiltersChange={setFilters}
              onReset={resetFilters}
            />
          </aside>

          {/* PG List */}
          <main className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {mockPGs.length} PGs
              </p>
              <select className="bg-elevated border border-border rounded-lg px-3 py-2 text-sm text-foreground">
                <option value="trusted">Sort by: Trusted Score</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="distance">Distance</option>
                <option value="recent">Recently Reviewed</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockPGs.map((pg) => (
                <PGCard key={pg.id} {...pg} />
              ))}
            </div>

            {/* Empty State Example */}
            {mockPGs.length === 0 && (
              <div className="text-center py-16 bg-elevated rounded-xl border border-border">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No PGs found
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  We couldn't find PGs matching your filters. Try adjusting your search criteria.
                </p>
                <Button onClick={resetFilters}>Reset Filters</Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default CampusHub;
