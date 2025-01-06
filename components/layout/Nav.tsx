"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/data/menu";
export default function Nav() {
  const pathname = usePathname();
  return (
    <>
      <li>
        <Link className={pathname === "/" ? "active" : ""} href="/">
          Home
        </Link>
      </li>
      {menuItems.map((elm, i) => (
        <li key={i} className="has-children">
          <a
            className={`active ${
              elm.subMenu.some(
                (elm3) => pathname.split("/")[1] == elm3.link.split("/")[1]
              )
                ? "active-link"
                : ""
            } `}
            href={elm.link}
          >
            {elm.title}
          </a>
          <ul className="sub-menu">
            {elm.subMenu.map((elm2, i2) => (
              <li key={i2}>
                <Link
                  className={
                    pathname.split("/")[1] == elm2.link.split("/")[1]
                      ? "active-link"
                      : ""
                  }
                  href={elm2.link}
                >
                  {elm2.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}

      <li>
        <Link className={pathname === "/about" ? "active" : ""} href="/about">
          About
        </Link>
      </li>
      <li>
        <Link className={pathname === "/faqs" ? "active" : ""} href="/faqs">
          Faqs
        </Link>
      </li>
      <li>
        <Link
          className={pathname === "/contact" ? "active" : ""}
          href="/contact"
        >
          Contact
        </Link>
      </li>
    </>
  );
}
