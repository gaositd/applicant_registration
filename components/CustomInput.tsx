import React from 'react'

type sizeType = 'md' | 'lg' | 'xl' | 'full'
interface props extends React.HTMLProps<HTMLInputElement> {
  inputSize?: sizeType;
  label?: string;
  extraClass?: string;
}

const sizeValues = {
  md: 'w-64',
  lg: 'w-80',
  xl: 'w-96',
  full: 'w-full'
}

const CustomInput: React.FC<props> = ({
  inputSize = 'md',
  label,
  extraClass,
  ...props
}) => {
  return (
    <div className={` ${extraClass} ${sizeValues[inputSize]}`}>
      {label && (
        <label
          htmlFor={`${label}-input`}
          className='block mb-2 text-sm font-medium text-gray-900'
        >
          {label}
        </label>
      )}
      <input
        id={`${label}-input`}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
        {...props}
      />
    </div>
  )
}

export default CustomInput
