import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import dataReducer, { DataState } from "./dataSlice";
import drawerReducer, { DrawerState } from "./drawerSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    drawer: drawerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = {
  data: DataState;
  drawer: DrawerState;
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
