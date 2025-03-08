import { Sidebar } from "@/components/sidebar";
import { FileUploadArea } from "@/components/file-upload-area";

export default function Home() {
  return (
    <div className="flex h-screen bg-neutral-800 text-white p-2 md:p-4">
      <Sidebar />
      <main className="flex-1 overflow-auto bg-neutral-700/30 rounded-2xl">
        <div className="flex items-center justify-center p-4 text-sm">
          <div className="flex items-center gap-2 max-w-screen-lg mx-auto bg-neutral-800 rounded-full p-2">
            <div className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-amber-500"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>
                The web version does not display local chats. To access all
                features, please
              </span>
            </div>
            <a href="#" className="text-amber-500 hover:underline">
              install the app.
            </a>
          </div>
        </div>
        <FileUploadArea />
      </main>
    </div>
  );
}
