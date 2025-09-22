import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, 
  Upload, Calendar, Clock, User, Building, MessageSquare 
} from 'lucide-react';

const AdvancedContactForm = ({ company }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    preferredContact: 'email',
    newsletter: false,
    attachments: []
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [currentStep, setCurrentStep] = useState(1);
  const [isValid, setIsValid] = useState(false);

  const projectTypes = [
    'Residential Construction',
    'Commercial Construction', 
    'Interior Design',
    'Renovation',
    'Architectural Planning',
    'Consultation',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹10 Lakhs',
    '₹10L - ₹25L',
    '₹25L - ₹50L',
    '₹50L - ₹1 Crore',
    'Above ₹1 Crore'
  ];

  const timelineOptions = [
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    'More than 1 year'
  ];

  // Real-time validation
  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^[+]?[0-9]{10,15}$/;
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Required fields
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.projectType) newErrors.projectType = 'Project type is required';
    if (!formData.message) newErrors.message = 'Project details are required';

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ['image/', 'application/pdf', 'application/msword'];
    
    const validFiles = files.filter(file => {
      if (file.size > maxSize) {
        setErrors(prev => ({
          ...prev,
          attachments: 'File size should not exceed 5MB'
        }));
        return false;
      }
      
      if (!allowedTypes.some(type => file.type.startsWith(type))) {
        setErrors(prev => ({
          ...prev,
          attachments: 'Only images, PDF, and Word documents are allowed'
        }));
        return false;
      }
      
      return true;
    });

    if (validFiles.length > 0) {
      setFormData(prev => ({
        ...prev,
        attachments: [...prev.attachments, ...validFiles]
      }));
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.attachments;
        return newErrors;
      });
    }
  };

  const removeFile = (index) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isValid) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send data to your backend
      console.log('Form data:', formData);
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: '',
          preferredContact: 'email',
          newsletter: false,
          attachments: []
        });
        setCurrentStep(1);
        setSubmitStatus(null);
      }, 3000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
            step === currentStep 
              ? 'bg-red-500 text-white' 
              : step < currentStep 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-200 text-gray-600'
          }`}>
            {step < currentStep ? <CheckCircle size={20} /> : step}
          </div>
          {step < 3 && (
            <div className={`w-16 h-1 mx-2 ${
              step < currentStep ? 'bg-green-500' : 'bg-gray-200'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-medium text-gray-900 mb-2">Personal Information</h3>
        <p className="text-gray-600">Let us know who you are</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <User size={16} className="inline mr-2" />
            First Name *
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${
              errors.firstName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your first name"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle size={14} className="mr-1" />
              {errors.firstName}
            </p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <User size={16} className="inline mr-2" />
            Last Name *
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${
              errors.lastName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your last name"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle size={14} className="mr-1" />
              {errors.lastName}
            </p>
          )}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Mail size={16} className="inline mr-2" />
          Email Address *
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter your email address"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle size={14} className="mr-1" />
            {errors.email}
          </p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Phone size={16} className="inline mr-2" />
          Phone Number *
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter your phone number"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle size={14} className="mr-1" />
            {errors.phone}
          </p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Building size={16} className="inline mr-2" />
          Company (Optional)
        </label>
        <input
          type="text"
          value={formData.company}
          onChange={(e) => handleInputChange('company', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
          placeholder="Enter your company name"
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-medium text-gray-900 mb-2">Project Details</h3>
        <p className="text-gray-600">Tell us about your project</p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Type *
        </label>
        <select
          value={formData.projectType}
          onChange={(e) => handleInputChange('projectType', e.target.value)}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${
            errors.projectType ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select project type</option>
          {projectTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        {errors.projectType && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle size={14} className="mr-1" />
            {errors.projectType}
          </p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <span className="inline-flex items-center">
              Budget Range (Optional)
            </span>
          </label>
          <select
            value={formData.budget}
            onChange={(e) => handleInputChange('budget', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
          >
            <option value="">Select budget range</option>
            {budgetRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Clock size={16} className="inline mr-2" />
            Timeline (Optional)
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => handleInputChange('timeline', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
          >
            <option value="">Select timeline</option>
            {timelineOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <MessageSquare size={16} className="inline mr-2" />
          Project Details *
        </label>
        <textarea
          rows="5"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Tell us about your project requirements, goals, and any specific details..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle size={14} className="mr-1" />
            {errors.message}
          </p>
        )}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-medium text-gray-900 mb-2">Additional Information</h3>
        <p className="text-gray-600">Final details and preferences</p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Contact Method
        </label>
        <div className="space-y-2">
          {[
            { value: 'email', label: 'Email', icon: Mail },
            { value: 'phone', label: 'Phone Call', icon: Phone },
            { value: 'whatsapp', label: 'WhatsApp', icon: MessageSquare }
          ].map(({ value, label, icon: Icon }) => (
            <label key={value} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="preferredContact"
                value={value}
                checked={formData.preferredContact === value}
                onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                className="text-red-500 focus:ring-red-500"
              />
              <Icon size={16} className="text-gray-500" />
              <span className="text-gray-700">{label}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Upload size={16} className="inline mr-2" />
          Attachments (Optional)
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-red-500 transition-colors">
          <input
            type="file"
            multiple
            accept="image/*,.pdf,.doc,.docx"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <Upload size={32} className="mx-auto text-gray-400 mb-2" />
            <p className="text-gray-600">Click to upload files or drag and drop</p>
            <p className="text-xs text-gray-500 mt-1">Images, PDF, DOC (Max 5MB each)</p>
          </label>
        </div>
        
        {formData.attachments.length > 0 && (
          <div className="mt-4 space-y-2">
            {formData.attachments.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                <span className="text-sm text-gray-600">{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        
        {errors.attachments && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle size={14} className="mr-1" />
            {errors.attachments}
          </p>
        )}
      </div>
      
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          id="newsletter"
          checked={formData.newsletter}
          onChange={(e) => handleInputChange('newsletter', e.target.checked)}
          className="text-red-500 focus:ring-red-500 rounded"
        />
        <label htmlFor="newsletter" className="text-sm text-gray-700">
          Subscribe to our newsletter for updates and construction tips
        </label>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-500 mb-4">Advanced Contact Form</p>
          <h2 className="text-4xl lg:text-5xl font-light leading-tight text-gray-900 max-w-4xl mx-auto">
            Start your <span className="italic">dream project</span> today.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-sm h-fit">
              <h3 className="text-2xl font-light text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-red-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gray-900 font-medium">Main Office</p>
                    <p className="text-gray-600">Kerala, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="text-red-500 flex-shrink-0" size={20} />
                  <a href={`mailto:${company.email}`} className="text-gray-900 hover:text-red-500 transition-colors">
                    {company.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="text-red-500 flex-shrink-0" size={20} />
                  <a href={`tel:${company.phone}`} className="text-gray-900 hover:text-red-500 transition-colors">
                    {company.phone}
                  </a>
                </div>
              </div>

              <div className="mt-8 p-4 bg-red-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Response Time</h4>
                <p className="text-sm text-gray-600">We typically respond within 2-4 hours during business hours.</p>
              </div>
            </div>
          </div>

          {/* Multi-step Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              {renderStepIndicator()}
              
              <form onSubmit={handleSubmit}>
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}
                
                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      currentStep === 1 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </button>
                  
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!isValid || isSubmitting}
                      className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                        isValid && !isSubmitting
                          ? 'bg-red-500 text-white hover:bg-red-600'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <p className="text-green-800">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="text-red-500" size={20} />
                  <p className="text-red-800">Sorry, there was an error sending your message. Please try again or contact us directly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedContactForm;