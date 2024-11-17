'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { UseFormRegister, FieldErrors } from "react-hook-form"

interface SenderInfoProps {
  register: UseFormRegister<any>
  errors: FieldErrors
}

export function SenderInfo({ register, errors }: SenderInfoProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <Label htmlFor="senderName" className="text-white">
          Nombre Completo
        </Label>
        <Input
          id="senderName"
          {...register('senderName')}
          className="bg-white/5 border-white/20 text-white"
          autoComplete="name"
        />
        {errors.senderName && (
          <p className="text-red-500 text-sm mt-1">{errors.senderName.message as string}</p>
        )}
      </div>

      <div>
        <Label htmlFor="senderEmail" className="text-white">
          Correo Electrónico
        </Label>
        <Input
          id="senderEmail"
          type="email"
          {...register('senderEmail')}
          className="bg-white/5 border-white/20 text-white"
          autoComplete="email"
        />
        {errors.senderEmail && (
          <p className="text-red-500 text-sm mt-1">{errors.senderEmail.message as string}</p>
        )}
      </div>
    </div>
  )
}