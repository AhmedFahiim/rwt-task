import React from 'react'
import { Formik, Form } from 'formik'
import { FormInput, FormCheckbox } from '@organism'
import useTranslation from 'next-translate/useTranslation'
import { Button, FlexBetweenHolder, Text } from '@atoms'
import Link from 'next/link'
import RightArrow from '@svg/right-arrow.svg'
import { useLoginActions } from '../helpers/useActions'

const initialValues = {
  email: '',
  password: '',
  remember_me: false
}

export default function SignInForm() {
  const { t } = useTranslation('common')

  const { onSubmit, saved_data, isLoading } = useLoginActions()

  return (
    <Formik
      initialValues={{ ...initialValues, ...saved_data }}
      onSubmit={onSubmit}
    >
      <Form className="flex flex-col gap-5">
        <FormInput
          name="email"
          label={t('email')}
          placeholder={t('user_name_or_email')}
        />
        <FormInput
          name="password"
          label={t('password')}
          placeholder={t('password')}
          type="password"
        />

        <FlexBetweenHolder>
          <div className="lg:!w-1/4 w-[150px]">
            <FormCheckbox
              name="remember_me"
              label={t('remember_me')}
              className="[&>span>span]:lg:!text-[14px] [&>span>span]:!text-[12px]"
            />
          </div>

          <Link
            href="#"
            className="!text-primary-400 font-bold text-[14px]  block"
          >
            {t('forget_pass')}
          </Link>
        </FlexBetweenHolder>

        <Button
          fullWidth
          type="submit"
          bg="primary"
          isLoading={isLoading}
          className="flex items-center justify-center gap-3 !h-[56px]"
        >
          <Text color="white" weight="semibold">
            {t('sign_in')}
          </Text>
          <RightArrow stroke="#fff" />
        </Button>
      </Form>
    </Formik>
  )
}
