'use client'

import React, { useState, useEffect } from 'react'

// Simple utility function to replace the missing cn function
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export const TypewriterEffect = ({ words, className, cursorClassName }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const currentText = currentWord.text

    const typeSpeed = isDeleting ? 50 : 150
    const deleteSpeed = 30

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentCharIndex < currentText.length) {
            setCurrentCharIndex((prev) => prev + 1)
          } else {
            // Wait before starting to delete
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (currentCharIndex > 0) {
            setCurrentCharIndex((prev) => prev - 1)
          } else {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed,
    )

    return () => clearTimeout(timer)
  }, [currentCharIndex, isDeleting, currentWordIndex, words])

  const currentWord = words[currentWordIndex]
  const displayText = currentWord.text.slice(0, currentCharIndex)

  return (
    <div className={cn('flex items-center', className)}>
      <span className={cn('text-black', currentWord.className)}>
        {displayText}
      </span>
      <span
        className={cn(
          'inline-block rounded-sm w-[2px] h-6 bg-blue-500 ml-1 animate-pulse',
          cursorClassName,
        )}
      />
    </div>
  )
}

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const currentText = currentWord.text

    const typeSpeed = isDeleting ? 50 : 150
    const deleteSpeed = 30

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentCharIndex < currentText.length) {
            setCurrentCharIndex((prev) => prev + 1)
          } else {
            // Wait before starting to delete
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (currentCharIndex > 0) {
            setCurrentCharIndex((prev) => prev - 1)
          } else {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed,
    )

    return () => clearTimeout(timer)
  }, [currentCharIndex, isDeleting, currentWordIndex, words])

  const currentWord = words[currentWordIndex]
  const displayText = currentWord.text.slice(0, currentCharIndex)

  // Find the longest word to maintain consistent width
  const longestWord = words.reduce(
    (longest, word) =>
      word.text.length > longest.length ? word.text : longest,
    '',
  )

  return (
    <div className={cn('flex items-center', className)}>
      <div
        className="overflow-hidden"
        style={{
          minWidth: `${longestWord.length * 0.6}em`,
          display: 'inline-block',
        }}
      >
        <span
          className={cn('text-black whitespace-nowrap', currentWord.className)}
        >
          {displayText}
        </span>
      </div>
      <span
        className={cn(
          'inline-block rounded-sm w-[2px] h-6 bg-blue-500 ml-1 animate-pulse',
          cursorClassName,
        )}
      />
    </div>
  )
}
