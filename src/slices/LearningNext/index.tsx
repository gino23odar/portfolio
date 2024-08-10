import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import Bounds from "@/components/Bounds";

/**
 * Props for `LearningNext`.
 */
export type LearningNextProps = SliceComponentProps<Content.LearningNextSlice>;

/**
 * Component for "LearningNext" Slices.
 */
const LearningNext = ({ slice }: LearningNextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="bg-ocean min-h-[150lvh]"></div>
    </section>
  );
};

export default LearningNext;
