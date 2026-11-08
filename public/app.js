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

export const MAX_COMPARE_PLUGINS = 3;
export const DEFAULT_PAGE_SIZE = 24;

const AI_AUTOMATION_SEEDS = [
  { slug: 'claude-code-agent', title: 'Claude Code CLI', author: 'anthropics', baseStars: 44200, baseVersion: '2.4.0', tags: ['claude', 'cli-agent', 'ai', 'autonomous', 'coding'], cmdPrefix: 'npm install -g @anthropic-ai/claude-code', repoOrg: 'anthropics/claude-code', summary: 'Agentic terminal coding assistant that edits multi-file repositories, runs tests, and resolves Git conflicts.' },
  { slug: 'cline-autonomous-dev', title: 'Cline AI Agent', author: 'cline', baseStars: 38900, baseVersion: '3.8.2', tags: ['cline', 'vscode-agent', 'mcp', 'autonomous', 'ai'], cmdPrefix: 'code --install-extension saoudrizwan.claude-dev', repoOrg: 'cline/cline', summary: 'Autonomous IDE coding agent capable of executing shell commands, browser inspection, and MCP tool calls.' },
  { slug: 'roo-code-orchestrator', title: 'Roo Code', author: 'rooveterinaryinc', baseStars: 26400, baseVersion: '3.11.0', tags: ['roo-code', 'multi-agent', 'custom-modes', 'ai-coding', 'mcp'], cmdPrefix: 'code --install-extension rooveterinaryinc.roo-cline', repoOrg: 'RooVetGit/Roo-Code', summary: 'Customizable multi-role AI agent suite with Architect, Code, Ask, and Debug modes inside VS Code.' },
  { slug: 'aider-pair-programmer', title: 'Aider AI Pair Programmer', author: 'paul-gauthier', baseStars: 33700, baseVersion: '0.78.0', tags: ['aider', 'terminal-ai', 'git-commits', 'repo-map', 'llm'], cmdPrefix: 'pip install aider-chat && aider --model sonnet', repoOrg: 'Aider-AI/aider', summary: 'Terminal-based AI pair programmer that builds a full AST repository map and auto-commits semantic changes.' },
  { slug: 'continue-dev-autopilot', title: 'Continue.dev', author: 'continuedev', baseStars: 27800, baseVersion: '1.1.14', tags: ['continue', 'open-source-ai', 'autocomplete', 'vscode', 'jetbrains'], cmdPrefix: 'code --install-extension Continue.continue', repoOrg: 'continuedev/continue', summary: 'Open-source AI code assistant connecting any local or cloud LLM for tab autocomplete and codebase chat.' },
  { slug: 'model-context-protocol-sdk', title: 'MCP Server SDK', author: 'modelcontextprotocol', baseStars: 35600, baseVersion: '1.9.0', tags: ['mcp', 'context-protocol', 'ai-tools', 'json-rpc', 'agents'], cmdPrefix: 'npx @modelcontextprotocol/inspector', repoOrg: 'modelcontextprotocol/servers', summary: 'Standardized Model Context Protocol server suite connecting LLMs to GitHub, Postgres, Slack, and local files.' },
  { slug: 'firecrawl-mcp-scraper', title: 'Firecrawl Web Agent', author: 'mendableai', baseStars: 29100, baseVersion: '1.6.1', tags: ['firecrawl', 'web-scraping', 'llm-markdown', 'mcp', 'crawler'], cmdPrefix: 'npx -y firecrawl-mcp', repoOrg: 'mendableai/firecrawl', summary: 'Turns entire documentation websites into clean LLM-ready Markdown and structured data for coding agents.' },
  { slug: 'browser-use-agent', title: 'Browser-Use Agent', author: 'browser-use', baseStars: 36800, baseVersion: '0.4.3', tags: ['browser-use', 'web-automation', 'playwright-ai', 'agents', 'vision'], cmdPrefix: 'pip install browser-use && playwright install', repoOrg: 'browser-use/browser-use', summary: 'Enables AI agents to control real headless browsers via DOM trees and visual bounding boxes.' },
  { slug: 'langchain-langgraph-studio', title: 'LangGraph Studio', author: 'langchain-ai', baseStars: 41200, baseVersion: '0.3.18', tags: ['langgraph', 'stateful-agents', 'workflows', 'orchestration', 'ai'], cmdPrefix: 'pip install -U langgraph-cli && langgraph dev', repoOrg: 'langchain-ai/langgraph', summary: 'Visual agent IDE and graph runtime for building stateful, multi-actor LLM applications with human-in-the-loop.' },
  { slug: 'openhands-devin-runtime', title: 'OpenHands (OpenDevin)', author: 'All-Hands-AI', baseStars: 46500, baseVersion: '0.29.0', tags: ['openhands', 'autonomous-engineer', 'sandbox', 'docker', 'ai-agent'], cmdPrefix: 'docker pull docker.all-hands.dev/all-hands-ai/openhands:0.29', repoOrg: 'All-Hands-AI/OpenHands', summary: 'Open-source autonomous AI software engineer capable of executing complex engineering tasks in Docker sandboxes.' },
  { slug: 'supermaven-fast-complete', title: 'Supermaven Copilot', author: 'supermaven', baseStars: 16400, baseVersion: '1.12.0', tags: ['supermaven', '1m-context', 'low-latency', 'autocomplete', 'ai'], cmdPrefix: 'code --install-extension supermaven.supermaven', repoOrg: 'supermaven-inc/supermaven-nvim', summary: 'Ultra-low-latency AI code completion engine featuring a 1-million-token repository context window.' },
  { slug: 'dify-workflow-engine', title: 'Dify LLM Ops', author: 'langgenius', baseStars: 58400, baseVersion: '1.1.0', tags: ['dify', 'llmops', 'rag-pipeline', 'agent-workflows', 'ai'], cmdPrefix: 'docker compose -f docker/docker-compose.yaml up -d', repoOrg: 'langgenius/dify', summary: 'Open-source LLM app development platform combining agentic workflows, RAG pipelines, and model observability.' },
  { slug: 'ollama-local-runner', title: 'Ollama Local Models', author: 'ollama', baseStars: 94200, baseVersion: '0.6.2', tags: ['ollama', 'local-llm', 'llama3', 'deepseek', 'inference'], cmdPrefix: 'curl -fsSL https://ollama.com/install.sh | sh', repoOrg: 'ollama/ollama', summary: 'Run DeepSeek-R1, Qwen-Coder, and Llama 3 locally with a single CLI command and OpenAI-compatible API.' },
  { slug: 'litellm-gateway', title: 'LiteLLM Proxy Gateway', author: 'BerriAI', baseStars: 21500, baseVersion: '1.63.0', tags: ['litellm', 'ai-gateway', 'load-balancing', 'cost-tracking', 'openai-proxy'], cmdPrefix: 'pip install "litellm[proxy]" && litellm --model gpt-4o', repoOrg: 'BerriAI/litellm', summary: 'Unified AI gateway to call 100+ LLM APIs in OpenAI format with budget limits, fallbacks, and latency routing.' },
  { slug: 'promptfoo-eval-suite', title: 'Promptfoo LLM Eval', author: 'promptfoo', baseStars: 14800, baseVersion: '0.106.0', tags: ['promptfoo', 'llm-evals', 'red-teaming', 'ci-testing', 'ai-safety'], cmdPrefix: 'npx promptfoo@latest init && npx promptfoo eval', repoOrg: 'promptfoo/promptfoo', summary: 'Test and red-team LLM prompts, agents, and RAG outputs with deterministic CI/CD assertions and matrix views.' },
  { slug: 'vllm-inference-engine', title: 'vLLM High-Throughput Server', author: 'vllm-project', baseStars: 41900, baseVersion: '0.7.3', tags: ['vllm', 'paged-attention', 'gpu-serving', 'llm-inference', 'cuda'], cmdPrefix: 'pip install vllm && vllm serve Qwen/Qwen2.5-Coder-32B-Instruct', repoOrg: 'vllm-project/vllm', summary: 'High-throughput and memory-efficient LLM inference and serving engine powered by PagedAttention.' },
  { slug: 'crewai-multi-agent', title: 'CrewAI Orchestrator', author: 'crewAIInc', baseStars: 28700, baseVersion: '0.102.0', tags: ['crewai', 'multi-agent', 'role-playing', 'task-automation', 'python'], cmdPrefix: 'pip install crewai crewai-tools && crewai create crew', repoOrg: 'crewAIInc/crewAI', summary: 'Framework for orchestrating role-playing, autonomous AI agents that collaborate on complex research and code tasks.' },
  { slug: 'Vercel-ai-sdk', title: 'Vercel AI SDK Core', author: 'vercel', baseStars: 19800, baseVersion: '4.2.0', tags: ['ai-sdk', 'streaming-ui', 'tool-calling', 'typescript', 'nextjs'], cmdPrefix: 'npm install ai @ai-sdk/openai @ai-sdk/anthropic', repoOrg: 'vercel/ai', summary: 'TypeScript toolkit for building streaming AI interfaces, structured object generation, and multi-step tool calls.' },
  { slug: 'opencommit-ai-git', title: 'OpenCommit CLI', author: 'di-sukharev', baseStars: 12400, baseVersion: '3.2.8', tags: ['opencommit', 'git-hooks', 'conventional-commits', 'cli', 'ai'], cmdPrefix: 'npm install -g opencommit && oco', repoOrg: 'di-sukharev/opencommit', summary: 'Auto-generates semantic Conventional Commits from staged git diffs in 1 second using local or cloud LLMs.' },
];

