'use client'

import { useEffect, useState } from 'react'
import { DollarSign } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const BINANCE_API_URL = 'https://api.binance.com/api/v3/ticker/price?symbol=USDTARS'

export function ExchangeRateDisplay({ 
  amount, 
  onRateChange 
}: { 
  amount: number
  onRateChange: (rate: number) => void 
}) {
  const [exchangeRate, setExchangeRate] = useState<number>(0)

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(BINANCE_API_URL)
        const data = await response.json()
        const rate = parseFloat(data.price)
        setExchangeRate(rate)
        onRateChange(rate * 0.97) // 3% discount
      } catch (error) {
        console.error('Error fetching exchange rate:', error)
      }
    }

    fetchExchangeRate()
    const interval = setInterval(fetchExchangeRate, 20000)
    return () => clearInterval(interval)
  }, [onRateChange])

  const finalRate = exchangeRate * 0.97 // 3% discount

  return (
    <Card className="bg-[#00264D]/50 backdrop-blur-sm border-cyan-400/20">
      <CardContent className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-cyan-400" />
          <span className="text-cyan-400">Tasa de Cambio</span>
        </div>
        <div className="text-right">
          <p className="text-white/80">1 USD = {finalRate.toFixed(2)} ARS</p>
          <p className="text-sm text-cyan-400/80">Descuento: 3%</p>
        </div>
      </CardContent>
    </Card>
  )
}