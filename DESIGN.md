# PTERI Design System

The visual language of the PTERI documentation site, written to be portable. Drop this file into
another project — or paste it into an AI assistant as context — and you should be able to build a
new surface that looks like it belongs to the same family.

Everything here is extracted from the live implementation in
[`src/css/custom.css`](src/css/custom.css), not from an aspiration.

---

## 1. The idea in one paragraph

Emerald is the brand, taken from the cube in the logo. Violet is the counterweight — used for
accents, gradients and anything that should read as *secondary signal* rather than *brand*. The two
sit on near-black in dark mode and on a barely-warm off-white in light mode. Type is a three-role
system: a geometric display face for headings, a neutral grotesque for body, and a monospace that
does real work — it carries labels, eyebrows, and metadata, not just code.

The overall register is **technical and quiet**. Hairline borders rather than shadows, generous
line-height, no gradients except one deliberate brand moment.

---

## 2. Colour

### Brand

| Role | Light | Dark | Notes |
| --- | --- | --- | --- |
| **Primary (emerald)** | `#12a05a` | `#2ed47f` | From the logo. Darkened in light mode for contrast on white. |
| **Accent (violet)** | `#6d4fd0` | `#8b7cf6` | Secondary signal. Never the brand. |

The light and dark primaries are **different hex values, not the same colour dimmed**. `#2ed47f`
on white fails contrast; `#12a05a` on near-black looks muddy. Always define both.

### Surfaces and text

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--pt-bg` | `#fbfcfb` | `#08090f` | Page ground |
| `--pt-panel` | `#f6f8f7` | `#0e1119` | Sidebars, table headers, inset areas |
| `--pt-surface` | `#ffffff` | `#131823` | Cards, raised elements |
| `--pt-surface-hover` | `#f4f9f6` | `#171e2b` | Hover state on any surface |
| `--pt-line` | `#e2e8e4` | `#252d3c` | Every border, every divider |
| `--pt-strong` | `#0f1a15` | `#edf2f7` | Headings, emphasised text |
| `--pt-muted` | `#55635c` | `#9aa7b7` | Body copy |
| `--pt-dim` | `#7c8a83` | `#647386` | Captions, eyebrows, metadata |

The neutrals are **not pure grey**. Light-mode neutrals carry a faint green bias toward the brand
(`#fbfcfb`, `#e2e8e4`); dark-mode neutrals carry a blue bias (`#08090f`, `#252d3c`). This is the
difference between a palette that reads as chosen and one that reads as default.

### Shade ramp

The site also defines seven tints/shades of the primary (`--ifm-color-primary-dark` through
`-lightest`). Those are Docusaurus/Infima's ramp, generated rather than chosen — if you are
rebuilding outside Docusaurus you do not need them. Derive equivalents by stepping lightness ±5%,
±8% and ±14% from the primary, or skip them entirely and use the wash tokens below.

### Semantic

Four states, each with a solid, an 8–11% wash for backgrounds, and a ~30% border.

| State | Light | Dark | Meaning |
| --- | --- | --- | --- |
| **ok** | `#12a05a` | `#3ddc97` | Confirmed, operational, success |
| **accent** | `#6d4fd0` | `#8b7cf6` | Informational, neutral emphasis |
| **warn** | `#a76a08` | `#f0b44d` | Needs attention, unverified |
| **danger** | `#c0392f` | `#f06b68` | Do not ship, error, outage |

Note `ok` and `primary` share a value. That is deliberate — the brand *is* the success colour.
Keep them coupled if you reuse this.

### The one gradient

```css
--pt-gradient: linear-gradient(95deg, var(--pt-accent), var(--ifm-color-primary));
```

Violet → emerald at 95°. Used in exactly three places: the primary button, the rule under an `h1`,
and the accent word in the hero headline. **Spend it there and nowhere else** — the restraint is
what makes it read as a brand mark rather than decoration.

---

