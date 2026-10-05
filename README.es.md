[English](README.md) · [한국어](README.ko.md) · **Español** · [中文](README.zh.md)

# Phonetic Script

**Escribe cómo suena cada idioma.**

Phonetic Script es un único sistema de escritura, basado en el alfabeto coreano (hangul), que
registra cómo se pronuncia de verdad cualquier idioma. Los sonidos que el hangul ya tiene se
escriben tal cual. Para los demás, como la *f*, la *rr*, la *j* o la *ñ*, se añade una pequeña
marca a una letra conocida.

**▶ Página en español: <https://dotori-ai.github.io/Phonetic-Script/es/>**

Las letras nuevas se dibujan con la fuente propia del proyecto. GitHub no la tiene, así que aquí
cada letra nueva aparece por su composición, `[consonante+vocal+final]`. Abre la página para ver
las letras reales.

## Los sonidos del español

La regla es simple: **una letra base + una marca = una letra nueva**, y cada marca tiene siempre el
mismo lugar. Así *pero* y *perro*, que el coreano estándar escribe igual (페로), quedan distintas.

| Palabra | Phonetic Script (composición) | Coreano estándar | IPA | Qué muestra |
|---|---|---|---|---|
| pero | 페로 | 페로 | peɾo | r simple (vibrante simple) |
| perro | `페[ㄹ-+ㅗ]` | 페로 | pero | rr múltiple → ㄹ- |
| jamón | `[ㄱ'+ㅏ]몬` | 하몬 | xamon | j /x/ → ㄱ' |
| fácil | `[ㅍ'+ㅏ]실` | 파실 | fasil | f → ㅍ' |
| niño | `니[ㄴ^+ㅗ]` | 니노 | niɲo | ñ /ɲ/ → ㄴ^ |
| llave | 야베 | 야베 | ʝabe | ll → 야 (yeísmo) |

## España y América, escritas tal como suenan

La misma palabra se escribe distinto según cómo se pronuncia: con *seseo* en América y en partes
de Andalucía y Canarias, y con *distinción* (/θ/) en el centro y norte de España.

| Palabra | Variedad | Phonetic Script (composición) | IPA |
|---|---|---|---|
| gracias | América | 그라시아스 | ɡɾasias |
| gracias | España | `그라[ㅌㅎ+ㅣ]아스` | ɡɾaθias |
| cerveza | América | 세르베사 | seɾbesa |
| cerveza | España | `[ㅌㅎ+ㅔ]르베[ㅌㅎ+ㅏ]` | θeɾbeθa |
| corazón | América | 코라손 | koɾason |
| corazón | España | `코라[ㅌㅎ+ㅗ+ㄴ]` | koɾaθon |

## Cómo funciona una letra

| Lugar de la marca | Para qué sirve | Ejemplos |
|---|---|---|
| Arriba de la consonante | Consonantes que el coreano no tiene | `ㅍ'` = f · `ㅂ~` = v · `ㄱ'` = j /x/ · `ㅌㅎ` = z/c /θ/ · `ㄹ-` = rr · `ㄴ^` = ñ |
| A la izquierda de la vocal | Calidad de la vocal | `·ㅓ` = /ə/ · `·ㅗ` = /ɔ/ |
| A la derecha de la vocal | Duración | `ㅏː` = /aː/ larga |
| Encima de la sílaba | Acento, tono | acento ˈ ˌ · tonos ā á ǎ à |

Cada letra guarda seis datos: consonante inicial, vocal, consonante final, tono, acento y acento
tonal. Lo que ve una persona y lo que lee una computadora son siempre lo mismo.

## Pruébalo

| Página | Qué muestra |
|---|---|
| [Ejemplo en español](https://dotori-ai.github.io/Phonetic-Script/examples/spanish/) | Texto sobre el rey Sejong; las letras se iluminan al ritmo de la voz (voz sintética) |
| [Inglés de Texas](https://dotori-ai.github.io/Phonetic-Script/examples/texas/) | Hablante de Carthage, Texas · grabación real |
| [Inglés estadounidense general](https://dotori-ai.github.io/Phonetic-Script/examples/general-american/) | El mismo párrafo, hablante de Delaware, Ohio |
| [Editor de palabras](https://dotori-ai.github.io/Phonetic-Script/editor/) | Mira cómo se escribe cada palabra, corrígela según lo que oyes y envíala para revisión |

La voz en español es sintética (Meta MMS-TTS, CC BY-NC 4.0) y será reemplazada por una grabación
real. Si hablas español, ¡tu voz puede ser la primera!

## Participa

Buscamos lingüistas y hablantes nativos de todas las variedades del español: mexicano, caribeño,
andino, rioplatense, chileno, andaluz, canario, y el español de Texas y de todo Estados Unidos. Lee
la [guía para colaborar](CONTRIBUTING.md) y abre un issue en GitHub titulado «Linguist: español» o
«Recording: tu variedad». Todas las personas que colaboran firman el [acuerdo de licencia de
colaboración (CLA)](CLA.md).

## Apoya el proyecto

Phonetic Script lo construyen lingüistas, hablantes nativos y diseñadores tipográficos. Tu apoyo
paga su trabajo y las grabaciones, hechas siempre con el consentimiento de cada hablante. Quienes
apoyan ven cada resultado antes de su publicación.

| Aporte | Qué recibes |
|---|---|
| US$5 al mes · o US$25 una vez | Acceso anticipado a todos los resultados, informes trimestrales, tu nombre en la lista de apoyo |
| US$15 al mes · o US$75 una vez | + comentarios sobre los borradores de cada idioma, reunión mensual en línea |
| US$40 al mes · o US$250 una vez | + tu nombre en la documentación de un idioma |
| US$750 o más, una vez | + crédito en un piloto para un idioma sin escritura (acordado con la comunidad de hablantes) |

- Sin meta fija: el trabajo crece con lo que recibimos
- Cada gasto queda en un registro público
- Los fondos pagan solo el trabajo del proyecto: lingüistas, hablantes, fuentes, servidores
- Informe trimestral para quienes apoyan

Las donaciones abren pronto; los detalles estarán en la [página en español](https://dotori-ai.github.io/Phonetic-Script/es/#support).
Organizaciones y empresas: licensing@dotori.ai

## Licencia

**Código disponible (source-available). El uso comercial requiere la aprobación de dotori.ai.**

- **Código (páginas y editor):** [PolyForm Noncommercial 1.0.0](LICENSE). Gratis para investigación,
  enseñanza y uso personal.
- **Grafías y datos de palabras:** CC BY 4.0. **Fuente:** [SIL OFL 1.1](fonts/OFL.txt).
- **Audio:** la licencia de cada fuente.
- Para **uso comercial** del código, los modelos o los métodos patentados, consulta
  [COMMERCIAL_LICENSE.md](COMMERCIAL_LICENSE.md) y [PATENTS.md](PATENTS.md), o escribe a
  licensing@dotori.ai.

El detalle completo está en [LICENSES.md](LICENSES.md) (en inglés). Patentes en trámite.

© 2026 Kibaek Kim, doing business as dotori.ai