const DEVELOPERS_SEEDS = [
  { slug: 'biome-toolchain', title: 'Biome Formatter & Linter', author: 'biomejs', baseStars: 22900, baseVersion: '1.9.4', tags: ['biome', 'rust-linter', 'formatter', 'typescript', 'fast-ast'], cmdPrefix: 'npm install --save-dev --save-exact @biomejs/biome', repoOrg: 'biomejs/biome', summary: 'Rust-powered toolchain for web projects that formats and lints JavaScript, TypeScript, JSX, and JSON in milliseconds.' },
  { slug: 'turborepo-monorepo', title: 'Turborepo Build System', author: 'vercel', baseStars: 27400, baseVersion: '2.4.2', tags: ['turborepo', 'monorepo', 'remote-cache', 'build-system', 'rust'], cmdPrefix: 'npx create-turbo@latest', repoOrg: 'vercel/turborepo', summary: 'High-performance incremental bundler and build system for JavaScript and TypeScript monorepos with remote caching.' },
  { slug: 'nx-smart-monorepo', title: 'Nx Workspace Console', author: 'nrwl', baseStars: 25100, baseVersion: '20.5.0', tags: ['nx', 'monorepo', 'task-graph', 'distributed-ci', 'devtools'], cmdPrefix: 'npx create-nx-workspace@latest', repoOrg: 'nrwl/nx', summary: 'Smart monorepo build platform with dependency graph visualization, affected task execution, and CI distribution.' },
  { slug: 'vite-nextgen-bundler', title: 'Vite Frontend Tooling', author: 'vitejs', baseStars: 71200, baseVersion: '6.2.0', tags: ['vite', 'hmr', 'rollup', 'esbuild', 'dev-server'], cmdPrefix: 'npm create vite@latest', repoOrg: 'vitejs/vite', summary: 'Next-generation frontend build tool providing instant server start and lightning-fast Hot Module Replacement.' },
  { slug: 'bun-all-in-one-runtime', title: 'Bun JavaScript Runtime', author: 'oven-sh', baseStars: 76500, baseVersion: '1.2.4', tags: ['bun', 'javascript-runtime', 'bundler', 'package-manager', 'zig'], cmdPrefix: 'curl -fsSL https://bun.sh/install | bash', repoOrg: 'oven-sh/bun', summary: 'All-in-one JavaScript and TypeScript runtime, package manager, test runner, and bundler built from scratch in Zig.' },
  { slug: 'pnpm-fast-pkg', title: 'pnpm Disk-Efficient Manager', author: 'pnpm', baseStars: 31400, baseVersion: '10.5.0', tags: ['pnpm', 'package-manager', 'monorepo-workspaces', 'symlinks', 'nodejs'], cmdPrefix: 'npm install -g pnpm@latest-10', repoOrg: 'pnpm/pnpm', summary: 'Fast, disk space efficient package manager using a content-addressable store and strict node_modules isolation.' },
  { slug: 'drizzle-orm-kit', title: 'Drizzle ORM & Studio', author: 'drizzle-team', baseStars: 26900, baseVersion: '0.39.3', tags: ['drizzle', 'typescript-orm', 'sql', 'postgres', 'migrations'], cmdPrefix: 'npm i drizzle-orm && npm i -D drizzle-kit', repoOrg: 'drizzle-team/drizzle-orm', summary: 'Headless TypeScript ORM with zero dependencies, SQL-like relational queries, and instant schema migration generation.' },
  { slug: 'prisma-client-studio', title: 'Prisma ORM & Data Platform', author: 'prisma', baseStars: 41600, baseVersion: '6.4.1', tags: ['prisma', 'orm', 'database-schema', 'type-safe', 'postgresql'], cmdPrefix: 'npx prisma init && npx prisma studio', repoOrg: 'prisma/prisma', summary: 'Next-generation Node.js and TypeScript ORM with declarative data modeling, visual database browser, and type safety.' },
  { slug: 'zod-schema-validator', title: 'Zod TypeScript Validator', author: 'colinhacks', baseStars: 36800, baseVersion: '3.24.2', tags: ['zod', 'schema-validation', 'static-inference', 'typescript', 'forms'], cmdPrefix: 'npm install zod', repoOrg: 'colinhacks/zod', summary: 'TypeScript-first schema declaration and validation library with static type inference and zero external dependencies.' },
  { slug: 'tanstack-query-devtools', title: 'TanStack Query Devtools', author: 'TanStack', baseStars: 44100, baseVersion: '5.67.0', tags: ['tanstack-query', 'async-state', 'caching', 'swr', 'devtools'], cmdPrefix: 'npm i @tanstack/react-query @tanstack/react-query-devtools', repoOrg: 'TanStack/query', summary: 'Powerful asynchronous state management, server-state caching, and dedicated floating cache inspector for web apps.' },
  { slug: 'trpc-end-to-end-rpc', title: 'tRPC Type-Safe APIs', author: 'trpc', baseStars: 36200, baseVersion: '11.0.0', tags: ['trpc', 'rpc', 'fullstack-typescript', 'api', 'react-query'], cmdPrefix: 'npm install @trpc/server @trpc/client @trpc/react-query', repoOrg: 'trpc/trpc', summary: 'Move fast and break nothing with end-to-end typesafe APIs without code generation or runtime bloat.' },
  { slug: 'hono-ultrafast-edge', title: 'Hono Web Framework', author: 'honojs', baseStars: 23800, baseVersion: '4.7.2', tags: ['hono', 'cloudflare-workers', 'edge-api', 'ultrafast', 'typescript'], cmdPrefix: 'npm create hono@latest', repoOrg: 'honojs/hono', summary: 'Ultrafast web framework built on Web Standards for Cloudflare Workers, Deno, Bun, and Node.js with RPC client support.' },
  { slug: 'error-lens-diagnostics', title: 'Error Lens Inline Diagnostics', author: 'usernamehw', baseStars: 14900, baseVersion: '3.22.0', tags: ['error-lens', 'vscode-extension', 'inline-diagnostics', 'linter', 'ide'], cmdPrefix: 'code --install-extension usernamehw.errorlens', repoOrg: 'usernamehw/vscode-error-lens', summary: 'Supercharges language diagnostic highlighting by rendering errors, warnings, and hints directly inline at the end of lines.' },
  { slug: 'lazygit-terminal-ui', title: 'Lazygit Terminal UI', author: 'jesseduffield', baseStars: 57900, baseVersion: '0.47.0', tags: ['lazygit', 'tui', 'interactive-rebase', 'git-client', 'terminal'], cmdPrefix: 'brew install lazygit && lazygit', repoOrg: 'jesseduffield/lazygit', summary: 'Simple terminal UI for git commands making interactive rebasing, cherry-picking, and partial staging effortless.' },
  { slug: 'gh-cli-official', title: 'GitHub CLI (gh)', author: 'cli', baseStars: 38600, baseVersion: '2.67.0', tags: ['github-cli', 'pull-requests', 'actions-runner', 'terminal', 'gh'], cmdPrefix: 'brew install gh && gh auth login', repoOrg: 'cli/cli', summary: 'Official GitHub command-line tool bringing pull requests, issues, Actions workflow runs, and releases to your terminal.' },
  { slug: 'husky-git-hooks', title: 'Husky Pre-Commit Hooks', author: 'typicode', baseStars: 33400, baseVersion: '9.1.7', tags: ['husky', 'git-hooks', 'pre-commit', 'lint-staged', 'dx'], cmdPrefix: 'npm install --save-dev husky && npx husky init', repoOrg: 'typicode/husky', summary: 'Modern native Git hooks made easy for linting commit messages, running tests, and formatting code before push.' },
  { slug: 'changesets-versioning', title: 'Changesets Release Manager', author: 'changesets', baseStars: 9900, baseVersion: '2.28.1', tags: ['changesets', 'semver', 'changelogs', 'monorepo-release', 'npm'], cmdPrefix: 'npx @changesets/cli init && npx changeset', repoOrg: 'changesets/changesets', summary: 'Manage versioning and changelogs with a focus on multi-package monorepos and automated GitHub release PRs.' },
  { slug: 'oxc-oxidizer-compiler', title: 'Oxc JavaScript Compiler', author: 'oxc-project', baseStars: 14700, baseVersion: '0.54.0', tags: ['oxc', 'oxlint', 'rust-parser', 'ast', 'javascript-compiler'], cmdPrefix: 'npx oxlint@latest', repoOrg: 'oxc-project/oxc', summary: 'Collection of high-performance JavaScript tools written in Rust including oxlint, parser, resolver, and transformer.' },
  { slug: 'zed-editor-collab', title: 'Zed Multiplayer Extensions', author: 'zed-industries', baseStars: 55800, baseVersion: '0.175.0', tags: ['zed', 'gpu-editor', 'rust', 'multiplayer-coding', 'lsp'], cmdPrefix: 'curl -f https://zed.dev/install.sh | sh', repoOrg: 'zed-industries/zed', summary: 'High-performance, multiplayer code editor from the creators of Atom and Tree-sitter with native AI and LSP extensions.' },
];

