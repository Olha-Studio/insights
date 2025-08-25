# n8n Blog Post Publishing Workflow Setup

## 📋 Setup Instructions

### 1. Import the Workflow
1. Open your n8n instance
2. Go to **Workflows** → **Import from File**
3. Upload `n8n-workflow-publish-posts.json`

### 2. Configure GitHub Credentials
1. In n8n, go to **Credentials** → **Add Credential**
2. Select **HTTP Header Auth**
3. Configure:
   - **Name**: `GitHub Token`
   - **Name**: `Authorization`
   - **Value**: `token YOUR_GITHUB_TOKEN`

### 3. Get GitHub Token
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token with permissions:
   - `repo` (full repository access)
   - `workflow` (if using GitHub Actions)

## 📤 Sample Request Payload

### Basic Post
```json
{
  "title": "How to Build Amazing Websites with Astro",
  "description": "Learn the fundamentals of building fast, modern websites with Astro framework",
  "content": "# How to Build Amazing Websites with Astro\n\nAstro is a modern static site generator that allows you to build fast websites with your favorite frameworks.\n\n## Getting Started\n\nFirst, install Astro:\n\n```bash\nnpm create astro@latest\n```\n\n## Key Features\n\n- **Zero JavaScript by default**\n- **Component Islands**\n- **Multiple framework support**\n\n## Conclusion\n\nAstro is perfect for content-heavy websites that need to be fast and SEO-friendly.",
  "tags": ["astro", "web-development", "tutorial"],
  "heroImage": "/assets/insights/astro-blog.jpg",
  "isPrivate": false
}
```

### Minimal Post
```json
{
  "title": "Quick CSS Tip",
  "description": "A useful CSS technique for modern layouts",
  "content": "# Quick CSS Tip\n\nHere's a useful CSS technique...\n\n## The Technique\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n}\n```\n\nThis creates responsive columns automatically!",
  "tags": ["css", "tips"]
}
```

## 🔄 Workflow Steps

1. **Webhook Trigger** - Receives POST request
2. **Transform Data** - Processes input and creates markdown
3. **Create File** - Attempts to create new file in GitHub
4. **Check File Status** - Determines if file exists
5. **Get File SHA** - Gets existing file SHA (if file exists)
6. **Update File** - Updates existing file (if file exists)
7. **Create Pull Request** - Creates PR from dev to main
8. **Success/Error Response** - Returns result to caller

## 📝 Expected Response

### Success Response
```json
{
  "success": true,
  "message": "Post created successfully!",
  "data": {
    "filename": "how-to-build-amazing-websites-with-astro.md",
    "title": "How to Build Amazing Websites with Astro",
    "pr_url": "https://github.com/Olha-Studio/insights/pull/123",
    "commit_sha": "abc123def456..."
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": "Missing required fields: title, description, content",
  "details": "..."
}
```

## 🚀 Usage

### Via cURL
```bash
curl -X POST "https://your-n8n-instance.com/webhook/publish-posts" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Your Post Title",
    "description": "Post description",
    "content": "# Your content here...",
    "tags": ["tag1", "tag2"]
  }'
```

### Via JavaScript
```javascript
const response = await fetch('https://your-n8n-instance.com/webhook/publish-posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Your Post Title',
    description: 'Post description',
    content: '# Your content here...',
    tags: ['tag1', 'tag2']
  })
});

const result = await response.json();
console.log(result);
```

## ⚙️ Configuration Options

### Repository Settings
- **Repository**: `Olha-Studio/insights`
- **Source Branch**: `dev`
- **Target Branch**: `main`
- **File Path**: `src/content/insights/`

### Default Values
- `heroImage`: `/assets/insights/blog-placeholder-1.jpg`
- `isPrivate`: `false`
- `tags`: `[]` (empty array)

## 🔧 Troubleshooting

### Common Issues
1. **401 Unauthorized**: Check GitHub token permissions
2. **404 Not Found**: Verify repository name and path
3. **422 Validation Error**: File already exists (handled automatically)
4. **400 Bad Request**: Missing required fields

### Debug Mode
Enable debug logging in n8n to see detailed execution flow.

## 📊 Monitoring

The workflow creates:
- ✅ New markdown file in `src/content/insights/`
- ✅ Commit to `dev` branch
- ✅ Pull request from `dev` to `main`
- ✅ Webhook response with status

Check the created PR for review and merge to publish!
