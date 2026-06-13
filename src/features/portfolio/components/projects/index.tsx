import { CollapsibleList } from "@/components/collapsible-list"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { getServerT } from "@/lib/i18n/server-t"

import { ProjectItem } from "./project-item"

const ID = "projects"

export async function Projects() {
  const { t } = await getServerT()
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>{t("section.projects")}</a>
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={PROJECTS}
        max={4}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  )
}
