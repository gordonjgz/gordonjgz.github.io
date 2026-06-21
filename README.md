# Guozhen (Gordon) Ji Personal Website

Static GitHub Pages port of the public Google Sites content at `about.gordonji.phd`.

## Deploy to GitHub Pages

1. Create a repository named `gordonjgz.github.io` under the `gordonjgz` GitHub account.
2. Copy these files into that repository.
3. Commit and push to the `main` branch.
4. In GitHub, open `Settings > Pages`.
5. Set the source to `Deploy from a branch`, branch `main`, folder `/root`.
6. Keep the included `CNAME` file if `about.gordonji.phd` should point to this GitHub Pages site.

## Custom domain DNS

For an apex custom domain, GitHub Pages usually needs `A` records pointing to GitHub Pages IPs. For a subdomain like `about.gordonji.phd`, create a `CNAME` DNS record:

```text
about.gordonji.phd -> gordonjgz.github.io
```

Then confirm the custom domain in the GitHub Pages settings.

## Local preview

Run:

```sh
./start-local-server.sh
```

Then open `http://localhost:4173`.

To use a different port:

```sh
PORT=8080 ./start-local-server.sh
```

## Items to update

- Replace the placeholder CV URL in `index.html` with the final CV file or Google Drive share link.
- Replace placeholder social links for LinkedIn and X with the final profile URLs.
- Replace `assets/research-pricing.svg` with a headshot or preferred visual asset if desired.
- Replace paper and syllabus placeholder links currently pointing to `https://gordonjgz.github.io`.
