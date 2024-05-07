import { getSession, signIn } from 'next-auth/react'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const useLoginActions = () => {
  const { t } = useTranslation('enums')

  const { replace } = useRouter()

  const [saved_data, setSavedData] = useState<LoginType | null>(null)

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmit = async (values: LoginType) => {
    setIsLoading(true)

    try {
      const data = await signIn('credentials', {
        ...values,
        redirect: false
      })

      const session: any = await getSession()

      if (session) {
        const redirectPortal =
          (await session?.user?.user_type_text) === 'company'
            ? 'business'
            : (await session?.user?.user_type_text) === 'student'
            ? 'learner'
            : await session?.user?.user_type_text

        void replace(`/${redirectPortal}/dashboard`)

        toast.success(`${t('logged_in')}`)
      }

      if (data?.status === 401) {
        toast.error(t('credintials_is_wrong') as string)
      }

      // save the user in the session storage if he asked to remember
      // if (data?.status === 200 && data?.ok) {
      //   if (values.remember_me) {
      //     sessionStorage.setItem(
      //       'saved_user',
      //       JSON.stringify({ email: values.email, password: values.password })
      //     )
      //   }
      // }
    } catch (error) {}

    setIsLoading(false)
  }

  // get user data from storage if it saved before
  // useEffect(() => {
  //   const rememberdUser = sessionStorage.getItem('saved_user')

  //   if (rememberdUser) {
  //     setSavedData(JSON.parse(rememberdUser))
  //   }
  // })

  return { onSubmit, saved_data, isLoading }
}

export { useLoginActions }
