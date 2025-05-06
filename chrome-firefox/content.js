// Function to hide Reels elements
function hideReels() {
  // Target Reels elements with different selectors to ensure coverage
  const selectors = [
    "ytd-rich-section-renderer:has(a[href*='/shorts/'])",
    "ytd-reel-item-renderer:has(a[href*='/shorts/'])",
    "ytd-grid-video-renderer:has(a[href*='/shorts/'])",
    "ytd-rich-grid-slim-media:has(a[href*='/shorts/'])",
    "ytd-rich-grid-media:has(a[href*='/shorts/'])",
    "ytd-reel-shelf-renderer:has(a[href*='/shorts/'])",
    "ytd-video-renderer:has(a[href*='/shorts/'])",
    "yt-tab-shape[tab-title='Shorts']",
    "ytd-guide-entry-renderer:has(path[d*='M10 14.65v-5.3L15 12l-5'])",
    "ytd-guide-entry-renderer:has(a[title*='Shorts'])",
    "yt-chip-cloud-chip-renderer:has(yt-formatted-string[title='Shorts'])",
  ]

  // Apply hiding to all matching elements
  selectors.forEach((selector) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => {
      element.style.display = 'none'
    })
  })
}

// Run when page loads
hideReels()

// Run every 3 seconds as a backup to catch any missed elements
// setInterval(hideReels, 3000)

const observer = new MutationObserver((mutations) => {
  setTimeout(() => {
    hideReels()
  }, 100)
})

if (document.body) {
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
  })
} else {
  // If document.body isn't available yet, wait for it to load
  document.addEventListener('DOMContentLoaded', () => {
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    })
  })
}
