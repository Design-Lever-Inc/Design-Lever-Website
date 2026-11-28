# Publishing on designleverinc.com

How to add, change and remove articles, spotlights and research reports. You don't need to touch code.

**Where:** [designleverinc.com/studio](https://www.designleverinc.com/studio). Sign in with the account you were invited with.

| Role | Person | Sign-in |
|---|---|---|
| Publishing owner | Design Lever | designleverinc@gmail.com |
| Backup | Ademola Oshingbesan | invited by email |

Every change needs **two people**: one writes, the other approves. That's why there are two editors.

---

## What lives in the Studio

| Section | What it controls |
|---|---|
| **Articles** | Pages at `/articles/...` and the "Field notes and analysis" cards on /research |
| **Spotlights** | Pages at `/spotlights/...` and the "Three data streams" list on /research. Only the first **four** are shown |
| **Research reports** | "The library" on /research: the large flagship card and the list below it |

Everything else on the site (home, Practice, Academy and so on) is still edited in code. Ask Engineering.

## The publishing steps

1. **Write.** Click **+** next to Articles (or Spotlights / Research reports) and fill in the fields. Each field explains itself. Anything red must be fixed before you can publish. Changes save automatically as a *draft*, which nobody outside the Studio can see.
2. **Preview.** Click **Preview** at the top. You'll see the real site with your draft in it. Click any text there to jump to that field.
3. **Send for review.** Click **Send for review** (bottom right). Tell the other editor it's waiting, and use *Notes for the reviewer* to say what to check.
4. **Approve.** The *other* editor opens it, checks it in Preview and clicks **Approve**. You can't approve your own work.
5. **Publish.** Once approved, **Publish** turns on. Click it. The site updates within about a minute.

The **Review** tab on each item records who sent it, who approved it, who published it and when.

## Fixing a mistake on a live page

Edit the item, then go through **Send for review → Approve → Publish** again. The live page doesn't change until you publish.

## Going back to an earlier version (rollback)

1. Open the item and click the **clock icon** (History) at the top right.
2. Pick the version you want and click **Restore**. That becomes a new draft.
3. **Send for review → Approve → Publish.**

**Limit on the Free plan:** history only goes back **3 days**. For anything older, ask Engineering.

## Taking something down

Open the item, click the **⋯** menu next to Publish, then **Unpublish**. The page disappears from the site and the search within about a minute. The draft stays in the Studio. **Delete** removes it for good.

## Research reports

- **Stage** sets the tag shown next to a report (Planned, In production, Open for input, Published).
- **Upload a PDF** to make the button download it. Or paste a **link**, for example to a survey. With neither, the button opens the research contact form.
- Tick **Flagship report** on one report to show it as the large card. Untick it on the old one.

## Images

- Article images are shown 460px tall across the page, so use a wide image (at least 1800px wide).
- Fill in the *Image description* unless the image is purely decorative.
- Share images (Search and sharing tab) should be 1200 × 630.

## Don'ts

- Don't change a **web address** after publishing. Links people have shared will break.
- Don't publish someone else's draft without reading it in Preview first.

## Free plan limits

Design Lever is on Sanity's **Free** plan. Nothing here costs money.

| Limit | What it means for us |
|---|---|
| 20 people | Plenty |
| 2 roles only: Administrator and Viewer | Editors must be **Administrators**. Viewers can only read |
| 3 days of history | Rollbacks within 3 days only |
| 10,000 documents | We have 14 |
| 250k API requests / 1M CDN requests a month | The site uses a small fraction. If it ever runs out, Sanity pauses instead of charging |

Features like comments, tasks and scheduled publishing are **not** on the Free plan, so don't rely on them.

## Who to ask

Studio not loading, a page not updating after 5 minutes, or anything about the Free plan: contact Engineering.
