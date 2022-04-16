import { useState } from 'react'
import { TerminalCommand } from '@/types'
import { TerminalCommand as TerminalItem } from './TerminalCommand'
import clsx from 'clsx'

type TerminalProps = {
  className?: string
  commands?: TerminalCommand[]
  ready?: boolean
}

export const Terminal = ({ className, commands, ready }: TerminalProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className={clsx(className, 'h-full w-full shadow-2xl')}>
      <div className="flex w-full flex-1 items-center justify-between rounded-tl-md rounded-tr-md bg-white p-3 dark:bg-gray-100">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full border border-red-400 bg-red-300"></div>

          <div className="h-3 w-3 rounded-full border border-yellow-400 bg-yellow-300"></div>

          <div className="h-3 w-3 rounded-full border border-green-400 bg-green-300"></div>
        </div>
      </div>

      <div className="z-50 h-[30rem] overflow-auto rounded-bl-md rounded-br-md bg-gray-800">
        {ready && (
          <pre className="text-md w-full space-y-5 overflow-auto whitespace-pre-wrap p-5 font-sans">
            {commands?.map((command, index) => (
              <TerminalItem
                key={index}
                index={index}
                input={command.input}
                output={command.output}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </pre>
        )}
      </div>
    </div>
  )
}
