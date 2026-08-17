import CivicaPoliticaPage from "../../components/CivicaPage";
import { PageStructuredData } from "../../components/PageElements";
import { buildPageMetadata, pageSeo } from "../../lib/site";

export const metadata = buildPageMetadata(pageSeo.civica);

export default function CivicaPage() {
  return (
    <>
      <PageStructuredData page={pageSeo.civica} type="CollectionPage" />
      <CivicaPoliticaPage />
    </>
  );
}
