// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export const API_ENDPOINTS = {
  // Leads
  CREATE_LEAD: `${API_BASE_URL}/leads`,
  GET_LEADS: `${API_BASE_URL}/leads`,
  GET_LEAD: (id) => `${API_BASE_URL}/leads/${id}`,

  // Quotations
  CREATE_QUOTATION: `${API_BASE_URL}/quotations`,
  GET_QUOTATION: (id) => `${API_BASE_URL}/quotations/${id}`,

  // Bookings
  CREATE_BOOKING: `${API_BASE_URL}/bookings`,
  GET_BOOKINGS: `${API_BASE_URL}/bookings`,

  // Analytics
  GET_ANALYTICS: `${API_BASE_URL}/analytics`
}

// API Helper functions
export const apiCall = {
  // Create lead and generate quotation
  async createLead(leadData) {
    const response = await fetch(API_ENDPOINTS.CREATE_LEAD, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(leadData)
    })
    
    if (!response.ok) {
      throw new Error('Failed to create lead')
    }
    
    return response.json()
  },

  // Get all leads
  async getLeads() {
    const response = await fetch(API_ENDPOINTS.GET_LEADS)
    
    if (!response.ok) {
      throw new Error('Failed to fetch leads')
    }
    
    return response.json()
  },

  // Get analytics
  async getAnalytics() {
    const response = await fetch(API_ENDPOINTS.GET_ANALYTICS)
    
    if (!response.ok) {
      throw new Error('Failed to fetch analytics')
    }
    
    return response.json()
  },

  // Create booking
  async createBooking(bookingData) {
    const response = await fetch(API_ENDPOINTS.CREATE_BOOKING, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    })
    
    if (!response.ok) {
      throw new Error('Failed to create booking')
    }
    
    return response.json()
  }
}

export default {
  API_BASE_URL,
  API_ENDPOINTS,
  apiCall
}