const TESTERS_QA_SEEDS = [
  { slug: 'vitest-unit-runner', title: 'Vitest Blazing Unit Runner', author: 'vitest-dev', baseStars: 14200, baseVersion: '3.0.7', tags: ['vitest', 'unit-testing', 'vite', 'Snapshot-testing', 'coverage'], cmdPrefix: 'npm install -D vitest @vitest/ui && npx vitest --ui', repoOrg: 'vitest-dev/vitest', summary: 'Next-generation testing framework powered by Vite with instant watch mode, browser mode, and Jest-compatible APIs.' },
  { slug: 'k6-load-testing', title: 'Grafana k6 Load Tester', author: 'grafana', baseStars: 26800, baseVersion: '0.57.0', tags: ['k6', 'load-testing', 'stress-test', 'performance-qa', 'grafana'], cmdPrefix: 'brew install k6 && k6 run script.js', repoOrg: 'grafana/k6', summary: 'Modern load testing tool built in Go and scripted in JavaScript for engineering teams testing API reliability at scale.' },
  { slug: 'trivy-vulnerability-scanner', title: 'Aqua Trivy Scanner', author: 'aquasecurity', baseStars: 25600, baseVersion: '0.59.1', tags: ['trivy', 'container-security', 'sbom', 'iac-scanning', 'devsecops'], cmdPrefix: 'brew install trivy && trivy fs .', repoOrg: 'aquasecurity/trivy', summary: 'Comprehensive and versatile security scanner for containers, Kubernetes, code repositories, and SBOM compliance.' },
  { slug: 'semgrep-sast-engine', title: 'Semgrep Code Security', author: 'semgrep', baseStars: 11400, baseVersion: '1.110.0', tags: ['semgrep', 'sast', 'custom-rules', 'security-scanning', 'ci-gate'], cmdPrefix: 'pip install semgrep && semgrep scan --config auto', repoOrg: 'semgrep/semgrep', summary: 'Lightweight static analysis engine for finding bug variants and enforcing secure coding guardrails across 30+ languages.' },
  { slug: 'msw-mock-service-worker', title: 'MSW (Mock Service Worker)', author: 'mswjs', baseStars: 16300, baseVersion: '2.7.3', tags: ['msw', 'api-mocking', 'service-worker', 'rest', 'graphql'], cmdPrefix: 'npm install msw --save-dev && npx msw init public/', repoOrg: 'mswjs/msw', summary: 'Seamless REST and GraphQL API mocking library for browser and Node.js that intercepts requests at the network level.' },
  { slug: 'testing-library-dom', title: 'React Testing Library', author: 'testing-library', baseStars: 19200, baseVersion: '16.2.0', tags: ['testing-library', 'a11y-queries', 'dom-testing', 'react', 'user-event'], cmdPrefix: 'npm install --save-dev @testing-library/react @testing-library/user-event', repoOrg: 'testing-library/react-testing-library', summary: 'Simple and complete DOM testing utilities that encourage good accessibility practices by querying elements the way users do.' },
  { slug: 'owasp-zap-scanner', title: 'OWASP ZAP DAST Action', author: 'zaproxy', baseStars: 13200, baseVersion: '2.16.0', tags: ['owasp-zap', 'dast', 'penetration-testing', 'web-security', 'qa'], cmdPrefix: 'docker run -t ghcr.io/zaproxy/zaproxy:stable zap-baseline.py -t https://example.com', repoOrg: 'zaproxy/zaproxy', summary: 'Dynamic Application Security Testing (DAST) web scanner that probes running web apps for OWASP Top 10 vulnerabilities.' },
  { slug: 'gitleaks-secret-scanner', title: 'Gitleaks Secret Detector', author: 'gitleaks', baseStars: 19100, baseVersion: '8.24.0', tags: ['gitleaks', 'secrets-scanner', 'git-history', 'pre-commit', 'security'], cmdPrefix: 'brew install gitleaks && gitleaks detect --source . -v', repoOrg: 'gitleaks/gitleaks', summary: 'Fast SAST tool for detecting and preventing hardcoded secrets like passwords, API keys, and tokens in git repos.' },
  { slug: 'pact-contract-testing', title: 'Pact Contract Testing', author: 'pact-foundation', baseStars: 10800, baseVersion: '14.0.0', tags: ['pact', 'contract-testing', 'microservices', 'consumer-driven', 'api-qa'], cmdPrefix: 'npm install --save-dev @pact-foundation/pact', repoOrg: 'pact-foundation/pact-js', summary: 'De-facto consumer-driven contract testing tool for verifying HTTP and message integrations without slow E2E environments.' },
  { slug: 'testcontainers-docker', title: 'Testcontainers Runtime', author: 'testcontainers', baseStars: 9500, baseVersion: '10.18.0', tags: ['testcontainers', 'docker-testing', 'integration-tests', 'postgres', 'redis'], cmdPrefix: 'npm install @testcontainers/postgresql --save-dev', repoOrg: 'testcontainers/testcontainers-node', summary: 'Spins up lightweight, throwaway Docker instances of real databases, message brokers, and cloud services for integration tests.' },
  { slug: 'stryker-mutation-testing', title: 'Stryker Mutator', author: 'stryker-mutator', baseStars: 6900, baseVersion: '8.6.0', tags: ['stryker', 'mutation-testing', 'test-quality', 'coverage-audit', 'qa'], cmdPrefix: 'npm init stryker@latest && npx stryker run', repoOrg: 'stryker-mutator/stryker-js', summary: 'Tests your tests by injecting deliberate semantic bugs (mutants) into production code to verify your suite catches them.' },
  { slug: 'schemathesis-api-fuzzer', title: 'Schemathesis OpenAPI Fuzzer', author: 'schemathesis', baseStars: 5800, baseVersion: '3.39.0', tags: ['schemathesis', 'property-based-testing', 'openapi', 'graphql-fuzzing', 'qa'], cmdPrefix: 'pip install schemathesis && st run https://example.com/openapi.json', repoOrg: 'schemathesis/schemathesis', summary: 'Property-based API testing tool that generates thousands of edge-case requests automatically from OpenAPI or GraphQL schemas.' },
  { slug: 'maestro-mobile-ui-qa', title: 'Maestro Mobile E2E Flows', author: 'mobile-dev-inc', baseStars: 7400, baseVersion: '1.39.2', tags: ['maestro', 'mobile-e2e', 'ios-testing', 'android-qa', 'yaml-flows'], cmdPrefix: 'curl -Ls "https://get.maestro.mobile.dev" | bash', repoOrg: 'mobile-dev-inc/Maestro', summary: 'Declarative YAML-based mobile and web UI testing framework resilient to flaky animations and dynamic view layouts.' },
  { slug: 'artillery-cloud-load', title: 'Artillery Cloud Load QA', author: 'artilleryio', baseStars: 8400, baseVersion: '2.0.21', tags: ['artillery', 'load-testing', 'playwright-load', 'sre', 'performance'], cmdPrefix: 'npm install -g artillery@latest && artillery quick --count 50 -n 20 https://example.com', repoOrg: 'artilleryio/artillery', summary: 'Cloud-scale load testing and synthetic monitoring platform that reuses real Playwright E2E scripts for traffic generation.' },
  { slug: 'hurl-http-assertions', title: 'Hurl Plaintext HTTP Runner', author: 'Orange-OpenSource', baseStars: 14600, baseVersion: '6.0.0', tags: ['hurl', 'curl', 'http-testing', 'ci-assertions', 'rust'], cmdPrefix: 'brew install hurl && hurl --test api-checks.hurl', repoOrg: 'Orange-OpenSource/hurl', summary: 'Runs and tests HTTP requests defined in a simple plain text format with chained captures, XPath/JSONPath assertions, and timing checks.' },
  { slug: 'detox-graybox-mobile', title: 'Detox React Native E2E', author: 'wix', baseStars: 11300, baseVersion: '20.34.0', tags: ['detox', 'react-native', 'gray-box-testing', 'mobile-qa', 'synchronization'], cmdPrefix: 'npm install -g detox-cli && detox test', repoOrg: 'wix/Detox', summary: 'Gray-box end-to-end testing and automation framework for mobile apps that monitors async idle states to eliminate flakiness.' },
  { slug: 'keploy-ebpf-recorder', title: 'Keploy eBPF Test Generator', author: 'keploy', baseStars: 8900, baseVersion: '2.4.1', tags: ['keploy', 'ebpf', 'traffic-replay', 'api-mocks', 'zero-code-qa'], cmdPrefix: 'curl -O https://raw.githubusercontent.com/keploy/keploy/main/install.sh && bash install.sh', repoOrg: 'keploy/keploy', summary: 'Converts real user API traffic into deterministic integration tests and database mocks automatically using eBPF.' },
  { slug: 'checkly-synthetic-monitoring', title: 'Checkly Monitoring-as-Code', author: 'checkly', baseStars: 6200, baseVersion: '4.13.0', tags: ['checkly', 'synthetics', 'monitoring-as-code', 'playwright', 'uptime'], cmdPrefix: 'npm create checkly@latest && npx checkly test', repoOrg: 'checkly/checkly-cli', summary: 'Monitoring-as-Code workflow uniting Playwright E2E testing and global synthetic API uptime monitoring from your repository.' },
  { slug: 'osv-scanner-google', title: 'Google OSV-Scanner', author: 'google', baseStars: 7100, baseVersion: '1.9.2', tags: ['osv-scanner', 'vulnerability-db', 'lockfile-audit', 'supply-chain', 'security'], cmdPrefix: 'go install github.com/google/osv-scanner/cmd/osv-scanner@v1 && osv-scanner -r .', repoOrg: 'google/osv-scanner', summary: 'Vulnerability scanner written in Go that matches project lockfiles and container layers against the open OSV database.' },
];

