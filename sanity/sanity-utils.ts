import { createClient, groq } from "next-sanity";
import { Procedure } from "@/types/Procedure";
import { Why } from "@/types/Why";

export async function getProcedures(): Promise<Procedure[]> {
  const procedure = createClient({
    projectId: "4poviy2p",
    dataset: "production",
    apiVersion: "2024-08-22",
    useCdn: true,
    token: process.env.SANITY_API_TOKEN,
  });
  return procedure.fetch(
    groq`*[_type =='procedure']{
    _id,
    _createdAt,
    name,
    'slug': slug.current,
    'image': image.asset->url,
    url, 
    content
    }`
  );
}

export async function getWhys(): Promise<Why[]> {
  const why = createClient({
    projectId: "4poviy2p",
    dataset: "production",
    apiVersion: "2024-08-22",
    useCdn: true,
    token: process.env.SANITY_API_TOKEN,
  });
  return why.fetch(
    groq`*[_type =='why']{
    _id,
    _createdAt,
    name,
    'slug': slug.current,
    'image': image.asset->url,
    url, 
    content
    }`
  );
}
