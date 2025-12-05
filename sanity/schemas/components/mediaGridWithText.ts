import { defineType } from "sanity";
import { FaVideo as icon } from "react-icons/fa";
import { F } from "../tool";

export const mediaGridWithText = defineType(
  F.object({
    name: "mediaGridWithText",
    icon,
    fields: [
      F.text({
        name: "heading",
      }),
      F.string({
        name: "id",
      }),
      F.text({
        name: "text",
        title: "Description",
        rows: 3,
      }),
      F.image({
        name: "imageTop",
        hotspot: true,
      }),
      F.image({
        name: "imageBottom",
        hotspot: true,
      }),
    ],

    preview: {
      select: {
        title: "heading",
        subtitle: "text",
        media: "image",
      },
      prepare({
        title,
        subtitle,
        media,
      }: {
        title?: string;
        subtitle?: string;
        media?: any;
      }) {
        return {
          title: title || "MediaGrid Section",
          subtitle: subtitle
            ? subtitle.slice(0, 50) + "..."
            : "No description yet",
          media,
        };
      },
    },
  })
);
