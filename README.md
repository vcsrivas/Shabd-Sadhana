# शब्द साधना (Shabd Sadhana)

**Five expert English words a day.**
Developed by **Dr. V C Srivastava**.

शब्द साधना (Shabd Sadhana, "practice of words") is a small web app that you can install on a phone. It runs on GitHub Pages at
https://vcsrivas.github.io/wordtrio/

## What it does

- Shows **five words a day**, picked at random from the expert-level words in `words.xlsx` (6,315 words from Princeton WordNet, with a frequency score from 0.5 to 1.3).
- No word is repeated until every word in the list has been shown.
- Each word shows its part of speech, meaning, and, where available, a usage example, other meanings and synonyms. Tapping a synonym lets you look it up in Cambridge or Oxford.
- Every word has **Cambridge** and **Oxford** buttons that open its entry on those dictionaries' websites.
- **History** lists the words shown on the phone each day.
- It can be installed to the home screen and opens like an app.

## Files

| File | Purpose |
|---|---|
| `index.html` | The app |
| `words.xlsx` | The word list |
| `manifest.webmanifest`, `sw.js`, `icons/` | Make the app installable and let it open offline |

## Updating the word list

Replace `words.xlsx` in this repository with a new file of the same name. The app reads the tab whose header row has **Word** and **Meaning** columns. Recognised columns are:

Word, Part of Speech, Meaning, Usage (example), Other Meanings, Synonyms.

Other Meanings are separated by ` | `, and each can start with a part of speech such as `(nou.)`, `(adj.)`, `(ver.)` or `(adv.)`. Synonyms are separated by commas.

## Acknowledgements

All meanings, usage examples, other meanings and synonyms in `words.xlsx` come from one source: **Princeton WordNet**, the lexical database of English created at Princeton University.

> WordNet 3.0 Copyright 2006 by Princeton University. All rights reserved.
> Used under the WordNet 3.0 licence (https://wordnet.princeton.edu/license-and-commercial-use).

The WordNet data was taken from **Open English WordNet** (https://github.com/globalwordnet/english-wordnet), the open-source edition of Princeton WordNet, released under the Creative Commons Attribution 4.0 International licence (CC BY 4.0).

Word frequency scores, used only to choose expert-level words, come from the OpenSubtitles 2018 frequency list (https://github.com/hermitdave/FrequencyWords, CC BY-SA 4.0).

### References

- Princeton University. "About WordNet." *WordNet*. Princeton University, 2010. https://wordnet.princeton.edu/
- Miller, George A. (1995). "WordNet: A Lexical Database for English." *Communications of the ACM*, 38(11), 39–41.
- Fellbaum, Christiane (ed.) (1998). *WordNet: An Electronic Lexical Database*. Cambridge, MA: MIT Press.

Cambridge Dictionary and the Oxford Learner's Dictionaries are only linked to. None of their content is copied into this app.