const DESIGNERS_UI_SEEDS = [
  { slug: 'shadcn-ui-cli', title: 'shadcn/ui Component CLI', author: 'shadcn-ui', baseStars: 82400, baseVersion: '2.3.0', tags: ['shadcn-ui', 'radix-ui', 'tailwind-components', 'design-system', 'accessibility'], cmdPrefix: 'npx shadcn@latest init && npx shadcn@latest add button dialog', repoOrg: 'shadcn-ui/ui', summary: 'Accessible, copy-and-paste UI component registry built on Radix Primitives and Tailwind CSS that lives in your codebase.' },
  { slug: 'radix-primitives-ui', title: 'Radix UI Primitives', author: 'radix-ui', baseStars: 16800, baseVersion: '1.1.6', tags: ['radix-ui', 'headless-ui', 'wai-aria', 'keyboard-nav', 'design-primitives'], cmdPrefix: 'npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu', repoOrg: 'radix-ui/primitives', summary: 'Unstyled, accessible low-level UI component primitives with WAI-ARIA compliance, focus management, and screen reader support.' },
  { slug: 'motion-animation-engine', title: 'Motion (Framer Motion)', author: 'motiondivision', baseStars: 28400, baseVersion: '12.4.7', tags: ['motion', 'framer-motion', 'spring-physics', 'layout-animations', 'gestures'], cmdPrefix: 'npm install motion', repoOrg: 'motiondivision/motion', summary: 'Production-ready web animation library with hardware-accelerated springs, shared layout transitions, and scroll gestures.' },
  { slug: 'penpot-open-design', title: 'Penpot Open-Source Design', author: 'penpot', baseStars: 36100, baseVersion: '2.4.0', tags: ['penpot', 'open-source-figma', 'css-grid-layout', 'svg-native', 'design-tokens'], cmdPrefix: 'docker compose -p penpot -f docker-compose.yaml up -d', repoOrg: 'penpot/penpot', summary: 'Web-based open-source design and prototyping tool built natively on SVG, CSS Grid, Flexbox, and W3C design tokens.' },
  { slug: 'style-dictionary-tokens', title: 'Amazon Style Dictionary', author: 'amzn', baseStars: 8900, baseVersion: '4.3.0', tags: ['style-dictionary', 'design-tokens', 'css-variables', 'ios-swift', 'android-xml'], cmdPrefix: 'npm install -D style-dictionary && npx style-dictionary build', repoOrg: 'amzn/style-dictionary', summary: 'Build system for design tokens that exports a single JSON token definition to CSS variables, Tailwind, Swift, and Android XML.' },
  { slug: 'excalidraw-whiteboard', title: 'Excalidraw Diagram Canvas', author: 'excalidraw', baseStars: 91500, baseVersion: '0.18.0', tags: ['excalidraw', 'wireframing', 'architecture-diagrams', 'hand-drawn', 'canvas'], cmdPrefix: 'npm install react react-dom @excalidraw/excalidraw', repoOrg: 'excalidraw/excalidraw', summary: 'Virtual collaborative whiteboard for sketching hand-drawn system architecture diagrams, UI wireframes, and SVG exports.' },
  { slug: 'gsap-scrolltrigger', title: 'GSAP & ScrollTrigger', author: 'greensock', baseStars: 21700, baseVersion: '3.12.7', tags: ['gsap', 'scrolltrigger', 'svg-morph', 'timeline-animation', 'webgl-motion'], cmdPrefix: 'npm install gsap @gsap/react', repoOrg: 'greensock/GSAP', summary: 'Industry-standard JavaScript timeline animation suite for choreographing complex SVG, DOM, Canvas, and Three.js motion.' },
  { slug: 'threejs-webgl-studio', title: 'Three.js 3D WebGL Engine', author: 'mrdoob', baseStars: 104500, baseVersion: '0.173.0', tags: ['threejs', 'webgl', 'webgpu', '3d-graphics', 'shaders'], cmdPrefix: 'npm install three @types/three', repoOrg: 'mrdoob/three.js', summary: 'Cross-browser JavaScript 3D library using WebGL and WebGPU for interactive spatial interfaces, PBR materials, and shaders.' },
  { slug: 'lottie-web-player', title: 'Lottie Web Vector Motion', author: 'airbnb', baseStars: 30600, baseVersion: '5.12.2', tags: ['lottie', 'after-effects', 'vector-animation', 'svg-motion', 'micro-interactions'], cmdPrefix: 'npm install lottie-web', repoOrg: 'airbnb/lottie-web', summary: 'Parses Adobe After Effects animations exported as JSON with Bodymovin and renders them natively as crisp SVG or Canvas on web.' },
  { slug: 'sharp-image-pipeline', title: 'Sharp High-Speed Imaging', author: 'lovell', baseStars: 29800, baseVersion: '0.33.5', tags: ['sharp', 'libvips', 'avif-webp', 'image-resizing', 'asset-pipeline'], cmdPrefix: 'npm install sharp', repoOrg: 'lovell/sharp', summary: 'High-performance Node.js image processing powered by libvips to convert large images to WebP and AVIF 5x faster than ImageMagick.' },
  { slug: 'phosphor-icons-pack', title: 'Phosphor Icons Family', author: 'phosphor-icons', baseStars: 6400, baseVersion: '2.1.7', tags: ['phosphor-icons', '6-weights', 'duotone-icons', 'svg', 'ui-design'], cmdPrefix: 'npm install @phosphor-icons/react', repoOrg: 'phosphor-icons/core', summary: 'Flexible icon family for interfaces, diagrams, and presentations with 6 weights (Thin, Light, Regular, Bold, Fill, Duotone).' },
  { slug: 'radix-colors-palette', title: 'Radix Colors 12-Step Scale', author: 'radix-ui', baseStars: 5900, baseVersion: '3.0.0', tags: ['radix-colors', 'apca-contrast', 'dark-mode', 'p3-gamut', 'color-system'], cmdPrefix: 'npm install @radix-ui/colors', repoOrg: 'radix-ui/colors', summary: 'Gorgeous, accessible 12-step color system with guaranteed APCA contrast ratios across light mode, dark mode, and P3 wide gamut.' },
  { slug: 'floating-ui-positioning', title: 'Floating UI Anchoring', author: 'floating-ui', baseStars: 30200, baseVersion: '1.6.13', tags: ['floating-ui', 'tooltips', 'popovers', 'collision-aware', 'dropdowns'], cmdPrefix: 'npm install @floating-ui/dom @floating-ui/react', repoOrg: 'floating-ui/floating-ui', summary: 'Low-level positioning library for tooltips, popovers, dropdowns, and comboboxes with viewport collision avoidance.' },
  { slug: 'cmdk-command-menu', title: 'cmdk Command Palette', author: 'pacocoursey', baseStars: 10900, baseVersion: '1.0.4', tags: ['cmdk', 'command-palette', 'keyboard-ux', 'fuzzy-search', 'react-ui'], cmdPrefix: 'npm install cmdk', repoOrg: 'pacocoursey/cmdk', summary: 'Fast, composable, unstyled command menu component for React supporting keyboard navigation, nested pages, and instant filtering.' },
  { slug: 'vaul-drawer-primitive', title: 'Vaul Touch Drawer', author: 'emilkowalski', baseStars: 8100, baseVersion: '1.1.2', tags: ['vaul', 'mobile-drawer', 'bottom-sheet', 'gesture-physics', 'radix'], cmdPrefix: 'npm install vaul', repoOrg: 'emilkowalski/vaul', summary: 'Unstyled drawer component for React with native iOS-style rubberband drag physics, snap points, and background scaling.' },
  { slug: 'sonner-toast-system', title: 'Sonner Stackable Toasts', author: 'emilkowalski', baseStars: 10200, baseVersion: '2.0.1', tags: ['sonner', 'toast-notifications', 'micro-interactions', 'ui-feedback', 'accessible'], cmdPrefix: 'npm install sonner', repoOrg: 'emilkowalski/sonner', summary: 'Opinionated toast notification component with smooth stacking choreography, swipe-to-dismiss gestures, and promise states.' },
  { slug: 'satori-og-svg-engine', title: 'Vercel Satori HTML-to-SVG', author: 'vercel', baseStars: 13400, baseVersion: '0.12.0', tags: ['satori', 'og-images', 'html-to-svg', 'social-cards', 'flexbox-layout'], cmdPrefix: 'npm install satori @resvg/resvg-js', repoOrg: 'vercel/satori', summary: 'Enlightened library to convert HTML and CSS Flexbox layouts directly into crisp SVGs and OpenGraph social cards at the edge.' },
  { slug: 'react-aria-adobe', title: 'Adobe React Aria Components', author: 'adobe', baseStars: 13600, baseVersion: '1.6.0', tags: ['react-aria', 'wcag-compliance', 'internationalization', 'touch-accessible', 'design-system'], cmdPrefix: 'npm install react-aria-components', repoOrg: 'adobe/react-spectrum', summary: 'Library of unstyled React components and hooks implementing adaptive touch/mouse interactions and internationalized accessibility.' },
  { slug: 'poline-color-generator', title: 'Poline Esoteric Palette', author: 'meodai', baseStars: 4900, baseVersion: '1.9.0', tags: ['poline', 'color-harmonies', 'polar-coordinates', 'generative-design', 'css'], cmdPrefix: 'npm install poline', repoOrg: 'meodai/poline', summary: 'Enigmatic color palette generator that harnesses polar coordinates to produce smooth, natural, non-linear color scales.' },
];

