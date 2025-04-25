'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Stages & Checklist', href: '/stages-checklist' },
  { label: 'Upload Docs', href: '/upload-docs' },
  { label: 'Preferred Vendors', href: '/preferred-vendors' },
  { label: 'Tech Stack', href: '/tech-stack' },
  { label: 'Targets', href: '/targets' },
  { label: 'Zee Sales Targets', href: '/zee-sales-targets' },
  { label: 'MAI Settings', href: '/mai-settings' },
  { label: 'Pending Questions', href: '/pending-questions', badge: 3 },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidenav-bg">
      <div className="sidenav-content">
        <nav className="sidenav-nav">
          <div className="sidenav-tabs">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`sidenav-tab${isActive ? ' active' : ''}`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="sidenav-badge">{item.badge}</span>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
        <div className="mt-auto px-4">
          <span className="sidenav-logout">Logout</span>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;