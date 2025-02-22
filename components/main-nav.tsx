"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

/*
 * note(classname)-1
 * Thats how we add className prop to components
 * */

const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathName = usePathname(); // for current route styling
  const params = useParams();
  const routes = [
    {
      label: "Overview",
      href: `/${params.storeId}`,
      active: pathName === `/${params.storeId}`,
    },
    {
      label: "Billboards",
      href: `/${params.storeId}/billboards`,
      active: pathName === `/${params.storeId}/billboards`,
    },
    {
      label: "Categories",
      href: `/${params.storeId}/categories`,
      active: pathName === `/${params.storeId}/categories`,
    },
    {
      label: "Sizes",
      href: `/${params.storeId}/sizes`,
      active: pathName === `/${params.storeId}/sizes`,
    },
    {
      label: "Colors",
      href: `/${params.storeId}/colors`,
      active: pathName === `/${params.storeId}/colors`,
    },
    {
      label: "Products",
      href: `/${params.storeId}/products`,
      active: pathName === `/${params.storeId}/products`,
    },
    {
      label: "Orders",
      href: `/${params.storeId}/orders`,
      active: pathName === `/${params.storeId}/orders`,
    },
    {
      label: "Settings",
      href: `/${params.storeId}/settings`,
      active: pathName === `/${params.storeId}/settings`,
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.label}
          className={cn(
            "text-sm font-medium transition-color hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
