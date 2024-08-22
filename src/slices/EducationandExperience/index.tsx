import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import Bounds from "@/components/Bounds";
import Heading from "@/components/Heading";
import ShuffleHeader from "@/components/ShuffleHeader";

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
  return (
    <Bounds
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mx-10"
    >
      <Heading as="h1" size="lg">
        <ShuffleHeader text={slice.primary.heading!} />
      </Heading>
    </Bounds>
  );
};

export default EducationandExperience;
