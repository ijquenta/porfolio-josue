import { compareDesc } from "date-fns"

import { CollapsibleList } from "@/components/collapsible-list"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { BOOKMARKS } from "@/features/portfolio/data/bookmarks"
import { getServerT } from "@/lib/i18n/server-t"

import { BookmarkItem } from "./bookmark-item"

const SORTED_BOOKMARKS = [...BOOKMARKS].sort((a, b) => {
  return compareDesc(new Date(a.bookmarkedAt), new Date(b.bookmarkedAt))
})

const ID = "bookmarks"

export async function Bookmarks() {
  const { t } = await getServerT()
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>{t("section.bookmarks")}</a>
          <PanelTitleSup>({SORTED_BOOKMARKS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={SORTED_BOOKMARKS}
        max={6}
        renderItem={(item) => <BookmarkItem bookmark={item} />}
      />
    </Panel>
  )
}
