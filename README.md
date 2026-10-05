**English** · [한국어](README.ko.md) · [Español](README.es.md) · [中文](README.zh.md)

# Phonetic Script

**Write how the world sounds: every dialect, every nuance.**

Phonetic Script is one writing system for the sounds of every language. It doesn't
spell a word the way a dictionary says it should sound. It writes what a speaker
actually *said*: a Texan's vowel, an Andalusian's dropped *s*, a Cantonese tone, a
village pronunciation that no spelling has ever recorded. Each sound has a letter, and
each nuance has a fixed mark: length, vowel quality, tone, stress, pitch accent. So two
dialects of the same language come out differently, and that difference is the dialect,
written down.

**▶ Live site: <https://dotori-ai.github.io/Phonetic-Script/>**

## Why: many ways of speaking have no letters of their own

Most writing systems were made for one standard variety of one language. Everything
else is left out, or squeezed into a spelling that hides how it actually sounds.

- **India.** Thousands of mother tongues are spoken, and many have no script of their
  own. Languages such as Gondi, Bhili and Kurukh, each with millions of speakers, are
  mostly spoken rather than written. When they are written, they borrow a script made
  for another language, and the sounds that make them distinct are lost.
- **China.** Cantonese, Hokkien (Min Nan), Wu (Shanghainese) and Hakka are usually
  written with the same characters as Mandarin. Characters record meaning, not
  pronunciation, so the sounds, the tones (Cantonese has six, Mandarin four) and many
  everyday words with no standard character never reach the page. Minority languages
  such as Tujia and Gelao have no traditional writing system at all.
- **Everywhere.** Even well-written languages lose their dialects on paper. *Can* in
  Texas and *can* in Ohio are spelled the same and sound different. *Gracias* is
  spelled the same in Madrid and Mexico City, with /θ/ in one and /s/ in the other.

Phonetic Script gives every one of these a written form: one shared alphabet, the same
in every language, that a person can read and a computer can process.

## Pages

