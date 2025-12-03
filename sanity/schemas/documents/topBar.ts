import { FaBars as icon } from "react-icons/fa";
import { F } from "../tool";

export const topBar = {
  name: "topBar",
  type: "document",
  title: "Top Bar",
  icon,

  fields: [
    F.object({
      name: "address",
      fields: [F.string({ name: "name" }), F.string({ name: "link" })],
    }),
    F.string({
      name: "schedule",
    }),
    F.string({
      name: "phone",
    }),
    F.array({
      name: "socialLinks",
      of: [{ type: "string" }],
    }),
  ],

  preview: {
    select: {},
    prepare({}: {}) {
      return {
        title: "TopBar",
        media: icon,
      };
    },
  },
};
