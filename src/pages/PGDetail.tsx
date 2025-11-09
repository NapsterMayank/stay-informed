import { MapPin, Phone, Share2, ShieldCheck, Wifi, Wind, Utensils, Bath, Camera, Zap, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScoreBar } from "@/components/ScoreBar";
import { Review } from "@/components/Review";

const PGDetail = () => {
  const pg = {
    name: "Sunshine PG for Boys",
    address: "Near IIT Delhi Main Gate, Hauz Khas, New Delhi",
    distanceKm: 0.8,
    priceMin: 8000,
    priceMax: 12000,
    trustedScore: 4.3,
    verifiedPct: 75,
    ownerClaimed: true,
    genderPolicy: "Boys Only",
    curfew: "11:00 PM",
    meals: "Breakfast & Dinner included",
    ac: true,
    attachedBath: true,
    wifiMbps: 50,
    generator: true,
    cctv: true,
    photos: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    ],
  };

  const scores = {
    overall: 4.3,
    hygiene: 4.5,
    owner: 4.2,
    safety: 4.6,
    internet: 4.1,
    food: 3.9,
    noise: 4.0,
    value: 4.4,
  };

  const mockReviews = [
    {
      userName: "Rahul K.",
      isVerified: true,
      campus: "IIT Delhi",
      year: "2024",
      semester: "Fall 2024",
      wouldStayAgain: true,
      text: "Great PG with excellent facilities. The owner is very cooperative and the food quality is consistently good. Internet speed is reliable for online classes. Room cleaning is done regularly. Only minor issue is the curfew timing could be extended on weekends.",
      ratings: {
        hygiene: 4.5,
        owner: 4.2,
        safety: 4.6,
        internet: 4.1,
        food: 3.9,
        noise: 4.0,
        value: 4.4,
      },
      createdAt: "2024-11-15",
      ownerReply: "Thank you for your positive feedback! We're glad you're enjoying your stay. We'll consider extending weekend curfew timings based on resident feedback.",
    },
    {
      userName: "Amit S.",
      isVerified: true,
      campus: "IIT Delhi",
      year: "2023",
      semester: "Spring 2024",
      wouldStayAgain: true,
      text: "Stayed here for 8 months. Very clean rooms and good maintenance. The location is perfect for IIT students. AC works well during summers. Food is homely and healthy. Would definitely recommend to juniors.",
      ratings: {
        hygiene: 4.8,
        owner: 4.5,
        safety: 4.7,
        internet: 4.2,
        food: 4.1,
        noise: 3.8,
        value: 4.5,
      },
      createdAt: "2024-09-20",
    },
  ];

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

      {/* Gallery */}
      <section className="bg-surface">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-xl overflow-hidden">
            <div className="md:col-span-2 aspect-video md:aspect-auto">
              <img
                src={pg.photos[0]}
                alt="Main"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {pg.photos.slice(1).map((photo, idx) => (
                <div key={idx} className="aspect-video">
                  <img
                    src={photo}
                    alt={`Photo ${idx + 2}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <main className="lg:col-span-2 space-y-8">
            {/* Header Info */}
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold text-foreground">{pg.name}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{pg.address}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {pg.distanceKm} km from campus
                  </div>
                </div>
                <div className="flex gap-2">
                  {pg.ownerClaimed && (
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      Owner Claimed
                    </Badge>
                  )}
                  <Badge className="bg-success/20 text-success border-success/30">
                    {pg.verifiedPct}% Verified
                  </Badge>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1">
                  <Phone className="w-4 h-4 mr-2" />
                  Reveal Number
                </Button>
                <Button variant="outline">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Trust Score */}
            <div className="bg-elevated rounded-xl border border-border p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">Trust Score</h2>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-8 h-8 text-success" />
                  <span className="text-4xl font-bold text-success">{scores.overall}</span>
                  <span className="text-muted-foreground">/5</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(scores)
                  .filter(([key]) => key !== "overall")
                  .map(([category, score]) => (
                    <ScoreBar
                      key={category}
                      label={category.charAt(0).toUpperCase() + category.slice(1)}
                      score={score}
                    />
                  ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-elevated rounded-xl border border-border p-6 space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Amenities & Rules</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Wi-Fi</div>
                    <div className="text-sm text-muted-foreground">{pg.wifiMbps} Mbps avg</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Wind className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Air Conditioning</div>
                    <div className="text-sm text-muted-foreground">Available</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Utensils className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Meals</div>
                    <div className="text-sm text-muted-foreground">{pg.meals}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Bath className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Attached Bathroom</div>
                    <div className="text-sm text-muted-foreground">Yes</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Camera className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">CCTV</div>
                    <div className="text-sm text-muted-foreground">24/7 Security</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Power Backup</div>
                    <div className="text-sm text-muted-foreground">Generator available</div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Gender Policy:</span>{" "}
                    <span className="text-foreground font-medium">{pg.genderPolicy}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Curfew:</span>{" "}
                    <span className="text-foreground font-medium">{pg.curfew}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">
                  Student Reviews ({mockReviews.length})
                </h2>
                <Button>Write a Review</Button>
              </div>
              <div className="space-y-4">
                {mockReviews.map((review, idx) => (
                  <Review key={idx} {...review} />
                ))}
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Price Card */}
            <div className="bg-elevated rounded-xl border border-border p-6 space-y-4 sticky top-24">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-foreground">
                  ₹{pg.priceMin.toLocaleString()} - ₹{pg.priceMax.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">per month</div>
              </div>
              <Button className="w-full" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Contact Owner
              </Button>
              <Button variant="outline" className="w-full">
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PGDetail;
