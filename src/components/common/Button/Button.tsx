import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

type Variant = 'primary' | 'secondary' | 'outline'

interface BaseButtonProps {
  children: ReactNode
  variant?: Variant
  className?: string
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }

type ButtonAsLink = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' }

type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', className = '', as = 'button', ...rest } = props
  const classes = `${styles.button} ${styles[variant]} ${className}`.trim()

  if (as === 'a') {
    const { ...linkProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a className={classes} {...linkProps}>
        {children}
      </a>
    )
  }

  const { ...buttonProps } = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
