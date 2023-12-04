import { Auth } from '@supabase/auth-ui-react'
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

const LogIn = () => (
  <Auth
    supabaseClient={supabase}

    appearance={{ theme: ThemeSupa }}
  />
)

export default LogIn