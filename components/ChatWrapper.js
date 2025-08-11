// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import LiveChatCard from './LiveChatCard';

// export default function ChatWrapper() {
//   const [showChat, setShowChat] = useState(false);

//   const toggleChat = () => setShowChat(!showChat);

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//         <AnimatePresence>
//             {showChat && (
//             <motion.div
//                 className="mt-2"
//                 initial={{ opacity: 0, y: 100 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 100 }}
//                 transition={{ duration: 0.3 }}
//             >
//                 <LiveChatCard />
//             </motion.div>
//             )}
//         </AnimatePresence>
//         <button
//             onClick={toggleChat}
//             className="bg-blue-600 text-white px-4 py-2 rounded shadow"
//         >
//             {showChat ? 'Hide Chat' : 'Live Chat'}
//         </button>
//     </div>
//   );
// }
