# Pietro Drogo — Professional Portfolio

Static site with Netlify Functions and Netlify Blobs document library.

## Deployment

Connect this private repository to the **existing** Netlify site. Branch `main`, base directory blank, build command blank, publish directory `.`. Netlify reads `netlify.toml` and installs `@netlify/blobs`.

Required production environment secret: `PORTFOLIO_ADMIN_PASSWORD` (already set in Netlify).

Public documents: `/#recruiter-documents`. Owner admin: `/admin.html`.

**Limit:** maximum 3 MB per uploaded file; supported PDF/JPG/PNG/DOCX/XLSX/TXT. This deliberately avoids large synchronous Function payloads. Larger files require direct-to-storage upload with short-lived signed URLs. Do not upload confidential material.

**Security:** owner password is checked on the server, not included in the frontend. The admin page itself is public but write actions require the password. For high-security production use, add identity-based authentication, rate limiting and monitoring.

**Note:** changes to this repository trigger deployments once connected. Verify the live site after first deploy.
