'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks, site } from '@/lib/site';
import { Brand } from './brand';
export function Header(){const [open,setOpen]=useState(false);return <header className="site-header"><div className="header-inner"><Brand/><nav className="desktop-nav" aria-label="Main navigation">{navLinks.map(l=><Link key={l.href} href={l.href}>{l.label}</Link>)}</nav><Link className="header-cta" href="/contact">Request a quote <ArrowUpRight size={15}/></Link><button className="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>{open&&<nav className="mobile-nav" aria-label="Mobile navigation">{navLinks.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</Link>)}<a href={`tel:${site.phones[0].replaceAll(' ','')}`}>Call Astromaz</a></nav>}</header>}
