import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

import Bounds from "@/components/Bounds";
import Heading from "@/components/Heading";
import ShuffleHeader from "@/components/ShuffleHeader";
import Timeline from "@/components/Timeline";
import MouseDown from "@/components/MouseDown";

import { MdOutlineWorkOutline, MdOutlineSchool } from "react-icons/md";

/**
 * Props for `EducationandExperience`.
 */
export type EducationandExperienceProps =
  SliceComponentProps<Content.EducationandExperienceSlice>;

/**
 * Component for "EducationandExperience" Slices.
 */
const EducationandExperience = ({
  slice,
}: EducationandExperienceProps): JSX.Element => {

  // let items = slice.primary.entry.map((entry) => {{
  //   title: entry.title;
  //   date: entry.time_period;
  //   institution: entry.institution;
  //   description: entry.description;
  //   isWork: entry.iswork;
  //   isOld: entry.isold;
  // });

  return (
    <Bounds
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center"
    >
      <div className="flex flex-col items-center justify-center min-h-[100lvh]">  
        <Heading as="h1" size="xl" className="flex justify-center items-center text-center mx-10 mb-8">
          <ShuffleHeader text={slice.primary.heading!} />
        </Heading>
        <div className="flex justify-center mb-3">
          <h2 className='text-5xl text-white font-bold'>Scroll down</h2>
        </div>
        <div className="flex justify-center">
          <MouseDown/>
        </div>
      </div>
      <div>
        <Timeline items={slice.primary.entry} />
      </div>
    </Bounds>
  );
};

export default EducationandExperience;
