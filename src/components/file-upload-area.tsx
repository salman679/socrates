import { useState } from "react";
import icon1 from "../assets/Icons1.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

import cloud from "../assets/icon=cloud.svg";
import icon2 from "../assets/Icons2.svg";
import dropbox from "../assets/—Pngtree—dropbox icon_3584851.png";
import drive from "../assets/image 83.png";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Sparkles, X } from "lucide-react";

type FileItem = {
  id: string;
  name: string;
  type: string;
  forceOCR: boolean;
};

export function FileUploadArea() {
  const [files, setFiles] = useState<FileItem[]>([
    { id: "1", name: "Report_file.pdf", type: "pdf", forceOCR: false },
    { id: "2", name: "Article.docs", type: "docs", forceOCR: false },
  ]);

  const removeFile = (id: string) => {
    setFiles(files.filter((file) => file.id !== id));
  };

  const toggleOCR = (id: string) => {
    setFiles(
      files.map((file) =>
        file.id === id ? { ...file, forceOCR: !file.forceOCR } : file
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col items-center justify-center min-h-[calc(100vh-40px)]">
      <div className="w-full space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
            Add Files to{" "}
            <img
              src={cloud}
              alt="cloud"
              className="h-14 w-14 text-blue-500 bg-neutral-800 p-2 rounded-lg -rotate-12"
            />{" "}
            Cloud Chat
          </h1>
          <div>
            <p className="text-muted-foreground">
              Your files will not be stored on our servers and no AI models will
              be trained.
            </p>
            <p>
              <span className="text-amber-500">
                Supported File Types: .docx, .pdf, .epub, and many text
                filetypes
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="bg-neutral-800 rounded-2xl p-4 flex flex-row items-center gap-2">
            <img src={icon1} className="h-10 w-10" alt="upload icon" />
            <h3 className="font-medium">
              Drag & drop local files here,
              <br /> or click to select
            </h3>
          </div>

          <div className=" bg-neutral-800 rounded-lg p-4 flex flex-col">
            <div className="flex items-center gap-2">
              <img src={icon2} alt="icon2" />

              <div>
                <h3 className="font-medium">Enter in a public URL:</h3>
                <div className="flex gap-2">
                  <Input
                    placeholder="https://example.com/file.pdf"
                    className="bg-neutral-700  border-none rounded-l-full w-fit focus:outline-none focus:ring-0 focus-visible:ring-0"
                  />
                  <Button className="bg-neutral-500 rounded-full -ml-5 cursor-pointer">
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800 rounded-2xl p-4 flex flex-row items-center gap-2">
            <img src={dropbox} className="w-10 h-10" alt="upload icon" />
            <h3 className="font-medium">Add files from Dropbox</h3>
          </div>

          <div className="bg-neutral-800 rounded-2xl p-4 flex flex-row items-center gap-4">
            <div className="h-10 w-10">
              <img src={drive} className="h-full w-full" alt="upload icon" />
            </div>
            <h3 className="font-medium">Add files from Google Drive</h3>
          </div>
        </div>

        {files.length > 0 && (
          <div className="rounded-full bg-neutral-800 p-3 space-y-2">
            <div className="flex flex-row items-center gap-2">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="p-1 rounded-full bg-neutral-700 flex flex-row gap-2"
                >
                  <div className="h-6 w-6 flex flex-col items-center justify-center">
                    {file.type === "pdf" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FF5733"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.5 17h-1v-6h1v6zm-.5-9c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#4285F4"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17h-2v-6h2v6zm-2-8v-2h2v2h-2zm6 8h-2v-8h2v8zm-2-10v-2h2v2h-2zm6 10h-2v-4h2v4zm-2-6v-2h2v2h-2z" />
                      </svg>
                    )}
                  </div>
                  <span className="">{file.name}</span>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id={`ocr-${file.id}`}
                      checked={file.forceOCR}
                      onCheckedChange={() => toggleOCR(file.id)}
                    />
                    <label
                      htmlFor={`ocr-${file.id}`}
                      className="text-sm text-muted-foreground"
                    >
                      Force OCR
                    </label>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 rounded-full"
                      onClick={() => removeFile(file.id)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-center gap-4 pt-4">
          <Button className="px-12 py-6 text-lg rounded-full text-white border border-amber-500 hover:bg-amber-500/20 cursor-pointer">
            Start
          </Button>
          <span className="text-white">or</span>

          <Button className="px-6 py-6 text-lg bg-amber-500 hover:bg-amber-600 rounded-full">
            <Sparkles className="h-5 w-5 mr-2" />
            Start with Deep Dive
          </Button>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <p className="bg-white text-black px-4 py-2 cursor-pointer rounded-full">
                  ?
                </p>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>
                  Deep Dive processes documents completely by using "augmented
                  context" to provide comprehensive answers. Run once per chat
                  to unlock Table AI and Prompt Loops
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
