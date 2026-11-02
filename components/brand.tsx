import Link from "next/link";
import { Boxes } from "lucide-react";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand ${light ? "brand-light" : ""}`} href="/" aria-label="DaQube home">
      <span className="brand-mark"><Boxes size={23} strokeWidth={2.2} /></span>
      <span className="brand-word">Da<span>Q</span>ube</span>
    </Link>
  );
}
