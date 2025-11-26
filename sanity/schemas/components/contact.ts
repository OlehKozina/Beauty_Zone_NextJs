import { defineType } from "sanity";
import { MasterDetailIcon as icon } from "@sanity/icons";
import { F } from "../tool";

export const contact = defineType(
  F.object({
    name: "contact",
    title: "Contact",
    icon,
    fields: [
      F.string({
        name: "heading",
      }),
      F.reference({
        name: "form",
        to: [{ type: "form" }],
      }),
      F.string({
        name: "direction",
      }),
    ],
    preview: {
      select: {
        heading: "heading",
      },
      prepare({ heading }: { heading?: string }) {
        return {
          title: heading || "Join the Bakery section",
        };
      },
    },
  })
);
