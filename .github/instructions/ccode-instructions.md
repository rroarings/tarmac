---
applyTo: '**'
---
# Frontend Coding Standards

## Component Structure
- Use `.astro` extension for Astro components
- Place components in `src/components/` directory
- Group related components in subdirectories
- Follow atomic design principles (atoms, molecules, organisms)

## Naming Conventions
- Components: PascalCase (e.g., `RaceCard.astro`, `DriverProfile.astro`)
- CSS classes: kebab-case (e.g., `race-card`, `driver-profile`)
- Tailwind utilities: follow Tailwind's class order convention
- Custom CSS variables: `--component-element-property`

## HTML Best Practices
- Use semantic HTML elements (`article`, `section`, `nav`)
- Include ARIA labels and roles for accessibility
- Maintain proper heading hierarchy (h1 -> h6)
- Add alt text for all images
- Use lists (`ul`, `ol`) for grouped content

## Tailwind Practices
- Use consistent spacing scales (0.5rem increments)
- Follow responsive breakpoint pattern: 
  ```html
  <div class="w-full md:w-1/2 lg:w-1/3">
  ```
- Group related utilities:
  ```html
  <!-- Layout -->
  <div class="flex flex-col items-center justify-between
              <!-- Spacing -->
              p-4 m-2
              <!-- Visual -->
              bg-white rounded-lg shadow-md">
  ```
- Extract common patterns to components

## Astro Component Patterns
- Front matter goes at the top
- Props interface follows
- Data fetching/processing next
- Template last
```astro
---
// Component props
interface Props {
  title: string;
}

// Data processing
const { title } = Astro.props;
---

<div class="component">
  <h2>{title}</h2>
</div>
```

## CSS Organization
- Use Tailwind's layer directives
- Group custom CSS by component
- Follow mobile-first approach
- Use CSS custom properties for theming

## Performance Guidelines
- Lazy load images with `loading="lazy"`
- Use appropriate image formats (WebP with fallbacks)
- Minimize JS where possible
- Utilize Astro's partial hydration patterns

## Accessibility Standards
- Maintain color contrast (WCAG 2.1)
- Implement keyboard navigation
- Use proper form labels
- Include skip links
- Test with screen readers

## Documentation
- Document complex components
- Include usage examples
- Note any browser compatibility issues
- Document props and their types

# Wait for Approval
- Ask for confirmation before doing edits