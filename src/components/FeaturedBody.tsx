import { SliceZone } from "@prismicio/react";
import { Content, DateField } from "@prismicio/client";

import { components } from "@/slices";
import Heading from "@/components/Heading";
import Bounds from "@/components/Bounds";
import ShuffleHeader from "./ShuffleHeader";

const FeaturedBody = ({page}: {page: Content.FeaturedProjectsDocument}) =>{
    
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
            <div className="project-wrap rounded-2xl border-2 border-slate-800 bg-black px-4 py-10 md:px-8 md:py-20">
                <Heading as="h1">
                    <ShuffleHeader text={page.data.title!} />
                </Heading>
                <div className="flex flex-wrap gap-2 md:gap-4 text-chilli overflow-x-auto">
                    {page.tags.map((tag, index) => (
                    <span key={index} className="text-sm md:text-xl font-bold whitespace-nowrap">
                        {tag}
                    </span>
                    ))}
                </div>
                <p className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">
                    {formattedDate}
                </p>
                <div className="prose prose-xl prose-invert mt-8 w-full max-w-none md:mt-12">
                    <SliceZone slices={page.data.slices} components={components} />
                </div>
            </div>
        </Bounds>
    );
  }

export default FeaturedBody;