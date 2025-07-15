import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Shield, Phone, MapPin, MessageCircle, Globe } from "lucide-react";

export default function QuoteForm() {
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

  const formLabels = {
    english: {
      title: "Get Insurance Quote",
      subtitle: "Fill out this form to get a personalized insurance quote from Urmila Deshmukh",
      contactForm: "Insurance Quote Request",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Mobile Number",
      insuranceType: "Insurance Type",
      location: "Location",
      address: "Address",
      message: "Message/Requirements",
      submit: "Submit Quote Request",
      required: "Required",
      selectInsurance: "Select Insurance Type",
      selectLocation: "Select Location",
      language: "Language",
      contactInfo: "Contact Information",
      officeHours: "Office Hours",
      mondayToSaturday: "Monday - Saturday: 9:00 AM - 7:00 PM",
      sunday: "Sunday: 10:00 AM - 5:00 PM",
      whatsappChat: "Chat on WhatsApp"
    },
    hindi: {
      title: "बीमा कोटेशन प्राप्त करें",
      subtitle: "उर्मिला देशमुख से व्यक्तिगत बीमा कोटेशन प्राप्त करने के लिए यह फॉर्म भरें",
      contactForm: "बीमा कोटेशन अनुरोध",
      firstName: "पहला नाम",
      lastName: "अंतिम नाम",
      email: "ईमेल पता",
      phone: "मोबाइल नंबर",
      insuranceType: "बीमा प्रकार",
      location: "स्थान",
      address: "पता",
      message: "संदेश/आवश्यकताएं",
      submit: "कोटेशन अनुरोध भेजें",
      required: "आवश्यक",
      selectInsurance: "बीमा प्रकार चुनें",
      selectLocation: "स्थान चुनें",
      language: "भाषा",
      contactInfo: "संपर्क जानकारी",
      officeHours: "कार्यालय समय",
      mondayToSaturday: "सोमवार - शनिवार: सुबह 9:00 - शाम 7:00",
      sunday: "रविवार: सुबह 10:00 - शाम 5:00",
      whatsappChat: "WhatsApp पर चैट करें"
    },
    marathi: {
      title: "विमा कोटेशन मिळवा",
      subtitle: "उर्मिला देशमुख कडून वैयक्तिक विमा कोटेशन मिळवण्यासाठी हा फॉर्म भरा",
      contactForm: "विमा कोटेशन विनंती",
      firstName: "पहिले नाव",
      lastName: "आडनाव",
      email: "ईमेल पत्ता",
      phone: "मोबाइल नंबर",
      insuranceType: "विमा प्रकार",
      location: "स्थान",
      address: "पत्ता",
      message: "संदेश/आवश्यकता",
      submit: "कोटेशन विनंती पाठवा",
      required: "आवश्यक",
      selectInsurance: "विमा प्रकार निवडा",
      selectLocation: "स्थान निवडा",
      language: "भाषा",
      contactInfo: "संपर्क माहिती",
      officeHours: "कार्यालय वेळा",
      mondayToSaturday: "सोमवार - शनिवार: सकाळ 9:00 - संध्याकाळ 7:00",
      sunday: "रविवार: सकाळ 10:00 - संध्याकाळ 5:00",
      whatsappChat: "WhatsApp वर चैट करा"
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
      title: formLanguage === "english" ? "Quote Request Sent!" : formLanguage === "hindi" ? "कोटेशन अनुरोध भेजा गया!" : "कोटेशन विनंती पाठविली!",
      description: formLanguage === "english" ? "Thank you for your quote request. We'll contact you soon with your personalized insurance quote." : formLanguage === "hindi" ? "आपके कोटेशन अनुरोध के लिए धन्यवाद। हम जल्द ही आपके व्यक्तिगत बीमा कोटेशन के साथ संपर्क करेंगे।" : "तुमच्या कोटेशन विनंतीसाठी धन्यवाद. आम्ही लवकरच तुमच्या वैयक्तिक विमा कोटेशनसह संपर्क साधू.",
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="text-primary text-3xl" />
              <div>
                <h1 className="text-2xl font-bold text-neutral">Urmila Deshmukh</h1>
                <p className="text-sm text-gray-600">Insurance Services</p>
              </div>
            </div>
            
            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <Globe className="text-gray-500 h-4 w-4" />
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
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-neutral mb-4">{currentLabels.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{currentLabels.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-neutral mb-4">{currentLabels.contactInfo}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="text-primary text-lg mt-1" />
                    <div>
                      <p className="font-semibold text-neutral">Phone</p>
                      <a href="tel:+919999999999" className="text-primary hover:text-primary/80 transition-colors">
                        +91 99999 99999
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-primary text-lg mt-1" />
                    <div>
                      <p className="font-semibold text-neutral">Address</p>
                      <p className="text-gray-600">Office No. 12, Prime Business Center, Pune, MH</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <p className="font-semibold text-neutral mb-2">{currentLabels.officeHours}</p>
                    <p className="text-sm text-gray-600">{currentLabels.mondayToSaturday}</p>
                    <p className="text-sm text-gray-600">{currentLabels.sunday}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white">
                    <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {currentLabels.whatsappChat}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-neutral mb-6">{currentLabels.contactForm}</h3>
                
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
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 text-lg">
                    {currentLabels.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}