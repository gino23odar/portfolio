import { SliceZone } from "@prismicio/react";
import { Content, DateField } from "@prismicio/client";

import { components } from "@/slices";
import Heading from "@/components/Heading";
import Bounds from "@/components/Bounds";

const ContentBody = ({page}: {page: Content.BlogPostDocument}) =>{
    
    const formatDate = (dateStr: DateField) => {
        if(!dateStr) return '';
        const date = new Date(dateStr);

        const options : Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };    

    const formattedDate = formatDate(page.data.date);

    return (
      <Bounds as="article" className="md:px-40">
        <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
          <Heading as="h1">{page.data.title}</Heading>
          <div className="flex gap-4 text-chilli">
            {page.tags.map((tag, index) => (
              <span key={index} className="text-xl font-bold">
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">
            {formattedDate}
          </p>
          <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
            <SliceZone slices={page.data.slices} components={components} />
          </div>
        </div>
      </Bounds>
    );
  }

export default ContentBody;