import React from 'react';
import Contact from '@/components/Contact';
import Modal from '@/components/Modal';

const page = () => {
  return (
    // <div className='flex items-center justify-center h-[90lvh] w-full'>
    //     <Contact />
    // </div>
    <Modal>
      <Contact />
    </Modal>
  )
}

export default page