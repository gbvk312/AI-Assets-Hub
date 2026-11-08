/**
 * AI Assets Hub — Curated Marketplace of 50 Essential Plugins, AI Tools & Integrations
 * Pure Vanilla JavaScript (ES6+) · Explicitly hardcoded 50-item dataset + ./plugins.json sync
 */

export const BASE_CATEGORIES = [
  'All',
  'Developers',
  'Testers & QA',
  'Designers & UI',
  'AI & Automation',
  'GitHub Pages & Docs',
];

export const POPULAR_STARS_THRESHOLD = 15000;

/**
 * Complete 50-item dataset explicitly hardcoded for AI Assets Hub.
 */
export const TOP_50_PLUGINS = [
  // ============================================================================
  // AI & Automation (10)
  // ============================================================================
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programmer and code completion assistant.',
    author: 'github',
    version: '1.250.0',
    stars: 48500,
    rating: '4.9',
    category: 'AI & Automation',
    tags: ['ai', 'copilot', 'autocomplete', 'code-generation', 'github'],
    installCommand: 'gh extension install github/gh-copilot',
    downloadUrl: 'https://github.com/github/gh-copilot/releases/latest',
    readme:
      '# GitHub Copilot\n\n**AI pair programmer and code completion assistant** integrated across IDEs, CLI, and GitHub Pull Requests.\n\n## Quick Install\n\n```bash\ngh extension install github/gh-copilot\ngh copilot suggest "Install Playwright and run headless tests"\n```\n\n## Key Capabilities\n\n- Context-aware inline code completions and multi-file edits\n- CLI command explanations and shell script synthesis\n- Automated pull request summaries and security fix suggestions',
  },
  {
    id: 'coderabbit',
    name: 'CodeRabbit',
    description: 'AI-powered pull request reviewer that cuts review time in half.',
    author: 'coderabbitai',
    version: '2.14.0',
    stars: 19400,
    rating: '4.9',
    category: 'AI & Automation',
    tags: ['ai-review', 'pull-requests', 'code-quality', 'automation'],
    installCommand: 'npx @coderabbitai/cli init --repo',
    downloadUrl: 'https://github.com/marketplace/coderabbitai',
    readme:
      '# CodeRabbit\n\n**AI-powered pull request reviewer** that delivers line-by-line feedback, architectural diagrams, and one-click committable fixes.\n\n## Configuration (`.coderabbit.yaml`)\n\n```yaml\nlanguage: "en-US"\nreviews:\n  profile: "chill"\n  request_changes_workflow: true\n  high_level_summary: true\n```',
  },
  {
    id: 'cursor-subagents-rules',
    name: 'Cursor Subagents / Rules',
    description: 'Autonomous AI coding workflows and repository context plugins.',
    author: 'getcursor',
    version: '1.8.0',
    stars: 31200,
    rating: '4.9',
    category: 'AI & Automation',
    tags: ['cursor', 'subagents', 'cursorrules', 'ai-workflows', 'agents'],
    installCommand: 'npx cursor-rules-cli init --template fullstack',
    downloadUrl: 'https://github.com/PatrickJS/awesome-cursorrules/archive/refs/heads/main.tar.gz',
    readme:
      '# Cursor Subagents / Rules\n\n**Autonomous AI coding workflows and repository context plugins** using `.cursor/rules` and specialized task subagents.\n\n## Quick Setup\n\n```bash\nmkdir -p .cursor/rules\nnpx cursor-rules-cli init --template fullstack\n```',
  },
  {
    id: 'deepsource',
    name: 'DeepSource',
    description: 'AI static analysis and automated code quality platform.',
    author: 'deepsourcelabs',
    version: '3.6.1',
    stars: 11800,
    rating: '4.8',
    category: 'AI & Automation',
    tags: ['static-analysis', 'autofix', 'code-quality', 'ai', 'security'],
    installCommand: 'curl https://deepsource.io/cli | sh',
    downloadUrl: 'https://github.com/DeepSourceCorp/cli/releases/latest',
    readme:
      '# DeepSource\n\n**AI static analysis and automated code quality platform** that detects bug risks, anti-patterns, and security vulnerabilities on every commit.\n\n```bash\ncurl https://deepsource.io/cli | sh\ndeepsource report --analyzer test-coverage\n```',
  },
  {
    id: 'opencode',
    name: 'OpenCode',
    description: 'AI workflow integration for Copilot and automated code generation.',
    author: 'opencode-ai',
    version: '1.5.2',
    stars: 14600,
    rating: '4.8',
    category: 'AI & Automation',
    tags: ['opencode', 'copilot', 'code-generation', 'cli-agent', 'automation'],
    installCommand: 'npm install -g opencode-ai',
    downloadUrl: 'https://github.com/opencode-ai/opencode/releases/latest',
    readme:
      '# OpenCode\n\n**AI workflow integration for Copilot and automated code generation** directly from your terminal and GitHub Actions.\n\n```bash\nnpm install -g opencode-ai\nopencode run --prompt "Refactor API handlers with strict validation"\n```',
  },
  {
    id: 'lovablebot',
    name: 'LovableBot',
    description: 'Two-way AI full-stack project synchronization for GitHub.',
    author: 'lovable-dev',
    version: '2.3.0',
    stars: 16900,
    rating: '4.8',
    category: 'AI & Automation',
    tags: ['lovable', 'fullstack', 'github-sync', 'ai-builder', 'ui'],
    installCommand: 'npx @lovable/github-sync init',
    downloadUrl: 'https://github.com/lovable-dev/lovable-sync/releases/latest',
    readme:
      '# LovableBot\n\n**Two-way AI full-stack project synchronization for GitHub**, keeping visual AI edits and repository commits continuously aligned.\n\n```bash\nnpx @lovable/github-sync init\n```',
  },
  {
    id: 'sweep-ai',
    name: 'Sweep AI',
    description: 'AI junior developer that transforms issues into pull requests.',
    author: 'sweepai',
    version: '1.19.4',
    stars: 18200,
    rating: '4.8',
    category: 'AI & Automation',
    tags: ['sweep', 'issue-to-pr', 'ai-agent', 'github-bot', 'automation'],
    installCommand: 'pip install sweepai && sweep init',
    downloadUrl: 'https://github.com/sweepai/sweep/releases/latest',
    readme:
      '# Sweep AI\n\n**AI junior developer that transforms GitHub issues into pull requests** by reading repository context, planning edits, and validating CI runs.\n\n```bash\npip install sweepai && sweep init\n```',
  },
  {
    id: 'codiumai-qodo',
    name: 'CodiumAI (Qodo)',
    description: 'AI-driven meaningful test generation for busy developers.',
    author: 'Codium-ai',
    version: '2.9.0',
    stars: 15700,
    rating: '4.8',
    category: 'AI & Automation',
    tags: ['qodo', 'codiumai', 'unit-tests', 'ai-testing', 'pr-agent'],
    installCommand: 'npx @qodo/command init',
    downloadUrl: 'https://github.com/Codium-ai/pr-agent/releases/latest',
    readme:
      '# CodiumAI (Qodo)\n\n**AI-driven meaningful test generation for busy developers**, analyzing edge cases and code behavior to generate high-integrity test suites.\n\n```bash\nnpx @qodo/command init\n```',
  },
  {
    id: 'mintlify-writer',
    name: 'Mintlify Writer',
    description: 'AI-powered documentation generator directly from code.',
    author: 'mintlify',
    version: '4.0.8',
    stars: 13900,
    rating: '4.8',
    category: 'AI & Automation',
    tags: ['mintlify', 'documentation', 'jsdoc', 'markdown', 'ai'],
    installCommand: 'npm i -g mintlify && mintlify dev',
    downloadUrl: 'https://github.com/mintlify/writer/releases/latest',
    readme:
      '# Mintlify Writer\n\n**AI-powered documentation generator directly from code**, producing clean docstrings, OpenAPI references, and MDX guides.\n\n```bash\nnpm i -g mintlify && mintlify dev\n```',
  },
  {
    id: 'renovate-bot',
    name: 'Renovate Bot',
    description: 'Automated dependency updates with smart merge confidence.',
    author: 'renovatebot',
    version: '39.12.0',
    stars: 24600,
    rating: '4.9',
    category: 'AI & Automation',
    tags: ['renovate', 'dependencies', 'semver', 'automerge', 'automation'],
    installCommand: 'npx renovate --platform=github',
    downloadUrl: 'https://github.com/renovatebot/renovate/releases/latest',
    readme:
      '# Renovate Bot\n\n**Automated dependency updates with smart merge confidence**, monorepo grouping, and Merge Confidence insights across 90+ package managers.\n\n```bash\nnpx renovate --platform=github\n```',
  },

  // ============================================================================
  // Developers & Coding (10) -> Category tab: "Developers"
  // ============================================================================
  {
    id: 'prettier',
    name: 'Prettier',
    description: 'Opinionated code formatter for consistent styling across repos.',
    author: 'prettier',
    version: '3.4.2',
    stars: 49800,
    rating: '4.9',
    category: 'Developers',
    tags: ['formatter', 'javascript', 'typescript', 'css', 'code-style'],
    installCommand: 'npm install --save-dev --save-exact prettier',
    downloadUrl: 'https://github.com/prettier/prettier/releases/latest',
    readme:
      '# Prettier\n\n**Opinionated code formatter for consistent styling across repos**, supporting JavaScript, TypeScript, JSX, CSS, HTML, JSON, and Markdown.\n\n```bash\nnpm install --save-dev --save-exact prettier\nnpx prettier . --write\n```',
  },
  {
    id: 'eslint',
    name: 'ESLint',
    description: 'Pluggable JavaScript and TypeScript linter for bug prevention.',
    author: 'eslint',
    version: '9.18.0',
    stars: 25400,
    rating: '4.9',
    category: 'Developers',
    tags: ['linter', 'javascript', 'typescript', 'static-analysis', 'ast'],
    installCommand: 'npm init @eslint/config@latest',
    downloadUrl: 'https://github.com/eslint/eslint/releases/latest',
    readme:
      '# ESLint\n\n**Pluggable JavaScript and TypeScript linter for bug prevention**, enforcing coding standards with flat config support.\n\n```bash\nnpm init @eslint/config@latest\nnpx eslint src/\n```',
  },
  {
    id: 'gitlens',
    name: 'GitLens',
    description: 'Supercharges Git capabilities with blame annotations and authorship.',
    author: 'gitkraken',
    version: '16.2.1',
    stars: 21300,
    rating: '4.9',
    category: 'Developers',
    tags: ['git', 'blame', 'commit-graph', 'vscode', 'version-control'],
    installCommand: 'code --install-extension eamodio.gitlens',
    downloadUrl: 'https://github.com/gitkraken/vscode-gitlens/releases/latest',
    readme:
      '# GitLens\n\n**Supercharges Git capabilities with blame annotations and authorship**, interactive commit graphs, and rich history exploration.\n\n```bash\ncode --install-extension eamodio.gitlens\n```',
  },
  {
    id: 'gitpod',
    name: 'Gitpod',
    description: 'Spin up fresh, automated cloud dev environments in seconds.',
    author: 'gitpod-io',
    version: '1.42.0',
    stars: 13400,
    rating: '4.8',
    category: 'Developers',
    tags: ['cloud-ide', 'devcontainers', 'workspaces', 'github', 'devops'],
    installCommand: 'curl -fsSL https://gitpod.io/install.sh | sh',
    downloadUrl: 'https://github.com/gitpod-io/gitpod/releases/latest',
    readme:
      '# Gitpod\n\n**Spin up fresh, automated cloud dev environments in seconds** defined declaratively via `.gitpod.yml` or Devcontainers.\n\n```bash\ncurl -fsSL https://gitpod.io/install.sh | sh\n```',
  },
  {
    id: 'mergify',
    name: 'Mergify',
    description: 'Pull request automation service and smart merge queue manager.',
    author: 'Mergifyio',
    version: '2.11.0',
    stars: 9600,
    rating: '4.8',
    category: 'Developers',
    tags: ['merge-queue', 'pull-requests', 'backport', 'ci-cd', 'github-app'],
    installCommand: 'npx mergify-cli init --config .mergify.yml',
    downloadUrl: 'https://github.com/Mergifyio/mergify/releases/latest',
    readme:
      '# Mergify\n\n**Pull request automation service and smart merge queue manager** that batches CI runs, rebases PRs automatically, and prevents broken `main` branches.\n\n```yaml\nqueue_rules:\n  - name: default\n    merge_conditions:\n      - check-success=build\n```',
  },
  {
    id: 'sonarqube-cloud',
    name: 'SonarQube Cloud',
    description: 'Continuous inspection of code quality and security smells.',
    author: 'SonarSource',
    version: '5.1.0',
    stars: 14200,
    rating: '4.8',
    category: 'Developers',
    tags: ['sonarqube', 'code-smells', 'clean-code', 'static-analysis', 'quality-gate'],
    installCommand: 'npx sonarqube-scanner -Dsonar.projectKey=my-project',
    downloadUrl: 'https://github.com/SonarSource/sonarcloud-github-action/releases/latest',
    readme:
      '# SonarQube Cloud\n\n**Continuous inspection of code quality and security smells** across 30+ languages with automated Pull Request Quality Gates.\n\n```bash\nnpx sonarqube-scanner -Dsonar.projectKey=my-project\n```',
  },
  {
    id: 'dependabot',
    name: 'Dependabot',
    description: 'Native automated dependency vulnerability scanning and updates.',
    author: 'github',
    version: '2.0.0',
    stars: 17900,
    rating: '4.9',
    category: 'Developers',
    tags: ['dependabot', 'security-alerts', 'dependencies', 'github-native', 'supply-chain'],
    installCommand: 'gh api repos/:owner/:repo/vulnerability-alerts -X PUT',
    downloadUrl: 'https://github.com/dependabot/dependabot-core/releases/latest',
    readme:
      '# Dependabot\n\n**Native automated dependency vulnerability scanning and updates** built directly into GitHub repositories.\n\n```yaml\nversion: 2\nupdates:\n  - package-ecosystem: "npm"\n    directory: "/"\n    schedule:\n      interval: "weekly"\n```',
  },
  {
    id: 'gitlive',
    name: 'GitLive',
    description: 'Real-time collaborative coding and preemptive merge conflict detection.',
    author: 'gitliveapp',
    version: '15.4.0',
    stars: 7400,
    rating: '4.7',
    category: 'Developers',
    tags: ['collaboration', 'merge-conflicts', 'pair-programming', 'git'],
    installCommand: 'code --install-extension gitlive.team-git',
    downloadUrl: 'https://github.com/gitliveapp/gitlive/releases/latest',
    readme:
      '# GitLive\n\n**Real-time collaborative coding and preemptive merge conflict detection** showing teammate changes in your gutter before they push.\n\n```bash\ncode --install-extension gitlive.team-git\n```',
  },
  {
    id: 'reviewnb',
    name: 'ReviewNB',
    description: 'Visual diff and code review plugin for Jupyter Notebooks.',
    author: 'ReviewNB',
    version: '3.2.0',
    stars: 6800,
    rating: '4.8',
    category: 'Developers',
    tags: ['jupyter', 'notebooks', 'data-science', 'visual-diff', 'code-review'],
    installCommand: 'pip install reviewnb-cli && reviewnb configure',
    downloadUrl: 'https://github.com/marketplace/review-notebook-app',
    readme:
      '# ReviewNB\n\n**Visual diff and code review plugin for Jupyter Notebooks**, rendering rich cell outputs, plots, and inline discussion threads in GitHub PRs.\n\n```bash\npip install reviewnb-cli && reviewnb configure\n```',
  },
  {
    id: 'rest-thunder-client',
    name: 'REST Client / Thunder Client',
    description: 'Lightweight API testing and HTTP request runner.',
    author: 'rangav',
    version: '2.28.4',
    stars: 16100,
    rating: '4.9',
    category: 'Developers',
    tags: ['rest-api', 'graphql', 'http-client', 'api-testing', 'collections'],
    installCommand: 'code --install-extension rangav.vscode-thunder-client',
    downloadUrl: 'https://github.com/rangav/thunder-client-support/releases/latest',
    readme:
      '# REST Client / Thunder Client\n\n**Lightweight API testing and HTTP request runner** with Git-friendly request collections and scriptless assertions.\n\n```bash\ncode --install-extension rangav.vscode-thunder-client\n```',
  },

  // ============================================================================
  // Testers, QA & Security (10) -> Category tab: "Testers & QA"
  // ============================================================================
  {
    id: 'playwright-test',
    name: 'Playwright Test',
    description: 'End-to-end modern web testing and browser automation plugin.',
    author: 'microsoft',
    version: '1.50.0',
    stars: 69400,
    rating: '5.0',
    category: 'Testers & QA',
    tags: ['playwright', 'e2e-testing', 'chromium', 'automation', 'qa'],
    installCommand: 'npm init playwright@latest',
    downloadUrl: 'https://github.com/microsoft/playwright/releases/latest',
    readme:
      '# Playwright Test\n\n**End-to-end modern web testing and browser automation plugin** supporting Chromium, WebKit, and Firefox with trace viewer debugging.\n\n```bash\nnpm init playwright@latest\nnpx playwright test --ui\n```',
  },
  {
    id: 'cypress-dashboard',
    name: 'Cypress Dashboard',
    description: 'Visual test runner and flake detection for web apps.',
    author: 'cypress-io',
    version: '14.0.2',
    stars: 47600,
    rating: '4.9',
    category: 'Testers & QA',
    tags: ['cypress', 'flake-detection', 'e2e', 'component-testing', 'qa'],
    installCommand: 'npm install cypress --save-dev && npx cypress open',
    downloadUrl: 'https://github.com/cypress-io/cypress/releases/latest',
    readme:
      '# Cypress Dashboard\n\n**Visual test runner and flake detection for web apps** with time-travel DOM snapshots, parallel CI orchestration, and replay artifacts.\n\n```bash\nnpm install cypress --save-dev && npx cypress open\n```',
  },
  {
    id: 'codecov',
    name: 'Codecov',
    description: 'Automated test coverage reporting and PR coverage diffing.',
    author: 'codecov',
    version: '5.3.1',
    stars: 12900,
    rating: '4.8',
    category: 'Testers & QA',
    tags: ['coverage', 'unit-testing', 'pull-requests', 'ci-cd', 'metrics'],
    installCommand: 'uses: codecov/codecov-action@v5',
    downloadUrl: 'https://github.com/codecov/codecov-action/releases/latest',
    readme:
      '# Codecov\n\n**Automated test coverage reporting and PR coverage diffing** that highlights untested lines directly inside GitHub Pull Requests.\n\n```yaml\n- name: Upload coverage reports to Codecov\n  uses: codecov/codecov-action@v5\n```',
  },
  {
    id: 'gitguardian',
    name: 'GitGuardian',
    description: '#1 secrets detection and credential security scanner for repos.',
    author: 'GitGuardian',
    version: '1.36.0',
    stars: 15800,
    rating: '4.9',
    category: 'Testers & QA',
    tags: ['secrets-detection', 'security', 'devsecops', 'pre-commit', 'credentials'],
    installCommand: 'pip install ggshield && ggshield secret scan repo .',
    downloadUrl: 'https://github.com/GitGuardian/ggshield/releases/latest',
    readme:
      '# GitGuardian\n\n**#1 secrets detection and credential security scanner for repos**, scanning commits and CI pipelines for 400+ API key and credential patterns.\n\n```bash\npip install ggshield && ggshield secret scan repo .\n```',
  },
  {
    id: 'snyk-security',
    name: 'Snyk Security',
    description: 'Finds and automatically fixes vulnerabilities in code and containers.',
    author: 'snyk',
    version: '1.1295.0',
    stars: 20400,
    rating: '4.9',
    category: 'Testers & QA',
    tags: ['snyk', 'vulnerabilities', 'sast', 'container-security', 'sca'],
    installCommand: 'npm install -g snyk && snyk test',
    downloadUrl: 'https://github.com/snyk/cli/releases/latest',
    readme:
      '# Snyk Security\n\n**Finds and automatically fixes vulnerabilities in code and containers**, open-source dependencies, and Infrastructure as Code.\n\n```bash\nnpm install -g snyk && snyk test\n```',
  },
  {
    id: 'htmlproofer',
    name: 'HTMLProofer',
    description: 'Validates rendered HTML output, broken links, and alt tags.',
    author: 'gjtorikian',
    version: '5.0.9',
    stars: 8900,
    rating: '4.8',
    category: 'Testers & QA',
    tags: ['html-validator', 'broken-links', 'seo-qa', 'static-sites', 'alt-tags'],
    installCommand: 'gem install html-proofer && htmlproofer ./_site',
    downloadUrl: 'https://github.com/gjtorikian/html-proofer/releases/latest',
    readme:
      '# HTMLProofer\n\n**Validates rendered HTML output, broken links, and alt tags** for Jekyll and static GitHub Pages deployments.\n\n```bash\ngem install html-proofer && htmlproofer ./_site\n```',
  },
  {
    id: 'check-run-reporter',
    name: 'Check Run Reporter',
    description: 'Displays JUnit, Pytest, and Checkstyle test results in PRs.',
    author: 'dorny',
    version: '1.9.1',
    stars: 7600,
    rating: '4.8',
    category: 'Testers & QA',
    tags: ['junit', 'pytest', 'test-reporter', 'github-checks', 'qa'],
    installCommand: 'uses: dorny/test-reporter@v1',
    downloadUrl: 'https://github.com/dorny/test-reporter/releases/latest',
    readme:
      '# Check Run Reporter\n\n**Displays JUnit, Pytest, and Checkstyle test results in PRs** with rich stack traces and inline failure annotations.\n\n```yaml\n- uses: dorny/test-reporter@v1\n  with:\n    name: JUnit Tests\n    path: reports/*.xml\n    reporter: java-junit\n```',
  },
  {
    id: 'allure-test-report',
    name: 'Allure Test Report',
    description: 'Generates interactive, visual execution reports for QA suites.',
    author: 'allure-framework',
    version: '2.32.0',
    stars: 14100,
    rating: '4.9',
    category: 'Testers & QA',
    tags: ['allure', 'test-reports', 'qa-dashboard', 'analytics', 'e2e'],
    installCommand: 'npm install -g allure-commandline && allure serve',
    downloadUrl: 'https://github.com/allure-framework/allure2/releases/latest',
    readme:
      '# Allure Test Report\n\n**Generates interactive, visual execution reports for QA suites**, complete with step attachments, historical trends, and category breakdowns.\n\n```bash\nnpm install -g allure-commandline && allure serve\n```',
  },
  {
    id: 'axe-devtools',
    name: 'axe DevTools',
    description: 'Automated web accessibility (a11y) testing for dev and QA teams.',
    author: 'dequelabs',
    version: '4.10.2',
    stars: 11200,
    rating: '4.9',
    category: 'Testers & QA',
    tags: ['accessibility', 'a11y', 'wcag', 'axe-core', 'qa-testing'],
    installCommand: 'npm install --save-dev @axe-core/playwright',
    downloadUrl: 'https://github.com/dequelabs/axe-core/releases/latest',
    readme:
      '# axe DevTools\n\n**Automated web accessibility (a11y) testing for dev and QA teams**, catching WCAG 2.1/2.2 violations with zero false positives.\n\n```bash\nnpm install --save-dev @axe-core/playwright\n```',
  },
  {
    id: 'codacy',
    name: 'Codacy',
    description: 'Automated code coverage, duplication, and security gatekeeper.',
    author: 'codacy',
    version: '7.8.0',
    stars: 9400,
    rating: '4.7',
    category: 'Testers & QA',
    tags: ['codacy', 'code-coverage', 'duplication', 'security-gate', 'sast'],
    installCommand: 'npx @codacy/codacy-analysis-cli analyze',
    downloadUrl: 'https://github.com/codacy/codacy-analysis-cli/releases/latest',
    readme:
      '# Codacy\n\n**Automated code coverage, duplication, and security gatekeeper** that standardizes quality gates across every repository.\n\n```bash\nnpx @codacy/codacy-analysis-cli analyze\n```',
  },

  // ============================================================================
  // Designers, UI/UX & Media (10) -> Category tab: "Designers & UI"
  // ============================================================================
  {
    id: 'storybook',
    name: 'Storybook',
    description: 'UI component explorer and isolated frontend workshop for designers.',
    author: 'storybookjs',
    version: '8.5.0',
    stars: 85200,
    rating: '5.0',
    category: 'Designers & UI',
    tags: ['storybook', 'design-system', 'ui-components', 'documentation', 'frontend'],
    installCommand: 'npx storybook@latest init',
    downloadUrl: 'https://github.com/storybookjs/storybook/releases/latest',
    readme:
      '# Storybook\n\n**UI component explorer and isolated frontend workshop for designers** and frontend engineers to build, document, and test UI states in isolation.\n\n```bash\nnpx storybook@latest init\nnpm run storybook\n```',
  },
  {
    id: 'chromatic',
    name: 'Chromatic',
    description: 'Visual regression testing and UI review plugin for Storybook.',
    author: 'chromaui',
    version: '11.22.0',
    stars: 13800,
    rating: '4.9',
    category: 'Designers & UI',
    tags: ['chromatic', 'visual-regression', 'storybook', 'ui-review', 'design-qa'],
    installCommand: 'npx chromatic --project-token=<PROJECT_TOKEN>',
    downloadUrl: 'https://github.com/chromaui/chromatic-cli/releases/latest',
    readme:
      '# Chromatic\n\n**Visual regression testing and UI review plugin for Storybook**, capturing cloud snapshots of every story to catch unintended pixel changes.\n\n```bash\nnpx chromatic --project-token=<PROJECT_TOKEN>\n```',
  },
  {
    id: 'tokens-studio-figma',
    name: 'Tokens Studio for Figma',
    description: 'Syncs design tokens directly between Figma and GitHub.',
    author: 'tokens-studio',
    version: '2.4.1',
    stars: 10900,
    rating: '4.9',
    category: 'Designers & UI',
    tags: ['figma', 'design-tokens', 'style-dictionary', 'css-variables', 'theming'],
    installCommand: 'npx @tokens-studio/sd-transforms build',
    downloadUrl: 'https://github.com/tokens-studio/figma-plugin/releases/latest',
    readme:
      '# Tokens Studio for Figma\n\n**Syncs design tokens directly between Figma and GitHub**, transforming W3C design tokens into CSS custom properties and Tailwind presets.\n\n```bash\nnpx @tokens-studio/sd-transforms build\n```',
  },
  {
    id: 'imgbot',
    name: 'Imgbot',
    description: 'Automated lossless image compression and optimization PR bot.',
    author: 'dabutvin',
    version: '2.1.0',
    stars: 8700,
    rating: '4.8',
    category: 'Designers & UI',
    tags: ['image-optimization', 'compression', 'png', 'svg', 'github-bot'],
    installCommand: 'gh extension install dabutvin/imgbot-cli',
    downloadUrl: 'https://github.com/dabutvin/Imgbot/releases/latest',
    readme:
      '# Imgbot\n\n**Automated lossless image compression and optimization PR bot** that shrinks PNG, JPG, and SVG assets in your repository without quality loss.\n\n```json\n{\n  "schedule": "daily",\n  "ignoredFiles": ["dist/**"],\n  "aggressiveCompression": false\n}\n```',
  },
  {
    id: 'tailwindcss-intellisense',
    name: 'Tailwind CSS IntelliSense',
    description: 'Autocomplete, syntax highlighting, and linting for UI utility classes.',
    author: 'tailwindlabs',
    version: '0.14.8',
    stars: 34500,
    rating: '5.0',
    category: 'Designers & UI',
    tags: ['tailwindcss', 'intellisense', 'css', 'ui-design', 'autocomplete'],
    installCommand: 'code --install-extension bradlc.vscode-tailwindcss',
    downloadUrl: 'https://github.com/tailwindlabs/tailwindcss-intellisense/releases/latest',
    readme:
      '# Tailwind CSS IntelliSense\n\n**Autocomplete, syntax highlighting, and linting for UI utility classes**, with live CSS hover previews and conflict detection.\n\n```bash\ncode --install-extension bradlc.vscode-tailwindcss\n```',
  },
  {
    id: 'svgo-svgomg',
    name: 'SVGO / SVGOMG',
    description: 'Optimizes and minifies SVG vector assets on commit.',
    author: 'svg',
    version: '3.3.2',
    stars: 21400,
    rating: '4.9',
    category: 'Designers & UI',
    tags: ['svg', 'vector', 'minifier', 'icons', 'asset-pipeline'],
    installCommand: 'npx svgo -f ./assets/icons -o ./dist/icons',
    downloadUrl: 'https://github.com/svg/svgo/releases/latest',
    readme:
      '# SVGO / SVGOMG\n\n**Optimizes and minifies SVG vector assets on commit**, stripping redundant editor metadata, comments, and hidden paths.\n\n```bash\nnpx svgo -f ./assets/icons -o ./dist/icons\n```',
  },
  {
    id: 'lighthouse-ci',
    name: 'Lighthouse CI',
    description: 'Automated performance, SEO, and UX auditing on every build.',
    author: 'GoogleChrome',
    version: '0.14.0',
    stars: 18600,
    rating: '4.9',
    category: 'Designers & UI',
    tags: ['lighthouse', 'core-web-vitals', 'performance', 'ux-audit', 'seo'],
    installCommand: 'npm install -g @lhci/cli && lhci autorun',
    downloadUrl: 'https://github.com/GoogleChrome/lighthouse-ci/releases/latest',
    readme:
      '# Lighthouse CI\n\n**Automated performance, SEO, and UX auditing on every build**, enforcing Core Web Vitals budgets before pull requests merge.\n\n```bash\nnpm install -g @lhci/cli && lhci autorun\n```',
  },
  {
    id: 'percy',
    name: 'Percy',
    description: 'Visual review and screenshot diffing platform for design accuracy.',
    author: 'percy',
    version: '1.30.1',
    stars: 9200,
    rating: '4.8',
    category: 'Designers & UI',
    tags: ['percy', 'screenshot-diff', 'visual-testing', 'responsive-ui', 'design'],
    installCommand: 'npm install --save-dev @percy/cli && npx percy exec -- npm test',
    downloadUrl: 'https://github.com/percy/cli/releases/latest',
    readme:
      '# Percy\n\n**Visual review and screenshot diffing platform for design accuracy** across desktop and mobile responsive viewports.\n\n```bash\nnpm install --save-dev @percy/cli && npx percy exec -- npm test\n```',
  },
  {
    id: 'jekyll-picture-tag',
    name: 'Jekyll Picture Tag',
    description: 'Responsive image generator and WebP optimizer for static sites.',
    author: 'rbuchberger',
    version: '2.1.1',
    stars: 6400,
    rating: '4.7',
    category: 'Designers & UI',
    tags: ['responsive-images', 'webp', 'avif', 'jekyll', 'picture-element'],
    installCommand: 'gem install jekyll_picture_tag',
    downloadUrl: 'https://github.com/rbuchberger/jekyll_picture_tag/releases/latest',
    readme:
      '# Jekyll Picture Tag\n\n**Responsive image generator and WebP optimizer for static sites**, automatically building multi-resolution `<picture>` markup.\n\n```bash\ngem install jekyll_picture_tag\n```',
  },
  {
    id: 'lucide-heroicons-hub',
    name: 'Lucide / Heroicons Hub',
    description: 'Instant copy-paste SVG/JSX icon integration plugin.',
    author: 'lucide-icons',
    version: '0.474.0',
    stars: 37800,
    rating: '5.0',
    category: 'Designers & UI',
    tags: ['lucide', 'heroicons', 'svg-icons', 'ui-kit', 'jsx'],
    installCommand: 'npm install lucide-react @heroicons/react',
    downloadUrl: 'https://github.com/lucide-icons/lucide/releases/latest',
    readme:
      '# Lucide / Heroicons Hub\n\n**Instant copy-paste SVG/JSX icon integration plugin** providing 1,500+ crisp, consistent 24x24 stroke icons for modern interfaces.\n\n```bash\nnpm install lucide-react @heroicons/react\n```',
  },

  // ============================================================================
  // GitHub Pages, Docs & CI/CD (10) -> Category tab: "GitHub Pages & Docs"
  // ============================================================================
  {
    id: 'decap-cms',
    name: 'Decap CMS (Netlify CMS)',
    description: 'Open-source Git-based visual content management for static sites.',
    author: 'decaporg',
    version: '3.6.0',
    stars: 18100,
    rating: '4.8',
    category: 'GitHub Pages & Docs',
    tags: ['cms', 'git-cms', 'static-sites', 'markdown-editor', 'github-pages'],
    installCommand: 'npm install decap-cms-app',
    downloadUrl: 'https://github.com/decaporg/decap-cms/releases/latest',
    readme:
      '# Decap CMS (Netlify CMS)\n\n**Open-source Git-based visual content management for static sites**, storing content directly in your GitHub repository as Markdown and JSON.\n\n```bash\nnpm install decap-cms-app\n```',
  },
  {
    id: 'jekyll-seo-tag',
    name: 'Jekyll SEO Tag',
    description: 'Automatically adds metadata tags for search engines and social networks.',
    author: 'jekyll',
    version: '2.8.0',
    stars: 10500,
    rating: '4.9',
    category: 'GitHub Pages & Docs',
    tags: ['jekyll', 'seo', 'open-graph', 'json-ld', 'github-pages'],
    installCommand: 'gem install jekyll-seo-tag',
    downloadUrl: 'https://github.com/jekyll/jekyll-seo-tag/releases/latest',
    readme:
      '# Jekyll SEO Tag\n\n**Automatically adds metadata tags for search engines and social networks**, including OpenGraph, Twitter Cards, and Schema.org JSON-LD.\n\n```yaml\nplugins:\n  - jekyll-seo-tag\n```',
  },
  {
    id: 'algolia-docsearch',
    name: 'Algolia DocSearch',
    description: 'Fast, typo-tolerant search bar plugin for documentation sites.',
    author: 'algolia',
    version: '3.8.2',
    stars: 14700,
    rating: '4.9',
    category: 'GitHub Pages & Docs',
    tags: ['algolia', 'docsearch', 'search', 'documentation', 'cmdk'],
    installCommand: 'npm install @docsearch/react @docsearch/css',
    downloadUrl: 'https://github.com/algolia/docsearch/releases/latest',
    readme:
      '# Algolia DocSearch\n\n**Fast, typo-tolerant search bar plugin for documentation sites** with instant keyboard navigation (`Cmd+K`) and section-level indexing.\n\n```bash\nnpm install @docsearch/react @docsearch/css\n```',
  },
  {
    id: 'giscus',
    name: 'Giscus',
    description: 'Comment system powered by GitHub Discussions for static pages.',
    author: 'giscus',
    version: '1.6.0',
    stars: 11600,
    rating: '4.9',
    category: 'GitHub Pages & Docs',
    tags: ['giscus', 'comments', 'github-discussions', 'static-sites', 'blog'],
    installCommand: '<script src="https://giscus.app/client.js" async></script>',
    downloadUrl: 'https://github.com/giscus/giscus/releases/latest',
    readme:
      '# Giscus\n\n**Comment system powered by GitHub Discussions for static pages**, requiring zero database hosting or tracking scripts.\n\n```html\n<script src="https://giscus.app/client.js" data-repo="owner/repo" data-theme="preferred_color_scheme" async></script>\n```',
  },
  {
    id: 'jekyll-sitemap',
    name: 'Jekyll Sitemap',
    description: 'Silently generates a sitemaps.org compliant XML sitemap.',
    author: 'jekyll',
    version: '1.4.0',
    stars: 9800,
    rating: '4.8',
    category: 'GitHub Pages & Docs',
    tags: ['sitemap', 'xml', 'seo', 'jekyll', 'github-pages'],
    installCommand: 'gem install jekyll-sitemap',
    downloadUrl: 'https://github.com/jekyll/jekyll-sitemap/releases/latest',
    readme:
      '# Jekyll Sitemap\n\n**Silently generates a sitemaps.org compliant XML sitemap** for your GitHub Pages site on every build.\n\n```yaml\nplugins:\n  - jekyll-sitemap\n```',
  },
  {
    id: 'gh-pages-deploy',
    name: 'gh-pages Deploy',
    description: 'Seamless one-command CI/CD publishing to GitHub Pages.',
    author: 'tschaub',
    version: '6.3.0',
    stars: 22800,
    rating: '4.9',
    category: 'GitHub Pages & Docs',
    tags: ['gh-pages', 'deployment', 'github-pages', 'ci-cd', 'static-hosting'],
    installCommand: 'npm install --save-dev gh-pages && npx gh-pages -d dist',
    downloadUrl: 'https://github.com/tschaub/gh-pages/releases/latest',
    readme:
      '# gh-pages Deploy\n\n**Seamless one-command CI/CD publishing to GitHub Pages** from any local build directory or GitHub Actions workflow.\n\n```bash\nnpm install --save-dev gh-pages && npx gh-pages -d dist\n```',
  },
  {
    id: 'circleci',
    name: 'CircleCI',
    description: 'Fast continuous integration and delivery pipeline plugin.',
    author: 'circleci',
    version: '0.1.31',
    stars: 12100,
    rating: '4.8',
    category: 'GitHub Pages & Docs',
    tags: ['circleci', 'ci-cd', 'pipelines', 'orbs', 'devops'],
    installCommand: 'curl -fLSs https://raw.githubusercontent.com/CircleCI-Public/circleci-cli/master/install.sh | bash',
    downloadUrl: 'https://github.com/CircleCI-Public/circleci-cli/releases/latest',
    readme:
      '# CircleCI\n\n**Fast continuous integration and delivery pipeline plugin** with reusable Orbs, Docker layer caching, and parallel test splitting.\n\n```bash\ncircleci config validate\n```',
  },
  {
    id: 'render-deploy',
    name: 'Render',
    description: 'Zero-downtime cloud deployment and PR preview environments.',
    author: 'render-oss',
    version: '1.3.0',
    stars: 11400,
    rating: '4.8',
    category: 'GitHub Pages & Docs',
    tags: ['render', 'cloud-deploy', 'preview-environments', 'blueprint', 'ci-cd'],
    installCommand: 'brew install render && render deploys create',
    downloadUrl: 'https://github.com/render-oss/cli/releases/latest',
    readme:
      '# Render\n\n**Zero-downtime cloud deployment and PR preview environments** driven by declarative `render.yaml` Infrastructure-as-Code blueprints.\n\n```bash\nbrew install render && render deploys create\n```',
  },
  {
    id: 'linear-sync',
    name: 'Linear Sync',
    description: 'Two-way issue tracking and branch automation for product teams.',
    author: 'linear',
    version: '2.7.0',
    stars: 15300,
    rating: '4.9',
    category: 'GitHub Pages & Docs',
    tags: ['linear', 'issue-tracking', 'branch-automation', 'pull-requests', 'workflow'],
    installCommand: 'npx @linear/sdk-cli sync --repo',
    downloadUrl: 'https://github.com/linear/linear/releases/latest',
    readme:
      '# Linear Sync\n\n**Two-way issue tracking and branch automation for product teams**, automatically transitioning issue statuses as GitHub PRs open, review, and merge.\n\n```bash\nnpx @linear/sdk-cli sync --repo\n```',
  },
  {
    id: 'plausible-analytics',
    name: 'Plausible Analytics',
    description: 'Lightweight, privacy-friendly traffic analytics script for GitHub Pages.',
    author: 'plausible',
    version: '2.1.4',
    stars: 21100,
    rating: '4.9',
    category: 'GitHub Pages & Docs',
    tags: ['plausible', 'analytics', 'privacy', 'cookieless', 'github-pages'],
    installCommand: '<script defer data-domain="yourdomain.github.io" src="https://plausible.io/js/script.js"></script>',
    downloadUrl: 'https://github.com/plausible/analytics/releases/latest',
    readme:
      '# Plausible Analytics\n\n**Lightweight, privacy-friendly traffic analytics script for GitHub Pages** (< 1 KB), GDPR/CCPA compliant with zero cookies required.\n\n```html\n<script defer data-domain="yourdomain.github.io" src="https://plausible.io/js/script.js"></script>\n```',
  },
];

