import React from 'react'

interface CardProps {
children: React.ReactNode;
}
const Card = ({children}: CardProps) => {
  return (
<div className="flex rounded w-full shadow-lg">
{children}
</div>  
)
}

export default Card;