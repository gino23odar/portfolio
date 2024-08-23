import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

import Bounds from "@/components/Bounds";
import Heading from "@/components/Heading";
import ShuffleHeader from "@/components/ShuffleHeader";
import Timeline from "@/components/Timeline";

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
      <Heading as="h1" size="xl" className="flex justify-center items-center text-center min-h-[90lvh] mx-10">
        <ShuffleHeader text={slice.primary.heading!} />
      </Heading>
      <div>
        <Timeline items={slice.primary.entry} />
      </div>
    </Bounds>
  );
};

export default EducationandExperience;