const state = {
  plugins: [...TOP_50_PLUGINS],
  searchQuery: '',
  category: 'All',
  activeTag: null,
  sortBy: 'featured',
  activePluginId: null,
  activeDocsTab: 'readme',
  theme: 'dark',
};

export function normalizeCategoryName(rawCategory) {
  const trimmed = String(rawCategory || '').trim();
  const lower = trimmed.toLowerCase();
  if (lower === 'all' || lower.startsWith('all (')) return 'All';
  if (lower.startsWith('developers')) return 'Developers';
  if (lower.startsWith('testers')) return 'Testers & QA';
  if (lower.startsWith('designers')) return 'Designers & UI';
  if (lower.startsWith('ai & automation') || lower === 'automation') return 'AI & Automation';
  if (lower.startsWith('github pages')) return 'GitHub Pages & Docs';
  return trimmed;
}

/**
 * Returns true when a plugin's star count exceeds the Most Popular community threshold.
 */
export function isMostPopularPlugin(stars, threshold = POPULAR_STARS_THRESHOLD) {
  const num = Number(stars);
  return Number.isFinite(num) && num > threshold;
}

/**
 * Builds a direct, shareable deep-link URL for a specific plugin ID.
 */
export function buildPluginDeepLinkUrl(baseUrl, pluginId) {
  const cleanId = String(pluginId ?? '').trim();
  try {
    const url = new URL(baseUrl || 'http://localhost:3000/');
    url.searchParams.set('plugin', cleanId);
    url.hash = `plugin-${encodeURIComponent(cleanId)}`;
    return url.toString();
  } catch {
    const base = String(baseUrl || '').split('#')[0].split('?')[0];
    return `${base}?plugin=${encodeURIComponent(cleanId)}#plugin-${encodeURIComponent(cleanId)}`;
  }
}

