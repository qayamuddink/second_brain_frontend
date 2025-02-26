import { ShareIcon } from "../icons/ShareIcons"

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
  }
  
  export function Card({ title, link, type }: CardProps) {
    return (
      <div className="w-full"> {/* Ensure the card takes full width of its container */}
        <div className="p-6 bg-white rounded-md border border-gray-200 min-h-64">
          {/* Card Header */}
          <div className="flex justify-between">
            <div className="flex items-center text-md">
              <div className="text-gray-500 pr-2">
                <ShareIcon />
              </div>
              {title}
            </div>
            <div className="flex items-center">
              <div className="pr-2 text-gray-500">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <ShareIcon />
                </a>
              </div>
              <div className="text-gray-500">
                <ShareIcon />
              </div>
            </div>
          </div>
  
          {/* Card Content */}
          <div className="pt-4">
            {type === "youtube" && (
              <iframe
                className="w-full h-48" // Fixed height for YouTube iframe
                src={link.replace("watch", "embed").replace("?v=", "/")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
  
            {type === "twitter" && (
              <blockquote className="twitter-tweet">
                <a href={link.replace("x.com", "twitter.com")}></a>
              </blockquote>
            )}
          </div>
        </div>
      </div>
    );
  }