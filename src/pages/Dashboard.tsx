import { useEffect, useState } from "react";
import useMediaQuery, { useContent } from "../hooks/useContent";
import { CreateContentModal } from "../components/CreateContentModal";
import { Button } from "../components/Button";
import { PlusIcons } from "../icons/PlusIcons";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { ShareIcon } from "../icons/ShareIcons";
import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile); 

  
  useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    refresh();
  }, [modalOpen]);

  return (
    <div>
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isMobile={isMobile}
      />

    
      <div
        className={`p-4 min-h-screen bg-gray-100 border-2 transition-all duration-300 ${
          sidebarOpen && !isMobile ? "ml-72" : "ml-0"
        }`}
      >

        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />

     
        <div className="flex justify-end gap-4">
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            variants="primary"
            text="Add content"
            startIcon={<PlusIcons />}
          />
          <Button
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/brain/share`,
                {
                  share: true,
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                }
              );
              const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
              alert(shareUrl);
            }}
            variants="secondary"
            text="Share brain"
            startIcon={<ShareIcon />}
          />
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          {contents.map(({ type, link, title }, index) => (
            <Card key={index} type={type} link={link} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
}