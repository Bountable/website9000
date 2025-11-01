import type { NavItem } from '../types/navigation';

export const mainLinks: NavItem[] = [
  { href: '/', label: 'Home page', icon: 'fa-solid fa-house', active: true },
  { href: '/aboutme', label: 'About Me', icon: 'fa-regular fa-star' },
  { href: '/resume', label: 'Resume', icon: 'fa-regular fa-id-card' },
  { href: '/contact', label: 'Contact', icon: 'fa-regular fa-envelope' },
  { href: '/portfolio', label: 'Portfolio', icon: 'fa-regular fa-star' },
  { href: '/publickey', label: 'public key', icon: 'fa-regular fa-key' },

];

export const toolLinks: NavItem[] = [
  { href: '/fun', label: 'Fun' },
  { href: '/tool/file-converter', label: 'File converter' },
  { href: '/TempoTapper', label: 'Tempo Tapper' },

];
