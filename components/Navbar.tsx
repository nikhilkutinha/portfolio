import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { ApplicationLogo } from './ApplicationLogo'
import { ThemeSwitch } from './ThemeSwitch'
import clsx from 'clsx'

type NavbarProps = {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <Popover as={Fragment}>
      <header className={clsx(className, 'py-6 md:flex md:justify-between')}>
        <nav
          className="relative flex items-center justify-between sm:h-10 md:justify-start"
          aria-label="Global"
        >
          <div className="flex flex-shrink-0 flex-grow items-center md:flex-grow-0">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link href="/" aria-label={siteMetadata.headerTitle}>
                <ApplicationLogo />
              </Link>

              <div className="flex items-center md:hidden">
                <ThemeSwitch />
                <Popover.Button className="-mr-2 ml-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Open main menu</span>

                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>

          <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden items-center md:flex">
          <ThemeSwitch />
        </div>
      </header>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 dark:bg-gray-800">
            <div className="flex items-center justify-between px-5 pt-4">
              <ApplicationLogo />

              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Close main menu</span>

                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>

            <div className="space-y-1 px-2 pt-2 pb-3">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:text-primary-500 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Navbar
