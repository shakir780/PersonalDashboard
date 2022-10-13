import React from 'react'
const Header=({category,title})=>(
    <div className='mb-10'>
        <p className="text-lg text-gray-400 dark:text-gray-100">{category}</p>
        <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
            {title}
        </p>
    </div>
)

export default Header