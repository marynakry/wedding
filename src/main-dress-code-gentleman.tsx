import React from 'react'
import { createRoot } from 'react-dom/client'
import guysImage from './assets/guys.png'

const container = document.getElementById('root')
if (!container) {
  throw new Error('Root container not found')
}

document.body.style.margin = '0'
document.body.style.background = '#ffffff'

const root = createRoot(container)
root.render(
  <img
    src={guysImage}
    alt="Dress code examples for gentlemen"
    style={{ display: 'block', width: 'auto', maxWidth: '100%', height: 'auto' }}
  />
)
