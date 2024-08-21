import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for educationand_experience (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default EducationandExperience;
