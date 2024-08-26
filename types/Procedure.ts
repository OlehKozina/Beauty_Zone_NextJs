import { PortableTextBlock } from "next-sanity";

export type Procedure = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
};
