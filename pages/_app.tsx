import '../styles/globals.css';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function App({ Component, pageProps }: any) {
  const pathname = usePathname()
  const excludedPages = ['/callback']
  const shouldTrack = !excludedPages.some(page =>
    pathname !== null && (pathname === page || pathname.startsWith(page + '/')
    ));
  return (
    <>
      <Component {...pageProps} />
      {shouldTrack && <Script src="https://scripts.simpleanalyticscdn.com/latest.js"
        data-ignore-pages="/callback" />}
    </>);
}