const GITHUB_PAGES_DOCS_SEEDS = [
  { slug: 'astro-starlight-docs', title: 'Astro Starlight Docs', author: 'withastro', baseStars: 49100, baseVersion: '0.32.0', tags: ['astro', 'starlight', 'documentation-theme', 'pagefind', 'github-pages'], cmdPrefix: 'npm create astro@latest -- --template starlight', repoOrg: 'withastro/starlight', summary: 'Full-featured documentation framework built on Astro with built-in Pagefind search, i18n, dark mode, and zero-JS static output.' },
  { slug: 'vitepress-static-docs', title: 'VitePress Static Generator', author: 'vuejs', baseStars: 14300, baseVersion: '1.6.3', tags: ['vitepress', 'markdown-ssg', 'shiki-highlighting', 'static-docs', 'github-pages'], cmdPrefix: 'npm add -D vitepress && npx vitepress init', repoOrg: 'vuejs/vitepress', summary: 'Vite & Vue powered static site generator that turns Markdown files into fast, SPA-navigable documentation sites for GitHub Pages.' },
  { slug: 'docusaurus-meta-docs', title: 'Docusaurus Documentation', author: 'facebook', baseStars: 57600, baseVersion: '3.7.0', tags: ['docusaurus', 'mdx-docs', 'versioned-docs', 'blog', 'github-pages'], cmdPrefix: 'npx create-docusaurus@latest my-website classic', repoOrg: 'facebook/docusaurus', summary: 'Easy-to-maintain open source documentation websites supporting MDX v3, document versioning, and one-command GitHub Pages deploy.' },
  { slug: 'mkdocs-material-theme', title: 'Material for MkDocs', author: 'squidfunk', baseStars: 22400, baseVersion: '9.6.5', tags: ['mkdocs-material', 'python-docs', 'technical-writing', 'diagrams', 'github-pages'], cmdPrefix: 'pip install mkdocs-material && mkdocs gh-deploy', repoOrg: 'squidfunk/mkdocs-material', summary: 'Technical documentation framework for MkDocs with native Mermaid diagrams, code annotations, social cards, and instant search.' },
  { slug: 'fumadocs-nextjs-mdx', title: 'Fumadocs Developer Docs', author: 'fuma-nama', baseStars: 6800, baseVersion: '15.1.0', tags: ['fumadocs', 'openapi-playground', 'mdx', 'twoslash', 'documentation'], cmdPrefix: 'npx create-fumadocs-app', repoOrg: 'fuma-nama/fumadocs', summary: 'Composable documentation framework with TypeScript Twoslash hover inspection, interactive OpenAPI playgrounds, and static export.' },
  { slug: 'nextra-mdx-site', title: 'Nextra Static Docs & Blog', author: 'shuding', baseStars: 12700, baseVersion: '4.1.0', tags: ['nextra', 'mdx-bundler', 'flexsearch', 'static-export', 'docs'], cmdPrefix: 'npm i next react react-dom nextra nextra-theme-docs', repoOrg: 'shuding/nextra', summary: 'Simple, powerful and flexible site generation framework with file-system routing, built-in FlexSearch, and syntax highlighting.' },
  { slug: 'hugo-static-engine', title: 'Hugo Blazing Static SSG', author: 'gohugoio', baseStars: 77800, baseVersion: '0.144.0', tags: ['hugo', 'golang-ssg', 'markdown', 'github-pages', 'static-sites'], cmdPrefix: 'brew install hugo && hugo new site quickstart', repoOrg: 'gohugoio/hugo', summary: 'The world’s fastest framework for building static websites, compiling thousands of Markdown pages in under a second.' },
  { slug: 'eleventy-11ty-ssg', title: 'Eleventy (11ty) Generator', author: '11ty', baseStars: 17900, baseVersion: '3.0.0', tags: ['eleventy', '11ty', 'zero-client-js', 'jamstack', 'github-pages'], cmdPrefix: 'npx @11ty/eleventy --serve', repoOrg: '11ty/eleventy', summary: 'Simpler static site generator transforming templates across Markdown, Liquid, Nunjucks, and WebC with zero client JS by default.' },
  { slug: 'quartz-digital-garden', title: 'Quartz 4 Digital Garden', author: 'jackyzha0', baseStars: 8700, baseVersion: '4.4.0', tags: ['quartz', 'obsidian-publish', 'wikilinks', 'backlinks', 'github-pages'], cmdPrefix: 'npx quartz create && npx quartz build --serve', repoOrg: 'jackyzha0/quartz', summary: 'Publish your Obsidian vault and interconnected Markdown notes as a free static digital garden with interactive graph views on GitHub Pages.' },
  { slug: 'pagefind-static-search', title: 'CloudCannon Pagefind', author: 'CloudCannon', baseStars: 4600, baseVersion: '1.3.0', tags: ['pagefind', 'wasm-search', 'static-indexing', 'zero-server', 'github-pages'], cmdPrefix: 'npx pagefind --site dist', repoOrg: 'CloudCannon/pagefind', summary: 'Fully static, low-bandwidth search library powered by WebAssembly that indexes rendered HTML directories without any backend.' },
  { slug: 'shiki-syntax-highlighter', title: 'Shiki TextMate Highlighter', author: 'shikijs', baseStars: 11200, baseVersion: '2.5.0', tags: ['shiki', 'syntax-highlighting', 'vscode-grammars', 'twoslash', 'markdown'], cmdPrefix: 'npm install -D shiki', repoOrg: 'shikijs/shiki', summary: 'Beautiful and accurate syntax highlighter using VS Code TextMate grammars and themes with zero runtime CSS or JS overhead.' },
  { slug: 'mermaid-diagram-cli', title: 'Mermaid.js Diagram Engine', author: 'mermaid-js', baseStars: 75400, baseVersion: '11.4.1', tags: ['mermaid', 'sequence-diagrams', 'flowcharts', 'markdown-diagrams', 'docs'], cmdPrefix: 'npm install -g @mermaid-js/mermaid-cli && mmdc -i input.mmd -o output.svg', repoOrg: 'mermaid-js/mermaid', summary: 'Generate flowcharts, sequence diagrams, C4 architecture charts, and Gantt timelines directly from Markdown-inspired text definitions.' },
  { slug: 'actions-deploy-pages', title: 'GitHub Actions Deploy Pages', author: 'actions', baseStars: 6100, baseVersion: '4.0.5', tags: ['deploy-pages', 'github-actions', 'oidc-deploy', 'artifacts', 'ci-cd'], cmdPrefix: 'uses: actions/deploy-pages@v4', repoOrg: 'actions/deploy-pages', summary: 'Official GitHub Action to deploy static build artifacts directly to GitHub Pages via OIDC without committing to a gh-pages branch.' },
  { slug: 'release-please-action', title: 'Google Release Please', author: 'googleapis', baseStars: 5700, baseVersion: '16.15.0', tags: ['release-please', 'conventional-commits', 'changelog-pr', 'semver', 'automation'], cmdPrefix: 'uses: googleapis/release-please-action@v4', repoOrg: 'googleapis/release-please-action', summary: 'Automates CHANGELOG generation, GitHub releases, and semantic version bumps by maintaining an automated Release Pull Request.' },
  { slug: 'scalar-openapi-docs', title: 'Scalar OpenAPI Reference', author: 'scalar', baseStars: 10300, baseVersion: '1.25.0', tags: ['scalar', 'openapi', 'swagger-ui', 'rest-client', 'api-docs'], cmdPrefix: '<script id="api-reference" data-url="./openapi.json"></script><script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference"></script>', repoOrg: 'scalar/scalar', summary: 'Modern, interactive OpenAPI / Swagger documentation viewer and embedded REST API playground drop-in script for static sites.' },
  { slug: 'typst-scientific-docs', title: 'Typst Markup Typesetter', author: 'typst', baseStars: 38200, baseVersion: '0.13.0', tags: ['typst', 'latex-alternative', 'pdf-generation', 'scientific-docs', 'rust'], cmdPrefix: 'brew install typst && typst compile paper.typ', repoOrg: 'typst/typst', summary: 'New markup-based typesetting system written in Rust that compiles technical reports, whitepapers, and PDFs in milliseconds.' },
  { slug: 'TinaCMS-git-visual', title: 'TinaCMS Visual Git Editor', author: 'tinacms', baseStars: 11900, baseVersion: '2.5.0', tags: ['tinacms', 'visual-editing', 'mdx-cms', 'git-backed', 'static-sites'], cmdPrefix: 'npx @tinacms/cli@latest init', repoOrg: 'tinacms/tinacms', summary: 'Open-source Git-backed headless CMS providing real-time visual inline editing for Markdown, MDX, and JSON static sites.' },
  { slug: 'umami-privacy-analytics', title: 'Umami Web Analytics', author: 'umami-software', baseStars: 24300, baseVersion: '2.16.0', tags: ['umami', 'privacy-analytics', 'gdpr-compliant', 'telemetry', 'static-pages'], cmdPrefix: '<script defer src="https://cloud.umami.is/script.js" data-website-id="YOUR-ID"></script>', repoOrg: 'umami-software/umami', summary: 'Simple, fast, privacy-focused open-source alternative to Google Analytics for documentation and GitHub Pages websites.' },
  { slug: 'act-local-github-actions', title: 'nektos/act Local Runner', author: 'nektos', baseStars: 59100, baseVersion: '0.2.74', tags: ['act', 'github-actions-local', 'docker-ci', 'workflow-debugger', 'devops'], cmdPrefix: 'brew install act && act -l', repoOrg: 'nektos/act', summary: 'Run your `.github/workflows` locally in Docker containers for instant CI/CD pipeline debugging without committing and pushing.' },
];

