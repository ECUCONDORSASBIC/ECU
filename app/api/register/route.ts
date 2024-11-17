import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    
    // Handle file upload
    const file = formData.get('receipt') as File
    if (file) {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      
      // Create unique filename
      const timestamp = Date.now()
      const originalName = file.name
      const extension = originalName.split('.').pop()
      const filename = `receipt-${timestamp}.${extension}`
      
      // Save file
      const path = join(process.cwd(), 'public', 'uploads', filename)
      await writeFile(path, buffer)
      formData.set('receiptPath', `/uploads/${filename}`)
    }

    // Forward to backend API
    const backendResponse = await fetch('http://localhost:3001/api/register', {
      method: 'POST',
      body: formData
    })

    if (!backendResponse.ok) {
      throw new Error('Backend API error')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Error processing registration' },
      { status: 500 }
    )
  }
}