import '@/styles/globals.css'
import Layout from '@/components/layouts/Layout'
import { RecoilRoot } from 'recoil';
import { AppPropsWithLayout } from '@/lib/types/LayoutTypes';
import Script from 'next/script';
import { Context, createContext } from 'react';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const SelectedLayout = Component?.getLayout || ((pageProps) => <Layout><Component {...pageProps} /></Layout>);
  const NaverMapContext = createContext<(typeof naver.maps) | null>(null);
  return (
    <NaverMapContext.Provider value={null}>
      <RecoilRoot >
          <Script
            strategy="beforeInteractive"
            src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_MAPS_CLEINT_ID}`}
          ></Script>
        {SelectedLayout(<Component {...pageProps} />)}
      </RecoilRoot>
    </NaverMapContext.Provider>)
}
