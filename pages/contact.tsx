import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import LayoutWrapper from '@/components/LayoutWrapper'
import { Field, Input, Textarea } from '@/components/form'
import { Button } from '@/components/Button'

export default function Projects() {
  return (
    <LayoutWrapper>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Contact
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Get in touch with me using the form below.
          </p>
        </div>

        <div className="py-12">
          <form name="contact-form" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact-form" />

            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>

            <div className="grid grid-cols-6 gap-6">
              <Field label="First name" className="col-span-6 sm:col-span-3">
                <Input name="first_name" type="text" />
              </Field>

              <Field label="Last name" className="col-span-6 sm:col-span-3">
                <Input name="last_name" type="text" />
              </Field>

              <Field label="Email" className="col-span-6">
                <Input name="email" type="email" />
              </Field>

              <Field label="Subject" className="col-span-6">
                <Input name="subject" type="text" />
              </Field>

              <Field label="Message" className="col-span-6">
                <Textarea name="message" rows={6} />
              </Field>
            </div>
            <Button type="submit" className="mt-6">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </LayoutWrapper>
  )
}
