import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";

import Bounds from "@/components/Bounds";
import Heading from "@/components/Heading";
import ContentList from "./ContentList";
import ProjectList from "./ProjectList";

/**
 * Props for `ContentIndex`.
 */
export type ContentIndexProps = SliceComponentProps<Content.ContentIndexSlice>;

/**
 * Component for "ContentIndex" Slices.
 */
const ContentIndex = async ({ slice }: ContentIndexProps): Promise<JSX.Element> => {

  const client = createClient()
  const blogs = await client.getAllByType("blog_post")
  const projects = await client.getAllByType("projects")
  const featured = await client.getAllByType("featured_projects")

  const contentType = slice.primary.content_type || "Blog";

  const items = contentType === "Blog" ? blogs : projects;

  return (
    <Bounds
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mb-20"
    >
      <Heading size="xl" className="mx-8 lg:ml-10">
        {slice.primary.heading}
      </Heading>
      {isFilled.richText(slice.primary.description) && (
        <div className="prose prose-2xl prose-invert mt-4 lg:mt-6 lg:mx-10">
          <PrismicRichText field={slice.primary.description} />
        </div>
      )}
      {(items == blogs) && <ContentList items={items} contentType={contentType} checkOutText={slice.primary.check_out} fallbackImage={slice.primary.item_image} />}
      {(items == projects) && <ProjectList items={items} featured={featured} contentType={contentType} checkOutText={slice.primary.check_out} fallbackImage={slice.primary.item_image} />}
    </Bounds>
  );
};

export default ContentIndex;
