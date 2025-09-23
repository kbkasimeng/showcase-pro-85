import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@example.com",
      href: "mailto:hello@example.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "Follow my work",
      href: "https://github.com"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'd love to hear about your project 
            and discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-muted border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-muted border-border"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  className="bg-muted border-border"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or idea..."
                  rows={6}
                  required
                  className="bg-muted border-border resize-none"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:shadow-hover text-primary-foreground border-0"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Get in touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Prefer a more direct approach? Feel free to reach out through any 
                of these channels. I'm always open to discussing new opportunities 
                and interesting projects.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="glass-card p-4 hover:shadow-hover transition-all duration-300"
                >
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                    >
                      <div className="p-3 rounded-lg bg-muted">
                        <method.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium">{method.title}</h4>
                        <p className="text-sm text-muted-foreground">{method.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-muted">
                        <method.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{method.title}</h4>
                        <p className="text-sm text-muted-foreground">{method.value}</p>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {/* Availability Status */}
            <Card className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <h4 className="font-semibold text-foreground">Available for work</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                I'm currently accepting new projects and collaborations. 
                Let's create something extraordinary together!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;