import { redirect } from 'next/navigation'
import { useSession } from '../../hooks/useSession'
import RegisterForm from '../../components/pages/dashboard/register/RegisterForm'

async function Page () {
  const user = await useSession()

  if (user) redirect('/dashboard')

  return <RegisterForm />
}

export default Page
