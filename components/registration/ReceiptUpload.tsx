'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Upload } from 'lucide-react'
import { UseFormRegister, FieldErrors } from "react-hook-form"

interface ReceiptUploadProps {
  register: UseFormRegister<any>
  errors: FieldErrors
}

export function ReceiptUpload({ register, errors }: ReceiptUploadProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="receipt" className="text-white">
        Comprobante de Pago
      </Label>
      <div className="flex items-center gap-4">
        <Input
          id="receipt"
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          {...register('receipt')}
          className="bg-white/5 border-white/20 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:bg-white/90"
        />
        <Upload className="w-6 h-6 text-white" />
      </div>
      {errors.receipt && (
        <p className="text-red-500 text-sm">{errors.receipt.message as string}</p>
      )}
      <p className="text-xs text-white/70">
        Formatos aceptados: PDF, JPEG, PNG (máx. 5MB)
      </p>
    </div>
  )
}