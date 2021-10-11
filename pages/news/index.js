// our-domain.com/news
// Folder = path ^^

import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/1">1</Link>
        </li>
        <li>2</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
