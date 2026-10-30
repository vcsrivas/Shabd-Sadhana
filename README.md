# WordTrio

**Three words a day, easy to expert.**
Developed by Dr. V C Srivastava.

WordTrio is a mobile web app. Every day it shows three English words, one each from the **Easy**, **Moderately Difficult** and **Difficult** columns of `words.xlsx`. The words come from any of the topic tabs. Each word shows its meaning, part of speech, pronunciation and a usage example. These come from the free [Free Dictionary API](https://dictionaryapi.dev/), which uses Wiktionary data. Each word also has a button that opens its Oxford Learner's Dictionaries entry.

## What's in this folder

| File | What it is |
|---|---|
| `index.html` | The app itself |
| `words.xlsx` | The word list. Replace this file to update the words. |
| `manifest.webmanifest`, `icons/` | Let phones install the app with its own icon |
| `sw.js` | Keeps the app opening when the phone is briefly offline |

## Putting the app online with GitHub Pages (one-time, about 10 minutes)

You only need a web browser. You don't need to install any software.

1. **Create a free GitHub account** at <https://github.com/signup>, or sign in if you already have one.
2. **Create a repository.** Click the **+** at the top right, then **New repository**.
   - Repository name: `wordtrio`
   - Choose **Public**. GitHub Pages is free for public repositories.
   - Click **Create repository**.
3. **Upload the files.** On the new repository page, click **uploading an existing file**. Drag in **everything inside this folder**: `index.html`, `words.xlsx`, `manifest.webmanifest`, `sw.js` and the `icons` folder. Then click **Commit changes**.
   - Make sure `index.html` sits at the top level of the repository, not inside another folder.
4. **Turn on GitHub Pages.** Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to *Deploy from a branch*. Set the branch to **main**, the folder to **/ (root)**, and click **Save**.
5. Wait 1–2 minutes. Refresh the Pages settings page and it will show your app's address, like:
   `https://YOUR-USERNAME.github.io/wordtrio/`

## Installing it on a phone

Open the address on the phone, then:

- **Android (Chrome):** tap the **⋮** menu, then **Add to Home screen** (or **Install app**).
- **iPhone (Safari):** tap the **Share** button, then **Add to Home Screen**.

WordTrio then opens like a normal app, with its own icon and the start-up screen.

## Updating the word list

1. Keep the same layout: one tab per topic, each with a header row containing **Easy**, **Moderately Difficult** and **Difficult**. You can add or remove tabs and words freely.
2. Save the file as **`words.xlsx`**. The name must be exactly this.
3. In the GitHub repository, click **Add file → Upload files**, drop in the new `words.xlsx` and click **Commit changes**. It replaces the old one.
4. Within a few minutes, every phone gets the new list the next time the app is opened.

Words already shown on a phone are never repeated after an update.

You can also try out a different file on one phone only, from **Word list → Use a different file on this phone**.

## How the three daily words are chosen

- All the words in each column, across all tabs, are pooled and shuffled.
- Day by day the app works through every possible Easy + Moderate + Difficult combination. With the current file that's about 66 billion trios. **No trio repeats until all of them have been shown**, and all three words change every day.
- Each phone keeps its own history. You can see it under **History**.

## Notes

- **Internet:** meanings need an internet connection. Once a word has been looked up, its meaning is saved on the phone.
- **Missing meanings:** some rare words and multi-word phrases aren't in the Free Dictionary. For those, the app says so and the **Open in Oxford Learner's** button takes you to the Oxford entry.
- **Credits:** meaning data is © Wiktionary contributors, shared under CC BY-SA, via the Free Dictionary API.
