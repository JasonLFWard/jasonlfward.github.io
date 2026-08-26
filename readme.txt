JASON WARD PHOTOGRAPHY PORTFOLIO
=================================

This repository contains a static photography portfolio presented as an interactive Windows XP-style desktop. The site runs from index.html and loads the photo list from images.json, with the image files stored under images/.

CURRENT FEATURES
----------------
- XP, Windows 2000, and Windows 98 visual themes.
- Desktop icons, movable windows, window resizing, minimize/maximize controls, taskbar, Start menu, and Recycle Bin.
- Photo folders with justified layouts, lazy-loaded images, scrolling, selection, thumbnail sizing, and photo context menus.
- Picture and Fax Viewer with previous/next navigation, slideshow, zoom, pan, rotation, flips, grayscale/sepia/invert filters, image download, copy-link, and wallpaper export.
- MS Paint markup tools including pencil, brush, eraser, text, lines, rectangles, circles, arrows, colors, undo/redo, clear, and saving edited images.
- My Computer and Control Panel for themes, wallpapers, sound effects, admin-protected portfolio editing, uploads, folders, and text documents.
- Firebase-backed synchronization when the hosting environment provides Firebase configuration; local defaults keep the portfolio usable without it.

TOUCH CONTROLS
--------------
- Tap a desktop icon to open it. Drag icons to reposition them.
- Tap a photo to open it in the viewer.
- Pinch with two fingers in the viewer to zoom in or out. Drag a zoomed image with one finger to pan.
- Use two fingers on a photo to open that photo's right-click menu.
- Use two fingers on the desktop background to open the desktop menu.
- Swipe or scroll inside a photo folder to browse its contents.
- In MS Paint mode, draw with one finger or a stylus. The viewer gesture controls are disabled while painting.

MOUSE AND KEYBOARD CONTROLS
---------------------------
- Double-click desktop icons or photos to open them.
- Right-click photos, icons, or the desktop for context menus.
- Use the mouse wheel over the viewer to zoom.
- Drag a zoomed viewer image to pan.
- Arrow Left/Right changes photos. Space advances the slideshow when Paint is closed.
- Ctrl/Cmd+Z undoes Paint markup; Ctrl/Cmd+Y redoes it. Escape closes menus and dialogs.

IMAGE MANIFEST
--------------
images.json is the local fallback manifest. The site first attempts to read the current manifest from the main branch on GitHub, then falls back to the local file. The manifest may contain folders with photo objects containing at least an id and url, plus optional caption and size fields.

To regenerate the manifest after adding images:

    node scripts/generate-image-manifest.mjs

DEVELOPMENT AND DEPLOYMENT
--------------------------
No build step is required. Open index.html directly for local inspection, or serve the repository with any static web server. The production site can be deployed to GitHub Pages or another static host.

The page depends on CDN-hosted React 18, ReactDOM, Babel Standalone, Tailwind CSS, Firebase modules, and Google Fonts, so an internet connection is needed for those hosted dependencies. Local image files remain available from the repository.

CONTENT MANAGEMENT
------------------
The Control Panel's Admin CMS can add, edit, replace, and remove portfolio photos and sections in the current session or Firebase-backed data store. Change the admin password in the password tab when using the CMS. Do not treat the client-side admin password as a security boundary for sensitive data.
