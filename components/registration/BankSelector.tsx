'use client'

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from 'react'

export const ecucondorBanks = [
  { name: "Banco Pichincha", account: "Cuenta Corriente: 2100012345, RUC: 1234567890001" },
  { name: "Banco Guayaquil", account: "Cuenta de Ahorros: 1234567890, RUC: 1234567890001" },
  { name: "Banco del Pacífico", account: "Cuenta Corriente: 7654321098, RUC: 1234567890001" },
  { name: "Produbanco", account: "Cuenta de Ahorros: 12345-6, RUC: 1234567890001" },
  { name: "Banco Internacional", account: "Cuenta Corriente: 150-002345-6, RUC: 1234567890001" }
] as const

interface BankSelectorProps {
  onChange: (value: string) => void
  error?: string
}

export function BankSelector({ onChange, error }: BankSelectorProps) {
  const [selectedBank, setSelectedBank] = useState<string>('')

  const handleValueChange = (value: string) => {
    setSelectedBank(value)
    onChange(value)
  }

  return (
    <div className="space-y-2">
      <Label htmlFor="ecucondorBank" className="text-white">
        Seleccionar Banco
      </Label>
      <Select value={selectedBank} onValueChange={handleValueChange}>
        <SelectTrigger id="ecucondorBank" className="bg-white/5 border-white/20 text-white">
          <SelectValue placeholder="Seleccione un banco" />
        </SelectTrigger>
        <SelectContent>
          {ecucondorBanks.map((bank) => (
            <SelectItem key={bank.name} value={bank.name}>
              {bank.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
      <div className="text-sm text-white/70">
        {selectedBank && (
          <p>
            {ecucondorBanks.find(bank => bank.name === selectedBank)?.account}
          </p>
        )}
      </div>
    </div>
  )
}