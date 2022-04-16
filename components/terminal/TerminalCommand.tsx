import { useState, useEffect } from 'react'

type TerminalCommandProps = {
  index: number
  input: string
  output: string
  activeIndex: number
  setActiveIndex: (index: number) => void
}

export const TerminalCommand = ({
  index,
  input,
  output,
  activeIndex,
  setActiveIndex,
}: TerminalCommandProps) => {
  const [isOver, setIsOver] = useState(false)
  const [inputVisibilityIndex, setInputVisibilityIndex] = useState(0)

  useEffect(() => {
    if (activeIndex != index) return

    setTimeout(() => {
      if (inputVisibilityIndex != input.length) setInputVisibilityIndex(inputVisibilityIndex + 1)

      if (inputVisibilityIndex == input.length) setIsOver(true)
    }, 35)

    if (isOver && activeIndex == index) {
      setTimeout(() => {
        setActiveIndex(activeIndex + 1)
      }, 500)
    }
  }, [inputVisibilityIndex, activeIndex, isOver, input.length, index, setActiveIndex])

  const visibleInput = input.substring(0, inputVisibilityIndex)
  const isVisible = index <= activeIndex

  return isVisible ? (
    <div>
      <span className="text-yellow-500">λ</span>

      <span className="ml-2 text-white">{visibleInput}</span>

      {isOver && (
        <div className="mt-1 text-gray-400 leading-loose">
          {output.indexOf('</') !== -1 ? (
            <div dangerouslySetInnerHTML={{ __html: output }}></div>
          ) : (
            output
          )}
        </div>
      )}
    </div>
  ) : (
    <></>
  )
}
