import '@/styles/globals.css'
import Layout from '@/components/layouts/Layout'
import { RecoilRoot } from 'recoil';
import { AppPropsWithLayout } from '@/lib/types/LayoutTypes';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const SelectedLayout = Component?.getLayout || ((pageProps) => <Layout><Component {...pageProps} /></Layout>);

  return (
    <RecoilRoot >
        <Script
    			strategy="beforeInteractive"
    			src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_MAPS_CLEINT_ID}`}
    		></Script>
      {SelectedLayout(<Component {...pageProps} />)}
    </RecoilRoot>)
}
