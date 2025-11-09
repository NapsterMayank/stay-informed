import { Search, MapPin, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Home = () => {
  const popularCampuses = [
    { name: "IIT Delhi", slug: "iit-delhi", pgCount: 120, reviewCount: 450 },
    { name: "DU North Campus", slug: "du-north", pgCount: 200, reviewCount: 680 },
    { name: "BITS Pilani", slug: "bits-pilani", pgCount: 85, reviewCount: 320 },
    { name: "IIT Bombay", slug: "iit-bombay", pgCount: 150, reviewCount: 520 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground">PG Reviews</span>
          </div>
          <Button variant="outline">Sign In</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Don't gamble your PG.<br />Choose with{" "}
            <span className="text-primary">verified reviews</span>.
          </h1>
          <p className="text-xl text-muted-foreground">
            Real student reviews. Trusted scores. Find the right PG near your campus.
          </p>

          <div className="max-w-2xl mx-auto pt-8">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search for your campus..."
                  className="pl-12 h-14 text-lg bg-elevated border-border"
                />
              </div>
              <Button size="lg" className="h-14 px-8">
                Find PG
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-success" />
              <span>2,500+ Verified Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>500+ PGs Listed</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-warning" />
              <span>15 Campuses</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Campuses */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Popular Campuses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {popularCampuses.map((campus) => (
            <a
              key={campus.slug}
              href={`/campus/${campus.slug}`}
              className="bg-elevated rounded-xl border border-border p-6 hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <h3 className="font-semibold text-lg text-foreground mb-3">
                {campus.name}
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>{campus.pgCount} PGs listed</div>
                <div>{campus.reviewCount} verified reviews</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">1. Search</h3>
            <p className="text-muted-foreground">
              Find PGs near your campus with smart filters
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto">
              <ShieldCheck className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">2. Compare</h3>
            <p className="text-muted-foreground">
              Read verified student reviews and trusted scores
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center mx-auto">
              <MapPin className="w-8 h-8 text-warning" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">3. Connect</h3>
            <p className="text-muted-foreground">
              Contact owners directly and make the right choice
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface/50 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>© 2025 PG Reviews. Built for students, by students.</span>
            </div>
            <div className="flex gap-6">
              <a href="/policy/terms" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="/policy/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="/policy/review-policy" className="hover:text-foreground transition-colors">
                Review Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
