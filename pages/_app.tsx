import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layouts/Layout'
import { RecoilRoot } from 'recoil';
import { AppPropsWithLayout } from '@/lib/types/LayoutTypes';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const SelectedLayout = Component?.getLayout || ((pageProps) => <Layout><Component {...pageProps} /></Layout>);

  return (
    <RecoilRoot >
      {SelectedLayout(<Component {...pageProps} />)}
    </RecoilRoot>)
}
