# Skramstad - Countdown Timer

A simple, lightweight countdown timer designed for high visibility and easy customization.

## Architecture & Tech Stack
- **Frontend:** Vanilla HTML, CSS, and JavaScript.
- **Server:** Nginx (Alpine-based) for static file serving.
- **Deployment:** Containerized with Podman/Docker.

## Engineering Mandates
- **Simplicity First:** Maintain the project using vanilla web technologies. Do not introduce build steps (e.g., Webpack, Vite) or frameworks (e.g., React, Vue) unless explicitly requested.
- **Visual Consistency:** The UI is designed for high-contrast visibility (white text on black background). Keep font sizes large and weights bold.
- **Dynamic Configuration:** All configuration (event name and target date) should be handled via URL parameters to avoid the need for rebuilds for different events.

## Dynamic Usage
The application parses the following URL parameters:
- `event`: Sets the title and page title (e.g., `?event=Graduation` or `?event=My_Great_Event`). Underscores (`_`) are treated as spaces for readability in URLs.
- `date`: Sets the target countdown date. Supports ISO-like formats (e.g., `?date=2026-06-09T18:00:00`).
- `view`: Sets the display mode. Use `?view=clock` to show only a full-screen clock.

## Local Development & Deployment
### Podman CLI
```bash
# Build
podman build -t countdown-timer .

# Run
podman run -d --name countdown -p 8080:80 countdown-timer
```

### Podman Compose
```bash
podman-compose up -d --build
```
