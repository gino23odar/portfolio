import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import Bounds from "@/components/Bounds";
import Heading from "@/components/Heading";
import Avatar from "@/components/Avatar";
import ShuffleHeader from "@/components/ShuffleHeader";
import PDFDownload from "@/components/PDFDownload";


/**
 * Props for `AboutMe`.
 */
export type AboutMeProps = SliceComponentProps<Content.AboutMeSlice>;

/**
 * Component for "AboutMe" Slices.
 */
const AboutMe = ({ slice }: AboutMeProps): JSX.Element => {
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
        <Avatar
          image={slice.primary.avatar}
          className="row-start-1 max-w-3xl md:col-start-2 md:row-end-3 xl:row-end-4"
        />
      </div>
      
      {/* <button
          //linkField={slice.primary.button_link}
          className="lg:m-10 xl:m-12">
          {slice.primary.button_text}
      </button> */}
      <PDFDownload/>
    </Bounds>
  );
};

export default AboutMe;
