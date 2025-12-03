# Development Commands Reference

## 📦 Package Management

### Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Update Dependencies
```bash
npm update
npm outdated  # Check for outdated packages
```

## 🛠️ Development

### Start Dev Server
```bash
npm run dev
# Watches files and rebuilds on changes
```

### Build Package
```bash
npm run build
# Builds ESM, CJS, and TypeScript definitions
```

### Type Checking
```bash
npm run typecheck
# Checks TypeScript without building
```

### Linting
```bash
npm run lint          # Check for issues
npm run lint:fix      # Auto-fix issues
```

### Testing
```bash
npm test              # Run tests
npm run test:ui       # Run tests with UI
npm run test:coverage # Run with coverage report
```

### Bundle Size Check
```bash
npm run size
# Checks bundle size limits
```

## 🌐 Local Testing

### Serve Playgrounds
```bash
python3 -m http.server 3000
# Then visit:
# http://localhost:3000/playground.html
# http://localhost:3000/interactive-playground.html
```

### Test Local Installation
```bash
# In this project
npm link

# In another project
npm link react-animation-kit

# Unlink when done
npm unlink react-animation-kit
```

## 📤 NPM Publishing

### Login to NPM
```bash
npm login
# Enter username, password, email, and OTP if enabled
```

### Check Who's Logged In
```bash
npm whoami
```

### Preview Package Contents
```bash
npm pack --dry-run
# Shows what will be published
```

### Publish to NPM
```bash
npm publish
# Publishes to public npm registry
```

### Publish Beta/Alpha Version
```bash
npm publish --tag beta
npm publish --tag alpha
```

### Update Package Version
```bash
npm version patch    # 1.0.0 -> 1.0.1
npm version minor    # 1.0.0 -> 1.1.0
npm version major    # 1.0.0 -> 2.0.0
```

### View Published Package
```bash
npm view react-animation-kit
npm view react-animation-kit versions  # All versions
```

### Unpublish (within 72 hours only)
```bash
npm unpublish react-animation-kit@1.0.0 --force
```

### Deprecate a Version
```bash
npm deprecate react-animation-kit@1.0.0 "Use version 1.1.0 instead"
```

## 🔍 Package Info

### Check Package Details
```bash
npm info react-animation-kit
npm info react-animation-kit version
npm info react-animation-kit dependencies
```

### View Download Stats
```bash
npm info react-animation-kit downloads
# Or visit: https://npm-stat.com/charts.html?package=react-animation-kit
```

## 🔧 Git Commands

### Initial Setup
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Prashant8Khatiwada/animation-library.git
git push -u origin main
```

### Common Git Operations
```bash
git status                    # Check status
git add .                     # Stage all changes
git commit -m "message"       # Commit changes
git push                      # Push to remote
git pull                      # Pull from remote
```

### Create Release Tag
```bash
git tag v1.0.0
git push origin v1.0.0
```

### Create GitHub Release
```bash
# After pushing tag, create release on GitHub:
# https://github.com/Prashant8Khatiwada/animation-library/releases/new
```

## 🧪 Testing Installation

### Test in New Project
```bash
# Create test project
mkdir /tmp/test-react-animation-kit
cd /tmp/test-react-animation-kit

# Initialize
npm init -y
npm install react@18 react-dom@18 framer-motion@10

# Install your package
npm install react-animation-kit

# Create test file
echo 'import { FadeIn } from "react-animation-kit/animations"; console.log(FadeIn);' > test.mjs
node test.mjs
```

## 📊 Analytics & Monitoring

### Check Bundle Size Online
```bash
# Visit: https://bundlephobia.com/package/react-animation-kit
```

### NPM Package Page
```bash
# Visit: https://www.npmjs.com/package/react-animation-kit
```

### Download Stats
```bash
# Visit: https://npm-stat.com/charts.html?package=react-animation-kit
```

## 🆘 Troubleshooting

### Clear NPM Cache
```bash
npm cache clean --force
```

### Reinstall Dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### Fix Permission Issues
```bash
sudo chown -R $(whoami) ~/.npm
```

### Reset Git
```bash
git reset --hard HEAD
git clean -fd
```

## 📝 Useful Snippets

### Quick Publish Flow
```bash
npm run build && npm version patch && npm publish
```

### Update and Publish
```bash
npm run build && 
git add . && 
git commit -m "Update package" && 
git push && 
npm version patch && 
npm publish
```

### Full Release Process
```bash
# 1. Update version
npm version minor  # or patch/major

# 2. Build
npm run build

# 3. Commit and push
git push
git push --tags

# 4. Publish
npm publish

# 5. Create GitHub release
# Visit: https://github.com/Prashant8Khatiwada/animation-library/releases/new
```

## 📚 Documentation Links

- NPM Package: https://www.npmjs.com/package/react-animation-kit
- GitHub Repo: https://github.com/Prashant8Khatiwada/animation-library
- Framer Motion: https://www.framer.com/motion/

## 👤 Contact

- **Name**: Prashant Khatiwada
- **Email**: prashantkhatiwada554@gmail.com
- **Phone**: 9762713987
- **NPM**: https://www.npmjs.com/~prashantkhatiwada

---

**Pro Tip**: Keep this file updated as you add new scripts or workflows!
