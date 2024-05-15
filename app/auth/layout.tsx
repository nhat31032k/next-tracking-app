import { ReactNode } from 'react'

interface Ilayout {
    children: ReactNode
}
function layout({ children }: Ilayout) {
    return (
        <div className='relative flex h-screen w-full flex-col items-center justify-center'>
            <div className='mt-12'>{children}</div>
        </div>
    )
}

export default layout