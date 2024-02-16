import { ButtonHTMLAttributes, forwardRef } from 'react'
import { Content } from './style'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bg?: 'transparent' | 'green',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, bg = 'green', ...rest }, ref) => {
  return <Content className={className} {...rest} bg={bg} ref={ref}/> 
})

Button.displayName = 'Button';

export default Button
