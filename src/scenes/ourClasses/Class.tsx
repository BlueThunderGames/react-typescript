import React from 'react'

type Props = {
    name: string; 
    description?: string;
    image: string;
}

function Class({name, description="some description", image}: Props) {
  const overlayStyles = `p-5 absolute z-30 flex
   w-100 h-full flex-col items-center justify-center
   whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration500 hover:opacity-90`;
  return (
    <div className="relative mx-5 inline-block h-[330px]">
        <div className={overlayStyles}>
            <p className="text-2xl">{name}</p>
            <p className="mt-5">{description}</p>
        </div>
        <img className="w-full h-full object-cover" src={image} alt={name} />
    </div>
  )
}

export default Class