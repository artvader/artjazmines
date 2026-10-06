# Graph Report - portfolio  (2026-10-05)

## Corpus Check
- 19 files · ~677,057 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: .woff2 6, (none) 2, .css 2)

## Summary
- 139 nodes · 158 edges · 17 communities (11 shown, 6 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.95)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fe67c42a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

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
- Portfolio Codebase Handoff
- Navigation.tsx
- React + TypeScript + Vite
- AGENTS.md

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 18 edges
2. `compilerOptions` - 15 edges
3. `Portfolio Codebase Handoff` - 11 edges
4. `App()` - 9 edges
5. `Component Notes` - 8 edges
6. `scripts` - 7 edges
7. `App Flow` - 7 edges
8. `react` - 4 edges
9. `About()` - 4 edges
10. `Contact()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `App Flow` --references--> `About()`  [INFERRED]
  HANDOFF.md → src/components/About.tsx
- `App Flow` --references--> `Contact()`  [INFERRED]
  HANDOFF.md → src/components/Contact.tsx
- `App Flow` --references--> `Footer()`  [INFERRED]
  HANDOFF.md → src/components/Footer.tsx
- `App Flow` --references--> `Hero()`  [INFERRED]
  HANDOFF.md → src/components/Hero.tsx
- `App Flow` --references--> `Services()`  [INFERRED]
  HANDOFF.md → src/components/Services.tsx

## Import Cycles
- None detected.

## Communities (17 total, 6 thin omitted)

### Community 0 - "App.tsx"
Cohesion: 0.21
Nodes (11): App Flow, react, react-dom, App(), About(), Contact(), Footer(), Hero() (+3 more)

### Community 1 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 2 - "package.json"
Cohesion: 0.14
Nodes (14): name, private, type, version, @cup319/mmpl, oxlint, tailwindcss, @tailwindcss/vite (+6 more)

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

### Community 9 - "Portfolio Codebase Handoff"
Cohesion: 0.11
Nodes (17): `About.tsx`, Component Notes, `Contact.tsx`, `Footer.tsx`, `Hero.tsx`, How To Reorient Quickly, Important Commands, Known Constraints And Gotchas (+9 more)

### Community 10 - "Navigation.tsx"
Cohesion: 0.43
Nodes (5): lucide-react, PillRect, mobileMenuContent, NavItemId, navItems

### Community 11 - "React + TypeScript + Vite"
Cohesion: 0.50
Nodes (3): Expanding the Oxlint configuration, React Compiler, React + TypeScript + Vite

## Knowledge Gaps
- **88 isolated node(s):** `$schema`, `plugins`, `react/rules-of-hooks`, `react/only-export-components`, `name` (+83 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 96 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Portfolio Codebase Handoff` connect `Portfolio Codebase Handoff` to `App.tsx`?**
  _High betweenness centrality (0.128) - this node is a cross-community bridge._
- **Why does `App Flow` connect `App.tsx` to `Portfolio Codebase Handoff`?**
  _High betweenness centrality (0.122) - this node is a cross-community bridge._
- **Why does `react-dom` connect `App.tsx` to `package.json`?**
  _High betweenness centrality (0.120) - this node is a cross-community bridge._
- **What connects `$schema`, `plugins`, `react/rules-of-hooks` to the rest of the system?**
  _88 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.14166666666666666 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._