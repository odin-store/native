import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./root";

interface Modal {
  isVisiable: boolean;
  title: string;
  desc: string;
  button: React.ReactNode[] | null;
}

const initialize: Modal = {
  isVisiable: false,
  title: "",
  desc: "",
  button: null,
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState: initialize,
  reducers: {
    setModal: (_state, action: PayloadAction<Modal>) => {
      _state = action.payload;
    },
    changeTitle: (_state, action: PayloadAction<string>) => {
      _state.title = action.payload;
    },
    changeDesc: (_state, action: PayloadAction<string>) => {
      _state.desc = action.payload;
    },
    changeVisible: (_state) => {
      _state.isVisiable = !_state.isVisiable;
    },
    changeButtons: (
      _state,
      action: PayloadAction<React.ReactNode[] | null>
    ) => {
      console.log(action.payload);
      _state.button = action.payload;
    },
  },
});

export const {
  setModal,
  changeTitle,
  changeDesc,
  changeButtons,
  changeVisible,
} = ModalSlice.actions;

export const selectModal = (state: RootState) => state.modal;

export default ModalSlice.reducer;
