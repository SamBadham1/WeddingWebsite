# Samuel & Samantha — website

A static React site (Vite + React Router) built on the design system in `../DesignFiles/wedding-website/design-system`.

```sh
npm install
npm run dev       # local dev server
npm run build     # static files in dist/
npm run preview   # serve dist/ locally
```

## Where things are

- `src/content/*.json`: every word on the site. Edit these to change content.
- `src/content/types.ts`: the shape of that content.
- `src/content/index.ts`: the only place pages read content from. To change where content comes from, change it here and return the same types; nothing else needs to change.
- `src/components/`: React wrappers around the design system's `wd-` classes (NavBar, Hero, SectionHeading, Button, EventCard), plus layout pieces.
- `src/pages/`: Home, Schedule, Travel, FAQ.
- `public/favicon.ico`: a copy of the design system's `assets/Reference/favicon.ico`. Copy it again if that one changes; Vite can't serve it in dev from outside this folder.
- `src/styles/site.css`: page layout only. Colours, type and components come from the design system's `tokens.css` and `bundle.css`, imported in place via the `@design` alias.

## Hosting: Cloud Run, deployed by Cloud Build

Every push to GitHub builds the site into a container and deploys it to Cloud Run.

- `../cloudbuild.yaml`: the build. Its `substitutions` set the region, Artifact Registry repository and Cloud Run service name.
- `Dockerfile`: builds the site, then serves `dist/` with nginx. Build it from the repository root: `docker build -f site/Dockerfile -t wedding-site .`
- `nginx.conf.template`: sends any path that isn't a file to `index.html`, so clean URLs like `/schedule` work, and sets caching.

### One-time setup

Replace `PROJECT_ID` and `PROJECT_NUMBER` (both on the GCP console's project dashboard).

1. Push this repository (`weddingWebsite/`) to GitHub.
2. Turn on the services and create the image repository:
   ```sh
   gcloud config set project PROJECT_ID
   gcloud services enable cloudbuild.googleapis.com run.googleapis.com artifactregistry.googleapis.com
   gcloud artifacts repositories create wedding --repository-format=docker --location=australia-southeast1
   ```
3. Create a service account for the builds and give it only what it needs:
   ```sh
   gcloud iam service-accounts create wedding-build --display-name="Wedding site builds"
   SA=wedding-build@PROJECT_ID.iam.gserviceaccount.com
   for role in roles/run.admin roles/artifactregistry.writer roles/logging.logWriter; do
     gcloud projects add-iam-policy-binding PROJECT_ID --member="serviceAccount:$SA" --role="$role"
   done
   # Lets it deploy the service to run as the default runtime account.
   gcloud iam service-accounts add-iam-policy-binding PROJECT_NUMBER-compute@developer.gserviceaccount.com \
     --member="serviceAccount:$SA" --role=roles/iam.serviceAccountUser
   ```
4. In the console, go to **Cloud Build → Triggers → Create trigger**:
   - **Region**: `australia-southeast1`.
   - **Event**: push to a branch. **Source**: connect GitHub and pick the repository. **Branch**: `^main$`, or whichever branch you publish from.
   - **Configuration**: Cloud Build configuration file, location `cloudbuild.yaml`.
   - **Service account**: `wedding-build`.
5. Push, or click **Run** on the trigger. The site's address (`https://wedding-site-….run.app`) is under **Cloud Run → wedding-site**.

### Custom domain

Cloud Run's own domain mapping isn't offered in every region, and may not be in Sydney. If it isn't, put Firebase Hosting in front with a rewrite to the `wedding-site` service, which also gives you a free certificate and a CDN.
