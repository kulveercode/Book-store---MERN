import { createApi } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseUrl'

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()/api/books}`,
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem('token');
        if(token) {
            Headers.set('Authorization', `Bearer ${token}`);
        }
        return Headers;
    }
})

const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: 
})
