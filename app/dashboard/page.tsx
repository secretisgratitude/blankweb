import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default function DashboardPage() {
  const { userId } = auth()
  if (!userId) redirect('/')

  return (
    <main className='p-6'>
      <h1 className='text-2xl font-semibold'>Dashboard</h1>
      <p className='mt-2'>Protected content.</p>
    </main>
  )
}
