import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from './Slice';

export const store = configureStore({
    reducer: {
        'Zondra': sliceReducer
    }

    // 'Zondra': sliceReducer
})
  