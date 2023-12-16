import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { useRouter } from "next/navigation";
export async function POST() {
  const cookieStore = cookies()
  const router = useRouter();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  await supabase.auth.signOut()

  router.push("/");
}