import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../../utils/baseUrl';
// import { getOrdersByEmail } from '../../../../../backend/src/orders/order.controller';

const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBaseUrl()}/api/orders`,
        credentials: 'include'
    }),
    tagTypes: ['Order'],
    endpoints: (builder) => ({
        createOrder: builder.mutation ({
            query: (newOrder) => ({
                url: '/',
                method: 'POST',
                body: newOrder,
                credentials: 'include'
            })
        }),
        getOrdersByEmail: (builder.query) ({
            query: (email) => ({
                url: `/email/${email}`,
            }),
            providesTags: ['Order']
        })
    })
})

export const { useCreateOrderMutation, useGetOrdersByEmailQuery } = orderApi;
export default orderApi;