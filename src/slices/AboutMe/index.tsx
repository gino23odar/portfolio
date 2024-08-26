'use client'

import React, {useRef } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import Bounds from "@/components/Bounds";
import Heading from "@/components/Heading";
import Avatar from "@/components/Avatar";
import ShuffleHeader from "@/components/ShuffleHeader";


/**
 * Props for `AboutMe`.
 */
export type AboutMeProps = SliceComponentProps<Content.AboutMeSlice>;

/**
 * Component for "AboutMe" Slices.
 */
const AboutMe = ({ slice }: AboutMeProps): JSX.Element => {

  const diagRef = useRef<HTMLDialogElement>(null);

  const showModal = () =>{
    if(diagRef.current){
      diagRef.current.showModal();
    }
  };

  const hideModal = () =>{
    if(diagRef.current){
      diagRef.current.close();
    }
  };

  return (
    <Bounds
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-8 lg:mx-10 xl:mx-20 gap-y-4 md:grid-cols-[2fr,2fr] xl:grid-cols-[3fr,4fr] ">

        <Heading as='h1' size='xl' className='col-start-1'>
          <ShuffleHeader text={slice.primary.heading!} />
        </Heading>
        <div className='prose prose-xl prose-slate prose-invert col-start-1'>
          <PrismicRichText field={slice.primary.description} />
        </div>
        <dialog ref={diagRef} className="border-4 border-chilli">
          <h2 className="text-xl p-4 ">NOTICE:</h2>
          <div className="flex flex-col justify-center p-4"> 
            <p>Due to a scrapper spamming this, I decided to temporarily take down </p>
            <p>the pdf download coponent with @react-pdf/renderer.</p>
            <p>Sorry for the inconvenience.</p>
            <div className="flex justify-center items-center gap-2 mt-2">
              <p>Feel free to contact me for a resume here: </p>
              <a href="./contact" className="bg-midnightblue text-white p-1 "> CONTACT </a>
            </div>
          </div>
          <form method="dialog" className="flex justify-center p-4">
            <button onClick={hideModal} className="bg-coolgray p-2">close</button>
          </form>
        </dialog>
        <button
            //linkField={slice.primary.button_link}
            onClick={showModal}
            className="resume-modal lg:m-10 xl:mx-20">
            {slice.primary.button_text}
        </button>
        <Avatar
          image={slice.primary.avatar}
          className="row-start-1 max-w-3xl md:col-start-2 md:row-end-3 xl:row-end-4"
        />
      </div>
      
    </Bounds>
  );
};

export default AboutMe;
