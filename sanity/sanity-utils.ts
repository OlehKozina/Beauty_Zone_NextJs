import { createClient } from "next-sanity";
import { componentsQuery } from "./queries/componentsQuery";

const client = createClient({
  apiVersion: "2024-08-22",
  dataset: "production",
  projectId: "4poviy2p",
  useCdn: false,
});

export const formQuery = `{
    name, 
    fields,
    buttonLabel
}
`;

async function fetchNoCache(query: string, params: any = {}) {
  return client.fetch(query, params, { cache: "no-store" });
}

export function getPageHome() {
  return fetchNoCache(
    `*[_type == "pageHome"]{
    hero[0]{
      heading,
      label,
      content,
      "videoUrl": video.asset->url,
      "privacyPolicy": *[_type == "privacyPolicy"][0].content,
      "form": *[_type == "form"][0]${formQuery},
    },
      ${componentsQuery}
    }`
  );
}

export function getHeader() {
  return fetchNoCache(`*[_type == "header"][0]{
    "form": *[_type == "form"][0]${formQuery},
    navigation[]{ title, "slug": slug.current },
    socialLinks,
  }`);
}

export function getFooter() {
  return fetchNoCache(
    `*[_type == "footer"][0]{
    navigation[]{ title, "slug": slug.current },
    phone,
    email,
    address,
    socialLinks,
    "image": image.asset->url,
      "privacyPolicy": *[_type == "privacyPolicy"][0].content,
  }`
  );
}