const VARIANT_MODIFIERS = [
  { suffixId: '', suffixTitle: '', tagExtra: 'core', descPrefix: '', cmdFlag: '', starRatio: 1.0, versionPatchOffset: 0 },
  { suffixId: '-github-action', suffixTitle: 'GitHub Action', tagExtra: 'github-actions', descPrefix: 'Automated CI/CD GitHub Action workflow for ', cmdFlag: ' --ci-action', starRatio: 0.72, versionPatchOffset: 1 },
  { suffixId: '-mcp-server', suffixTitle: 'MCP Server', tagExtra: 'mcp-server', descPrefix: 'Model Context Protocol (MCP) agent bridge for ', cmdFlag: ' --mcp-stdio', starRatio: 0.64, versionPatchOffset: 2 },
  { suffixId: '-vscode-ext', suffixTitle: 'VS Code Extension', tagExtra: 'vscode', descPrefix: 'Integrated VS Code & Cursor IDE extension for ', cmdFlag: ' --ide-integration', starRatio: 0.81, versionPatchOffset: 3 },
  { suffixId: '-cli-toolkit', suffixTitle: 'CLI Toolkit', tagExtra: 'cli', descPrefix: 'Cross-platform terminal CLI runner and automation kit for ', cmdFlag: ' --interactive', starRatio: 0.58, versionPatchOffset: 4 },
  { suffixId: '-cursor-rules', suffixTitle: 'Cursor Rules & Skill', tagExtra: 'cursorrules', descPrefix: 'Pre-configured .cursor/rules and agent skill definitions for ', cmdFlag: ' --rules-sync', starRatio: 0.51, versionPatchOffset: 5 },
  { suffixId: '-docker-runner', suffixTitle: 'Container Runner', tagExtra: 'docker', descPrefix: 'Hermetic Docker and Devcontainer runtime image for ', cmdFlag: ' --container', starRatio: 0.45, versionPatchOffset: 6 },
  { suffixId: '-monorepo-plugin', suffixTitle: 'Monorepo Plugin', tagExtra: 'monorepo', descPrefix: 'Workspace-aware monorepo caching and orchestration plugin for ', cmdFlag: ' --workspaces', starRatio: 0.39, versionPatchOffset: 7 },
  { suffixId: '-sarif-reporter', suffixTitle: 'PR & SARIF Reporter', tagExtra: 'pull-requests', descPrefix: 'Pull request annotation bot and SARIF check-run reporter for ', cmdFlag: ' --format=sarif', starRatio: 0.34, versionPatchOffset: 8 },
  { suffixId: '-precommit-hook', suffixTitle: 'Pre-Commit Gate', tagExtra: 'pre-commit', descPrefix: 'Zero-latency staged git hook and quality gatekeeper for ', cmdFlag: ' --staged', starRatio: 0.29, versionPatchOffset: 9 },
];

function bumpVersion(baseVersion, offset) {
  if (offset === 0) return baseVersion;
  const parts = String(baseVersion).split('.').map((n) => Number(n) || 0);
  while (parts.length < 3) parts.push(0);
  parts[2] += offset;
  return `${parts[0]}.${parts[1]}.${parts[2]}`;
}

function computeRating(stars) {
  if (stars >= 40000) return '5.0';
  if (stars >= 15000) return '4.9';
  if (stars >= 8000) return '4.8';
  return '4.7';
}

