import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Users, FileText, Calendar, TrendingUp, Mail } from 'lucide-react'
import { apiCall } from '../utils/api'

export default function AdminDashboard() {
  const [leads, setLeads] = useState([])
  const [analytics, setAnalytics] = useState(null)
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchData()
    // Refresh every 30 seconds
    const interval = setInterval(fetchData, 30000)
    return () => clearInterval(interval)
  }, [])

  const fetchData = async () => {
    try {
      const [leadsData, analyticsData] = await Promise.all([
        apiCall.getLeads(),
        apiCall.getAnalytics()
      ])

      setLeads(leadsData)
      setAnalytics(analyticsData)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredLeads = leads.filter(lead => {
    if (filter === 'all') return true
    return lead.stage === filter
  })

  const getStageColor = (stage) => {
    const colors = {
      new: 'bg-blue-500/20 text-blue-300 border-blue-500/50',
      quoted: 'bg-purple-500/20 text-purple-300 border-purple-500/50',
      consultation: 'bg-orange-500/20 text-orange-300 border-orange-500/50',
      negotiation: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50',
      closed: 'bg-green-500/20 text-green-300 border-green-500/50'
    }
    return colors[stage] || colors.new
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading dashboard...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-white mb-2">Macflix Admin Dashboard</h1>
          <p className="text-gray-400">Lead Management & Analytics</p>
        </motion.div>

        {/* Analytics Cards */}
        {analytics && (
          <motion.div
            className="grid grid-cols-4 gap-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              { icon: Users, label: 'Total Leads', value: analytics.totalLeads },
              { icon: FileText, label: 'Quotations Sent', value: analytics.quotedLeads },
              { icon: Calendar, label: 'Consultations', value: analytics.bookedConsultations },
              { icon: TrendingUp, label: 'Conversion Rate', value: analytics.conversionRate }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm font-semibold">{card.label}</span>
                  <card.icon size={20} className="text-purple-400" />
                </div>
                <p className="text-3xl font-bold text-white">{card.value}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Leads Table */}
        <motion.div
          className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Filter Tabs */}
          <div className="flex gap-2 p-6 border-b border-gray-700 flex-wrap">
            {['all', 'new', 'quoted', 'consultation', 'negotiation', 'closed'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm capitalize ${
                  filter === tab
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {tab}
                {tab === 'all' && ` (${leads.length})`}
                {tab !== 'all' && ` (${leads.filter(l => l.stage === tab).length})`}
              </button>
            ))}
          </div>

          {/* Leads List */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900/50 border-b border-gray-700">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Business</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Contact</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Budget</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Stage</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <tr key={lead._id} className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">{lead.name}</td>
                    <td className="px-6 py-4 text-gray-300">{lead.businessName} ({lead.businessType})</td>
                    <td className="px-6 py-4 text-gray-300">
                      <div className="text-sm">{lead.email}</div>
                      <div className="text-xs text-gray-500">{lead.phone}</div>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{lead.budget}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStageColor(lead.stage)}`}>
                        {lead.stage}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-300 text-sm">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredLeads.length === 0 && (
            <div className="p-12 text-center text-gray-400">
              No leads found for this filter.
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
