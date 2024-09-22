import { FC } from 'react'

type DividerProps = {
  color?: 'bg-primary-400' | 'bg-primary-500'
  margin?: number
  className?: string
}

const Divider: FC<DividerProps> = ({ color = 'bg-primary-500', margin = 0, className }) => {
  const colorClasses = color
  return <div className={`${className} ${colorClasses} my-${margin} h-px`}></div>
}

export default Divider