/**
 * Extracts a deep-linked plugin ID from a full URL, query string (?plugin=...), or hash (#plugin-...).
 */
export function extractDeepLinkPluginId(urlOrLocation) {
  if (!urlOrLocation) return null;
  try {
    const url = new URL(urlOrLocation, 'http://localhost:3000/');
    const fromQuery = url.searchParams.get('plugin')?.trim();
    if (fromQuery) return fromQuery;
    const rawHash = url.hash.replace(/^#/, '').trim();
    if (rawHash.startsWith('plugin-')) {
      const fromHash = decodeURIComponent(rawHash.slice('plugin-'.length)).trim();
      if (fromHash) return fromHash;
    }
    return null;
  } catch {
    return null;
  }
}

const ICONS = {
  search:
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  copy:
    '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
  check:
    '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  bookOpen:
    '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>',
  share:
    '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>',
  download:
    '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>',
  sun:
    '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
  moon:
    '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
};

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatStars(stars) {
  const num = Number(stars);
  if (!Number.isFinite(num) || num < 0) return '0';
  return Math.floor(num).toLocaleString('en-US');
}

async function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to execCommand fallback
    }
  }
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch {
    copied = false;
  }
  document.body.removeChild(textarea);
  return copied;
}

function showToast(title, detail = '') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className =
    'pointer-events-auto flex items-start gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xl transition-all duration-150 opacity-0 translate-y-2';

  toast.innerHTML = `
    <span class="mt-0.5 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true">${ICONS.check}</span>
    <div class="flex-1 min-w-0 space-y-1">
      <p class="text-xs font-semibold">${escapeHtml(title)}</p>
      ${
        detail
          ? `<p class="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate">${escapeHtml(detail)}</p>`
          : ''
      }
    </div>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('opacity-0', 'translate-y-2');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 180);
  }, 3200);
}

/**
 * Pure filtering and sorting function matching src/utils/pluginCore.ts
 */
export function filterAndSortPlugins(plugins, currentState) {
  const query = (currentState.searchQuery || '').trim().toLowerCase();
  const normalizedSelectedCat = normalizeCategoryName(currentState.category || 'All');
  const activeTag = currentState.activeTag ? currentState.activeTag.trim().toLowerCase() : null;

  const filtered = plugins.filter((plugin) => {
    const pluginCat = normalizeCategoryName(plugin.category || '');
    const matchesCategory =
      normalizedSelectedCat === 'All' ||
      pluginCat.toLowerCase() === normalizedSelectedCat.toLowerCase();

    const matchesTag =
      !activeTag ||
      (Array.isArray(plugin.tags) &&
        plugin.tags.some((t) => String(t).toLowerCase() === activeTag));

    if (!matchesCategory || !matchesTag) return false;
    if (!query) return true;

    const inTitle = String(plugin.name || '').toLowerCase().includes(query);
    const inDescription = String(plugin.description || '').toLowerCase().includes(query);
    const inAuthor = String(plugin.author || '').toLowerCase().includes(query);
    const inId = String(plugin.id || '').toLowerCase().includes(query);
    const inCategory = String(plugin.category || '').toLowerCase().includes(query);
    const inTags =
      Array.isArray(plugin.tags) &&
      plugin.tags.some((tag) => String(tag).toLowerCase().includes(query));

    return inTitle || inDescription || inAuthor || inId || inCategory || inTags;
  });

  const sorted = [...filtered];
  if (currentState.sortBy === 'stars') {
    sorted.sort((a, b) => (Number(b.stars) || 0) - (Number(a.stars) || 0));
  } else if (currentState.sortBy === 'name') {
    sorted.sort((a, b) => String(a.name).localeCompare(String(b.name)));
  } else if (currentState.sortBy === 'version') {
    sorted.sort((a, b) =>
      String(b.version).localeCompare(String(a.version), undefined, { numeric: true })
    );
  }
  return sorted;
}

function formatInlineMarkdown(text) {
  const codeTokens = [];

  const withPlaceholders = String(text ?? '').replace(/`([^`]+)`/g, (_match, code) => {
    const idx = codeTokens.length;
    codeTokens.push(
      `<code class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[11px] text-indigo-600 dark:text-indigo-300">${escapeHtml(code)}</code>`
    );
    return `\x00CODE_${idx}\x00`;
  });

  let html = escapeHtml(withPlaceholders);

  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label, rawUrl) => {
    const url = String(rawUrl).trim();
    const isSafe = /^(https?:\/\/|mailto:|#|\/)/i.test(url);
    if (!isSafe) return label;
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="font-medium text-indigo-600 dark:text-indigo-400 underline underline-offset-2 hover:text-indigo-500">${label}</a>`;
  });

  html = html.replace(
    /\*\*\*([^*]+)\*\*\*/g,
    '<strong class="font-semibold text-slate-900 dark:text-white"><em>$1</em></strong>'
  );

  html = html.replace(
    /\*\*([^*]+)\*\*/g,
    '<strong class="font-semibold text-slate-900 dark:text-white">$1</strong>'
  );
  html = html.replace(
    /__([^_]+)__/g,
    '<strong class="font-semibold text-slate-900 dark:text-white">$1</strong>'
  );

  html = html.replace(/\*([^*\n]+)\*/g, '<em class="italic">$1</em>');
  html = html.replace(/(^|\s)_([^_\n]+)_(?=\s|$|[.,!?:;])/g, '$1<em class="italic">$2</em>');

  html = html.replace(/~~([^~]+)~~/g, '<del class="line-through opacity-75">$1</del>');

  html = html.replace(/\x00CODE_(\d+)\x00/g, (_m, idx) => codeTokens[Number(idx)] || '');

  return html;
}

function parseTableRow(line) {
  const trimmed = line.trim().replace(/^\|/, '').replace(/\|$/, '');
  return trimmed.split('|').map((cell) => cell.trim());
}

function isTableSeparator(line) {
  const trimmed = line.trim();
  if (!trimmed.includes('|') && !trimmed.includes('-')) return false;
  const cells = parseTableRow(trimmed);
  return cells.length > 0 && cells.every((c) => /^:?-{3,}:?$/.test(c));
}

export function renderMarkdownToHtml(markdown) {
  const raw = String(markdown ?? '').replace(/\r\n/g, '\n');
  const segments = raw.split(/(```[\s\S]*?```)/g);

  return segments
    .map((segment) => {
      if (segment.startsWith('```') && segment.endsWith('```')) {
        const lines = segment.slice(3, -3).trim().split('\n');
        let lang = 'shell';
        let codeContent = lines.join('\n');
        if (lines.length > 1 && /^[a-zA-Z0-9_-]+$/.test(lines[0].trim())) {
          lang = lines[0].trim();
          codeContent = lines.slice(1).join('\n');
        }
        const encodedCode = encodeURIComponent(codeContent);
        return `
          <div class="my-4 rounded-lg border border-slate-800 bg-slate-950 overflow-hidden">
            <div class="flex items-center justify-between px-3.5 py-2 bg-slate-900 border-b border-slate-800 text-[11px] font-mono text-slate-400">
              <span>${escapeHtml(lang)}</span>
              <button
                type="button"
                data-copy-encoded="${encodedCode}"
                class="text-indigo-400 hover:text-indigo-300 font-medium cursor-pointer"
              >
                Copy Code
              </button>
            </div>
            <pre class="p-3.5 text-xs font-mono text-slate-100 overflow-x-auto leading-relaxed"><code>${escapeHtml(codeContent)}</code></pre>
          </div>
        `;
      }

      const blocks = segment
        .trim()
        .split(/\n{2,}/)
        .filter(Boolean);

      return blocks
        .map((block) => {
          const trimmed = block.trim();
          const lines = trimmed.split('\n');

          if (/^(---|\*\*\*|___)$/.test(trimmed)) {
            return '<hr class="my-4 border-slate-200 dark:border-slate-800" />';
          }

          const headingMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
          if (headingMatch && lines.length === 1) {
            const level = headingMatch[1].length;
            const content = formatInlineMarkdown(headingMatch[2].trim());
            if (level === 1) {
              return `<h3 class="text-base font-bold tracking-tight text-slate-900 dark:text-white mt-2">${content}</h3>`;
            }
            if (level === 2) {
              return `<h4 class="text-sm font-semibold text-slate-900 dark:text-white mt-5 pt-3 border-t border-slate-200 dark:border-slate-800">${content}</h4>`;
            }
            if (level === 3) {
              return `<h5 class="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-3">${content}</h5>`;
            }
            return `<h6 class="text-xs font-medium text-slate-700 dark:text-slate-300 mt-2">${content}</h6>`;
          }

          if (lines.every((line) => line.trim().startsWith('>'))) {
            const quoteBody = lines
              .map((line) => formatInlineMarkdown(line.trim().replace(/^>\s?/, '')))
              .join('<br />');
            return `<blockquote class="my-3 p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${quoteBody}</blockquote>`;
          }

          if (
            lines.length >= 2 &&
            lines[0].includes('|') &&
            isTableSeparator(lines[1])
          ) {
            const headers = parseTableRow(lines[0]);
            const bodyRows = lines.slice(2).filter((l) => l.trim().includes('|'));
            const theadHtml = headers
              .map(
                (h) =>
                  `<th class="py-2 px-3 font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">${formatInlineMarkdown(h)}</th>`
              )
              .join('');
            const tbodyHtml = bodyRows
              .map((rowLine) => {
                const cells = parseTableRow(rowLine);
                const cellsHtml = headers
                  .map(
                    (_h, idx) =>
                      `<td class="py-2 px-3 text-slate-600 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800/60">${formatInlineMarkdown(cells[idx] ?? '')}</td>`
                  )
                  .join('');
                return `<tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/30">${cellsHtml}</tr>`;
              })
              .join('');

            return `
              <div class="my-3 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
                <table class="w-full text-left border-collapse text-xs tabular-nums">
                  <thead><tr>${theadHtml}</tr></thead>
                  <tbody>${tbodyHtml}</tbody>
                </table>
              </div>
            `;
          }

          if (lines.every((line) => /^[-*]\s+/.test(line.trim()))) {
            const items = lines
              .map(
                (line) =>
                  `<li class="ml-4 list-disc text-xs text-slate-600 dark:text-slate-300 leading-relaxed marker:text-slate-400">${formatInlineMarkdown(line.trim().replace(/^[-*]\s+/, ''))}</li>`
              )
              .join('');
            return `<ul class="space-y-1.5 my-2">${items}</ul>`;
          }

          if (lines.every((line) => /^\d+\.\s+/.test(line.trim()))) {
            const items = lines
              .map(
                (line) =>
                  `<li class="ml-4 list-decimal text-xs text-slate-600 dark:text-slate-300 leading-relaxed marker:text-slate-400 marker:font-mono">${formatInlineMarkdown(line.trim().replace(/^\d+\.\s+/, ''))}</li>`
              )
              .join('');
            return `<ol class="space-y-1.5 my-2">${items}</ol>`;
          }

          const paragraphContent = lines.map((l) => formatInlineMarkdown(l.trim())).join(' ');
          return `<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${paragraphContent}</p>`;
        })
        .join('');
    })
    .join('');
}

