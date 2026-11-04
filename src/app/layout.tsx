import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
export const metadata:Metadata={metadataBase:new URL('https://astromaz-website.vercel.app'),title:{default:'ASTROMAZ | Aluminium, Steel & Interior Solutions',template:'%s | ASTROMAZ'},description:'Design, fabrication, supply, installation, repairs and renovation solutions for commercial and residential spaces in Harare, Zimbabwe.',openGraph:{type:'website',locale:'en_ZW',siteName:'ASTROMAZ',title:'ASTROMAZ | Spaces shaped with precision.',description:'Aluminium and glass works, shopfitting, cabinetry, steel fabrication, ceilings and renovations.'},twitter:{card:'summary_large_image',title:'ASTROMAZ | Spaces shaped with precision.',description:'Design. Fabrication. Installation. Complete solutions for commercial and residential spaces.'},icons:{icon:'/favicon.svg'},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>}
