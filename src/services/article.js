// It's one specific part of global Store. RTK task
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;



export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        // URL that we awnt o call onto 
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            // key must be in change. 
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com')
            return headers;
        }

    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            // whenever we pass user generated content on URL we nned to wrap it with encodeURIcomponent()
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),

    })
})
// Redux toolkit query automatically creates hook out of endpoint. 
// start hook once we enter url and press submit button : on this case we need to use {useLazyGetSummaryQuery}: 
// useLaxy is to fire endpoint on demand. 
export const { useLazyGetSummaryQuery } = articleApi;