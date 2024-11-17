'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { UseFormRegister, FieldErrors } from "react-hook-form"

interface AmountInputProps {
  register: UseFormRegister<any>
  errors: FieldErrors
  arsAmount: number
}

export function AmountInput({ register, errors, arsAmount }: AmountInputProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="amount" className="text-white">
          Monto en USD
        </Label>
        <Input
          id="amount"
          type="number"
          step="0.01"
          {...register('amount', { valueAsNumber: true })}
          className="bg-white/5 border-white/20 text-white"
          placeholder="0.00"
          autoComplete="off"
        />
        {errors.amount && (
          <p className="text-red-500 text-sm">{errors.amount.message as string}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label className="text-white">Monto en ARS (3.5% descuento)</Label>
        <div className="bg-white/5 border border-white/20 rounded-md p-3 text-white">
          {arsAmount.toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS'
          })}
        </div>
      </div>
    </div>
  )
}