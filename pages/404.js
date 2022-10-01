import Link from "next/link";

import React from "react";
export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Opss...</h1>
      <h2>404 | Sayfa Bulunamadı...</h2>
      <p>
        Lütfen
        <Link href={"/"}>
          <a>Anasayfa</a>
        </Link>
        için tıklayınız...
      </p>
    </div>
  );
}
