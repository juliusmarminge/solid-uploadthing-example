import { generateComponents } from "@uploadthing/solid";

import type { OurFileRouter } from "./router";

const url = `http://localhost:${process.env.PORT ?? 3000}`;

export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>(url);
