# react-tanstack-form-shadcn

A powerful form factory that combines [TanStack Form](https://tanstack.com/form) with [Shadcn UI](https://ui.shadcn.com/) components. Features built-in lazy loading, validation support, and a type-safe API.

## 🚀 Features

- **Pre-configured Components**: Includes Shadcn UI wrappers for common form fields (Input, Select, CheckBox, Switch, etc.).
- **Lazy Loading**: Field components are lazy-loaded for optimal performance.
- **Type Safety**: Full TypeScript support leveraging TanStack Form's type inference.
- **Validation**: Integrated with standard TanStack Form validation.

## 📦 Installation

```bash
npm install react-tanstack-form-shadcn
# Peer dependencies
npm install @tanstack/react-form @tanstack/react-query react react-dom
```

## 🛠️ Usage

### 1. Create your Form Factory

Use `createAppForm` to create a form instance with the default component registry.

```tsx
// src/hooks/useAppForm.ts
import { createAppForm } from "react-tanstack-form-shadcn";

// You can override or add components in the config if needed

export const { useAppForm, withFieldGroup, withForm } = createAppForm();
```

### 2. Define and Render a Form

```tsx
import { useAppForm } from "./hooks/useAppForm";
import { z } from "zod"; // Optional: for validation

export default function MyForm() {
  const form = useAppForm({
    defaultValues: {
      email: "",
      marketingOptIn: false,
    },
    onSubmit: async ({ value }) => {
      console.log("Submitted:", value);
    },
  });

  return (
    <div>
      <h2 className="text-lg font-bold">Registration</h2>
      <form.Provider>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="space-y-4"
        >
          {/* Text Input */}
          <form.Field
            name="email"
            children={(field) => (
              // "Input" maps to the pre-registered Shadcn FieldInput component
              <field.Input
                label="Email Address"
                placeholder="hello@example.com"
              />
            )}
          />

          {/* Checkbox */}
          <form.Field
            name="marketingOptIn"
            children={(field) => (
              // "CheckBox" maps to the pre-registered Shadcn FieldCheckBox component
              <field.CheckBox label="Receive marketing emails" />
            )}
          />

          {/* Submit Button (using helper component) */}
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <button type="submit" disabled={!canSubmit}>
                {isSubmitting ? "..." : "Submit"}
              </button>
            )}
          />
        </form>
      </form.Provider>
    </div>
  );
}
```

## 🧩 Default Component Registry

The `createAppForm` factory comes with the following components lazy-loaded by default:

- **Input**: `FieldInput` (Text inputs)
- **Select**: `FieldSelect`
- **TextArea**: `FieldTextArea`
- **CheckBox**: `FieldCheckBox`
- **Switch**: `FieldSwitch`
- **RadioGroup**: `FieldRadioGroup`

## 📄 License

MIT
