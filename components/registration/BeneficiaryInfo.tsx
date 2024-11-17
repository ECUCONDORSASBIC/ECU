'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { UseFormRegister, FieldErrors } from "react-hook-form"

interface BeneficiaryInfoProps {
  register: UseFormRegister<any>
  errors: FieldErrors
}

export function BeneficiaryInfo({ register, errors }: BeneficiaryInfoProps) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="beneficiaryName" className="text-white">
            Nombre del Beneficiario
          </Label>
          <Input
            id="beneficiaryName"
            {...register('beneficiaryName')}
            className="bg-white/5 border-white/20 text-white"
            autoComplete="off"
          />
          {errors.beneficiaryName && (
            <p className="text-red-500 text-sm mt-1">{errors.beneficiaryName.message as string}</p>
          )}
        </div>

        <div>
          <Label htmlFor="beneficiaryDNI" className="text-white">
            DNI del Beneficiario
          </Label>
          <Input
            id="beneficiaryDNI"
            {...register('beneficiaryDNI')}
            className="bg-white/5 border-white/20 text-white"
            autoComplete="off"
          />
          {errors.beneficiaryDNI && (
            <p className="text-red-500 text-sm mt-1">{errors.beneficiaryDNI.message as string}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="beneficiaryCBU" className="text-white">
            CBU
          </Label>
          <Input
            id="beneficiaryCBU"
            {...register('beneficiaryCBU')}
            className="bg-white/5 border-white/20 text-white"
            placeholder="22 dígitos"
            autoComplete="off"
          />
          {errors.beneficiaryCBU && (
            <p className="text-red-500 text-sm mt-1">{errors.beneficiaryCBU.message as string}</p>
          )}
        </div>

        <div>
          <Label htmlFor="beneficiaryAlias" className="text-white">
            Alias (opcional)
          </Label>
          <Input
            id="beneficiaryAlias"
            {...register('beneficiaryAlias')}
            className="bg-white/5 border-white/20 text-white"
            autoComplete="off"
          />
          {errors.beneficiaryAlias && (
            <p className="text-red-500 text-sm mt-1">{errors.beneficiaryAlias.message as string}</p>
          )}
        </div>
      </div>
    </>
  )
}