function expandCategoryBlueprints(categoryName, seeds, targetAdditionalCount) {
  const generated = [];
  for (let vIdx = 0; vIdx < VARIANT_MODIFIERS.length; vIdx++) {
    const mod = VARIANT_MODIFIERS[vIdx];
    for (let sIdx = 0; sIdx < seeds.length; sIdx++) {
      if (generated.length >= targetAdditionalCount) break;
      const seed = seeds[sIdx];
      const id = `${seed.slug}${mod.suffixId}`;
      const name = mod.suffixTitle ? `${seed.title} — ${mod.suffixTitle}` : seed.title;
      const loweredSummary = seed.summary.charAt(0).toLowerCase() + seed.summary.slice(1);
      const description = mod.descPrefix
        ? `${mod.descPrefix}${seed.title}: ${loweredSummary}`
        : seed.summary;
      const deterministicJitter = ((sIdx + 1) * 137 + vIdx * 251) % 900;
      const stars = Math.max(1200, Math.round(seed.baseStars * mod.starRatio) + deterministicJitter);
      const version = bumpVersion(seed.baseVersion, mod.versionPatchOffset);
      const rating = computeRating(stars);
      const tagSet = new Set(seed.tags);
      if (mod.tagExtra && mod.tagExtra !== 'core') tagSet.add(mod.tagExtra);
      const tags = Array.from(tagSet).slice(0, 5);
      const installCommand = mod.cmdFlag ? `${seed.cmdPrefix}${mod.cmdFlag}` : seed.cmdPrefix;
      const downloadUrl = `https://github.com/${seed.repoOrg}/releases/latest`;
      const readme = `# ${name}\n\n**${description}**\n\n## Quick Install\n\n\`\`\`bash\n${installCommand}\n\`\`\`\n\n## Key Capabilities\n\n- Native integration with \`${seed.repoOrg}\` (v${version})\n- Automated workflow support for **${categoryName}** engineering pipelines\n- Tagged with: ${tags.map((t) => `\`#${t}\``).join(', ')}`;

      generated.push({
        id,
        name,
        description,
        author: seed.author,
        version,
        stars,
        rating,
        category: categoryName,
        tags,
        installCommand,
        downloadUrl,
        readme,
      });
    }
  }
  return generated;
}

export function generateTop1000Plugins() {
  return [
    ...TOP_50_PLUGINS,
    ...expandCategoryBlueprints('AI & Automation', AI_AUTOMATION_SEEDS, 190),
    ...expandCategoryBlueprints('Developers', DEVELOPERS_SEEDS, 190),
    ...expandCategoryBlueprints('Testers & QA', TESTERS_QA_SEEDS, 190),
    ...expandCategoryBlueprints('Designers & UI', DESIGNERS_UI_SEEDS, 190),
    ...expandCategoryBlueprints('GitHub Pages & Docs', GITHUB_PAGES_DOCS_SEEDS, 190),
  ];
}

export const TOP_1000_PLUGINS = generateTop1000Plugins();

export function paginatePlugins(items, currentPage = 1, pageSize = DEFAULT_PAGE_SIZE) {
  const safeItems = Array.isArray(items) ? items : [];
  const totalItems = safeItems.length;
  if (pageSize <= 0 || !Number.isFinite(pageSize)) {
    return {
      items: safeItems,
      totalItems,
      currentPage: 1,
      pageSize: totalItems || 1,
      totalPages: 1,
      startIndex: totalItems > 0 ? 1 : 0,
      endIndex: totalItems,
      hasMore: false,
    };
  }
  const safeSize = Math.max(1, Math.floor(pageSize));
  const totalPages = Math.max(1, Math.ceil(totalItems / safeSize));
  const safePage = Math.min(Math.max(1, Math.floor(currentPage || 1)), totalPages);
  const offset = (safePage - 1) * safeSize;
  const sliced = safeItems.slice(offset, offset + safeSize);

  return {
    items: sliced,
    totalItems,
    currentPage: safePage,
    pageSize: safeSize,
    totalPages,
    startIndex: totalItems > 0 ? offset + 1 : 0,
    endIndex: Math.min(offset + sliced.length, totalItems),
    hasMore: safePage < totalPages,
  };
}

const state = {
  plugins: [...TOP_1000_PLUGINS],
  searchQuery: '',
  category: 'All',
  activeTag: null,
  sortBy: 'featured',
  currentPage: 1,
  pageSize: DEFAULT_PAGE_SIZE,
  activePluginId: null,
  activeDocsTab: 'readme',
  comparedPluginIds: [],
  theme: 'dark',
};

export function toggleComparePlugin(selectedIds, pluginId, max = MAX_COMPARE_PLUGINS) {
  const cleanId = String(pluginId ?? '').trim();
  const current = Array.isArray(selectedIds) ? [...selectedIds] : [];
  if (!cleanId) {
    return { selectedIds: current, status: 'limit_reached' };
  }
  const existingIdx = current.indexOf(cleanId);
  if (existingIdx >= 0) {
    current.splice(existingIdx, 1);
    return { selectedIds: current, status: 'removed' };
  }
  if (current.length >= max) {
    return { selectedIds: current, status: 'limit_reached' };
  }
  current.push(cleanId);
  return { selectedIds: current, status: 'added' };
}

export function getComparedPlugins(plugins, selectedIds) {
  if (!Array.isArray(plugins) || !Array.isArray(selectedIds)) return [];
  const byId = new Map(plugins.map((p) => [p.id, p]));
  return selectedIds
    .slice(0, MAX_COMPARE_PLUGINS)
    .map((id) => byId.get(id))
    .filter(Boolean);
}

export function buildComparisonMatrix(comparedPlugins) {
  const list = Array.isArray(comparedPlugins)
    ? comparedPlugins.slice(0, MAX_COMPARE_PLUGINS)
    : [];

  let maxStars = -1;
  let maxStarsId = null;
  for (const p of list) {
    if (typeof p.stars === 'number' && p.stars > maxStars) {
      maxStars = p.stars;
      maxStarsId = p.id;
    }
  }

  const rows = [
    {
      key: 'category',
      label: 'Category',
      values: list.map((p) => ({
        pluginId: p.id,
        displayValue: p.category,
      })),
    },
    {
      key: 'stars',
      label: 'Popularity & Stars',
      values: list.map((p) => ({
        pluginId: p.id,
        displayValue: `${Math.floor(p.stars || 0).toLocaleString('en-US')} stars`,
        isHighestStars: list.length > 1 && p.id === maxStarsId,
      })),
    },
    {
      key: 'rating',
      label: 'Community Rating',
      values: list.map((p) => ({
        pluginId: p.id,
        displayValue: `${p.rating || '4.9'} / 5.0`,
      })),
    },
    {
      key: 'version',
      label: 'Latest Version',
      values: list.map((p) => ({
        pluginId: p.id,
        displayValue: `v${p.version}`,
      })),
    },
    {
      key: 'author',
      label: 'Maintainer',
      values: list.map((p) => ({
        pluginId: p.id,
        displayValue: `@${p.author}`,
      })),
    },
    {
      key: 'description',
      label: 'Summary',
      values: list.map((p) => ({
        pluginId: p.id,
        displayValue: p.description,
      })),
    },
    {
      key: 'tags',
      label: 'Tags & Keywords',
      values: list.map((p) => ({
        pluginId: p.id,
        displayValue: Array.isArray(p.tags) ? p.tags.map((t) => `#${t}`).join(', ') : '',
        tags: p.tags || [],
      })),
    },
    {
      key: 'installCommand',
      label: 'Install Command',
      values: list.map((p) => ({
        pluginId: p.id,
        displayValue: p.installCommand,
        installCommand: p.installCommand,
      })),
    },
    {
      key: 'downloadUrl',
      label: 'Release / Package',
      values: list.map((p) => ({
        pluginId: p.id,
        displayValue: p.downloadUrl,
        downloadUrl: p.downloadUrl,
      })),
    },
  ];

  return {
    plugins: list,
    maxStarsId,
    rows,
  };
}

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
  columns:
    '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>',
  x:
    '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
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
  const paginationBar = document.getElementById('pagination-bar');
  const paginationRangeText = document.getElementById('pagination-range-text');
  const paginationPageIndicator = document.getElementById('pagination-page-indicator');
  const prevPageBtn = document.getElementById('prev-page-btn');
  const nextPageBtn = document.getElementById('next-page-btn');
  const totalMetric = document.getElementById('total-plugins-metric');
  const visibleMetric = document.getElementById('visible-plugins-metric');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const activeTagBanner = document.getElementById('active-tag-banner');
  const activeTagValue = document.getElementById('active-tag-value');

  if (!grid || !emptyState) return;

  const filtered = filterAndSortPlugins(state.plugins, state);
  const pageData = paginatePlugins(filtered, state.currentPage, state.pageSize);
  state.currentPage = pageData.currentPage;

  if (totalMetric) totalMetric.textContent = formatStars(state.plugins.length);
  if (visibleMetric) visibleMetric.textContent = formatStars(filtered.length);

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
    if (paginationBar) {
      paginationBar.classList.add('hidden');
      paginationBar.classList.remove('flex');
    }
    return;
  }

  emptyState.classList.add('hidden');
  grid.classList.remove('hidden');
  grid.classList.add('grid');

  if (paginationBar) {
    paginationBar.classList.remove('hidden');
    paginationBar.classList.add('flex');
  }
  if (paginationRangeText) {
    paginationRangeText.textContent = `Showing ${formatStars(pageData.startIndex)}–${formatStars(pageData.endIndex)} of ${formatStars(pageData.totalItems)} assets`;
  }
  if (paginationPageIndicator) {
    paginationPageIndicator.textContent = `Page ${pageData.currentPage} of ${pageData.totalPages}`;
  }
  if (prevPageBtn) {
    prevPageBtn.disabled = pageData.currentPage <= 1;
  }
  if (nextPageBtn) {
    nextPageBtn.disabled = pageData.currentPage >= pageData.totalPages;
  }

  grid.innerHTML = pageData.items
    .map((plugin, idx) => {
      const globalRank = (pageData.currentPage - 1) * pageData.pageSize + idx + 1;
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

      const isCompared = state.comparedPluginIds.includes(plugin.id);
      const cardBorderClasses = isCompared
        ? 'border-indigo-500 dark:border-indigo-500 ring-1 ring-indigo-500/40'
        : 'border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 dark:hover:border-indigo-500/40';
      const compareBtnClasses = isCompared
        ? 'text-indigo-700 dark:text-indigo-300 bg-indigo-500/15 border border-indigo-500/40 font-semibold'
        : 'text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-medium';

      return `
        <article
          id="plugin-${escapeHtml(plugin.id)}"
          data-plugin-card="${escapeHtml(plugin.id)}"
          class="flex flex-col justify-between p-6 rounded-xl border ${cardBorderClasses} bg-white dark:bg-slate-900 transition-colors space-y-5"
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
                  <span class="font-mono text-xs font-normal text-slate-400 dark:text-slate-500 mr-1.5">#${globalRank}</span>${escapeHtml(plugin.name)}
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
                  data-action="toggle-compare"
                  data-plugin-id="${escapeHtml(plugin.id)}"
                  aria-pressed="${isCompared ? 'true' : 'false'}"
                  aria-label="Compare ${escapeHtml(plugin.name)}"
                  class="inline-flex items-center gap-1.5 px-3 py-2 text-xs rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${compareBtnClasses}"
                >
                  <span class="pointer-events-none" aria-hidden="true">${isCompared ? ICONS.check : ICONS.columns}</span>
                  <span data-compare-label>${isCompared ? 'Comparing' : 'Compare'}</span>
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

  renderCompareUI();

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

/**
 * Updates the header Compare counter, sticky bottom Compare Tray, and Compare Modal table.
 */
function renderCompareUI() {
  const comparedPlugins = getComparedPlugins(state.plugins, state.comparedPluginIds);
  const count = comparedPlugins.length;

  const headerCountEl = document.getElementById('header-compare-count');
  if (headerCountEl) {
    headerCountEl.textContent = `(${count}/${MAX_COMPARE_PLUGINS})`;
  }

  const tray = document.getElementById('compare-tray');
  const trayBadge = document.getElementById('compare-tray-badge');
  const trayCount = document.getElementById('compare-count');
  const trayItems = document.getElementById('compare-tray-items');
  const openCompareBtn = document.getElementById('open-compare-modal-btn');

  if (trayBadge) trayBadge.textContent = String(count);
  if (trayCount) trayCount.textContent = String(count);
  if (openCompareBtn) {
    openCompareBtn.textContent = `Compare Side-by-Side (${count})`;
  }

  if (tray) {
    if (count > 0) {
      tray.classList.remove('hidden');
    } else {
      tray.classList.add('hidden');
    }
  }

  if (trayItems) {
    const slots = [];
    for (let i = 0; i < MAX_COMPARE_PLUGINS; i++) {
      const p = comparedPlugins[i];
      if (p) {
        slots.push(`
          <div
            data-testid="compare-slot-${escapeHtml(p.id)}"
            class="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-xs font-medium text-slate-900 dark:text-slate-100"
          >
            <span class="truncate max-w-[140px]">${escapeHtml(p.name)}</span>
            <button
              type="button"
              data-remove-compare="${escapeHtml(p.id)}"
              aria-label="Remove ${escapeHtml(p.name)} from comparison"
              class="text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-pointer"
            >
              ${ICONS.x}
            </button>
          </div>
        `);
      } else {
        slots.push(`
          <div class="hidden sm:inline-flex items-center px-2.5 py-1 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 text-[11px] font-mono text-slate-400 dark:text-slate-500">
            Slot ${i + 1}: Empty
          </div>
        `);
      }
    }
    trayItems.innerHTML = slots.join('');
  }

  renderComparisonTable();
}

/**
 * Renders the side-by-side comparison table inside #compare-table-container.
 */
function renderComparisonTable() {
  const container = document.getElementById('compare-table-container');
  const subtitleEl = document.getElementById('compare-modal-subtitle');
  if (!container) return;

  const comparedPlugins = getComparedPlugins(state.plugins, state.comparedPluginIds);
  if (subtitleEl) {
    subtitleEl.textContent = `Side-by-Side Matrix · ${comparedPlugins.length} of ${MAX_COMPARE_PLUGINS} Plugins Selected`;
  }

  if (comparedPlugins.length === 0) {
    container.innerHTML = `
      <div class="p-12 text-center space-y-3 rounded-xl border border-dashed border-slate-200 dark:border-slate-800">
        <h3 class="text-base font-semibold text-slate-900 dark:text-white">
          No Plugins Selected for Comparison
        </h3>
        <p class="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          Click the <strong>Compare</strong> button on up to 3 plugin cards in the directory to evaluate their ratings, stars, categories, tags, and install snippets side by side.
        </p>
      </div>
    `;
    return;
  }

  const matrix = buildComparisonMatrix(comparedPlugins);

  const headerCols = matrix.plugins
    .map(
      (p) => `
      <th scope="col" class="py-4 px-5 align-top border-b border-l border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 min-w-[240px]">
        <div class="space-y-2.5">
          <div class="flex items-start justify-between gap-2">
            <div>
              <span class="inline-block text-[11px] font-mono text-indigo-600 dark:text-indigo-400">${escapeHtml(p.category)}</span>
              <h3 class="text-base font-bold text-slate-900 dark:text-white">${escapeHtml(p.name)}</h3>
            </div>
            <button
              type="button"
              data-remove-compare="${escapeHtml(p.id)}"
              aria-label="Remove ${escapeHtml(p.name)} from comparison"
              class="px-2 py-1 text-[11px] font-medium text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md transition-colors cursor-pointer shrink-0"
            >
              Remove
            </button>
          </div>
          <div class="flex items-center gap-2 pt-1">
            <button
              type="button"
              data-compare-docs="${escapeHtml(p.id)}"
              class="px-2.5 py-1 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-md transition-colors cursor-pointer"
            >
              View / Install
            </button>
            <button
              type="button"
              data-compare-copy="${escapeHtml(p.id)}"
              class="px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
            >
              Copy CLI
            </button>
          </div>
        </div>
      </th>
    `
    )
    .join('');

  const bodyRowsHtml = matrix.rows
    .map((row) => {
      const cellsHtml = row.values
        .map((cell) => {
          if (row.key === 'stars') {
            const topBadge = cell.isHighestStars
              ? `<span class="ml-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-500/15 text-amber-600 dark:text-amber-300 border border-amber-500/30">Highest Stars</span>`
              : '';
            return `
              <td class="py-3.5 px-5 border-b border-l border-slate-200 dark:border-slate-800 font-mono text-xs font-semibold text-amber-600 dark:text-amber-400 tabular-nums">
                <span>★ ${escapeHtml(cell.displayValue)}</span>${topBadge}
              </td>
            `;
          }

          if (row.key === 'rating') {
            return `
              <td class="py-3.5 px-5 border-b border-l border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-800 dark:text-slate-200 tabular-nums">
                ★ ${escapeHtml(cell.displayValue)}
              </td>
            `;
          }

          if (row.key === 'tags' && Array.isArray(cell.tags)) {
            const tagsPills = cell.tags
              .map(
                (t) =>
                  `<span class="inline-block px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[11px] text-slate-600 dark:text-slate-300">#${escapeHtml(t)}</span>`
              )
              .join(' ');
            return `
              <td class="py-3.5 px-5 border-b border-l border-slate-200 dark:border-slate-800">
                <div class="flex flex-wrap gap-1.5">${tagsPills}</div>
              </td>
            `;
          }

          if (row.key === 'installCommand') {
            return `
              <td class="py-3.5 px-5 border-b border-l border-slate-200 dark:border-slate-800">
                <code class="block p-2 rounded bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-[11px] text-slate-800 dark:text-slate-200 overflow-x-auto">${escapeHtml(cell.displayValue)}</code>
              </td>
            `;
          }

          if (row.key === 'downloadUrl') {
            return `
              <td class="py-3.5 px-5 border-b border-l border-slate-200 dark:border-slate-800 text-xs">
                <a
                  href="${escapeHtml(cell.displayValue)}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <span>Open Release Page</span>
                </a>
              </td>
            `;
          }

          return `
            <td class="py-3.5 px-5 border-b border-l border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              ${escapeHtml(cell.displayValue)}
            </td>
          `;
        })
        .join('');

      return `
        <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/30">
          <th scope="row" class="py-3.5 px-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/30 text-xs font-semibold text-slate-600 dark:text-slate-400 whitespace-nowrap w-44">
            ${escapeHtml(row.label)}
          </th>
          ${cellsHtml}
        </tr>
      `;
    })
    .join('');

  container.innerHTML = `
    <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
      <table data-testid="comparison-table" class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th scope="col" class="py-4 px-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 w-44">
              Property
            </th>
            ${headerCols}
          </tr>
        </thead>
        <tbody>
          ${bodyRowsHtml}
        </tbody>
      </table>
    </div>
  `;
}

