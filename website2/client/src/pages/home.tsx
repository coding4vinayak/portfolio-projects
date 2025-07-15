import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Carousel from "@/components/carousel";
import WhatsAppButton from "@/components/whatsapp-button";
import { 
  Shield, 
  Heart, 
  Car, 
  Plane, 
  Building, 
  Award, 
  Users, 
  Clock, 
  Handshake,
  Phone,
  MapPin,
  User,
  Menu,
  X,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formLanguage, setFormLanguage] = useState("english");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    insuranceType: "",
    location: "",
    address: "",
    message: ""
  });
  const { toast } = useToast();

  const carouselSlides = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
      title: "₹5 lakh Term Plan at ₹500/month",
      description: "Secure your family's future with our affordable term insurance plans",
      alt: "Family life insurance protection"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
      title: "Health Insurance starting ₹299/month",
      description: "Comprehensive health coverage for you and your family",
      alt: "Health insurance medical coverage"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
      title: "Car/Bike Insurance in 5 mins – No Paperwork",
      description: "Quick and hassle-free vehicle insurance renewal",
      alt: "Vehicle insurance cars and bikes"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
      title: "Tax-Saving Insurance Options Available",
      description: "Save taxes while securing your future with ELSS and insurance plans",
      alt: "Tax saving insurance investment"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
      title: "Travel Smart! Get Covered Instantly",
      description: "Instant travel insurance for domestic and international trips",
      alt: "Travel insurance vacation protection"
    }
  ];

  const services = [
    {
      icon: Heart,
      title: "Life Insurance",
      color: "border-primary",
      bgColor: "bg-primary",
      features: ["Term Life Insurance", "Whole Life Insurance", "ULIP Plans", "Pension Plans"]
    },
    {
      icon: Shield,
      title: "Health Insurance",
      color: "border-accent",
      bgColor: "bg-accent",
      features: ["Individual Health Plans", "Family Floater Plans", "Critical Illness Cover", "Senior Citizen Plans"]
    },
    {
      icon: Car,
      title: "Car/Bike Insurance",
      color: "border-secondary",
      bgColor: "bg-secondary",
      features: ["Comprehensive Coverage", "Third Party Insurance", "Zero Depreciation", "Roadside Assistance"]
    },
    {
      icon: Plane,
      title: "Travel Insurance",
      color: "border-primary",
      bgColor: "bg-primary",
      features: ["Domestic Travel", "International Travel", "Medical Emergency", "Trip Cancellation"]
    },
    {
      icon: Building,
      title: "Business Insurance",
      color: "border-accent",
      bgColor: "bg-accent",
      features: ["Shop Insurance", "Office Insurance", "Fire & Theft Coverage", "Business Liability"]
    },
    {
      icon: Shield,
      title: "General Insurance",
      color: "border-secondary",
      bgColor: "bg-secondary",
      features: ["Home Insurance", "Personal Accident", "Marine Insurance", "Cyber Insurance"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Extensive experience in insurance industry",
      color: "bg-primary"
    },
    {
      icon: Users,
      title: "5000+ Happy Clients",
      description: "Trusted by thousands of families",
      color: "bg-accent"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round the clock customer assistance",
      color: "bg-secondary"
    },
    {
      icon: Handshake,
      title: "Personalized Service",
      description: "Tailored insurance solutions for you",
      color: "bg-primary"
    }
  ];

  const formLabels = {
    english: {
      contactForm: "Contact Form",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Mobile Number",
      insuranceType: "Insurance Type",
      location: "Location",
      address: "Address",
      message: "Message",
      submit: "Submit Inquiry",
      required: "Required",
      selectInsurance: "Select Insurance Type",
      selectLocation: "Select Location",
      language: "Language"
    },
    hindi: {
      contactForm: "संपर्क फॉर्म",
      firstName: "पहला नाम",
      lastName: "अंतिम नाम",
      email: "ईमेल पता",
      phone: "मोबाइल नंबर",
      insuranceType: "बीमा प्रकार",
      location: "स्थान",
      address: "पता",
      message: "संदेश",
      submit: "पूछताछ भेजें",
      required: "आवश्यक",
      selectInsurance: "बीमा प्रकार चुनें",
      selectLocation: "स्थान चुनें",
      language: "भाषा"
    },
    marathi: {
      contactForm: "संपर्क फॉर्म",
      firstName: "पहिले नाव",
      lastName: "आडनाव",
      email: "ईमेल पत्ता",
      phone: "मोबाइल नंबर",
      insuranceType: "विमा प्रकार",
      location: "स्थान",
      address: "पत्ता",
      message: "संदेश",
      submit: "चौकशी पाठवा",
      required: "आवश्यक",
      selectInsurance: "विमा प्रकार निवडा",
      selectLocation: "स्थान निवडा",
      language: "भाषा"
    }
  };

  const insuranceTypes = [
    { value: "life", label: "Life Insurance" },
    { value: "health", label: "Health Insurance" },
    { value: "car", label: "Car/Bike Insurance" },
    { value: "travel", label: "Travel Insurance" },
    { value: "business", label: "Business Insurance" },
    { value: "general", label: "General Insurance" }
  ];

  const locations = [
    { value: "pune", label: "Pune" },
    { value: "mumbai", label: "Mumbai" },
    { value: "nashik", label: "Nashik" },
    { value: "nagpur", label: "Nagpur" },
    { value: "kolhapur", label: "Kolhapur" },
    { value: "aurangabad", label: "Aurangabad" },
    { value: "solapur", label: "Solapur" },
    { value: "other", label: "Other" }
  ];

  const currentLabels = formLabels[formLanguage as keyof typeof formLabels];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.email || !formData.phone || !formData.insuranceType || !formData.location) {
      toast({
        title: formLanguage === "english" ? "Validation Error" : formLanguage === "hindi" ? "सत्यापन त्रुटि" : "सत्यापन त्रुटि",
        description: formLanguage === "english" ? "Please fill in all required fields" : formLanguage === "hindi" ? "कृपया सभी आवश्यक फ़ील्ड भरें" : "कृपया सर्व आवश्यक फील्ड भरा",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: formLanguage === "english" ? "Message Sent!" : formLanguage === "hindi" ? "संदेश भेजा गया!" : "संदेश पाठविला!",
      description: formLanguage === "english" ? "Thank you for your inquiry. We'll get back to you soon." : formLanguage === "hindi" ? "आपकी पूछताछ के लिए धन्यवाद। हम जल्द ही आपसे संपर्क करेंगे।" : "तुमच्या चौकशीसाठी धन्यवाद. आम्ही लवकरच तुमच्याशी संपर्क साधू.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      insuranceType: "",
      location: "",
      address: "",
      message: ""
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="text-primary text-2xl" />
              <h1 className="text-xl font-bold text-neutral">Urmila Deshmukh</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-neutral hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-neutral hover:text-primary transition-colors">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-neutral hover:text-primary transition-colors">Contact</button>
            </nav>
            <button 
              className="md:hidden text-neutral"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t">
              <nav className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('home')} className="text-neutral hover:text-primary transition-colors text-left">Home</button>
                <button onClick={() => scrollToSection('services')} className="text-neutral hover:text-primary transition-colors text-left">Services</button>
                <button onClick={() => scrollToSection('contact')} className="text-neutral hover:text-primary transition-colors text-left">Contact</button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-primary/70 to-black/70 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Confident professional Indian woman insurance advisor" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white hero-text">
            Urmila Deshmukh <br />
            <span className="text-secondary hero-text-secondary">Insurance Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light text-white hero-text">
            Your Trusted Insurance Advisor for Life, Health, and More.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              Get Quote Now
            </Button>
            <Button 
              asChild
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral mb-4">Insurance Plans & Offers</h2>
            <p className="text-lg text-gray-600">Affordable coverage for every need</p>
          </div>
          
          <Carousel slides={carouselSlides} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral mb-4">Insurance Services We Offer</h2>
            <p className="text-lg text-gray-600">Comprehensive coverage for all your insurance needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`hover:shadow-xl transition-shadow border-t-4 ${service.color}`}>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className={`${service.bgColor} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral mb-2">{service.title}</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="text-accent mr-2 h-4 w-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className={`w-full mt-6 ${service.bgColor} hover:opacity-90 text-white font-semibold`}
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral mb-4">Why Choose Urmila Deshmukh?</h2>
            <p className="text-lg text-gray-600">Your trusted insurance partner with years of experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className={`${item.color} text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-neutral mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">Ready to secure your future? Contact us today!</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-gray-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-neutral mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <User className="text-primary text-xl mt-1" />
                      <div>
                        <h4 className="font-semibold text-neutral">Name</h4>
                        <p className="text-gray-600">Urmila Deshmukh</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="text-primary text-xl mt-1" />
                      <div>
                        <h4 className="font-semibold text-neutral">Phone</h4>
                        <a href="tel:+919999999999" className="text-primary hover:text-primary/80 transition-colors">
                          +91 99999 99999
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="text-primary text-xl mt-1" />
                      <div>
                        <h4 className="font-semibold text-neutral">Address</h4>
                        <p className="text-gray-600">Office No. 12, Prime Business Center, Pune, MH</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="text-primary text-xl mt-1" />
                      <div>
                        <h4 className="font-semibold text-neutral">Office Hours</h4>
                        <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                        <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t">
                    <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white font-semibold">
                      <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-3 h-5 w-5" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-neutral">{currentLabels.contactForm}</h3>
                  
                  {/* Language Selector */}
                  <Select value={formLanguage} onValueChange={setFormLanguage}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">हिंदी</SelectItem>
                      <SelectItem value="marathi">मराठी</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-neutral mb-2">
                        {currentLabels.firstName} *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder={currentLabels.firstName}
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-neutral mb-2">
                        {currentLabels.lastName}
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder={currentLabels.lastName}
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-neutral mb-2">
                      {currentLabels.email} *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={currentLabels.email}
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-neutral mb-2">
                      {currentLabels.phone} *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="insuranceType" className="text-sm font-medium text-neutral mb-2">
                        {currentLabels.insuranceType} *
                      </Label>
                      <Select value={formData.insuranceType} onValueChange={(value) => handleInputChange('insuranceType', value)}>
                        <SelectTrigger className="focus:ring-2 focus:ring-primary focus:border-transparent">
                          <SelectValue placeholder={currentLabels.selectInsurance} />
                        </SelectTrigger>
                        <SelectContent>
                          {insuranceTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="location" className="text-sm font-medium text-neutral mb-2">
                        {currentLabels.location} *
                      </Label>
                      <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
                        <SelectTrigger className="focus:ring-2 focus:ring-primary focus:border-transparent">
                          <SelectValue placeholder={currentLabels.selectLocation} />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location) => (
                            <SelectItem key={location.value} value={location.value}>{location.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="address" className="text-sm font-medium text-neutral mb-2">
                      {currentLabels.address}
                    </Label>
                    <Input
                      id="address"
                      type="text"
                      placeholder={currentLabels.address}
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-neutral mb-2">
                      {currentLabels.message}
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder={currentLabels.message}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                    {currentLabels.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="text-2xl text-secondary" />
                <h3 className="text-xl font-bold">Urmila Deshmukh Insurance</h3>
              </div>
              <p className="text-gray-400 mb-4">Your trusted insurance advisor providing comprehensive coverage for all your insurance needs.</p>
              <div className="flex space-x-4">
                <Facebook className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
                <Twitter className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
                <Linkedin className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="text-gray-400 hover:text-white transition-colors" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
                <li><button className="hover:text-white transition-colors">About Us</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 99999 99999</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Office No. 12, Prime Business Center, Pune, MH</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Mon-Sat: 9AM-7PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Urmila Deshpande Insurance Services. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton phoneNumber="919999999999" />
    </div>
  );
}
