import { createUploadthing } from "uploadthing/next";
import type { FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const uploadRouter = {
  profileImage: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(({ req }) => {
      req;
      //^?
      return { foo: "bar" as const };
    })
    .onUploadComplete(({ metadata }) => {
      metadata;
      //^?
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;
