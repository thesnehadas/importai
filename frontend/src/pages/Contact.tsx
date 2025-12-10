import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Mail, MessageSquare, Send, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
    }, 1000);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="text-gradient">talk automation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your workflows? We're here to help you identify the best automation opportunities for your business.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Tell us about your project</h2>
                <p className="text-muted-foreground">
                  The more details you share, the better we can tailor our recommendations to your specific needs.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" required placeholder="Your full name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Work Email *</Label>
                    <Input id="email" type="email" required placeholder="you@company.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company *</Label>
                    <Input id="company" required placeholder="Your company name" />
                  </div>
                  <div>
                    <Label htmlFor="role">Role *</Label>
                    <Input id="role" required placeholder="Your job title" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="use-case">Use Case *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="What would you like to automate?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="revenue">Revenue & Sales Automation</SelectItem>
                      <SelectItem value="support">Customer Support</SelectItem>
                      <SelectItem value="finance">Finance & Operations</SelectItem>
                      <SelectItem value="marketing">Marketing Automation</SelectItem>
                      <SelectItem value="hr">HR & Recruiting</SelectItem>
                      <SelectItem value="other">Other / Multiple Areas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="budget">Budget (Optional)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="What's your budget range?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-10k">Under $10k</SelectItem>
                      <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                      <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                      <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                      <SelectItem value="100k-plus">$100k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="details">Project Details *</Label>
                  <Textarea 
                    id="details" 
                    required 
                    placeholder="Tell us about your current workflow, pain points, and what you'd like to achieve..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="consent" required />
                  <Label htmlFor="consent" className="text-sm">
                    I agree to receive communications from Import AI about my inquiry *
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info & Alternative */}
            <div className="space-y-8">
              {/* Quick Demo CTA */}
              <div className="glass-card p-8">
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Prefer a quick call?</h3>
                  <p className="text-muted-foreground mb-6">
                    Book a 30-minute demo call where we'll show you exactly how automation can work for your specific use case.
                  </p>
                  <Button variant="outline" size="lg" className="w-full">
                    <Calendar className="w-5 h-5 mr-3" />
                    Book 30-min Free Demo
                  </Button>
                </div>
              </div>

              {/* Contact Details */}
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold mb-6">Get in touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium">Email us directly</div>
                      <div className="text-muted-foreground text-sm">hello@importai.co</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium">Response time</div>
                      <div className="text-muted-foreground text-sm">Within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium">Coverage</div>
                      <div className="text-muted-foreground text-sm">US, UK, CA, ANZ, SEA, India</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold mb-6">Common Questions</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium mb-1">How long does implementation take?</div>
                    <div className="text-muted-foreground text-sm">Most automations are deployed within 4-8 weeks.</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Do you integrate with our existing tools?</div>
                    <div className="text-muted-foreground text-sm">Yes, we work with 200+ popular business tools.</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">What's the typical ROI?</div>
                    <div className="text-muted-foreground text-sm">Most clients see 300-600% ROI within 6 months.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}