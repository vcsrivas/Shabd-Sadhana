# WordTrio

**Three expert English words a day.**
Developed by **Dr. V C Srivastava**.

WordTrio is a small web app that you can install on a phone. It runs on GitHub Pages at
https://vcsrivas.github.io/wordtrio/

## What it does

- Shows **three words a day**, picked at random from the whole list in `words.xlsx` (both the WordNet and the Webster tabs).
- No word is repeated until every word in the list has been shown.
- Each word shows its part of speech, pronunciation or syllables, meaning, usage example, other meanings and synonyms. Webster entries also show a word origin where one is available.
- Every word has **Cambridge** and **Oxford** buttons that open its entry on those dictionaries' websites.
- **History** lists every trio shown on the phone. **Search** finds any word in the list.
- It can be installed to the home screen and opens like an app.

## Files

| File | Purpose |
|---|---|
| `index.html` | The app |
| `words.xlsx` | The word list |
| `manifest.webmanifest`, `sw.js`, `icons/` | Make the app installable and let it open offline |

## Updating the word list

Replace `words.xlsx` in this repository with a new file of the same name. The app reads every tab whose header row has **Word** and **Meaning** columns. Tabs with "Webster" in their name are labelled Webster's; the others are labelled WordNet. Recognised columns are:

Word, Part of Speech, Pronunciation (US) or Syllables & Stress, Meaning, Usage (example), Other Meanings, Synonyms, Label, Etymology.

Other Meanings are separated by ` | `, and each can start with a part of speech such as `(nou.)`, `(adj.)`, `(ver.)` or `(adv.)`. Synonyms are separated by commas.

## Acknowledgements

The meanings, examples and synonyms in `words.xlsx` come from two sources:

- **Open English WordNet** (https://github.com/globalwordnet/english-wordnet), based on **Princeton WordNet 3.0**.
  Princeton University "About WordNet." WordNet. Princeton University. 2010.
  Open English WordNet is released under the Creative Commons Attribution 4.0 International licence (CC BY 4.0). The original Princeton WordNet licence also applies. WordNet 3.0 Copyright 2006 by Princeton University. All rights reserved.
- **Webster's Revised Unabridged Dictionary (1913)**, edited by Noah Porter, published by G. & C. Merriam Co. The text comes from Project Gutenberg (eBook #29765) and is in the public domain.

Cambridge Dictionary and the Oxford Learner's Dictionaries are only linked to. None of their content is copied into this app.