## 3. Type

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap">
```

| Role | Family | Weights | Used for |
| --- | --- | --- | --- |
| **Display** | Space Grotesk | 500 · 600 · 700 | All headings, buttons, card titles, nav labels |
| **Body** | Inter | 400 · 500 · 600 | Running text, tables, everything else |
| **Mono** | JetBrains Mono | 400 · 500 | Code, plus eyebrows, pills, labels, timestamps |

Fallback stacks:

```css
--display: 'Space Grotesk', 'Inter', sans-serif;
--body:    'Inter', system-ui, -apple-system, sans-serif;
--mono:    'JetBrains Mono', ui-monospace, monospace;
```

### Scale and treatment

| | Size | Weight | Tracking | Notes |
| --- | --- | --- | --- | --- |
| h1 | `2.4rem` | 600 | `-0.02em` | Gradient rule underneath, 56×3px |
| h2 | `1.45rem` | 600 | `-0.02em` | Top border + `1.3rem` padding above |
| h3 | `1.1rem` | 600 | `-0.02em` | |
| Body | `16px` / `1.7` | 400 | — | The tall line-height matters |
| Lead paragraph | `1.08rem` / `1.65` | 400 | — | First `<p>` of a page, in `--pt-muted` |
| Eyebrow | `0.66–0.7rem` | 500 | `0.14–0.18em` | **Mono**, uppercase, `--pt-dim` |
| Pill / chip | `0.68rem` | 500 | `0.02em` | **Mono** |
| Table header | `0.68rem` | 500 | `0.12em` | **Mono**, uppercase, `--pt-dim` |

**The signature move:** every small label is monospace, uppercase, and widely letter-spaced.
Eyebrows, table headers, status chips, section dividers, timestamps. It gives the whole system a
technical register without needing heavy visuals.

Headings use **negative** tracking (`-0.02em`); labels use **positive** (`+0.14em`). Never the
reverse.

---

## 4. Layout and form

```css
--radius: 10px;        /* cards, inputs, code blocks */
--radius-pill: 999px;  /* chips, badges */
--radius-small: 6-8px; /* buttons, small controls */
```

- **Borders, not shadows.** A single `1px solid var(--pt-line)` defines nearly every edge. Shadows
  appear only on a floating terminal panel, and even there they are wide and faint.
- **Grid with `gap`**, never per-element margins. Card grids are `repeat(2, minmax(0, 1fr))` or
  `repeat(3, …)`, collapsing to one column under 900px.
- **Hover** = border turns brand, plus `translateY(-2px)`. That is the whole interaction vocabulary.
- **Frosted navbar** — `backdrop-filter: saturate(160%) blur(12px)` over an 82%-opacity ground.
  Disable it below 996px, or it clips the mobile drawer.
- **Reading measure** around 65–75 characters.

---

## 5. Component patterns

| Pattern | Recipe |
| --- | --- |
| **Card** | Surface bg, hairline border, 10px radius, `1.05rem` padding. Optional mono eyebrow above a display title. Hover: brand border + lift + arrow fades in. |
| **Callout** | Wash background + matching 30% border in one of the four semantic colours. Mono uppercase title in the solid colour, `0.68rem`, `0.14em` tracking. |
| **Pill** | Wash bg, solid text, `999px` radius, mono `0.68rem`, `0.15rem 0.5rem` padding. |
| **Steps** | Counter-based `<ol>`. Circular numbered node on a vertical connector line; the last item's line goes transparent. |
| **Section divider** | Mono, uppercase, `0.63rem`, `0.16em` tracking, `--pt-dim`. |
| **Primary button** | The gradient, `#06110b` text, no border, 10px radius. |
| **Ghost button** | Surface bg, `--pt-line` border, brand on hover. |

---

## 6. Rules that keep it coherent

1. **Emerald is the brand. Violet is the accent. Never swap them.** Violet leading reads as a
   different company.
2. **One gradient, three placements.** Any fourth use cheapens it.
3. **Define both themes at token level.** Never put a colour's only definition inside a
   `[data-theme]` block.
4. **Small labels are monospace.** This single rule carries most of the identity.
5. **Hairlines over shadows.** If something needs separating, use `--pt-line`.
6. **Semantic colour is separate from brand colour.** `warn` amber is not an accent — it means
   something.
7. **Respect `prefers-reduced-motion`** — disable the lift and the transitions.

---

## 7. Copy-paste starter

```css
:root {
  --primary: #12a05a;
  --accent: #6d4fd0;
  --bg: #fbfcfb;
  --panel: #f6f8f7;
  --surface: #ffffff;
  --surface-hover: #f4f9f6;
  --line: #e2e8e4;
  --strong: #0f1a15;
  --muted: #55635c;
  --dim: #7c8a83;
  --ok: #12a05a;
  --warn: #a76a08;
  --danger: #c0392f;
  --gradient: linear-gradient(95deg, var(--accent), var(--primary));
  --radius: 10px;

  --display: 'Space Grotesk', 'Inter', sans-serif;
  --body: 'Inter', system-ui, -apple-system, sans-serif;
  --mono: 'JetBrains Mono', ui-monospace, monospace;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme='light']) {
    --primary: #2ed47f;
    --accent: #8b7cf6;
    --bg: #08090f;
    --panel: #0e1119;
    --surface: #131823;
    --surface-hover: #171e2b;
    --line: #252d3c;
    --strong: #edf2f7;
    --muted: #9aa7b7;
    --dim: #647386;
    --ok: #3ddc97;
    --warn: #f0b44d;
    --danger: #f06b68;
  }
}

:root[data-theme='dark'] {
  /* repeat the dark block verbatim so an explicit toggle wins */
}

body {
  background: var(--bg);
  color: var(--muted);
  font: 400 16px/1.7 var(--body);
}
h1, h2, h3 { font-family: var(--display); font-weight: 600; letter-spacing: -0.02em; color: var(--strong); }
.eyebrow { font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--dim); }
```

---

## 8. Where it came from

The brand emerald is sampled from the isometric cube in `static/img/logo.png`. Violet was chosen as
the counterweight because it sits far enough from emerald on the wheel to read as a distinct signal,
while staying cool enough not to compete for attention — warm accents (orange, red) would have
collided with the semantic `warn` and `danger` states.

The near-black `#08090f` and the monospace-label treatment came from a design reference for a
CTO-review build of these docs; the emerald was kept over that reference's cyan so the site stays
consistent with the logo.
