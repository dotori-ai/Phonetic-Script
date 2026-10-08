**English** · [한국어](README.ko.md) · [Español](README.es.md) · [中文](README.zh.md)

# Phonetic Script

**Write how the world sounds: every dialect, every nuance.**

Phonetic Script is one writing system for the sounds of every language. It doesn't
spell a word the way a dictionary says it should sound. It writes what a speaker
actually *said*: a Texan's vowel, an Andalusian's dropped *s*, a Cantonese tone, a
village pronunciation that no spelling has ever recorded, down to vowel quality, length,
tone, stress and pitch accent. So two dialects of the same language come out differently,
and that difference is the dialect, written down.

**▶ Live site: <https://dotori-ai.github.io/Phonetic-Script/>**

## Why: pronunciation carries more than words

While training AI language models, we found that people differ far more in *how they
pronounce* than in *which words they use*. Two speakers can say the same sentence word for
word and still sound like they come from different places. An AI that only reads
spelling misses that. To understand dialects, accents and nuance, an AI has to understand
sound, and it needs a script that writes sound.

## Our larger goal: voice AI for 6G

We are currently researching voice AI for 6G wireless communication. In 6G networks, devices will do more than pass raw audio along: they will understand the sounds and meaning of speech and exchange them. Phonetic Script is one part of that goal. It is a precise written form of speech sounds that people and machines can both read, in every language and dialect.

## Many ways of speaking have no letters of their own

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
| [Main](https://dotori-ai.github.io/Phonetic-Script/) | Why pronunciation matters, and two American dialects compared |
| [한국어](https://dotori-ai.github.io/Phonetic-Script/ko/) | The project's purpose and background, in Korean |
| [Español](https://dotori-ai.github.io/Phonetic-Script/es/) | Spanish sounds, and Spain vs Latin America |
| [中文](https://dotori-ai.github.io/Phonetic-Script/zh/) | Tones, Chinese dialects, and languages with no writing system |

Every example on this page is written in IPA (the International Phonetic Alphabet).

## Example: one paragraph, two American dialects

Both speakers read the identical text. The IPA is a narrow phonetic transcription of each
recording, not a dictionary pronunciation. A selection of the words where
the two speakers differ:

| Word | Texas | General American | What differs |
|---|---|---|---|
| call | kʰɑl | kʰɑlˠ | dark *l* in Ohio |
| to | tʰŭ | ɾə | Ohio flaps the *t* and reduces the vowel |
| snow | snoʊ | ʃnoʊ | Ohio says *sh* |
| and | ænd | ə̃n | Texas keeps the full vowel and the *d* |
| can | kʰɛ̃n | kʰə̃n | Texas *e*, Ohio reduced *uh* |
| these | ðiz | ðis | voiced vs voiceless final *s* |

The Texas speaker keeps full vowels where the Ohio speaker reduces them (*can*, *and*).
The Ohio speaker flaps the *t* in *to* and says *snow* with an *sh*. In all, 13 words
differ. Compared with the dictionary, the Texas speaker differs in 11 of 69
words. That list is the Texas dialect, written down.

## Example: the nuance ordinary spelling loses

| What differs | Word | IPA |
|---|---|---|
| Spanish tap vs trill ("but" vs "dog") | pero / perro | ˈpeɾo / ˈpero |
| Spain vs Latin America | gracias | ˈɡɾaθjas / ˈɡɾasjas |
| English *sh* vs *s* | she / see | ʃiː / siː |
| English *f* and *th* | coffee · think | ˈkɔfi · θɪŋk |
| Mandarin tone ("mother" vs "horse") | 妈 / 马 | ma˥ / ma˨˩˦ |

Ordinary spelling merges many of these: one spelling for two dialects, or one letter for
two sounds. Phonetic Script gives each its own written form.

## Sources

English recordings and their narrow IPA transcriptions: [Speech Accent Archive](https://accent.gmu.edu/),
George Mason University, speakers *english9* (Texas) and *english162* (Ohio). CC BY-NC-SA.

## Contribute

We are recruiting **linguists and native speakers of every language and dialect**,
especially languages with no script of their own. Our starting points are US regional
English, Spanish varieties, Korean dialects, Chinese languages (Cantonese, Hokkien, Wu,
Hakka) and the unwritten languages of India. Recordings are always made with the
speaker's consent, and each community decides how its work is published. See
[CONTRIBUTING.md](CONTRIBUTING.md). All contributors sign the [CLA](CLA.md).

## Support

Phonetic Script is built by linguists, native speakers and type designers, and gives a
written form to languages that have never had one.

**▶ [Support the project](https://dotori-ai.github.io/Phonetic-Script/#support)**

Organizations and companies: licensing@dotori.ai

## License

**Source-available. Commercial use needs approval from dotori.ai.**

- **Code:** [PolyForm Noncommercial 1.0.0](LICENSE). Free for research,
  teaching and personal use.
- **Data:** CC BY 4.0. **Audio:** the source's own license.
- **Commercial use** of the code or the models: see
  [COMMERCIAL_LICENSE.md](COMMERCIAL_LICENSE.md), or write to licensing@dotori.ai.

The full map is in [LICENSES.md](LICENSES.md).

© 2026 Kibaek Kim, doing business as dotori.ai
