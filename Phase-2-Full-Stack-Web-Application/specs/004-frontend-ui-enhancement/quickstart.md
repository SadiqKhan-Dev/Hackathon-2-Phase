# Quickstart: UI/UX Enhancement

This guide provides instructions for developers on how to use the new design system and UI components implemented in this feature.

## Design Tokens

All design tokens (colors, fonts, spacing) are defined in `tailwind.config.js`. Please refer to this file as the single source of truth.

### Colors

Use the semantic color names defined in the theme.

- `primary`: For primary actions and highlights.
- `secondary`: For secondary actions and less prominent elements.
- `accent`: For accents and special highlights.
- `background`: For page and component backgrounds.
- `text-primary`: For primary text content.
- `text-secondary`: For secondary or muted text content.

**Example**:
```html
<button class="bg-primary text-white">Click me</button>
<p class="text-text-secondary">Some muted text.</p>
```

### Typography

Font sizes and weights are defined as part of the theme.

- `text-sm`, `text-base`, `text-lg`, `text-xl`, etc.

**Example**:
```html
<h1 class="text-2xl font-bold">Main Heading</h1>
<p class="text-base">This is a paragraph.</p>
```

### Spacing

Use the spacing scale defined in `tailwind.config.js`.

- `p-2`, `m-4`, `gap-8`, etc.

**Example**:
```html
<div class="p-4 m-2 border rounded-lg">
  Some content with padding and margin.
</div>
```

## UI States

When implementing components that fetch data, use the following approach to handle UI states.

### Loading State

Use React Suspense and the `loading.tsx` file in Next.js App Router to automatically show a loading UI.

### Empty State

If a component receives an empty array of data, it should render a dedicated empty state component that displays a user-friendly message.

**Example**:
```tsx
function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <EmptyState message="No tasks yet!" />;
  }

  return (
    <ul>
      {tasks.map(task => <li key={task.id}>{task.title}</li>)}
    </ul>
  );
}
```

### Error State

Use the `error.tsx` file in Next.js App Router to display an error boundary when a data fetching or rendering error occurs.

## Accessibility

- Always use semantic HTML.
- Ensure all interactive elements are keyboard accessible.
- Use the provided color palette to maintain sufficient color contrast.
- Add ARIA attributes where necessary.
