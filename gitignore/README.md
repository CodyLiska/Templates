# Gitignore Templates

This archive contains ready-to-use `.gitignore` templates for different types of projects.

## Contents

- **dotnet.gitignore**
  - For C# and .NET projects (API, libraries, desktop apps, etc.)
  - Ignores `bin/`, `obj/`, Visual Studio files, NuGet artifacts, ReSharper files, etc.

- **frontend.gitignore**
  - For frontend JavaScript frameworks (React, Vue, Angular, Next.js, Nuxt, etc.)
  - Ignores `node_modules/`, build outputs (`dist/`, `build/`, `.next/`, `.nuxt/`), caches, logs, and local environment files.

- **javascript.gitignore**
  - For general JavaScript projects (Node.js apps, scripts, utilities)
  - Ignores `node_modules/`, build outputs, test coverage reports, logs, and `.env` files.

- **python.gitignore**
  - For Python projects
  - Ignores `__pycache__/`, virtual environments (`venv/`, `.venv/`, etc.), build artifacts, coverage/test reports, and IDE files.

- **master.gitignore**
  - A combined `.gitignore` that includes all of the above
  - Useful for mixed repositories (e.g., .NET backend + React frontend + Python tooling)

## Usage

1. Choose the `.gitignore` file that matches your project type.
2. Copy it to the root of your repository and rename it to `.gitignore`.
3. Commit the `.gitignore` to your repo so all contributors share the same ignore rules.

Example:

```bash
cp dotnet.gitignore .gitignore
git add .gitignore
git commit -m "Add .gitignore for .NET project"
```

---

✅ With these `.gitignore` files, you’ll keep your repositories clean and free of unnecessary build artifacts, caches, and local environment files.
