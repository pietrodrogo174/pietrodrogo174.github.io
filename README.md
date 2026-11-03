# Pietro Drogo - Professional Portfolio

Static HTML, CSS and JavaScript portfolio prepared for GitHub Pages.

## Hosting

For account pietrodrogo174, name the repository pietrodrogo174.github.io. The site URL will be https://pietrodrogo174.github.io/. The exact address pietrodrogo.github.io requires ownership of the account pietrodrogo.

With GitHub Free, use a public repository. In Settings > Pages, select Deploy from a branch, branch main, folder / (root). No build or dependencies are required. .nojekyll keeps files unchanged.

## Update documents

The public Supporting documents library lists only PDF files in documents/ on main.
It does not include the CV, technical portfolio or separator PDF in assets/.

Open admin.html and use Upload PDF documents or Manage / delete documents.
These buttons open GitHub's own interface. Sign in with the repository owner's
account and confirm each upload or deletion with Commit changes. If branch
protection requires a pull request, merge it into main. No password, access token,
Netlify function or external backend is used by the document interface.
Only accounts with write permissions to the repository can change the files;
review repository collaborators if access must be restricted to the owner alone.
All files in the public repository are public, including their previous versions.

The listing uses GitHub's public Contents API (PDFs directly in documents/, up to
1,000 directory entries). Unauthenticated API rate limits may temporarily prevent
listing; a link to the GitHub directory is shown instead. Downloads use GitHub's
raw file URLs. The library reflects main after GitHub's cache refreshes.
Browser uploads through GitHub support up to 25 MiB per file.
The empty .gitkeep preserves the folder when no PDFs are published.

Legacy local Netlify recovery files are unrelated to this GitHub document flow
and are not required by GitHub Pages. Do not deploy them to the old Netlify site.

## Local preview

Serve this directory with any static HTTP server and open index.html. No installation is required.

## Change history

The original repository history is preserved. The Netlify migration and Pages configuration are separate commits.
