import { BiSpaceBar as icon } from "react-icons/bi";
import { F } from "../tool";

export const spacer = {
  title: "Spacer",
  name: "spacer",
  type: "object",
  icon,
  fields: [
    F.number({
      name: "multiplier",
      options: {
        list: [2, 1.5, 1, 0.5, -0.5, -1, -1.5, -2],
      },
    }),
  ],
  preview: {
    select: {
      multiplier: "multiplier",
    },
    prepare({ multiplier = 1 }) {
      const prefix = multiplier > 0 ? "Increase" : "Decrease";
      return {
        title: `${prefix} vertical space`,
        subtitle: `By factor of ${Math.abs(multiplier)}`,
        media: icon,
      };
    },
  },
};