/**
 * Renders the segmented category filter buttons with live counts:
 * All (50), Developers, Testers & QA, Designers & UI, AI & Automation, GitHub Pages & Docs
 */
function renderCategoryFilters() {
  const container = document.getElementById('category-filters');
  if (!container) return;

  const counts = new Map();
  for (const cat of BASE_CATEGORIES) {
    if (cat !== 'All') counts.set(cat, 0);
  }
  for (const plugin of state.plugins) {
    const cat = normalizeCategoryName(plugin.category || 'Other');
    counts.set(cat, (counts.get(cat) || 0) + 1);
  }

  const allCategories = [
    { name: 'All', count: state.plugins.length },
    ...Array.from(counts.entries()).map(([name, count]) => ({ name, count })),
  ];

  const activeNormalized = normalizeCategoryName(state.category);

  container.innerHTML = allCategories
    .map(({ name, count }) => {
      const isActive = activeNormalized.toLowerCase() === name.toLowerCase();
      const btnClasses = isActive
        ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm font-semibold'
        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium';

      return `
        <button
          type="button"
          data-category="${escapeHtml(name)}"
          aria-pressed="${isActive ? 'true' : 'false'}"
          class="px-3 py-1.5 text-xs rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${btnClasses}"
        >
          <span>${escapeHtml(name)}</span>
          <span class="ml-1 font-mono text-[11px] opacity-80 tabular-nums">(${count})</span>
        </button>
      `;
    })
    .join('');
}

