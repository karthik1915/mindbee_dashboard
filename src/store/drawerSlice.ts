import { createSlice } from "@reduxjs/toolkit";
import { ApiDataType } from "@/types/apiDataType"; // Adjust path as needed

export interface DrawerState {
  isOpen: boolean;
  drawerData: ApiDataType | null; // Example type, adjust as per your data structure
}

const initialState: DrawerState = {
  isOpen: false,
  drawerData: null, // Initial empty array or default data
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.isOpen = true;
    },
    closeDrawer: (state) => {
      state.isOpen = false;
    },
    toggleDrawer: (state) => {
      state.isOpen = !state.isOpen;
    },
    setDrawerData: (state, action) => {
      state.drawerData = action.payload;
    },
  },
});

export const { openDrawer, closeDrawer, toggleDrawer, setDrawerData } =
  drawerSlice.actions;
export default drawerSlice.reducer;
