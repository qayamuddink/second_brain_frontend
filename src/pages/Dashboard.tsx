
// import { useEffect, useState } from "react";
// import { useContent } from "../hooks/useContent";
// import { CreateContentModal } from "../components/CreateContentModal";
// import { Button } from "../components/Button";
// import { PlusIcons } from "../icons/PlusIcons";
// import { BACKEND_URL } from "../config";
// import axios from "axios";
// import { ShareIcon } from "../icons/ShareIcons";
// import { Card } from "../components/Card";
// import { Sidebar } from "../components/Sidebar";


// const useMediaQuery = (query) => {
//   const [matches, setMatches] = useState(false);

//   useEffect(() => {
//     const media = window.matchMedia(query);
//     if (media.matches !== matches) {
//       setMatches(media.matches);
//     }
//     const listener = () => setMatches(media.matches);
//     media.addListener(listener);
//     return () => media.removeListener(listener);
//   }, [matches, query]);

//   return matches;
// };


// export function Dashboard() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const {contents, refresh} = useContent();

//   const [sidebarOpen ,setSidebarOpen] = useState(true) ;
  
//   useEffect(() => {
//     refresh();
//   }, [modalOpen])

//   return <div>
//     <Sidebar />
//     <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
//       <CreateContentModal open={modalOpen} onClose={() => {
//         setModalOpen(false);
//       }} />
//       <div className="flex justify-end gap-4">
//         <Button onClick={() => {
//           setModalOpen(true)
//         }} variants="primary" text="Add content" startIcon={<PlusIcons />}></Button>
//         <Button onClick={async () => {
//             const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
//                 share: true
//             }, {
//                 headers: {
//                     "Authorization": localStorage.getItem("token")
//                 }
//             });
//             const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
//             alert(shareUrl);
//         }} variants="secondary" text="Share brain" startIcon={<ShareIcon />}></Button>
//       </div>

//       <div className="flex gap-4 flex-wrap">
//         {/* {JSON.stringify(contents)} */}
//         {contents.map(({type, link, title} ,index) => <Card key={index}
//             type={type}
//             link={link}
//             title={title}
//         />)}
//       </div>
//     </div>
//   </div>
// }














// import { useEffect, useState } from "react";
// import { useContent } from "../hooks/useContent";
// import { CreateContentModal } from "../components/CreateContentModal";
// import { Button } from "../components/Button";
// import { PlusIcons } from "../icons/PlusIcons";
// import { BACKEND_URL } from "../config";
// import axios from "axios";
// import { ShareIcon } from "../icons/ShareIcons";

// import { Card } from "../components/Card";
// import { Sidebar } from "../components/Sidebar";


// const useMediaQuery = (query :string) :boolean => {
//   const [matches, setMatches] = useState(false);

//   useEffect(() => {
//     const media = window.matchMedia(query);
//     if (media.matches !== matches) {
//       setMatches(media.matches);
//     }
//     const listener = () => setMatches(media.matches);
//     media.addListener(listener);
//     return () => media.removeListener(listener);
//   }, [matches, query]);

//   return matches;
// };

// export function Dashboard() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const { contents, refresh } = useContent();
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const isMobile = useMediaQuery("(max-width: 768px)"); // Detect mobile screens

//   // Automatically close sidebar on mobile
//   useEffect(() => {
//     if (isMobile) {
//       setSidebarOpen(false);
//     } else {
//       setSidebarOpen(true);
//     }
//   }, [isMobile]);

//   useEffect(() => {
//     refresh();
//   }, [modalOpen]);

//   return (
//     <div>
//       {/* Pass sidebarOpen and setSidebarOpen to Sidebar */}
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//       <div
//         className={`p-4 min-h-screen bg-gray-100 border-2 ${
//           sidebarOpen && !isMobile ? "ml-72" : ""
//         }`}
//       >
//         <CreateContentModal
//           open={modalOpen}
//           onClose={() => {
//             setModalOpen(false);
//           }}
//         />
//         <div className="flex justify-end gap-4">
//           <Button
//             onClick={() => {
//               setModalOpen(true);
//             }}
//             variants="primary"
//             text="Add content"
//             startIcon={<PlusIcons />}
//           ></Button>
//           <Button
//             onClick={async () => {
//               const response = await axios.post(
//                 `${BACKEND_URL}/api/v1/brain/share`,
//                 {
//                   share: true,
//                 },
//                 {
//                   headers: {
//                     Authorization: localStorage.getItem("token"),
//                   },
//                 }
//               );
//               const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
//               alert(shareUrl);
//             }}
//             variants="secondary"
//             text="Share brain"
//             startIcon={<ShareIcon />}
//           ></Button>
//         </div>

