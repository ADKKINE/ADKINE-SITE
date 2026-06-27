# ADKINE — Your Real Site, Now Editable

This is your **original good-looking site** (the deletedproject16 design — same fonts,
colors, animations, custom cursor, video player) with the "press Publish, it's live"
editor added on top. The look is unchanged. You just gained the ability to edit it.

---

## ⚠️ READ THIS FIRST — copy your images and videos in

This folder does NOT include your actual photos and video files (they're large and live
on your current site). Before you upload, you must add them:

**Images** → put into the `assets/images/` folder:
portrait.jpg, thumb-c0139.jpg, thumb-newcomp.jpg, thumb-tea.jpg, thumb-coffee.jpg,
thumb-exp.jpg, thumb-hair.jpg

**Videos** → put into the `assets/videos/` folder:
c0139.mp4, new_comp.mp4, tea.mp4, coffee.mp4, exp_story.mp4, hair.mp4

### How to get them from your current site (easiest way):
1. Go to **deletedproject16.netlify.app**
2. Right-click the page → **Save as** → choose **"Webpage, Complete"**
3. That downloads an `assets` folder containing `images` and `videos`
4. Copy those files into THIS folder's matching `assets/images` and `assets/videos`

(If Save-as doesn't grab the videos, you can open each one directly, e.g.
deletedproject16.netlify.app/assets/videos/tea.mp4, and download it.)

---

## Setup — same as before (you've done this once already!)

You already know this flow from your first site. Same 4 stages:

### 1. Put this folder on GitHub
- Make a NEW repository (call it `adkine-real` or similar)
- **Add file → Upload files** → drag in EVERYTHING from this folder
  (index.html, admin, assets, data, netlify.toml — the loose files AND the folders)
- ⚠️ Remember the mistake from last time: after dragging, scroll down and click the
  green **Commit changes** button. That's the step that actually saves.
- Confirm you can SEE index.html listed afterward.

### 2. Connect to Netlify
- app.netlify.com → **Add new site** → **Import an existing project** → GitHub →
  pick your new repo → **Deploy**

### 3. Point your domain
- Either rename this new site to `adkine` (Site configuration → Change site name),
  deleting/renaming the old one first if the name is taken.

### 4. Turn on the login (the magic step)
- Netlify → your site → **Identity** → Enable Identity
- Registration → **Invite only**
- Services → **Git Gateway** → Enable
- **Invite users** → your email → check inbox → set password

Done. Go to **yoursite/admin**, log in, and edit away.

---

## ✅ How to use the editor

Go to **yoursite.netlify.app/admin** and log in. You'll see:

- **🎬 Videos / Work** — add/edit videos. Upload a cover image right there. For the
  video file itself, see the note below.
- **🛠 Services** — your two service blocks
- **📋 Process steps** — the four steps
- **📄 Page sections** — Hero, section headings, About, Contact

Change anything → click **Publish** (top of screen) → ~30 seconds later it's live.

### Adding a NEW video — the one tricky part
Video files are big, so the editor's uploader often won't take them. Do this instead:
1. On GitHub: open your repo → `assets/videos` folder → **Add file → Upload files** →
   drag your `.mp4` in → Commit
2. In `/admin` → Videos → New → fill in the details, upload the cover image, and in the
   **Video file path** box type: `assets/videos/your-file-name.mp4`
3. Publish. Done.

(Cover images are small, so those upload fine directly in `/admin`.)

---

## Questions you might have

**Will this look exactly like my good site?**
Yes — it uses your real style.css and main.js untouched. Same cursor, animations, fonts,
colors. Only difference: the text/videos now come from editable files.

**What about the old editable site (adkine.netlify.app)?**
You can delete that one — this replaces it. Or keep it as a backup until you're happy.

**The contact form?**
Wired to Netlify Forms — submissions appear in your Netlify dashboard under "Forms."

**I changed something and it looks broken!**
Just edit it again in /admin and Publish. GitHub keeps every old version, so nothing is
ever truly lost.

---

## Stuck?
Tell me which step number and what you see. The two classic snags are:
forgetting to click **Commit changes** on GitHub, and the **Identity/Git Gateway** step.
