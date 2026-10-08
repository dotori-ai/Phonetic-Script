# Licenses

This project is **source-available**. You can read, run and change everything here
for free for research, teaching and personal use. **Commercial use of the software or
the models needs written approval from dotori.ai.**

Because of that approval requirement, the code and models are not "open source" as the
Open Source Initiative defines it. The writing system, the language data and the
fonts *are* open, so that anyone can write, teach and standardize Phonetic Script.

| What | Where | License | Commercial use |
|---|---|---|---|
| Software: the editor, the Synced Lyrics pages, the landing page | `index.html`, `editor/`, `examples/*/index.html` | [PolyForm Noncommercial 1.0.0](LICENSE) | Needs a license from dotori.ai ([COMMERCIAL_LICENSE.md](COMMERCIAL_LICENSE.md)) |
| Model weights, when released | releases | [VNLM Community License 1.0](MODEL_LICENSE.md) | Needs a license from dotori.ai |
| Text and word data: spellings, alignments and word lists | `examples/*/alignment.json`, editor exports | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | Free, with attribution |
| Project font (based on Noto Sans KR) | `fonts/`, and embedded in each page | [SIL Open Font License 1.1](fonts/OFL.txt) | Free under OFL |
| English recordings (Texas, General American) | embedded in `examples/texas/`, `examples/general-american/` | CC BY-NC-SA, [Speech Accent Archive](https://accent.gmu.edu/), George Mason University | No; it's the source's license |
| Spanish voice (synthetic) | embedded in `examples/spanish/` | Generated with [Meta MMS-TTS](https://huggingface.co/facebook/mms-tts-spa) (model license CC BY-NC 4.0) | No; it's the source's license |

If a file carries its own license header, that header governs.

**Names.** "dotori.ai", "VNLM" and the project logos are not licensed by any of the
documents above. You may use the names to say truthfully that your work uses or is
based on this project.

**Contact:** licensing@dotori.ai