//         <div className="flex gap-4 flex-wrap">
//           {contents.map(({ type, link, title }, index) => (
//             <Card key={index} type={type} link={link} title={title} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
















// import { useEffect, useState } from "react";
// import { useContent } from "../hooks/useContent";
// import { CreateContentModal } from "../components/CreateContentModal";
// import { Button } from "../components/Button";
// import { PlusIcons } from "../icons/PlusIcons";
// import { BACKEND_URL } from "../config";
// import axios from "axios";
// import { ShareIcon } from "../icons/ShareIcons";
// import { Card } from "../components/Card";
// import { Sidebar } from "../components/Sidebar";

// export function Dashboard() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const { contents, refresh } = useContent();
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   useEffect(() => {
//     refresh();
//   }, [modalOpen]);

//   return (
//     <div>
//       {/* Pass sidebarOpen and setSidebarOpen to Sidebar */}
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//       <div
//         className={`p-4 min-h-screen bg-gray-100 border-2 ${
//           sidebarOpen ? "ml-72" : ""
//         }`}
//       >
//         <CreateContentModal
//           open={modalOpen}
//           onClose={() => {
//             setModalOpen(false);
//           }}
//         />
//         <div className="flex justify-end gap-4">
//           <Button
//             onClick={() => {
//               setModalOpen(true);
//             }}
//             variants="primary"
//             text="Add content"
//             startIcon={<PlusIcons />}
//           ></Button>
//           <Button
//             onClick={async () => {
//               const response = await axios.post(
//                 `${BACKEND_URL}/api/v1/brain/share`,
//                 {
//                   share: true,
//                 },
//                 {
//                   headers: {
//                     Authorization: localStorage.getItem("token"),
//                   },
//                 }
//               );
//               const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
//               alert(shareUrl);
//             }}
//             variants="secondary"
//             text="Share brain"
//             startIcon={<ShareIcon />}
//           ></Button>
//         </div>

//         <div className="flex gap-4 flex-wrap">
//           {contents.map(({ type, link, title }, index) => (
//             <Card key={index} type={type} link={link} title={title} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



















// import { useEffect, useState } from "react";
// import { useContent } from "../hooks/useContent";
// import { CreateContentModal } from "../components/CreateContentModal";
// import { Button } from "../components/Button";
// import { PlusIcons } from "../icons/PlusIcons";
// import { BACKEND_URL } from "../config";
// import axios from "axios";
// import { ShareIcon } from "../icons/ShareIcons";
// import { Card } from "../components/Card";
// import { Sidebar } from "../components/Sidebar";

// export function Dashboard() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const { contents, refresh } = useContent();
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   useEffect(() => {
//     refresh();
//   }, [modalOpen]);

//   return (
//     <div>
//       {/* Pass sidebarOpen and setSidebarOpen to Sidebar */}
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//       <div
//         className={`p-4 min-h-screen bg-gray-100 border-2 ${
//           sidebarOpen ? "ml-72" : ""
//         }`}
//       >
//         <CreateContentModal
//           open={modalOpen}
//           onClose={() => {
//             setModalOpen(false);
//           }}
//         />
//         <div className="flex justify-end gap-4">
//           <Button
//             onClick={() => {
//               setModalOpen(true);
//             }}
//             variants="primary"
//             text="Add content"
//             startIcon={<PlusIcons />}
//           ></Button>
//           <Button
//             onClick={async () => {
//               const response = await axios.post(
//                 `${BACKEND_URL}/api/v1/brain/share`,
//                 {
//                   share: true,
//                 },
//                 {
//                   headers: {
//                     Authorization: localStorage.getItem("token"),
//                   },
//                 }
//               );
//               const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
//               alert(shareUrl);
//             }}
//             variants="secondary"
//             text="Share brain"
//             startIcon={<ShareIcon />}
//           ></Button>
//         </div>

//         <div className="flex gap-4 flex-wrap">
//           {contents.map(({ type, link, title }, index) => (
//             <Card key={index} type={type} link={link} title={title} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }













// import { useEffect, useState } from "react";
// import { useContent } from "../hooks/useContent";
// import { CreateContentModal } from "../components/CreateContentModal";
// import { Button } from "../components/Button";
// import { PlusIcons } from "../icons/PlusIcons";
// import { BACKEND_URL } from "../config";
// import axios from "axios";
// import { ShareIcon } from "../icons/ShareIcons";
// import { Card } from "../components/Card";
// import { Sidebar } from "../components/Sidebar";

// export function Dashboard() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const { contents, refresh } = useContent();
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   useEffect(() => {
//     refresh();
//   }, [modalOpen]);

//   return (
//     <div>
//       {/* Sidebar */}
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* Main Content */}
//       <div
//         className={`p-4 min-h-screen bg-gray-100 border-2 transition-all duration-300 ${
//           sidebarOpen ? "ml-72" : "ml-0"
//         }`}
//       >
//         {/* Modal */}
//         <CreateContentModal
//           open={modalOpen}
//           onClose={() => {
//             setModalOpen(false);
//           }}
//         />

//         {/* Add Content and Share Brain Buttons */}
//         <div className="flex justify-end gap-4">
//           <Button
//             onClick={() => {
//               setModalOpen(true);
//             }}
//             variants="primary"
//             text="Add content"
//             startIcon={<PlusIcons />}
//           />
//           <Button
//             onClick={async () => {
//               const response = await axios.post(
//                 `${BACKEND_URL}/api/v1/brain/share`,
//                 {
//                   share: true,
//                 },
//                 {
//                   headers: {
//                     Authorization: localStorage.getItem("token"),
//                   },
//                 }
//               );
//               const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
//               alert(shareUrl);
//             }}
//             variants="secondary"
//             text="Share brain"
//             startIcon={<ShareIcon />}
//           />
//         </div>

//         {/* Content Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
//           {contents.map(({ type, link, title }, index) => (
//             <Card key={index} type={type} link={link} title={title} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
















// import { useEffect, useState } from "react";
// import { useContent } from "../hooks/useContent";
// import { CreateContentModal } from "../components/CreateContentModal";
// import { Button } from "../components/Button";
// import { PlusIcons } from "../icons/PlusIcons";
// import { BACKEND_URL } from "../config";
// import axios from "axios";
// import { ShareIcon } from "../icons/ShareIcons";
// import { Card } from "../components/Card";
// import { Sidebar } from "../components/Sidebar";

// export function Dashboard() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const { contents, refresh } = useContent();
//   const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar closed by default on mobile

//   useEffect(() => {
//     refresh();
//   }, [modalOpen]);

//   return (
//     <div>
//       {/* Sidebar */}
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* Main Content */}
//       <div
//         className={`p-4 min-h-screen bg-gray-100 border-2 transition-all duration-300 ${
//           sidebarOpen ? "ml-0 md:ml-72" : "ml-0"
//         }`}
//       >
//         {/* Modal */}
//         <CreateContentModal
//           open={modalOpen}
//           onClose={() => {
//             setModalOpen(false);
//           }}
//         />

//         {/* Add Content and Share Brain Buttons */}
//         <div className="flex justify-end gap-4">
//           <Button
//             onClick={() => {
//               setModalOpen(true);
//             }}
//             variants="primary"
//             text="Add content"
//             startIcon={<PlusIcons />}
//           />
//           <Button
//             onClick={async () => {
//               const response = await axios.post(
//                 `${BACKEND_URL}/api/v1/brain/share`,
//                 {
//                   share: true,
//                 },
//                 {
//                   headers: {
//                     Authorization: localStorage.getItem("token"),
//                   },
//                 }
//               );
//               const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
//               alert(shareUrl);
//             }}
//             variants="secondary"
//             text="Share brain"
//             startIcon={<ShareIcon />}
//           />
//         </div>

//         {/* Content Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
//           {contents.map(({ type, link, title }, index) => (
//             <Card key={index} type={type} link={link} title={title} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }















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