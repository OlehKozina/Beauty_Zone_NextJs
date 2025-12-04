import { defineField } from "sanity";
import { FilterIcon as icon } from "@sanity/icons";
import { F } from "../tool";

export const footer = {
  name: "footer",
  type: "document",
  icon,
  fields: [
    F.array({
      name: "navigation",
      of: [{ type: "link" }],
    }),
    F.string({ name: "phone" }),
    F.reference({
      name: "privacyPolicy",
      to: [{ type: "privacyPolicy" }],
    }),
    defineField(
      F.object({
        name: "address",
        fields: [F.string({ name: "name" }), F.string({ name: "link" })],
      })
    ),
    F.array({
      name: "socialLinks",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {
      phone: "phone",
    },
    prepare({ phone }: { phone?: string }) {
      return {
        title: "Footer",
        subtitle: phone ? `${phone || ""}` : "No contact info",
      };
    },
  },
};
