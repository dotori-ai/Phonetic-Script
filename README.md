# Phonetic Script: Extended Korean (EK)

**One Hangul-based script that writes how any language sounds.**

Extended Korean (EK) uses standard Hangul for the sounds Korean already has, and a small,
systematic set of marks for the sounds it doesn't: *f*, *v*, *th*, the Spanish tap,
and more. Because EK is written from what a speaker actually *said*, two dialects of
the same language come out differently, and that difference is the dialect, written
down.

**▶ Live demo: <https://dotori-ai.github.io/Phonetic-Script/>**

Extended EK letters are drawn by the project's own font. GitHub's file view doesn't have
it, so open the live pages to see every block. The tables below use only standard
Hangul.

## Try it

| Page | What it shows |
|---|---|
| [Word editor](https://dotori-ai.github.io/Phonetic-Script/editor/) | 156 English and Spanish words with their EK spelling, standard Hangul and IPA. Type the spelling you hear and export it for review. |
| [Texas English](https://dotori-ai.github.io/Phonetic-Script/examples/texas/) | A speaker from Carthage, Texas, reading the "Please call Stella" paragraph. EK blocks light up in time with her voice. |
| [General American](https://dotori-ai.github.io/Phonetic-Script/examples/general-american/) | The same paragraph read by a speaker from Delaware, Ohio. |
| [Spanish · Español](https://dotori-ai.github.io/Phonetic-Script/examples/spanish/) | A short passage about King Sejong, in a Latin American Spanish reading. |

## Example: same paragraph, two American voices

Both speakers read the identical text. The EK on each page comes from a narrow phonetic
transcription of that recording, not from a dictionary. A selection of the words where
the two speakers differ:

| Word | Texas EK | General American EK | Texas IPA | General American IPA |
|---|---|---|---|---|
| call | 칼 | 컬 | kʰɑl | kʰɑlˠ |
| to | 투 | 러 | tʰŭ | ɾə |
| snow | 스노 | 쉬노 | snoʊ | ʃnoʊ |
| and | 앤드 | 언 | ænd | ə̃n |
| can | 켄 | 컨 | kʰɛ̃n | kʰə̃n |
| these | 디즈 | 디스 | ðiz | ðis |

The Texas speaker keeps full vowels where the Ohio speaker reduces them (*can* 켄 vs
컨, *and* 앤드 vs 언). The Ohio speaker flaps the *t* in *to* (러) and says *snow* with an
*sh* (쉬노). The live page lists all 13 differences, including ones that need extended
blocks (*things*, *of*, *for*, *into*, *station*).

Compared with the dictionary reading of the same words, the Texas speaker differs in 11
of 69 words: *call* 칼 (dictionary 콜), *can* 켄 (캔), *and* 앤 (앤드), and *station*
ends in 쉰 instead of 션.

## Example: Spanish

*El rey Sejong el Grande fue el cuarto rey de Joseon. Creó veintiocho letras para que la
gente común pudiera aprenderlas con facilidad y usarlas cada día…*

| Original | EK | Pronunciation (IPA) |
|---|---|---|
| Grande | 그란데 | ɡɾande |
| cuarto | 쿠아르토 | kwaɾto |
| veintiocho | 베인티오초 | beintjot͡ʃo |
| llamaron | 야마론 | ʝamaɾon |
| Hunminjeongeum | 훈민정음 | unminxeonxeum |
| rey · gente · facilidad | *extended blocks; see the live page* | ɾei · xente · fasilidad |

Spanish *r* (tap), *j/g* (/x/) and *f* have no standard Hangul letter, so EK writes
them with extended blocks. The live page shows them.

## How the examples were made

- **English audio:** [Speech Accent Archive](https://accent.gmu.edu/), George Mason
  University: speakers *english9* (Texas) and *english162* (Ohio), with the archive's
  narrow IPA transcriptions. CC BY-NC-SA.
- **Spanish audio:** synthetic, generated locally with Meta's
  [MMS-TTS](https://huggingface.co/facebook/mms-tts-spa) (CC BY-NC 4.0). It will be
  replaced with a human recording; volunteers are welcome.
- **Timing:** forced alignment with wav2vec2. **EK text:** the project's
  pronunciation-to-EK engine under its Korean loanword rules. One General American word
  was corrected by ear.
- Each example folder has an `alignment.json` with every word's timing, EK spelling,
  standard Hangul, and (for English) IPA.

## Contribute

We are recruiting **linguists and native speakers from every language**, plus dialect
recordings, starting with US regional English, Spanish varieties and Korean dialects.
See [CONTRIBUTING.md](CONTRIBUTING.md). All contributors sign the [CLA](CLA.md).

## License

**Source-available. Commercial use needs approval from dotori.ai.**

- **Code (pages and editor):** [PolyForm Noncommercial 1.0.0](LICENSE). Free for research,
  teaching and personal use.
- **EK text and word data:** CC BY 4.0. **Font:** [SIL OFL 1.1](fonts/OFL.txt).
- **Audio:** the source's own license (see above).
- **Commercial use** of the code, the models or the patented methods: see
  [COMMERCIAL_LICENSE.md](COMMERCIAL_LICENSE.md) and [PATENTS.md](PATENTS.md), or write
  to licensing@dotori.ai.

The full map is in [LICENSES.md](LICENSES.md). Patents pending.

© 2026 Kibaek Kim, doing business as dotori.ai
