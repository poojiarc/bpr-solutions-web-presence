import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Instagram, Send, Facebook, Linkedin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919676356969?text=${text}`, "_blank");
  };

  return (
    <div>
      <section className="section-dark py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-[hsl(var(--glow))] text-sm font-semibold tracking-wider uppercase mb-3 animate-hero-fade">Contact</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--section-dark-foreground))] animate-hero-fade" style={{ animationDelay: "200ms" }}>
            Get In Touch
          </h1>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <ScrollReveal direction="left">
              <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: "+91 96763 56969", href: "tel:+919676356969" },
                  { icon: Mail, label: "Email", value: "tjyothi@bprsolutions.in", href: "mailto:tjyothi@bprsolutions.in" },
                  { icon: MapPin, label: "Address", value: "2nd floor, Above ICICI Bank, GCC Layout, Plot No. 19, Chaitanya Nagar, Kommadi, Visakhapatnam, Andhra Pradesh 530048" },
                  { icon: Instagram, label: "Instagram", value: "@bprsolutions.2000", href: "https://instagram.com/bprsolutions.2000" },
                  { icon: Facebook, label: "Facebook", value: "BPR Solutions", href: "https://facebook.com/share" },
                  { icon: Linkedin, label: "LinkedIn", value: "BPR Solutions", href: "https://linkedin.com/company/bprsolutions" },
                  { icon: Clock, label: "Working Hours", value: "Mon–Sat: 8 hrs | Sunday: Closed" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[hsl(var(--primary)/0.1)]">
                      <item.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-[hsl(var(--primary))] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal direction="right">
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border space-y-5">
                <h3 className="text-2xl font-bold text-foreground mb-2">Send us a message</h3>
                {[
                  { key: "name", label: "Full Name", type: "text" },
                  { key: "email", label: "Email Address", type: "email" },
                  { key: "phone", label: "Phone Number", type: "tel" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{field.label}</label>
                    <input
                      type={field.type}
                      required
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] transition-shadow"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] transition-shadow resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold hover:brightness-110 active:scale-[0.97] transition-all"
                >
                  <Send className="w-4 h-4" />
                  Send via WhatsApp
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
