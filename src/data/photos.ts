// Finds your real photos in src/photos/ by file name.
// If a photo is missing, shows a simple placeholder card (never an AI picture).

const found = import.meta.glob('../photos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const byName: Record<string, string> = {};
for (const path in found) {
  const file = path.split('/').pop() || '';
  const base = file.replace(/\.[^.]+$/, '').toLowerCase();
  byName[base] = found[path];
}

function placeholder(label: string): string {
  const safe = label.replace(/[<>&"']/g, '');
  // A simple "sticker" card with mountains and the place name (no fake photo)
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">` +
    `<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">` +
    `<stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#fef3c7"/></linearGradient></defs>` +
    `<rect width="800" height="600" fill="url(#g)"/>` +
    `<circle cx="610" cy="160" r="50" fill="#f59e0b" opacity="0.75"/>` +
    `<path d="M0 470 L190 250 L300 380 L430 200 L640 470 Z" fill="#92400e" opacity="0.55"/>` +
    `<path d="M240 470 L420 300 L520 400 L600 330 L800 470 Z" fill="#78350f" opacity="0.7"/>` +
    `<rect y="470" width="800" height="130" fill="#78350f" opacity="0.85"/>` +
    `<text x="400" y="545" font-family="Georgia,serif" font-size="40" fill="#fef3c7" text-anchor="middle">${safe}</text>` +
    `</svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

/** photo('anaka-portrait', 'Anaka') -> your file src/photos/anaka-portrait.jpg, or a placeholder */
export function photo(name: string, label: string): string {
  return byName[name.toLowerCase()] ?? placeholder(label);
}

/** true when the picture is only the "Photo coming soon" placeholder */
export function isPlaceholder(src: string): boolean {
  return src.startsWith('data:image/svg+xml');
}
