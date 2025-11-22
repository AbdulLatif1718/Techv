# TechVerge Africa OS Interface

A fully immersive, animated Operating System-style interface for TechVerge Africa built with Next.js and React.

## 🚀 Features

### 1. Boot Experience
- **Custom Futuristic TechVerge OS Boot Animation**
  - Animated 3D rotating logo with Africa continent
  - Rotating gear icons
  - Terminal-style boot logs
  - Progress bar with glowing gradient
  - Hologram particle effects
  - Smooth fade transition to desktop

### 2. Desktop UI
- **Top Bar**
  - Real-time clock and date
  - TechVerge logo
  - Notifications icon with dropdown
  - Power button (reloads page)
  
- **Desktop Wallpaper**
  - Futuristic African tech theme
  - Dark, high-contrast design
  - Smooth parallax effect on mouse movement
  - Animated pattern overlays

- **Desktop Icons**
  - Floating animation
  - Hover glow effects
  - Double-click to open windows
  - Icons for: Home, About Us, Our Ventures, Team, News, Contact

- **Dock**
  - Bottom dock with app launchers
  - Active window indicators
  - Hover animations
  - Quick access to all apps

### 3. Window System
- **Fully Functional Windows**
  - Draggable windows
  - Resizable windows (drag corner)
  - Minimize/Maximize/Restore
  - Close windows
  - Window stacking (z-index management)
  - Active window highlighting
  - Glassmorphism effects
  - Smooth animations

- **Window Types**
  - **Home Window**: Hero text, stats, recent updates, quick links
  - **About Window**: Mission, story, values, impact metrics
  - **Ventures Window**: Cards showing startups with descriptions
  - **Team Window**: Team member cards with photos and roles
  - **Contact Window**: Contact form and information
  - **Terminal Window**: Interactive terminal with commands (Easter egg!)

### 4. Technical Implementation
- **State Management**: Redux Toolkit for window state
- **Animations**: Framer Motion for smooth animations
- **Styling**: TailwindCSS with custom gradients
- **Performance**: GPU-accelerated animations
- **Responsive**: Works on desktop and tablet

## 📁 Project Structure

```
components/
  OS/
    BootScreen.js          # Boot animation component
    Desktop.js              # Desktop with wallpaper and icons
    DesktopIcon.js          # Individual desktop icon
    TopBar.js              # Top navigation bar
    Dock.js                # Bottom dock
    WindowManager.js       # Manages all windows
    Window.js              # Draggable/resizable window component
    OSInterface.js         # Main OS interface wrapper
    windows/
      HomeWindow.js        # Home page content
      AboutWindow.js       # About page content
      VenturesWindow.js    # Ventures page content
      TeamWindow.js        # Team page content
      ContactWindow.js     # Contact page content
      TerminalWindow.js    # Terminal easter egg

features/
  windows/
    windowSlice.js         # Redux slice for window management
```

## 🎮 Usage

### Opening Windows
1. **Double-click** any desktop icon
2. **Click** an icon in the dock
3. Windows open with smooth animations

### Window Controls
- **Drag**: Click and drag the window header
- **Resize**: Drag the bottom-right corner
- **Minimize**: Click the minimize button (window stays in dock)
- **Maximize**: Click the maximize button
- **Close**: Click the X button

### Terminal Commands
Open the Terminal window and try:
- `help` - Show available commands
- `about` - About TechVerge Africa
- `ventures` - List our ventures
- `team` - Meet our team
- `clear` - Clear terminal
- `exit` - Close terminal

## 🎨 Customization

### Changing Boot Animation
Edit `components/OS/BootScreen.js`:
- Modify boot logs in the `bootLogs` array
- Adjust timing in the `bootSequence` function
- Change colors and animations

### Adding New Windows
1. Create a new component in `components/OS/windows/`
2. Add it to `WindowManager.js`
3. Add icon to `Desktop.js` and `Dock.js`
4. Update window types in `windowSlice.js` if needed

### Styling
- Colors: Edit Tailwind classes (green-400, lime-400, etc.)
- Animations: Modify Framer Motion props
- Effects: Adjust backdrop-blur and opacity values

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the OS interface.

## 🔮 Future Enhancements

### Suggested Upgrades:
1. **Sound Effects**
   - Boot sound
   - Window open/close sounds
   - Notification sounds
   - Toggle in settings

2. **Settings Window**
   - Theme customization
   - Sound toggle
   - Animation speed
   - Wallpaper selection

3. **File System**
   - File explorer window
   - Drag and drop files
   - Folder structure

4. **Notifications System**
   - Real notifications
   - Notification center
   - Action buttons

5. **Multi-monitor Support**
   - Window spanning
   - Multiple desktops

6. **Keyboard Shortcuts**
   - Cmd/Ctrl + W to close
   - Cmd/Ctrl + M to minimize
   - Cmd/Ctrl + T for terminal

7. **Window Snap**
   - Snap to edges
   - Split screen

8. **Search/Spotlight**
   - Global search
   - Quick app launcher

9. **Task Manager**
   - View all windows
   - Force close
   - Performance metrics

10. **Themes**
    - Light mode
    - Dark mode
    - Custom color schemes

## 🐛 Known Issues

- Window resizing could be smoother on very fast movements
- Terminal commands are limited (expandable)
- Mobile responsiveness needs optimization

## 📝 Notes

- The OS interface replaces the traditional landing page on the home route (`/`)
- Other routes (`/about-us`, `/contact`, etc.) still use the traditional layout
- The boot animation plays on every page load (can be cached in future)
- All animations are GPU-accelerated for smooth performance

## 🎯 Design Philosophy

The interface is designed to:
- Feel premium and futuristic
- Showcase African tech innovation
- Provide an immersive user experience
- Maintain excellent performance
- Be intuitive and easy to use

---

Built with ❤️ for TechVerge Africa

