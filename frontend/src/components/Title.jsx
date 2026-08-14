import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-3 items-center mb-3">
      <p className="text-gray-500">
        {text1}{' '}
        <span className="text-white font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
          {text2}
        </span>
      </p>
      <span className="w-8 h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-transparent" />
    </div>
  )
}

export default Title