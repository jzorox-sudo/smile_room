---
name: Ethos Dental
colors:
  surface: '#f6fafb'
  surface-dim: '#d6dbdc'
  surface-bright: '#f6fafb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f4f5'
  surface-container: '#eaeff0'
  surface-container-high: '#e5e9ea'
  surface-container-highest: '#dfe3e4'
  on-surface: '#181c1d'
  on-surface-variant: '#44474c'
  inverse-surface: '#2c3132'
  inverse-on-surface: '#edf1f2'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4f6073'
  primary: '#041627'
  on-primary: '#ffffff'
  primary-container: '#1a2b3c'
  on-primary-container: '#8192a7'
  inverse-primary: '#b7c8de'
  secondary: '#00677f'
  on-secondary: '#ffffff'
  secondary-container: '#60d7fd'
  on-secondary-container: '#005c72'
  tertiary: '#1f1400'
  on-tertiary: '#ffffff'
  tertiary-container: '#382700'
  on-tertiary-container: '#aa8d55'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4fb'
  primary-fixed-dim: '#b7c8de'
  on-primary-fixed: '#0b1d2d'
  on-primary-fixed-variant: '#38485a'
  secondary-fixed: '#b6eaff'
  secondary-fixed-dim: '#5dd5fa'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e60'
  tertiary-fixed: '#ffdea3'
  tertiary-fixed-dim: '#e3c285'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#594312'
  background: '#f6fafb'
  on-background: '#181c1d'
  surface-variant: '#dfe3e4'
  surface-ice: '#eef6f8'
  accent-hover: '#0891b2'
  text-muted: '#6b7f8e'
  success-clinical: '#10b981'
  border-subtle: rgba(14, 165, 201, 0.15)
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 36px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  button-text:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-gap-lg: 120px
  section-gap-sm: 64px
---

## Brand & Style

This design system is engineered for a premium dental practice that balances clinical excellence with a boutique, hospitality-driven experience. The brand personality is authoritative yet serene, targeting a discerning demographic that values both aesthetic outcomes and meticulous hygiene.

The chosen style is **Minimalist with Tactile Premium Accents**. It leverages high-key white space to evoke a sterile, clinical environment, while grounding the experience with deep navy surfaces and gold detailing to signal luxury and exclusivity. The interface avoids unnecessary decoration, relying instead on precision, generous padding, and refined serif typography to communicate trust.

## Colors

The palette is centered on a "Clinical Contrast" model.
- **Deep Navy (#1a2b3c)**: Used for primary surfaces, hero text, and navigation to provide a sense of stability and institutional trust.
- **Ice Blue Neutrals (#f7fbfc, #eef6f8)**: These serve as the canvas for the UI, providing a cooling, hygienic alternative to pure white that reduces eye strain.
- **Turquoise Accents (#0ea5c9)**: A modern medical hue used sparingly for interactive elements and primary calls to action.
- **Gold (#c8a96e)**: Reserved exclusively for "Premium Badges," certifications, and high-tier service markers to denote quality.

## Typography

The typographic scale uses a sophisticated serif-sans pairing to reflect the balance of traditional medical authority and modern technology.

- **Headlines (EB Garamond)**: Utilized for page titles and section headers. The slight organic curves suggest a human touch and high-end editorial quality.
- **Body (Inter)**: The workhorse for all patient information, forms, and clinical descriptions. Its high legibility ensures clarity for all age groups.
- **Accents (DM Sans)**: Used for buttons, labels, and navigation. It provides a clean, functional counterpoint to the serif headers, appearing sharp and efficient.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid with Atmospheric Padding**. 
- **Desktop**: A 12-column grid with a 1200px max-width centered in the viewport.
- **Sectioning**: Use extremely generous vertical spacing (`section-gap-lg`) between content blocks to maintain a calm, unhurried pace suitable for a premium service.
- **Alignment**: Text-heavy clinical content should be left-aligned for readability, while brand-led hero sections can utilize centered layouts for impact.
- **Mobile**: Transitions to a single-column flow with 20px side margins. Elements should stack vertically with consistent 32px spacing between smaller components.

## Elevation & Depth

To maintain a "clean" and "hygienic" aesthetic, this design system avoids heavy shadows and skeuomorphism.

- **Tonal Layering**: Depth is created by placing white cards on `surface-ice` (#f7fbfc) backgrounds.
- **Ghost Outlines**: Use the `border-subtle` (low-opacity turquoise) for input fields and container boundaries. This provides structure without visual clutter.
- **High-Contrast Deep Surfaces**: Use the Navy primary color for the footer and primary call-to-action sections to create a "grounding" effect at the bottom of pages.
- **Glassmorphism**: Apply a subtle backdrop blur (12px) on navigation bars to maintain context as the user scrolls through imagery.

## Shapes

The shape language is **Soft and Precise**. 

- **Primary Radius**: A 4px (`0.25rem`) radius is used for buttons and inputs. This provides a professional, sharp look that isn't as aggressive as hard corners but remains more formal than highly rounded shapes.
- **Card Containers**: Larger containers may use `rounded-lg` (8px) to feel more approachable.
- **Media**: Clinical photography and doctor portraits should utilize sharp or slightly softened corners (4px) to emphasize precision. Circular shapes are reserved strictly for team headshots or testimonials.

## Components

### Buttons
- **Primary**: Navy background with white text (DM Sans). No shadow, 4px radius. 
- **Secondary**: Turquoise background, transitions to `accent-hover` on hover.
- **Ghost**: Transparent background with Navy border and text.

### Inputs & Fields
- Background: White.
- Border: `border-subtle`.
- Focus State: 2px solid Turquoise.
- Labels: `label-caps` positioned above the field for maximum clarity.

### Cards
- Standard cards use a white background with no border and a very subtle 2px blur shadow (Navy at 5% opacity).
- Used for service descriptions (e.g., "Dental Implants," "Cosmetic Veneers").

### Premium Badges
- Small, uppercase labels with a Gold background and Navy text. Used for "Certified," "Specialist," or "New Technology" markers.

### Lists
- Use Turquoise checkmarks for clinical benefits or "What to expect" lists to reinforce the medical accent color.