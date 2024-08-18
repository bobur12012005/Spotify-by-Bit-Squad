// import React, { useState } from 'react';
// import ContextMenu from './ContextMenu';

// const SomeComponent = () => {
//     const [contextMenuPosition, setContextMenuPosition] = useState(null);

//     const handleRightClick = (event) => {
//         event.preventDefault();  // Prevent default context menu
//         setContextMenuPosition({ x: event.pageX, y: event.pageY });
//     };

//     const handleAddToFavorites = () => {
//         console.log("Added to favorites!");
//         setContextMenuPosition(null);  // Hide context menu
//     };

//     return (
//         <div onContextMenu={handleRightClick} style={{ width: '100%', height: '100vh' }}>
//             <p>Right-click anywhere on this area to see the context menu.</p>
//             <ContextMenu position={contextMenuPosition} onAddToFavorites={handleAddToFavorites} />
//         </div>
//     );
// };

// export default SomeComponent;
