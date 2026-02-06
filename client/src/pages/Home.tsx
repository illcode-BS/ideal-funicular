import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";

/**
 * The Right Side Up - Landing Page
 * Minimalistic Design
 * - Clean white background
 * - Black text and accents
 * - Simple, focused layout
 * - Emphasis on clarity and content
 */

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold">
            The Right Side Up
          </div>
          <a href="#contact" className="text-sm hover:underline">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Ambulances Never Stop at Red Lights
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              An AI-powered solution to eliminate traffic delays for emergency vehicles, saving lives in Delhi.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background font-semibold"
              onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-foreground text-foreground hover:bg-muted"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-12">The Problem</h2>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Critical Care Stuck at Intersection</h3>
              <p className="text-lg text-muted-foreground">
                Emergency vehicles are immobilized by gridlocks of traffic. The hospital is visible but only reachable in theory.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="text-xl font-bold">The Human Cost</h4>
                <p className="text-muted-foreground">
                  Patients' critical conditions worsen with every minute of delay. Each second counts in emergency care.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold">The Responder's Dilemma</h4>
                <p className="text-muted-foreground">
                  Emergency personnel are rendered helpless by high-volume urban intersections and fixed traffic timers.
                </p>
              </div>
            </div>

            <div className="space-y-4 bg-card border border-border p-8">
              <h4 className="text-xl font-bold">The Infrastructure Gap</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Traffic lights run on fixed timers</li>
                <li>• No real-time emergency vehicle detection</li>
                <li>• No dynamic traffic management</li>
                <li>• System is blind to emergency situations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="border-t border-border bg-card">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-12">Our Solution</h2>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Vision: A Green Corridor</h3>
              <p className="text-lg text-muted-foreground">
                The goal is simple: ambulances never stop at a red light. We achieve this through an intelligent layer of AI-powered traffic management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 border border-border p-6">
                <h4 className="text-xl font-bold">The Eyes: AI Vision Sensor</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Leverages existing CCTV feeds</li>
                  <li>• Identifies emergency vehicles in real-time</li>
                  <li>• Calculates arrival velocity</li>
                </ul>
              </div>
              <div className="space-y-4 border border-border p-6">
                <h4 className="text-xl font-bold">The Brain: AI Processing Unit</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Overrides fixed timer logic</li>
                  <li>• Optimizes traffic flow dynamically</li>
                  <li>• Software integration, not hardware construction</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3 bg-background border border-border p-6">
              <p className="text-muted-foreground">
                <strong>Key Advantage:</strong> Our solution requires only software integration with existing infrastructure. No new hardware needed. No major construction. Just intelligent optimization of what already exists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-12">Measuring Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 border border-border p-8">
              <h3 className="text-2xl font-bold">Travel Time</h3>
              <p className="text-muted-foreground">
                Measurable decrease in A-to-B ambulance travel time through optimized green corridors and reduced traffic delays.
              </p>
            </div>
            <div className="space-y-4 border border-border p-8">
              <h3 className="text-2xl font-bold">Mortality Rate</h3>
              <p className="text-muted-foreground">
                Statistical drop in traffic-related patient mortality through faster emergency response times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="border-t border-border bg-card">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-12">The Team</h2>
          
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground mb-8">
              Driven by the future. Currently studying in Class XI at Tyagi Public School.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 border border-border p-6">
                <h3 className="text-xl font-bold">Krishna Sharma</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>7982942181</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <a href="mailto:krishnaxeidas@yahoo.com" className="hover:underline">
                      krishnaxeidas@yahoo.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4 border border-border p-6">
                <h3 className="text-xl font-bold">Bhavya Sharma</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>9318403519</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <a href="mailto:bhavyasharma6181@gmail.com" className="hover:underline">
                      bhavyasharma6181@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              <strong>School:</strong> Tyagi Public School, Class XI
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Krishna Sharma</p>
                    <p className="font-mono">7982942181</p>
                    <p className="text-sm hover:underline">
                      <a href="mailto:krishnaxeidas@yahoo.com">krishnaxeidas@yahoo.com</a>
                    </p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground mb-1">Bhavya Sharma</p>
                    <p className="font-mono">9318403519</p>
                    <p className="text-sm hover:underline">
                      <a href="mailto:bhavyasharma6181@gmail.com">bhavyasharma6181@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4">Project Details</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong>Project:</strong> The Right Side Up
                </p>
                <p>
                  <strong>Category:</strong> AI-powered traffic optimization for emergency vehicles
                </p>
                <p>
                  <strong>Institution:</strong> Tyagi Public School
                </p>
                <p>
                  <strong>Submission:</strong> Delhi AI Grind
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center text-sm text-muted-foreground">
          <p>
            The Right Side Up – Innovating for a safer, faster Delhi
          </p>
          <p className="mt-2">
            A submission to Delhi AI Grind
          </p>
        </div>
      </footer>
    </div>
  );
}
