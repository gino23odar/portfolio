'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useRouter } from 'next/navigation';

export function Modal({
    children,
} : {
    children: React.ReactNode
}){
    const [open, setOpen] = useState(true);
    const router = useRouter();

    const handleOpenChange = () =>{
        router.back();
    }

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />
            <DialogPanel transition className="fixed inset-0 flex items-center justify-center">
                <button onClick={() => router.back()} className='absolute top-10 right-10 bg-black text-white p-2 rounded-md'>Close</button>
                <div className='min-w-[30lvw] '>
                    {children}
                </div>
            </DialogPanel>
        </Dialog>
    )
}

export default Modal;