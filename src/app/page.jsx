import Homepage from "../Homepage";
import { PageStructuredData } from "../components/PageElements";
import { buildPageMetadata, pageSeo } from "../lib/site";

export const metadata = buildPageMetadata(pageSeo.home);

export default function HomePage() {
  return (
    <>
      <PageStructuredData page={pageSeo.home} type="ProfilePage" />
      <Homepage />
    </>
  );
}
