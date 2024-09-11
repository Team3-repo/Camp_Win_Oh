import React from 'react'

export default function Button({ label, onClick, className }) {
  return (
    <button className={className} onClick={onClick} disabled={false}>
      {label}
    </button>
  )
}
