import React, { useState, useEffect } from 'react';
import { Star, Quote, User, Shield, CheckCircle, RefreshCw, ExternalLink } from 'lucide-react';
import { TestimonialShimmer } from './ShimmerLoader';

const Testimonials = () => {
  const GOOGLE_SHEETS_CONFIG = {
    API_KEY: import.meta.env.VITE_API_KEY,
    SHEET_ID: import.meta.env.VITE_SHEET_ID,
    RANGE: 'ApprovedTestimonials!A2:H',
    FORM_URL: import.meta.env.VITE_FORM_URL,
  };

  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch testimonials from Google Sheets
  const fetchTestimonials = async () => {
    try {
      setIsLoading(true);

      // Fetch the data from the sheet, including the header row (A1:H)
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEETS_CONFIG.SHEET_ID}/values/ApprovedTestimonials!A1:H?key=${GOOGLE_SHEETS_CONFIG.API_KEY}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch testimonials');
      }

      const data = await response.json();
      
      if (!data.values || data.values.length < 2) {
        setTestimonials([]); // No data rows
        return;
      }

      // The first row is the header row
      const headers = data.values[0];
      // The rest are data rows
      const rows = data.values.slice(1);

      const formattedTestimonials = rows
        .map(row => {
          const rowObject = {};
          headers.forEach((header, index) => {
            rowObject[header] = row[index];
          });
          return rowObject;
        })
        .filter(testimonial => testimonial.Status === 'Approved')
        .map((testimonial, index) => ({
          id: index + 1,
          name: testimonial.Name || 'Anonymous',
          email: testimonial.Email || '',
          role: testimonial.Role || 'Customer',
          content: testimonial.Content || '',
          rating: parseInt(testimonial.Rating) || 5,
          date: testimonial.Date || new Date().toISOString().split('T')[0],
          status: testimonial.Status || 'Pending',
          verified: testimonial.Verified === 'Yes' || false,
        }))
        .slice(0, 9); // Show max 9 testimonials

      setTestimonials(formattedTestimonials);

    } catch (error) {
      console.error('Error fetching testimonials:', error);
      // Fallback testimonials...
    } finally {
      setIsLoading(false);
    }
  };

  // Load testimonials on component mount
  useEffect(() => {
    fetchTestimonials();
    
    // Auto-refresh every 30 minutes
    const interval = setInterval(fetchTestimonials, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle redirect to Google Form
  const handleShareExperience = () => {
    if (GOOGLE_SHEETS_CONFIG.FORM_URL) {
      window.open(GOOGLE_SHEETS_CONFIG.FORM_URL, '_blank', 'noopener,noreferrer');
    } else {
      alert('Form URL not configured. Please contact support.');
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RefreshCw className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" id="testimonials">
      {/* Background Image/Logo with low opacity */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Replace this div with your logo image */}
          <div 
            className="w-96 h-96 opacity-5 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center transform rotate-12"
            style={{
              backgroundImage: 'url("../assets/logo.png")', // Replace with your logo path
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          >
            {/* Fallback gradient circle if no logo image */}
            <div className="w-48 h-48 bg-white rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Quote className="w-8 h-8 text-blue-600 mr-2" />
              <h2 className="text-4xl font-bold text-gray-900">What Our Clients Say</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Real feedback from real people who trust our services
            </p>
            <div className="flex items-center justify-center text-sm text-green-600">
              <CheckCircle className="w-4 h-4 mr-1" />
              <span>Auto-updated • All testimonials verified</span>
              <button
                onClick={fetchTestimonials}
                className="ml-4 p-1 hover:bg-green-50 rounded"
                title="Refresh testimonials"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Testimonials Grid */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[...Array(6)].map((_, index) => (
                <TestimonialShimmer key={`shimmer-${index}`} />
              ))}
            </div>
          ) : testimonials.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                >
                  {/* Decorative gradient */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                    <span className="ml-2 text-sm text-gray-500">
                      {formatDate(testimonial.date)}
                    </span>
                  </div>
                  
                  <blockquote className="text-gray-700 text-lg mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        {testimonial.verified && (
                          <CheckCircle className="w-4 h-4 text-green-500 ml-2" title="Verified customer" />
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Quote className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No testimonials available yet.</p>
            </div>
          )}

          {/* Share Experience Button */}
          <div className="text-center mb-8">
            <button
              onClick={handleShareExperience}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center mx-auto"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Share Your Experience
            </button>
            <p className="text-sm text-gray-600 mt-2">
              Opens Google Form in a new tab
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="text-center mt-12">
            <div className="flex items-center justify-center text-sm text-gray-600 space-x-4">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1 text-green-600" />
                <span>All testimonials verified</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1 text-blue-600" />
                <span>Auto-synced with Google Sheets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;