// Map emojis to Font Awesome icon classes
export const emojiToFontAwesome = {
  '✓': 'fa-check',
  '✅': 'fa-check-circle',
  '❌': 'fa-circle-xmark',
  '⏱️': 'fa-hourglass-end',
  '🚀': 'fa-rocket',
  '📄': 'fa-file',
  '💬': 'fa-comment',
  '📞': 'fa-phone',
  '🔒': 'fa-lock',
  '📧': 'fa-envelope',
  '📱': 'fa-mobile',
  '🌐': 'fa-globe',
  '🎬': 'fa-clapperboard',
  '🛠️': 'fa-wrench',
  '📈': 'fa-chart-line',
  '🔗': 'fa-link',
  '⚡': 'fa-bolt',
  '🎯': 'fa-bullseye',
  '💼': 'fa-briefcase',
  '🏆': 'fa-trophy',
  '👥': 'fa-users',
  '💡': 'fa-lightbulb',
  '🌟': 'fa-star',
  '✨': 'fa-wand-magic-sparkles',
  '💎': 'fa-gem',
  '🔥': 'fa-fire',
  '🎨': 'fa-palette',
  '📸': 'fa-camera',
  '📹': 'fa-video',
  '📺': 'fa-tv',
  '🎵': 'fa-music',
  '🎧': 'fa-headphones',
  '📢': 'fa-bullhorn',
  '🔔': 'fa-bell',
  '🌈': 'fa-rainbow',
  '🎉': 'fa-party-popper',
  '🎊': 'fa-party-popper',
  '📊': 'fa-chart-bar',
  '💰': 'fa-money-bill',
  '🛒': 'fa-shopping-cart',
  '🎁': 'fa-gift',
  '👍': 'fa-thumbs-up',
  '👎': 'fa-thumbs-down',
  '❤️': 'fa-heart',
  '🤝': 'fa-handshake'
}

// Component to render emoji as Font Awesome icon
export function EmojiIcon({ emoji, size = '1em', className = '', color = 'white' }) {
  const iconClass = emojiToFontAwesome[emoji]
  if (!iconClass) {
    // Fallback to emoji if not found
    return <span style={{ fontSize: size, color }} className={className}>{emoji}</span>
  }
  return (
    <i 
      className={`fa-solid ${iconClass} ${className}`} 
      style={{ fontSize: size, color }}
      aria-hidden="true"
    />
  )
}

export default EmojiIcon
