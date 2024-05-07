import { Button, Text } from '@atoms'
import useTranslation from 'next-translate/useTranslation'

import React from 'react'
import SignInForm from './form'
import Link from 'next/link'

export default function SignIn() {
  const { t } = useTranslation('common')

  return (
    <section className="md:py-[72px] py-[60px] px-6 xl:px-0">
      <Text
        as="h1"
        color="darkGray900"
        font="akshar"
        weight="semibold"
        className="lg:!text-[40px] !text-[28px] text-center"
      >
        {t('sign_in_head')}
      </Text>

      <div className="flex items-center justify-center gap-4 mt-7 lg:mb-12 mb-[27px]">
        <Text color="darkGray700" font="akshar" className="!text-[14px]">
          {t('dont_have_account')}
        </Text>

        <Link
          href={'/auth/select-user-type'}
          className="grid place-items-center rounded px-4 bg-primary-400/10 text-primary-400 !h-[48px]"
        >
          {t('create_account')}
        </Link>
      </div>

      {/* Sign-in Form */}
      <div className="lg:w-[40%] md:w-[70%] mx-auto">
        <SignInForm />
      </div>
    </section>
  )
}
