# Phonetic Script

**Write how the world sounds.**

Phonetic Script is a single writing system, built on Hangul, that records how any
language is actually pronounced. Sounds Hangul already has are written as they are.
For the ones it doesn't (*f*, *v*, *th*, the Spanish trilled *rr*, Mandarin tones),
one small mark is added to a familiar letter. Because it is written from what a
speaker actually *said*, two dialects of the same language come out differently, and
that difference is the dialect, written down.

**▶ Live site: <https://dotori-ai.github.io/Phonetic-Script/>**  ·  [한국어](https://dotori-ai.github.io/Phonetic-Script/ko/) · [Español](https://dotori-ai.github.io/Phonetic-Script/es/) · [中文](https://dotori-ai.github.io/Phonetic-Script/zh/)

The new letters are drawn by the project's own font. GitHub's file view doesn't have
it, so open the live site to see every letter. The tables below use only standard
Hangul.

## Pages

| Page | What it shows |
|---|---|
| [Main](https://dotori-ai.github.io/Phonetic-Script/) | English, Spanish, Mandarin and Korean words side by side, and two American dialects compared |
| [한국어](https://dotori-ai.github.io/Phonetic-Script/ko/) | How the script continues Hunminjeongeum: the lost letters (ㆍ ㅿ ㆆ ㆁ), linked letters (ㅸ ㆄ), tone dots, and the new six-field letter structure |
| [Español](https://dotori-ai.github.io/Phonetic-Script/es/) | *pero* vs *perro*, *j*, *ñ*, and Spain vs Latin America (*gracias* with /θ/ or /s/) |
| [中文](https://dotori-ai.github.io/Phonetic-Script/zh/) | Mandarin tones written above the syllable (妈 麻 马 骂) |
| [Word editor](https://dotori-ai.github.io/Phonetic-Script/editor/) | 156 English and Spanish words with their spelling, standard Hangul and IPA. Type the spelling you hear and export it for review. |
| [Texas English](https://dotori-ai.github.io/Phonetic-Script/examples/texas/) | A speaker from Carthage, Texas, reading the "Please call Stella" paragraph. The script lights up in time with her voice. |
| [General American](https://dotori-ai.github.io/Phonetic-Script/examples/general-american/) | The same paragraph read by a speaker from Delaware, Ohio |
| [Spanish example](https://dotori-ai.github.io/Phonetic-Script/examples/spanish/) | A short passage about King Sejong, in a Latin American Spanish reading |

## Example: same paragraph, two American voices

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

The Texas speaker keeps full vowels where the Ohio speaker reduces them (*can* 켄 vs
컨, *and* 앤드 vs 언). The Ohio speaker flaps the *t* in *to* (러) and says *snow* with an
*sh* (쉬노). The live page lists all 13 differences, including ones that need the new
letters (*things*, *of*, *for*, *into*, *station*).

## Example: one mark, one new sound

| Word | Language | Standard Hangul | Phonetic Script (composition) | IPA |
|---|---|---|---|---|
| coffee | English | 카피 | ˈ[ㅋ+ㅏ][ㅍ'+ㅣ] | kʰˈɑːfi |
| think | English | 띵크 | [ㅌㅎ+ㅣ+ㅇ]크 | θɪŋk |
| pero / perro | Spanish | 페로 / 페로 | 페로 / 페[ㄹ-+ㅗ] | peɾo / pero |
| jamón | Spanish | 하몬 | [ㄱ'+ㅏ]몬 | xamon |
| 妈 / 马 | Mandarin | 마 / 마 | [ㅁ+ㅏ̄] / [ㅁ+ㅏ̌] | ma˥ / ma˨˩˦ |

Standard Hangul writes *pero* ("but") and *perro* ("dog") the same way, and all four
Mandarin *ma* the same way. Phonetic Script keeps them apart.

## How the examples were made

- **English audio:** [Speech Accent Archive](https://accent.gmu.edu/), George Mason
  University: speakers *english9* (Texas) and *english162* (Ohio), with the archive's
  narrow IPA transcriptions. CC BY-NC-SA.
- **Spanish audio:** synthetic, generated locally with Meta's
  [MMS-TTS](https://huggingface.co/facebook/mms-tts-spa) (CC BY-NC 4.0). It will be
  replaced with a human recording; volunteers are welcome.
- **Timing:** forced alignment with wav2vec2. **Spelling:** the project's
  pronunciation engine under its Korean loanword rules. One General American word was
  corrected by ear.
- Each example folder has an `alignment.json` with every word's timing, spelling,
  standard Hangul, and (for English) IPA.

## Support

The script is built by linguists, native speakers and type designers. Support pays
them, and pays for recordings made with each speaker's consent. Supporters see every
result before public release, and every expense goes into a public ledger. Support
levels are on the [live site](https://dotori-ai.github.io/Phonetic-Script/#support).
Organizations: licensing@dotori.ai.

## Contribute

We are recruiting **linguists and native speakers from every language**, plus dialect
recordings, starting with US regional English, Spanish varieties, Korean dialects and
Chinese languages. See [CONTRIBUTING.md](CONTRIBUTING.md). All contributors sign the
[CLA](CLA.md).

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
