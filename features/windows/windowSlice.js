import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  windows: {},
  zIndex: 1000,
  activeWindow: null,
  bootComplete: false,
};

const windowSlice = createSlice({
  name: 'windows',
  initialState,
  reducers: {
    openWindow: (state, action) => {
      const { id, type, position } = action.payload;
      
      // Check if window already exists
      const existingWindow = Object.values(state.windows).find(w => w.type === type);
      
      if (existingWindow) {
        // Restore existing window
        state.zIndex += 1;
        existingWindow.minimized = false;
        existingWindow.zIndex = state.zIndex;
        state.activeWindow = existingWindow.id;
      } else {
        // Create new window
        state.zIndex += 1;
        state.windows[id] = {
          id,
          type,
          open: true,
          minimized: false,
          maximized: false,
          zIndex: state.zIndex,
          position: position || { x: 100, y: 100 },
          size: { width: 800, height: 600 },
        };
        state.activeWindow = id;
      }
    },
    closeWindow: (state, action) => {
      const id = action.payload;
      delete state.windows[id];
      if (state.activeWindow === id) {
        const remainingWindows = Object.keys(state.windows);
        state.activeWindow = remainingWindows.length > 0 ? remainingWindows[remainingWindows.length - 1] : null;
      }
    },
    minimizeWindow: (state, action) => {
      const id = action.payload;
      if (state.windows[id]) {
        state.windows[id].minimized = true;
      }
    },
    maximizeWindow: (state, action) => {
      const id = action.payload;
      if (state.windows[id]) {
        state.windows[id].maximized = !state.windows[id].maximized;
      }
    },
    setActiveWindow: (state, action) => {
      const id = action.payload;
      if (state.windows[id]) {
        state.zIndex += 1;
        state.windows[id].zIndex = state.zIndex;
        state.activeWindow = id;
      }
    },
    updateWindowPosition: (state, action) => {
      const { id, position } = action.payload;
      if (state.windows[id]) {
        state.windows[id].position = position;
      }
    },
    updateWindowSize: (state, action) => {
      const { id, size } = action.payload;
      if (state.windows[id]) {
        state.windows[id].size = size;
      }
    },
    setBootComplete: (state, action) => {
      state.bootComplete = action.payload;
    },
  },
});

export const {
  openWindow,
  closeWindow,
  minimizeWindow,
  maximizeWindow,
  setActiveWindow,
  updateWindowPosition,
  updateWindowSize,
  setBootComplete,
} = windowSlice.actions;

export default windowSlice.reducer;

