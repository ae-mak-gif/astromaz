import Link from 'next/link';
export function Brand({light=false}:{light?:boolean}) { return <Link href="/" aria-label="Astromaz home" className={`brand ${light?'brand-light':''}`}><span className="brand-mark">A<span>.</span></span><span className="brand-copy"><strong>ASTROMAZ</strong><small>INVESTMENTS</small></span></Link>; }