function openCompareModal() {
  const modal = document.getElementById('compare-modal');
  if (!modal) return;
  renderComparisonTable();
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeCompareModal() {
  const modal = document.getElementById('compare-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
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

  state.plugins = [...TOP_1000_PLUGINS];
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
    // Fallback to TOP_1000_PLUGINS already active
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
    state.currentPage = 1;
    renderPluginGrid();
  });

  const clearSearchBtn = document.getElementById('clear-search-btn');
  clearSearchBtn?.addEventListener('click', () => {
    state.searchQuery = '';
    state.currentPage = 1;
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
    renderPluginGrid();
  });

  const sortSelect = document.getElementById('plugin-sort');
  sortSelect?.addEventListener('change', (e) => {
    state.sortBy = e.target.value || 'featured';
    state.currentPage = 1;
    renderPluginGrid();
  });

  const pageSizeSelect = document.getElementById('page-size-select');
  pageSizeSelect?.addEventListener('change', (e) => {
    const val = Number(e.target.value);
    state.pageSize = Number.isFinite(val) && val > 0 ? val : DEFAULT_PAGE_SIZE;
    state.currentPage = 1;
    renderPluginGrid();
  });

  const prevPageBtn = document.getElementById('prev-page-btn');
  prevPageBtn?.addEventListener('click', () => {
    if (state.currentPage > 1) {
      state.currentPage -= 1;
      renderPluginGrid();
      document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  const nextPageBtn = document.getElementById('next-page-btn');
  nextPageBtn?.addEventListener('click', () => {
    state.currentPage += 1;
    renderPluginGrid();
    document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  const categoryContainer = document.getElementById('category-filters');
  categoryContainer?.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-category]');
    if (!btn) return;
    state.category = btn.getAttribute('data-category') || 'All';
    state.currentPage = 1;
    renderCategoryFilters();
    renderPluginGrid();
  });

  const clearTagBtn = document.getElementById('clear-tag-btn');
  clearTagBtn?.addEventListener('click', () => {
    state.activeTag = null;
    state.currentPage = 1;
    renderPluginGrid();
  });

  const resetFiltersBtn = document.getElementById('reset-filters-btn');
  resetFiltersBtn?.addEventListener('click', () => {
    state.searchQuery = '';
    state.category = 'All';
    state.activeTag = null;
    state.sortBy = 'featured';
    state.currentPage = 1;
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
      state.currentPage = 1;
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
    } else if (action === 'toggle-compare') {
      const result = toggleComparePlugin(state.comparedPluginIds, plugin.id, MAX_COMPARE_PLUGINS);
      if (result.status === 'limit_reached') {
        showToast(
          `Maximum of ${MAX_COMPARE_PLUGINS} plugins can be compared`,
          'Remove a selected plugin before adding another.'
        );
        return;
      }
      state.comparedPluginIds = result.selectedIds;
      renderPluginGrid();
      if (result.status === 'added') {
        showToast(
          `Added ${plugin.name} to comparison (${state.comparedPluginIds.length}/${MAX_COMPARE_PLUGINS})`,
          'Click "Compare Side-by-Side" to view the comparison table.'
        );
      } else {
        showToast(`Removed ${plugin.name} from comparison`);
      }
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

  // Compare Tray & Compare Modal Handlers
  document.getElementById('header-compare-btn')?.addEventListener('click', openCompareModal);
  document.getElementById('open-compare-modal-btn')?.addEventListener('click', openCompareModal);
  document.getElementById('close-compare-modal-btn')?.addEventListener('click', closeCompareModal);
  document.getElementById('footer-close-compare-btn')?.addEventListener('click', closeCompareModal);

  const clearCompareSelection = () => {
    state.comparedPluginIds = [];
    renderPluginGrid();
    showToast('Cleared plugin comparison list');
  };

  document.getElementById('clear-compare-btn')?.addEventListener('click', clearCompareSelection);
  document.getElementById('modal-clear-compare-btn')?.addEventListener('click', clearCompareSelection);

  document.getElementById('compare-tray')?.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('button[data-remove-compare]');
    if (!removeBtn) return;
    const id = removeBtn.getAttribute('data-remove-compare');
    if (!id) return;
    state.comparedPluginIds = state.comparedPluginIds.filter((item) => item !== id);
    renderPluginGrid();
  });

  const compareModal = document.getElementById('compare-modal');
  compareModal?.addEventListener('click', async (e) => {
    if (e.target === compareModal) {
      closeCompareModal();
      return;
    }

    const removeBtn = e.target.closest('button[data-remove-compare]');
    if (removeBtn) {
      const id = removeBtn.getAttribute('data-remove-compare');
      if (id) {
        state.comparedPluginIds = state.comparedPluginIds.filter((item) => item !== id);
        renderPluginGrid();
      }
      return;
    }

    const docsBtn = e.target.closest('button[data-compare-docs]');
    if (docsBtn) {
      const id = docsBtn.getAttribute('data-compare-docs');
      if (id) {
        closeCompareModal();
        openDocsModal(id);
      }
      return;
    }

    const copyBtn = e.target.closest('button[data-compare-copy]');
    if (copyBtn) {
      const id = copyBtn.getAttribute('data-compare-copy');
      const plugin = state.plugins.find((p) => p.id === id);
      if (plugin) {
        await copyToClipboard(plugin.installCommand);
        showToast(`Copied ${plugin.name} install command`, plugin.installCommand);
      }
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDocsModal();
      closeSubmitModal();
      closeCompareModal();
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