/**
 * Renders the filtered plugin cards grid or empty state.
 */
function renderPluginGrid() {
  const grid = document.getElementById('plugin-grid');
  const emptyState = document.getElementById('empty-state');
  const totalMetric = document.getElementById('total-plugins-metric');
  const visibleMetric = document.getElementById('visible-plugins-metric');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const activeTagBanner = document.getElementById('active-tag-banner');
  const activeTagValue = document.getElementById('active-tag-value');

  if (!grid || !emptyState) return;

  const filtered = filterAndSortPlugins(state.plugins, state);

  if (totalMetric) totalMetric.textContent = String(state.plugins.length);
  if (visibleMetric) visibleMetric.textContent = String(filtered.length);

  if (clearSearchBtn) {
    clearSearchBtn.classList.toggle('hidden', state.searchQuery.trim().length === 0);
  }

  if (activeTagBanner && activeTagValue) {
    if (state.activeTag) {
      activeTagBanner.classList.remove('hidden');
      activeTagBanner.classList.add('inline-flex');
      activeTagValue.textContent = `#${state.activeTag}`;
    } else {
      activeTagBanner.classList.add('hidden');
      activeTagBanner.classList.remove('inline-flex');
    }
  }

  if (filtered.length === 0) {
    grid.classList.add('hidden');
    grid.classList.remove('grid');
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  grid.classList.remove('hidden');
  grid.classList.add('grid');

  grid.innerHTML = filtered
    .map((plugin, idx) => {
      const tagsMarkup = Array.isArray(plugin.tags)
        ? plugin.tags
            .map(
              (tag) => `
              <button
                type="button"
                data-tag="${escapeHtml(tag)}"
                class="font-mono text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                aria-label="Filter by tag ${escapeHtml(tag)}"
              >#${escapeHtml(tag)}</button>
            `
            )
            .join('<span class="text-slate-300 dark:text-slate-700 select-none" aria-hidden="true">·</span>')
        : '';

      const isPopular = isMostPopularPlugin(plugin.stars);
      const ratingDisplay = plugin.rating || '4.9';
      const popularBadgeMarkup = isPopular
        ? `<span
            data-testid="most-popular-badge-${escapeHtml(plugin.id)}"
            class="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono font-semibold text-amber-700 dark:text-amber-300 bg-amber-500/10 border border-amber-500/25 rounded-md whitespace-nowrap shrink-0"
            title="Top community plugin exceeding ${POPULAR_STARS_THRESHOLD.toLocaleString()} stars"
          >Most Popular</span>`
        : '';

      return `
        <article
          id="plugin-${escapeHtml(plugin.id)}"
          data-plugin-card="${escapeHtml(plugin.id)}"
          class="flex flex-col justify-between p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-colors space-y-5"
        >
          <div class="space-y-3">
            <!-- Category Badge & Popularity Rating / Stars Badge -->
            <div class="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono tabular-nums">
              <div class="flex flex-wrap items-center gap-2">
                <span
                  data-testid="plugin-category-badge-${escapeHtml(plugin.id)}"
                  class="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20"
                >${escapeHtml(plugin.category)}</span>
                <span>v${escapeHtml(plugin.version)}</span>
                <span aria-hidden="true">·</span>
                <span>@${escapeHtml(plugin.author)}</span>
              </div>
              <span
                data-testid="plugin-stars-${escapeHtml(plugin.id)}"
                class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 font-semibold text-amber-600 dark:text-amber-400 tabular-nums"
                title="Rating ${escapeHtml(ratingDisplay)}/5.0 · ${formatStars(plugin.stars)} community stars"
              >
                <span aria-hidden="true">★</span>
                <span>${escapeHtml(ratingDisplay)}</span>
                <span class="opacity-60" aria-hidden="true">·</span>
                <span>${formatStars(plugin.stars)}</span>
                <span class="text-slate-500 dark:text-slate-400 font-normal">stars</span>
              </span>
            </div>

            <!-- Plugin Title, Most Popular Badge & Description -->
            <div class="space-y-1.5">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h2 class="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                  <span class="font-mono text-xs font-normal text-slate-400 dark:text-slate-500 mr-1.5">#${idx + 1}</span>${escapeHtml(plugin.name)}
                </h2>
                ${popularBadgeMarkup}
              </div>
              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                ${escapeHtml(plugin.description)}
              </p>
            </div>

            <!-- Interactive Tag Stream -->
            <div class="flex flex-wrap items-center gap-2 pt-1">
              ${tagsMarkup}
            </div>
          </div>

          <div class="space-y-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
            <!-- Install Command Snippet Preview -->
            <div class="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 font-mono text-xs text-slate-800 dark:text-slate-200 overflow-x-auto">
              <code class="truncate select-all">${escapeHtml(plugin.installCommand)}</code>
            </div>

            <!-- Card Action Buttons -->
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  data-action="view-docs"
                  data-plugin-id="${escapeHtml(plugin.id)}"
                  aria-label="View and Install ${escapeHtml(plugin.name)}"
                  class="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span class="pointer-events-none" aria-hidden="true">${ICONS.bookOpen}</span>
                  <span>View / Install</span>
                </button>

                <button
                  type="button"
                  data-action="copy-install"
                  data-plugin-id="${escapeHtml(plugin.id)}"
                  aria-label="Copy install command for ${escapeHtml(plugin.name)}"
                  class="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span class="pointer-events-none" aria-hidden="true">${ICONS.copy}</span>
                  <span data-copy-label>Copy CLI</span>
                </button>

                <button
                  type="button"
                  data-action="share-plugin"
                  data-plugin-id="${escapeHtml(plugin.id)}"
                  aria-label="Share deep-link URL for ${escapeHtml(plugin.name)}"
                  class="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span class="pointer-events-none" aria-hidden="true">${ICONS.share}</span>
                  <span data-share-label>Share</span>
                </button>
              </div>

              <a
                href="${escapeHtml(plugin.downloadUrl)}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download release archive for ${escapeHtml(plugin.name)}"
                class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                <span aria-hidden="true">${ICONS.download}</span>
                <span>Release</span>
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

/**
 * Opens the View / Install modal for a specific plugin ID.
 */
function openDocsModal(pluginId) {
  const plugin = state.plugins.find((p) => p.id === pluginId);
  if (!plugin) return;

  state.activePluginId = plugin.id;
  state.activeDocsTab = 'readme';

  const modal = document.getElementById('docs-modal');
  const metaEl = document.getElementById('docs-modal-meta');
  const titleEl = document.getElementById('docs-modal-title');
  const tagsEl = document.getElementById('docs-modal-tags');
  const installEl = document.getElementById('docs-install-command');
  const readmePanel = document.getElementById('docs-readme-panel');
  const rawJsonEl = document.getElementById('docs-raw-json');
  const downloadLink = document.getElementById('docs-download-link');
  const repoLink = document.getElementById('docs-repo-link');

  if (!modal) return;

  if (metaEl) {
    const popularLabel = isMostPopularPlugin(plugin.stars) ? ' · Most Popular' : '';
    metaEl.textContent = `${plugin.category} · v${plugin.version} · ★ ${formatStars(plugin.stars)} stars${popularLabel} · Maintained by @${plugin.author}`;
  }
  if (titleEl) {
    titleEl.textContent = plugin.name;
  }
  if (tagsEl && Array.isArray(plugin.tags)) {
    tagsEl.innerHTML = plugin.tags.map((t) => `<span>#${escapeHtml(t)}</span>`).join('<span>·</span>');
  }
  if (installEl) {
    installEl.textContent = plugin.installCommand;
  }
  if (readmePanel) {
    readmePanel.innerHTML = renderMarkdownToHtml(plugin.readme);
  }
  if (rawJsonEl) {
    rawJsonEl.textContent = JSON.stringify(plugin, null, 2);
  }
  if (downloadLink) {
    downloadLink.href = plugin.downloadUrl;
  }
  if (repoLink) {
    const repoMatch = String(plugin.downloadUrl).match(/^(https:\/\/github\.com\/[^/]+\/[^/]+)/);
    repoLink.href = repoMatch ? repoMatch[1] : `https://github.com/${plugin.author}`;
  }

  switchDocsModalTab('readme');

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function switchDocsModalTab(tabName) {
  state.activeDocsTab = tabName;
  const tabReadme = document.getElementById('docs-tab-readme');
  const tabJson = document.getElementById('docs-tab-json');
  const readmePanel = document.getElementById('docs-readme-panel');
  const jsonPanel = document.getElementById('docs-json-panel');

  const isReadme = tabName === 'readme';
  if (readmePanel) readmePanel.classList.toggle('hidden', !isReadme);
  if (jsonPanel) jsonPanel.classList.toggle('hidden', isReadme);

  if (tabReadme && tabJson) {
    tabReadme.setAttribute('aria-selected', isReadme ? 'true' : 'false');
    tabJson.setAttribute('aria-selected', !isReadme ? 'true' : 'false');
    tabReadme.className = isReadme
      ? 'px-3 py-1.5 text-xs font-semibold rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm cursor-pointer'
      : 'px-3 py-1.5 text-xs font-medium rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer';
    tabJson.className = !isReadme
      ? 'px-3 py-1.5 text-xs font-semibold rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm cursor-pointer'
      : 'px-3 py-1.5 text-xs font-medium rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer';
  }
}

function closeDocsModal() {
  const modal = document.getElementById('docs-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  state.activePluginId = null;
}

function readContributorFormObject() {
  const name = document.getElementById('contrib-name')?.value.trim() || '';
  const id = document.getElementById('contrib-id')?.value.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '-') || '';
  const author = document.getElementById('contrib-author')?.value.trim().replace(/^@/, '') || '';
  const version = document.getElementById('contrib-version')?.value.trim().replace(/^v/, '') || '';
  const rawStars = document.getElementById('contrib-stars')?.value ?? '0';
  const parsedStars = Number(rawStars);
  const stars = Number.isFinite(parsedStars) && parsedStars >= 0 ? Math.floor(parsedStars) : 0;
  const category = normalizeCategoryName(
    document.getElementById('contrib-category')?.value.trim() || 'AI & Automation'
  );
  const description = document.getElementById('contrib-description')?.value.trim() || '';
  const rawTags = document.getElementById('contrib-tags')?.value || '';
  const tags = rawTags
    .split(',')
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean);
  const installCommand = document.getElementById('contrib-install')?.value.trim() || '';
  const downloadUrl = document.getElementById('contrib-download')?.value.trim() || '';
  const readme = document.getElementById('contrib-readme')?.value.trim() || '';

  return {
    id,
    name,
    description,
    author,
    version,
    stars,
    rating: '4.9',
    category,
    tags,
    installCommand,
    downloadUrl,
    readme,
  };
}

function updateContributorJsonPreview() {
  const previewEl = document.getElementById('generated-json-preview');
  if (!previewEl) return;
  const obj = readContributorFormObject();
  previewEl.textContent = JSON.stringify(obj, null, 2);
}

function openSubmitModal() {
  const modal = document.getElementById('submit-modal');
  const errEl = document.getElementById('submit-form-error');
  if (!modal) return;
  if (errEl) errEl.classList.add('hidden');
  updateContributorJsonPreview();
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeSubmitModal() {
  const modal = document.getElementById('submit-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function applyTheme(theme) {
  state.theme = theme === 'light' ? 'light' : 'dark';
  const root = document.documentElement;
  const iconEl = document.getElementById('theme-toggle-icon');
  const labelEl = document.getElementById('theme-toggle-label');

  if (state.theme === 'dark') {
    root.classList.add('dark');
    if (iconEl) iconEl.innerHTML = ICONS.sun;
    if (labelEl) labelEl.textContent = 'Light Mode';
  } else {
    root.classList.remove('dark');
    if (iconEl) iconEl.innerHTML = ICONS.moon;
    if (labelEl) labelEl.textContent = 'Dark Mode';
  }

  try {
    localStorage.setItem('forgehub_theme', state.theme);
  } catch {
    // Ignore storage errors in restricted sandboxes
  }
}

/**
 * Hydrates plugins from the hardcoded 50-item TOP_50_PLUGINS array immediately
 * and syncs with ./plugins.json if present.
 */
async function loadPlugins() {
  const loadingState = document.getElementById('loading-state');
  const errorState = document.getElementById('error-state');

  state.plugins = [...TOP_50_PLUGINS];
  if (loadingState) loadingState.classList.add('hidden');
  if (errorState) errorState.classList.add('hidden');

  renderCategoryFilters();
  renderPluginGrid();

  try {
    const response = await fetch(`./plugins.json?v=${Date.now()}`, { cache: 'no-store' });
    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        state.plugins = data;
        renderCategoryFilters();
        renderPluginGrid();
      }
    }
  } catch {
    // Fallback to hardcoded TOP_50_PLUGINS already active
  }

  if (typeof window !== 'undefined' && window.location) {
    const deepLinkedId = extractDeepLinkPluginId(window.location.href);
    if (deepLinkedId && state.plugins.some((p) => p.id === deepLinkedId)) {
      const cardEl = document.getElementById(`plugin-${deepLinkedId}`);
      if (cardEl && typeof cardEl.scrollIntoView === 'function') {
        cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      openDocsModal(deepLinkedId);
    }
  }
}

function initApp() {
  const searchIconSlot = document.getElementById('search-icon-slot');
  if (searchIconSlot) searchIconSlot.innerHTML = ICONS.search;

  let savedTheme = 'dark';
  try {
    savedTheme = localStorage.getItem('forgehub_theme') || 'dark';
  } catch {
    savedTheme = 'dark';
  }
  applyTheme(savedTheme);

  const themeBtn = document.getElementById('theme-toggle-btn');
  themeBtn?.addEventListener('click', () => {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  });

  const searchInput = document.getElementById('plugin-search');
  searchInput?.addEventListener('input', (e) => {
    state.searchQuery = e.target.value || '';
    renderPluginGrid();
  });

  const clearSearchBtn = document.getElementById('clear-search-btn');
  clearSearchBtn?.addEventListener('click', () => {
    state.searchQuery = '';
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
    renderPluginGrid();
  });

  const sortSelect = document.getElementById('plugin-sort');
  sortSelect?.addEventListener('change', (e) => {
    state.sortBy = e.target.value || 'featured';
    renderPluginGrid();
  });

  const categoryContainer = document.getElementById('category-filters');
  categoryContainer?.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-category]');
    if (!btn) return;
    state.category = btn.getAttribute('data-category') || 'All';
    renderCategoryFilters();
    renderPluginGrid();
  });

  const clearTagBtn = document.getElementById('clear-tag-btn');
  clearTagBtn?.addEventListener('click', () => {
    state.activeTag = null;
    renderPluginGrid();
  });

  const resetFiltersBtn = document.getElementById('reset-filters-btn');
  resetFiltersBtn?.addEventListener('click', () => {
    state.searchQuery = '';
    state.category = 'All';
    state.activeTag = null;
    state.sortBy = 'featured';
    if (searchInput) searchInput.value = '';
    if (sortSelect) sortSelect.value = 'featured';
    renderCategoryFilters();
    renderPluginGrid();
  });

  const retryFetchBtn = document.getElementById('retry-fetch-btn');
  retryFetchBtn?.addEventListener('click', () => {
    loadPlugins();
  });

  const grid = document.getElementById('plugin-grid');
  grid?.addEventListener('click', async (e) => {
    const tagBtn = e.target.closest('button[data-tag]');
    if (tagBtn) {
      const clickedTag = tagBtn.getAttribute('data-tag');
      state.activeTag = state.activeTag === clickedTag ? null : clickedTag;
      renderPluginGrid();
      return;
    }

    const actionBtn = e.target.closest('button[data-action]');
    if (!actionBtn) return;

    const action = actionBtn.getAttribute('data-action');
    const pluginId = actionBtn.getAttribute('data-plugin-id');
    const plugin = state.plugins.find((p) => p.id === pluginId);
    if (!plugin) return;

    if (action === 'copy-install') {
      await copyToClipboard(plugin.installCommand);
      const labelSpan = actionBtn.querySelector('[data-copy-label]');
      if (labelSpan) {
        const originalText = labelSpan.textContent;
        labelSpan.textContent = 'Copied!';
        setTimeout(() => {
          labelSpan.textContent = originalText;
        }, 1800);
      }
      showToast(`Copied ${plugin.name} install command`, plugin.installCommand);
    } else if (action === 'view-docs') {
      openDocsModal(plugin.id);
    } else if (action === 'share-plugin') {
      const deepLinkUrl = buildPluginDeepLinkUrl(window.location.href, plugin.id);
      await copyToClipboard(deepLinkUrl);
      try {
        window.history.replaceState(null, '', deepLinkUrl);
      } catch {
        // Ignore history state restrictions in sandboxed environments
      }
      const shareLabelSpan = actionBtn.querySelector('[data-share-label]');
      if (shareLabelSpan) {
        const originalText = shareLabelSpan.textContent;
        shareLabelSpan.textContent = 'Link Copied!';
        setTimeout(() => {
          shareLabelSpan.textContent = originalText;
        }, 1800);
      }
      showToast(`Copied ${plugin.name} deep-link URL`, deepLinkUrl);
    }
  });

  document.getElementById('close-docs-modal-btn')?.addEventListener('click', closeDocsModal);
  document.getElementById('footer-close-docs-btn')?.addEventListener('click', closeDocsModal);
  document.getElementById('docs-tab-readme')?.addEventListener('click', () => switchDocsModalTab('readme'));
  document.getElementById('docs-tab-json')?.addEventListener('click', () => switchDocsModalTab('json'));

  document.getElementById('docs-copy-install-btn')?.addEventListener('click', async () => {
    const plugin = state.plugins.find((p) => p.id === state.activePluginId);
    if (!plugin) return;
    await copyToClipboard(plugin.installCommand);
    showToast(`Copied ${plugin.name} install snippet`, plugin.installCommand);
  });

  document.getElementById('docs-copy-json-btn')?.addEventListener('click', async () => {
    const plugin = state.plugins.find((p) => p.id === state.activePluginId);
    if (!plugin) return;
    const raw = JSON.stringify(plugin, null, 2);
    await copyToClipboard(raw);
    showToast(`Copied ${plugin.id} manifest JSON`, 'Ready to paste into plugins.json');
  });

  document.getElementById('docs-readme-panel')?.addEventListener('click', async (e) => {
    const codeCopyBtn = e.target.closest('button[data-copy-encoded]');
    if (!codeCopyBtn) return;
    const decoded = decodeURIComponent(codeCopyBtn.getAttribute('data-copy-encoded') || '');
    await copyToClipboard(decoded);
    const prev = codeCopyBtn.textContent;
    codeCopyBtn.textContent = 'Copied!';
    setTimeout(() => {
      codeCopyBtn.textContent = prev;
    }, 1600);
    showToast('Copied documentation code block', decoded.split('\n')[0]);
  });

  document.getElementById('open-submit-modal-btn')?.addEventListener('click', openSubmitModal);
  document.getElementById('empty-submit-plugin-btn')?.addEventListener('click', openSubmitModal);
  document.getElementById('schema-open-submit-btn')?.addEventListener('click', openSubmitModal);
  document.getElementById('close-submit-modal-btn')?.addEventListener('click', closeSubmitModal);
  document.getElementById('footer-close-submit-btn')?.addEventListener('click', closeSubmitModal);

  const contribForm = document.getElementById('contributor-plugin-form');
  contribForm?.addEventListener('input', updateContributorJsonPreview);

  document.getElementById('copy-generated-json-btn')?.addEventListener('click', async () => {
    const obj = readContributorFormObject();
    const errEl = document.getElementById('submit-form-error');
    if (!obj.name || !obj.id || !obj.author || !obj.version || !obj.description || !obj.installCommand || !obj.downloadUrl || obj.tags.length === 0) {
      if (errEl) {
        errEl.textContent = 'Please complete all required plugin fields before copying the manifest object.';
        errEl.classList.remove('hidden');
      }
      return;
    }
    if (errEl) errEl.classList.add('hidden');
    const jsonString = JSON.stringify(obj, null, 2);
    await copyToClipboard(jsonString);
    showToast('Copied plugin JSON entry to clipboard', `Append "${obj.id}" to plugins.json`);
  });

  contribForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const obj = readContributorFormObject();
    const errEl = document.getElementById('submit-form-error');

    if (
      !obj.name ||
      !obj.id ||
      !obj.author ||
      !obj.version ||
      !obj.description ||
      !obj.installCommand ||
      !obj.downloadUrl ||
      !obj.readme ||
      obj.tags.length === 0
    ) {
      if (errEl) {
        errEl.textContent = 'All manifest fields (including tags and readme) are required to add a plugin.';
        errEl.classList.remove('hidden');
      }
      return;
    }

    if (errEl) errEl.classList.add('hidden');

    const existingIdx = state.plugins.findIndex((p) => p.id === obj.id);
    if (existingIdx >= 0) {
      state.plugins[existingIdx] = obj;
    } else {
      state.plugins.unshift(obj);
    }

    state.category = 'All';
    state.searchQuery = '';
    state.activeTag = null;
    if (searchInput) searchInput.value = '';

    renderCategoryFilters();
    renderPluginGrid();
    closeSubmitModal();
    showToast(
      `Added "${obj.name}" to live registry`,
      `Category: ${obj.category} · v${obj.version} · ★ ${formatStars(obj.stars)} stars`
    );
  });

  const docsModal = document.getElementById('docs-modal');
  docsModal?.addEventListener('click', (e) => {
    if (e.target === docsModal) closeDocsModal();
  });

  const submitModal = document.getElementById('submit-modal');
  submitModal?.addEventListener('click', (e) => {
    if (e.target === submitModal) closeSubmitModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDocsModal();
      closeSubmitModal();
      return;
    }
    if (
      e.key === '/' &&
      document.activeElement &&
      !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)
    ) {
      e.preventDefault();
      searchInput?.focus();
    }
  });

  loadPlugins();
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
}
