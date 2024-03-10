'use client'

export default function ErrorPage ({ error }: { error: Error }) {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-2xl font-bold text-red-500'>Error</h1>
      <p className='text-xl font-semibold text-gray-500'>{error.message}</p>
      <button
        className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4'
        onClick={() => window.location.replace('/dashboard')}
      >
        Volver al inicio
      </button>
    </div>
  )
}
