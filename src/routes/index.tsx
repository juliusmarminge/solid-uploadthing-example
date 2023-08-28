import { UploadButton, UploadDropzone } from "~/uploadthing/client";

export default function Home() {
  return (
    <main>
      <UploadButton endpoint="profileImage" />
      <UploadDropzone endpoint="profileImage" />
    </main>
  );
}
