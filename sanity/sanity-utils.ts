import { createClient } from "next-sanity";

const client = createClient({
  apiVersion: "2024-08-22",
  dataset: "production",
  projectId: "4poviy2p",
  useCdn: false,
});

async function fetchNoCache(query: string, params: any = {}) {
  return client.fetch(query, params, { cache: "no-store" });
}

export async function getProcedures() {
  return fetchNoCache(
    `*[_type =='procedure']{
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

export async function getWhys() {
  return fetchNoCache(
    `*[_type =='why']{
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
