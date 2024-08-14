import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import Bounds from "@/components/Bounds";

/**
 * Props for `ContentIndex`.
 */
export type ContentIndexProps = SliceComponentProps<Content.ContentIndexSlice>;

/**
 * Component for "ContentIndex" Slices.
 */
const ContentIndex = ({ slice }: ContentIndexProps): JSX.Element => {
  return (
    <Bounds
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for content_index (variation: {slice.variation})
      Slices
    </Bounds>
  );
};

export default ContentIndex;
