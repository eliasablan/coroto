import React from 'react'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página no encontrada',
}

export const runtime = 'edge'

export default function page() {
  return <div className="container">Not found</div>
}
