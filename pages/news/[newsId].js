// our-domain.com/news/testing
// Filename with [] = Dynamic Page
// /testing = vad som helst
import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // Send a request to the backend API
  // to fetch the news item with newsId

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
