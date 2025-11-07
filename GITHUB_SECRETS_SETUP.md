# GitHub Actions Setup

## Required Secrets

To ensure the CI/CD pipeline runs successfully, you need to configure the following secrets in your GitHub repository:

### 1. RESEND_API_KEY

This secret is required for the quote request API to send emails.

**How to set it up:**

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `RESEND_API_KEY`
5. Value: Your Resend API key (get it from https://resend.com/api-keys)
6. Click **Add secret**

### 2. Local Development Setup

For local development, create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your actual API key:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

**Note:** Never commit `.env.local` to version control. It's already included in `.gitignore`.

## Verifying the Setup

After adding the secret to GitHub:

1. Push a commit to trigger the GitHub Actions workflow
2. Check the **Actions** tab in your repository
3. Verify that the build completes successfully without API key errors

## Troubleshooting

If you see "Missing API key" errors in the build:

1. Verify the secret is named exactly `RESEND_API_KEY` (case-sensitive)
2. Check that the workflow file (`.github/workflows/lint.yml`) includes:
   ```yaml
   env:
     RESEND_API_KEY: ${{ secrets.RESEND_API_KEY }}
   ```
3. Re-run the workflow after adding the secret
