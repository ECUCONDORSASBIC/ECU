'use client'

import { useState, useEffect } from 'react'
import { Timer } from 'lucide-react'

export function CountdownTimer({ initialMinutes = 30 }) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60)

  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div className="flex items-center gap-2 text-amber-500">
      <Timer className="w-5 h-5 animate-pulse" />
      <span className="font-mono text-xl">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  )
}