| Page | What it shows |
|---|---|
| [Main](https://dotori-ai.github.io/Phonetic-Script/) | English, Spanish, Mandarin and Korean words side by side, and two American dialects compared |
| [한국어](https://dotori-ai.github.io/Phonetic-Script/ko/) | The script's 15th-century roots, and the structure of its letters |
| [Español](https://dotori-ai.github.io/Phonetic-Script/es/) | *pero* vs *perro*, *j*, *ñ*, and Spain vs Latin America |
| [中文](https://dotori-ai.github.io/Phonetic-Script/zh/) | Mandarin tones written on every syllable (妈 麻 马 骂) |
| [Word editor](https://dotori-ai.github.io/Phonetic-Script/editor/) | 156 English and Spanish words with their spelling and IPA. Type the spelling you hear and export it for review. |
| [Texas English](https://dotori-ai.github.io/Phonetic-Script/examples/texas/) | A speaker from Carthage, Texas, reading the "Please call Stella" paragraph. The script lights up in time with her voice. |
| [General American](https://dotori-ai.github.io/Phonetic-Script/examples/general-american/) | The same paragraph read by a speaker from Delaware, Ohio |
| [Spanish example](https://dotori-ai.github.io/Phonetic-Script/examples/spanish/) | A short passage about King Sejong, in a Latin American Spanish reading |

The script is drawn by the project's own font. GitHub can't show it, so this page writes
new letters by their parts in code style, like `[ㄹ-+ㅗ]` (a trilled *r* + *o*). Open the
live site to see every letter.

## Example: one paragraph, two American dialects

Both speakers read the identical text. Each page is written from a narrow phonetic
transcription of that recording, not from a dictionary. A selection of the words where
the two speakers differ:

| Word | Texas | General American | Texas IPA | General American IPA |
|---|---|---|---|---|
| call | 칼 | 컬 | kʰɑl | kʰɑlˠ |
| to | 투 | 러 | tʰŭ | ɾə |
| snow | 스노 | 쉬노 | snoʊ | ʃnoʊ |
| and | 앤드 | 언 | ænd | ə̃n |
| can | 켄 | 컨 | kʰɛ̃n | kʰə̃n |
| these | 디즈 | 디스 | ðiz | ðis |

The Texas speaker keeps full vowels where the Ohio speaker reduces them (*can*, *and*).
The Ohio speaker flaps the *t* in *to* and says *snow* with an *sh*. The live page lists
all 13 differences. Compared with the dictionary, the Texas speaker differs in 11 of 69
words. That list is the Texas dialect, written down.

## Example: the nuance ordinary spelling loses

| What differs | Word | Phonetic Script | IPA |
|---|---|---|---|
| Spanish tap vs trill ("but" vs "dog") | pero / perro | 페로 / `페[ㄹ-+ㅗ]` | peɾo / pero |
| Spain vs Latin America | gracias | `그라[ㅌㅎ+ㅣ]아스` / 그라시아스 | ɡɾaθias / ɡɾasias |
| English *sh* vs *s* | she / see | 쉬 / 시 | ʃiː / siː |
| English *f*, *th* | coffee · think | `ˈ[ㅋ+ㅏ][ㅍ'+ㅣ]` · `[ㅌㅎ+ㅣ+ㅇ]크` | kʰˈɑːfi · θɪŋk |
| Mandarin tone ("mother" vs "horse") | 妈 / 马 | `[ㅁ+ㅏˉ]` / `[ㅁ+ㅏˇ]` | ma˥ / ma˨˩˦ |

The rule behind every letter: **one base letter + one mark = one new letter**, and each
kind of mark has one fixed place. Consonant changes go on top, vowel quality on the left,
length on the right, and tone, stress and pitch accent above the syllable. Every letter
records the same six fields, so what a reader sees and what a computer reads are always
the same.

## How the examples were made

- **English audio:** [Speech Accent Archive](https://accent.gmu.edu/), George Mason
  University: speakers *english9* (Texas) and *english162* (Ohio), with the archive's
  narrow IPA transcriptions. CC BY-NC-SA.
- **Spanish audio:** synthetic, generated locally with Meta's
  [MMS-TTS](https://huggingface.co/facebook/mms-tts-spa) (CC BY-NC 4.0). It will be
  replaced with a human recording; volunteers are welcome.
- **Timing:** forced alignment with wav2vec2. **Spelling:** the project's pronunciation
  engine. One General American word was corrected by ear.
- Each example folder has an `alignment.json` with every word's timing, spelling and
  (for English) IPA.

## Contribute

We are recruiting **linguists and native speakers of every language and dialect**,
especially languages with no script of their own. Our starting points are US regional
English, Spanish varieties, Korean dialects, Chinese languages (Cantonese, Hokkien, Wu,
Hakka) and the unwritten languages of India. Recordings are always made with the
speaker's consent, and each community decides how its work is published. See
[CONTRIBUTING.md](CONTRIBUTING.md). All contributors sign the [CLA](CLA.md).

## Support

The script is built by linguists, native speakers and type designers. Support pays
them, and pays for consented recordings. It funds pilots for languages that have never
had a written form. Supporters see every result before public release, and every expense
goes into a public ledger. Support levels are on the
[live site](https://dotori-ai.github.io/Phonetic-Script/#support). Organizations:
licensing@dotori.ai.

## License

**Source-available. Commercial use needs approval from dotori.ai.**

- **Code (pages and editor):** [PolyForm Noncommercial 1.0.0](LICENSE). Free for research,
  teaching and personal use.
- **Spellings and word data:** CC BY 4.0. **Font:** [SIL OFL 1.1](fonts/OFL.txt).
- **Audio:** the source's own license (see above).
- **Commercial use** of the code, the models or the patented methods: see
  [COMMERCIAL_LICENSE.md](COMMERCIAL_LICENSE.md) and [PATENTS.md](PATENTS.md), or write
  to licensing@dotori.ai.

The full map is in [LICENSES.md](LICENSES.md). Patents pending.

© 2026 Kibaek Kim, doing business as dotori.ai
