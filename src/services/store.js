import { configureStore, } from '@reduxjs/toolkit';
import { articleApi } from './article';

//consider store as a cake and reducers allows us to get slices of cake 
export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    // It allows us to do something with the state before we get it in, defalut setup with call back fn
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})