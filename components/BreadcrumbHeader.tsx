'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import { Breadcrumb, BreadcrumbLink, BreadcrumbList } from './ui/breadcrumb';

function BreadcrumbHeader() {
  const pathname = usePathname();
  const paths = pathname === '/' ? [''] : pathname.split('/').slice(1);

  return (
    <div className="flex items-center flex-start">
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((path, index) => (
            <React.Fragment key={index}>
              <BreadcrumbLink className="capitalize" href={`/${path}`}>
                {path === '' ? 'Home' : path}
              </BreadcrumbLink>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbHeader;
