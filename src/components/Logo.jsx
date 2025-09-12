import logo from "../assets/logo.png"

export default function Logo({ className, variant = "default" }) {
  if (variant === "hero") {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <img src={logo} alt="MacFlix Logo" className="w-25 h-25 drop-shadow-lg" />
        
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img src={logo} alt="MacFlix Logo" className="w-8 h-8" />
      <span className="ml-2 text-xl font-bold bg-macflix-gradient bg-clip-text text-transparent">
        MacFlix
      </span>
    </div>
  )
}