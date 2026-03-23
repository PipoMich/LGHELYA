import { useState, useRef, useEffect } from 'react'
import styles from './CustomSelect.module.css'

interface Option {
  label: string
  value: string
}

interface CustomSelectProps {
  options: Option[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  id?: string
  required?: boolean
}

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder,
  className = '',
  id,
  required
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find(o => o.value === value)
  const displayValue = selectedOption ? selectedOption.label : placeholder || ''

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  return (
    <div className={`${styles.container} ${className}`} ref={containerRef}>
      <input type="hidden" value={value} required={required} />
      
      <div 
        id={id}
        className={`${styles.trigger} ${isOpen ? styles.open : ''}`}
        onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen) }}
        tabIndex={0}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={id ? `${id}-listbox` : undefined}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsOpen(!isOpen)
          }
          if (e.key === 'Escape' && isOpen) {
            setIsOpen(false)
          }
        }}
      >
        <span className={!value && placeholder ? styles.placeholder : styles.value}>
          {displayValue}
        </span>
        <svg 
          className={styles.chevron} 
          width="16" height="16" viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      {isOpen && (
        <ul className={styles.optionsList} role="listbox" id={id ? `${id}-listbox` : undefined}>
          {placeholder && (
            <li 
              className={`${styles.option} ${!value ? styles.selected : ''}`}
              role="option"
              aria-selected={!value}
              onClick={() => {
                onChange('')
                setIsOpen(false)
              }}
            >
              {placeholder}
            </li>
          )}
          {options.map(option => (
            <li
              key={option.value}
              className={`${styles.option} ${value === option.value ? styles.selected : ''}`}
              role="option"
              aria-selected={value === option.value}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
