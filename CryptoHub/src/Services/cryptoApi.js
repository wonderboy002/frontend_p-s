import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiHeaders = {
  "X-RapidAPI-Key": "7a7fcb1e4emsh4664960b35d99f6p1d73cdjsn96524ba304db",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/coins";

const createRequest = (baseUrl) => ({
  baseUrl,
  headers: apiHeaders,
});
export const cryptoApi = createApi({
  reducerPath: "cryptoCoins",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins"),
    }),
  }),
});

export const {
  reducer: cryptoReducer,
  middleware: cryptoMiddleware,
  useGetCryptosQuery,
} = cryptoApi;

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '7a7fcb1e4emsh4664960b35d99f6p1d73cdjsn96524ba304db',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };
