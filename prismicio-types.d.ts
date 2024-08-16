// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogPostDocumentDataSlicesSlice = TextBlockSlice;

/**
 * Content for Blog Post documents
 */
interface BlogPostDocumentData {
  /**
   * Title field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Date field in *Blog Post*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * Preview field in *Blog Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.preview
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  preview: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Blog Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogPostDocumentDataSlicesSlice> /**
   * Meta Title field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog_post.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog_post.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Blog Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Blog Post document from Prismic
 *
 * - **API ID**: `blog_post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogPostDocumentData>,
    "blog_post",
    Lang
  >;

type HomepageDocumentDataSlicesSlice = HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | ContentIndexSlice
  | LearningNextSlice
  | LearningPageSlice
  | TechListSlice
  | AboutMeSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type ProjectsDocumentDataSlicesSlice = never;

/**
 * Content for Projects documents
 */
interface ProjectsDocumentData {
  /**
   * Title field in *Projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Date field in *Projects*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * Preview field in *Projects*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.preview
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  preview: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Projects*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectsDocumentDataSlicesSlice> /**
   * Meta Title field in *Projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: projects.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: projects.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Projects*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Projects document from Prismic
 *
 * - **API ID**: `projects`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectsDocumentData>,
    "projects",
    Lang
  >;

/**
 * Item in *Settings → Nav Item*
 */
export interface SettingsDocumentDataNavItemItem {
  /**
   * Link field in *Settings → Nav Item*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.nav_item[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Nav Item*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.nav_item[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Name field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Nav Item field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.nav_item[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  nav_item: prismic.GroupField<Simplify<SettingsDocumentDataNavItemItem>>;

  /**
   * CTA Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;

  /**
   * CTA Label field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta_label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField;

  /**
   * Github Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.github_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  github_link: prismic.LinkField;

  /**
   * LinkedIn Link field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.linkedin_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linkedin_link: prismic.KeyTextField /**
   * Meta Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_title
   * - **Tab**: SEO and Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: SEO and Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: SEO and Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | BlogPostDocument
  | HomepageDocument
  | PageDocument
  | ProjectsDocument
  | SettingsDocument;

/**
 * Primary content in *AboutMe → Default → Primary*
 */
export interface AboutMeSliceDefaultPrimary {
  /**
   * Heading field in *AboutMe → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Description field in *AboutMe → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Button Text field in *AboutMe → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.default.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *AboutMe → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Avatar field in *AboutMe → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.default.primary.avatar
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  avatar: prismic.ImageField<never>;
}

/**
 * Default variation for AboutMe Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutMeSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutMeSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutMe*
 */
type AboutMeSliceVariation = AboutMeSliceDefault;

/**
 * AboutMe Shared Slice
 *
 * - **API ID**: `about_me`
 * - **Description**: AboutMe
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutMeSlice = prismic.SharedSlice<
  "about_me",
  AboutMeSliceVariation
>;

/**
 * Primary content in *ContentIndex → Default → Primary*
 */
export interface ContentIndexSliceDefaultPrimary {
  /**
   * Heading field in *ContentIndex → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_index.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Content Type field in *ContentIndex → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: content_index.default.primary.content_type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  content_type: prismic.SelectField<"Blog" | "Projects">;

  /**
   * Description field in *ContentIndex → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_index.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Check Out field in *ContentIndex → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_index.default.primary.check_out
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  check_out: prismic.KeyTextField;

  /**
   * Item Image field in *ContentIndex → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: content_index.default.primary.item_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  item_image: prismic.ImageField<never>;
}

/**
 * Default variation for ContentIndex Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentIndexSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContentIndexSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContentIndex*
 */
type ContentIndexSliceVariation = ContentIndexSliceDefault;

/**
 * ContentIndex Shared Slice
 *
 * - **API ID**: `content_index`
 * - **Description**: ContentIndex
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentIndexSlice = prismic.SharedSlice<
  "content_index",
  ContentIndexSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * First Name field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.first_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  first_name: prismic.KeyTextField;

  /**
   * Last Name field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.last_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  last_name: prismic.KeyTextField;

  /**
   * Tag Line field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.tag_line
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tag_line: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *LearningNext → Default → Primary → Software*
 */
export interface LearningNextSliceDefaultPrimarySoftwareItem {
  /**
   * Name field in *LearningNext → Default → Primary → Software*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: learning_next.default.primary.software[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Logo field in *LearningNext → Default → Primary → Software*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: learning_next.default.primary.software[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Related field in *LearningNext → Default → Primary → Software*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: learning_next.default.primary.software[].related
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  related: prismic.KeyTextField;

  /**
   * Related Logo field in *LearningNext → Default → Primary → Software*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: learning_next.default.primary.software[].related_logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  related_logo: prismic.ImageField<never>;
}

/**
 * Primary content in *LearningNext → Default → Primary*
 */
export interface LearningNextSliceDefaultPrimary {
  /**
   * Heading field in *LearningNext → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: learning_next.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Software field in *LearningNext → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: learning_next.default.primary.software[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  software: prismic.GroupField<
    Simplify<LearningNextSliceDefaultPrimarySoftwareItem>
  >;
}

/**
 * Default variation for LearningNext Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LearningNextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LearningNextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *LearningNext*
 */
type LearningNextSliceVariation = LearningNextSliceDefault;

/**
 * LearningNext Shared Slice
 *
 * - **API ID**: `learning_next`
 * - **Description**: LearningNext
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LearningNextSlice = prismic.SharedSlice<
  "learning_next",
  LearningNextSliceVariation
>;

/**
 * Item in *CurrentlyLearning → Default → Primary → CurrentlyLearning*
 */
export interface LearningPageSliceDefaultPrimaryCurrentlylearningItem {
  /**
   * Name field in *CurrentlyLearning → Default → Primary → CurrentlyLearning*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: learning_page.default.primary.currentlylearning[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Logo field in *CurrentlyLearning → Default → Primary → CurrentlyLearning*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: learning_page.default.primary.currentlylearning[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Primary content in *CurrentlyLearning → Default → Primary*
 */
export interface LearningPageSliceDefaultPrimary {
  /**
   * Heading field in *CurrentlyLearning → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: learning_page.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * CurrentlyLearning field in *CurrentlyLearning → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: learning_page.default.primary.currentlylearning[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  currentlylearning: prismic.GroupField<
    Simplify<LearningPageSliceDefaultPrimaryCurrentlylearningItem>
  >;
}

/**
 * Default variation for CurrentlyLearning Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LearningPageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LearningPageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CurrentlyLearning*
 */
type LearningPageSliceVariation = LearningPageSliceDefault;

/**
 * CurrentlyLearning Shared Slice
 *
 * - **API ID**: `learning_page`
 * - **Description**: LearningPage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LearningPageSlice = prismic.SharedSlice<
  "learning_page",
  LearningPageSliceVariation
>;

/**
 * Item in *TechList → Default → Primary → TechStack*
 */
export interface TechListSliceDefaultPrimaryTechstackItem {
  /**
   * Name field in *TechList → Default → Primary → TechStack*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.techstack[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Color field in *TechList → Default → Primary → TechStack*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.techstack[].color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  color: prismic.ColorField;
}

/**
 * Item in *TechList → Default → Primary → SQL*
 */
export interface TechListSliceDefaultPrimarySqlItem {
  /**
   * Name field in *TechList → Default → Primary → SQL*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.sql[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Logo field in *TechList → Default → Primary → SQL*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.sql[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Item in *TechList → Default → Primary → NoSQL*
 */
export interface TechListSliceDefaultPrimaryNosqlItem {
  /**
   * Name field in *TechList → Default → Primary → NoSQL*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.nosql[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Logo field in *TechList → Default → Primary → NoSQL*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.nosql[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Item in *TechList → Default → Primary → LLMs*
 */
export interface TechListSliceDefaultPrimaryLlmsItem {
  /**
   * Name field in *TechList → Default → Primary → LLMs*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.llms[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;
}

/**
 * Item in *TechList → Default → Primary → AI Framework*
 */
export interface TechListSliceDefaultPrimaryAiFrameworkItem {
  /**
   * Name field in *TechList → Default → Primary → AI Framework*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.ai_framework[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Logo field in *TechList → Default → Primary → AI Framework*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.ai_framework[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Item in *TechList → Default → Primary → Services*
 */
export interface TechListSliceDefaultPrimaryServicesItem {
  /**
   * Name field in *TechList → Default → Primary → Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.services[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Logo field in *TechList → Default → Primary → Services*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.services[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Item in *TechList → Default → Primary → tech*
 */
export interface TechListSliceDefaultPrimaryTechItem {
  /**
   * name field in *TechList → Default → Primary → tech*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.tech[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * description field in *TechList → Default → Primary → tech*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.tech[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * logo field in *TechList → Default → Primary → tech*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.tech[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Primary content in *TechList → Default → Primary*
 */
export interface TechListSliceDefaultPrimary {
  /**
   * Heading field in *TechList → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * TechStack field in *TechList → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.techstack[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  techstack: prismic.GroupField<
    Simplify<TechListSliceDefaultPrimaryTechstackItem>
  >;

  /**
   * Databases field in *TechList → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.databases
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  databases: prismic.KeyTextField;

  /**
   * SQLBool field in *TechList → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: tech_list.default.primary.sqlbool
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  sqlbool: prismic.BooleanField;

  /**
   * SQL field in *TechList → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.sql[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  sql: prismic.GroupField<Simplify<TechListSliceDefaultPrimarySqlItem>>;

  /**
   * NoSQL field in *TechList → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.nosql[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  nosql: prismic.GroupField<Simplify<TechListSliceDefaultPrimaryNosqlItem>>;

  /**
   * Artificial Intelligence field in *TechList → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.artificial_intelligence
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  artificial_intelligence: prismic.KeyTextField;

  /**
   * LLMs field in *TechList → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.llms[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  llms: prismic.GroupField<Simplify<TechListSliceDefaultPrimaryLlmsItem>>;

  /**
   * AI Framework field in *TechList → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.ai_framework[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  ai_framework: prismic.GroupField<
    Simplify<TechListSliceDefaultPrimaryAiFrameworkItem>
  >;

  /**
   * Deployment field in *TechList → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.deployment
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  deployment: prismic.KeyTextField;

  /**
   * Services field in *TechList → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.services[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  services: prismic.GroupField<
    Simplify<TechListSliceDefaultPrimaryServicesItem>
  >;

  /**
   * Others field in *TechList → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.currently
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  currently: prismic.KeyTextField;

  /**
   * tech field in *TechList → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_list.default.primary.tech[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  tech: prismic.GroupField<Simplify<TechListSliceDefaultPrimaryTechItem>>;
}

/**
 * Default variation for TechList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TechListSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TechListSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TechList*
 */
type TechListSliceVariation = TechListSliceDefault;

/**
 * TechList Shared Slice
 *
 * - **API ID**: `tech_list`
 * - **Description**: TechList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TechListSlice = prismic.SharedSlice<
  "tech_list",
  TechListSliceVariation
>;

/**
 * Primary content in *TextBlock → Default → Primary*
 */
export interface TextBlockSliceDefaultPrimary {
  /**
   * Text Block field in *TextBlock → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.default.primary.text_block
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_block: prismic.RichTextField;
}

/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TextBlock*
 */
type TextBlockSliceVariation = TextBlockSliceDefault;

/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: TextBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSlice = prismic.SharedSlice<
  "text_block",
  TextBlockSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogPostDocument,
      BlogPostDocumentData,
      BlogPostDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      ProjectsDocument,
      ProjectsDocumentData,
      ProjectsDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavItemItem,
      AllDocumentTypes,
      AboutMeSlice,
      AboutMeSliceDefaultPrimary,
      AboutMeSliceVariation,
      AboutMeSliceDefault,
      ContentIndexSlice,
      ContentIndexSliceDefaultPrimary,
      ContentIndexSliceVariation,
      ContentIndexSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      LearningNextSlice,
      LearningNextSliceDefaultPrimarySoftwareItem,
      LearningNextSliceDefaultPrimary,
      LearningNextSliceVariation,
      LearningNextSliceDefault,
      LearningPageSlice,
      LearningPageSliceDefaultPrimaryCurrentlylearningItem,
      LearningPageSliceDefaultPrimary,
      LearningPageSliceVariation,
      LearningPageSliceDefault,
      TechListSlice,
      TechListSliceDefaultPrimaryTechstackItem,
      TechListSliceDefaultPrimarySqlItem,
      TechListSliceDefaultPrimaryNosqlItem,
      TechListSliceDefaultPrimaryLlmsItem,
      TechListSliceDefaultPrimaryAiFrameworkItem,
      TechListSliceDefaultPrimaryServicesItem,
      TechListSliceDefaultPrimaryTechItem,
      TechListSliceDefaultPrimary,
      TechListSliceVariation,
      TechListSliceDefault,
      TextBlockSlice,
      TextBlockSliceDefaultPrimary,
      TextBlockSliceVariation,
      TextBlockSliceDefault,
    };
  }
}
