import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { AiOutlineHome } from "react-icons/ai";
import { RiLayoutBottom2Line } from "react-icons/ri";
import { FaWpforms, FaBars, FaAd } from "react-icons/fa";
import { BiLockAlt } from "react-icons/bi";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

const singletonTypes = new Set([
  "header",
  "footer",
  "pageHome",
  "form",
  "privacyPolicy",
  "topBar",
]);

const config = defineConfig({
  projectId: "4poviy2p",
  dataset: "production",
  title: "Beauty Clinic Website",
  apiVersion: "2024-08-22",
  basePath: "/admin",
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Header")
              .id("header")
              .icon(FaBars)
              .child(S.document().schemaType("header").documentId("header")),
            S.listItem()
              .title("Footer")
              .id("footer")
              .icon(RiLayoutBottom2Line)
              .child(S.document().schemaType("footer").documentId("footer")),
            S.listItem()
              .title("Page Home")
              .id("pageHome")
              .icon(AiOutlineHome)
              .child(
                S.document().schemaType("pageHome").documentId("pageHome")
              ),
            S.listItem()
              .title("Form")
              .id("form")
              .icon(FaWpforms)
              .child(S.document().schemaType("form").documentId("form")),
            S.listItem()
              .title("Top Bar")
              .id("topBar")
              .icon(FaAd)
              .child(S.document().schemaType("topBar").documentId("topBar")),
            S.listItem()
              .title("Privacy Policy")
              .id("privacyPolicy")
              .icon(BiLockAlt)
              .child(
                S.document()
                  .schemaType("privacyPolicy")
                  .documentId("privacyPolicy")
              ),
            // Regular document types
            // S.documentTypeListItem("pageHome").title("Page Home"),
          ]),
    }),
  ],
  schema: {
    types: schemas,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});

export default config;
