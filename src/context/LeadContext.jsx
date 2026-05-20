import { createContext, useState, useCallback } from 'react'

export const LeadContext = createContext()

export function LeadProvider({ children }) {
  const [leadData, setLeadData] = useState({
    // User Info
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    
    // Business Info
    businessName: '',
    businessType: '', // Startup, Restaurant, Creator, Agency, Clinic, Local business, Personal brand
    
    // Service Selection
    selectedServices: [], // Array of service names
    
    // Requirements
    budget: '', // <5k, 5k-20k, 20k-50k, 50k+
    timeline: '', // ASAP, 1-2 weeks, 1 month, Flexible
    goals: [], // Array: Lead generation, Sales, Followers, Website, Branding, Automation
    requirements: '', // Custom text
    
    // Package Info
    recommendedPackage: null,
    estimatedPriceRange: '',
    
    // Quotation
    quotationId: null,
    quotationGenerated: false,
    quotationPDF: null,
    
    // Booking
    consultationBooked: false,
    consultationDate: null,
    
    // Status
    stage: 'new', // new, quoted, consultation, negotiation, closed
    createdAt: new Date(),
    updatedAt: new Date()
  })

  const [quotationHistory, setQuotationHistory] = useState([])

  // Update single field
  const updateLeadField = useCallback((field, value) => {
    setLeadData(prev => ({
      ...prev,
      [field]: value,
      updatedAt: new Date()
    }))
  }, [])

  // Update multiple fields
  const updateLeadFields = useCallback((updates) => {
    setLeadData(prev => ({
      ...prev,
      ...updates,
      updatedAt: new Date()
    }))
  }, [])

  // Add/remove service
  const toggleService = useCallback((service) => {
    setLeadData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(s => s !== service)
        : [...prev.selectedServices, service],
      updatedAt: new Date()
    }))
  }, [])

  // Add/remove goal
  const toggleGoal = useCallback((goal) => {
    setLeadData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal],
      updatedAt: new Date()
    }))
  }, [])

  // Save quotation to history
  const saveQuotation = useCallback((quotation) => {
    setQuotationHistory(prev => [quotation, ...prev])
    setLeadData(prev => ({
      ...prev,
      quotationId: quotation.id,
      quotationGenerated: true,
      stage: 'quoted'
    }))
  }, [])

  // Update stage
  const updateStage = useCallback((stage) => {
    setLeadData(prev => ({
      ...prev,
      stage,
      updatedAt: new Date()
    }))
  }, [])

  // Reset lead data
  const resetLead = useCallback(() => {
    setLeadData({
      name: '',
      email: '',
      phone: '',
      whatsapp: '',
      businessName: '',
      businessType: '',
      selectedServices: [],
      budget: '',
      timeline: '',
      goals: [],
      requirements: '',
      recommendedPackage: null,
      estimatedPriceRange: '',
      quotationId: null,
      quotationGenerated: false,
      quotationPDF: null,
      consultationBooked: false,
      consultationDate: null,
      stage: 'new',
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }, [])

  const value = {
    leadData,
    updateLeadField,
    updateLeadFields,
    toggleService,
    toggleGoal,
    saveQuotation,
    updateStage,
    resetLead,
    quotationHistory
  }

  return (
    <LeadContext.Provider value={value}>
      {children}
    </LeadContext.Provider>
  )
}
