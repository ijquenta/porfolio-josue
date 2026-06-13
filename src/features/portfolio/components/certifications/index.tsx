import { CollapsibleList } from "@/components/collapsible-list"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { CERTIFICATIONS } from "@/features/portfolio/data/certifications"
import { getServerT } from "@/lib/i18n/server-t"

import { CertificationItem } from "./certification-item"

const ID = "certs"

export async function Certifications() {
  const { t } = await getServerT()
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>{t("section.certifications")}</a>
          <PanelTitleSup>({CERTIFICATIONS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={CERTIFICATIONS}
        max={6}
        renderItem={(item) => <CertificationItem certification={item} />}
      />
    </Panel>
  )
}
