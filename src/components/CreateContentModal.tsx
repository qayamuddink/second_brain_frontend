
import axios from "axios";
import { CrossIcon } from "../icons/CrossIcons";
import { Button } from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../config";
import { useRef, useState } from "react";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

interface ModelType {
  open: boolean;
  onClose: () => void;
}

export function CreateContentModal({ open, onClose }: ModelType) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        title,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    onClose();
  }

  return (
    <>
      {open && (
        <>
          {/* Overlay */}
          <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60"></div>

          {/* Modal */}
          <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg w-full max-w-md">
              <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                  <CrossIcon />
                </div>
              </div>
              <div>
                <Input reference={titleRef} placeholder={"Title"} />
                <Input reference={linkRef} placeholder={"Link"} />
              </div>
              <div>
                <h1>Type</h1>
                <div className="flex gap-1 justify-center pb-2">
                  <Button
                    text="Youtube"
                    variants={type === ContentType.Youtube ? "primary" : "secondary"}
                    onClick={() => {
                      setType(ContentType.Youtube);
                    }}
                  />
                  <Button
                    text="Twitter"
                    variants={type === ContentType.Twitter ? "primary" : "secondary"}
                    onClick={() => {
                      setType(ContentType.Twitter);
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <Button onClick={addContent} variants="primary" text="Submit" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
