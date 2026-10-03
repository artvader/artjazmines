# Graph Report - portfolio  (2026-10-03)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 105 nodes · 119 edges · 9 communities (8 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- App.tsx
- compilerOptions
- package.json
- compilerOptions
- devDependencies
- scripts
- .oxlintrc.json
- dependencies
- tsconfig.json

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 18 edges
2. `compilerOptions` - 15 edges
3. `App()` - 8 edges
4. `scripts` - 7 edges
5. `Hero()` - 4 edges
6. `About()` - 3 edges
7. `Contact()` - 3 edges
8. `Footer()` - 3 edges
9. `Navigation()` - 3 edges
10. `Services()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `About()`  [EXTRACTED]
  src/App.tsx → src/components/About.tsx
- `App()` --calls--> `Contact()`  [EXTRACTED]
  src/App.tsx → src/components/Contact.tsx
- `App()` --calls--> `Footer()`  [EXTRACTED]
  src/App.tsx → src/components/Footer.tsx
- `App()` --calls--> `Hero()`  [EXTRACTED]
  src/App.tsx → src/components/Hero.tsx
- `App()` --calls--> `Services()`  [EXTRACTED]
  src/App.tsx → src/components/Services.tsx

## Import Cycles
- None detected.

## Communities (9 total, 1 thin omitted)

### Community 0 - "App.tsx"
Cohesion: 0.18
Nodes (10): react, react-dom, App(), About(), Contact(), Footer(), Hero(), Navigation() (+2 more)

### Community 1 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 2 - "package.json"
Cohesion: 0.13
Nodes (15): name, private, type, version, @cup319/mmpl, lucide-react, oxlint, tailwindcss (+7 more)

### Community 3 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 4 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, @cup319/mmpl, oxlint, @types/node, @types/react, @types/react-dom, typescript, vite (+1 more)

### Community 5 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, lint, memory-palace, mepalace, preview

### Community 6 - ".oxlintrc.json"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 7 - "dependencies"
Cohesion: 0.33
Nodes (6): dependencies, lucide-react, react, react-dom, tailwindcss, @tailwindcss/vite

## Knowledge Gaps
- **70 isolated node(s):** `allowArbitraryExtensions`, `allowImportingTsExtensions`, `erasableSyntaxOnly`, `jsx`, `lib` (+65 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 71 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `App.tsx` to `package.json`?**
  _High betweenness centrality (0.092) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **Why does `scripts` connect `scripts` to `package.json`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **What connects `allowArbitraryExtensions`, `allowImportingTsExtensions`, `erasableSyntaxOnly` to the rest of the system?**
  _70 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.1323529411764706 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._