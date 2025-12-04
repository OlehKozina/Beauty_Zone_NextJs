import { PortableTextBlock } from "next-sanity";
import { FormType } from "./ContactType";

export type HeroType = {
  heading: string;
  label?: string;
  videoUrl?: string;
  privacyPolicy?: PortableTextBlock;
  form?: FormType;
  content?: PortableTextBlock;
  button?: {
    name?: string;
    link?: string;
  };
};
