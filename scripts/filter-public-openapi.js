import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.dirname(__dirname);

const manifestPathCandidate1 = path.join(baseDir, '..', 'ecommerceapi', 'target', 'classes', 'doc', 'developer-api-manifest.json');
const manifestPathCandidate2 = path.join(baseDir, '..', 'ecommerceapi', 'src', 'main', 'resources', 'doc', 'developer-api-manifest.json');
const manifestPath = fs.existsSync(manifestPathCandidate1) ? manifestPathCandidate1 : manifestPathCandidate2;

const openapiPath = path.join(baseDir, '..', 'shopsynch_internall_docs', 'openapi.json');
const outDir = path.join(baseDir, 'src', 'public');
const outPath = path.join(outDir, 'openapi.json');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log(`Reading manifest from: ${manifestPath}`);
console.log(`Reading OpenAPI spec from: ${openapiPath}`);

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
const allowedEndpoints = new Set();

for (const ep of manifest.endpoints || []) {
  const method = (ep.httpMethod || '').toLowerCase();
  const epPath = ep.path || '';
  if (method && epPath) {
    allowedEndpoints.add(`${method}:${epPath}`);
  }
}

console.log(`Allowed public endpoints count: ${allowedEndpoints.size}`);

const spec = JSON.parse(fs.readFileSync(openapiPath, 'utf-8'));
const newPaths = {};
let includedCount = 0;

for (const [epPath, methods] of Object.entries(spec.paths || {})) {
  const matchedMethods = {};
  for (const [method, details] of Object.entries(methods)) {
    if (allowedEndpoints.has(`${method.toLowerCase()}:${epPath}`)) {
      matchedMethods[method] = details;
      includedCount++;
    }
  }
  if (Object.keys(matchedMethods).length > 0) {
    newPaths[epPath] = matchedMethods;
  }
}

spec.paths = newPaths;
spec.info = spec.info || {};
spec.info.title = "ShopSynch Public Developer API";
spec.info.description = "Public customer and merchant developer endpoints.";

fs.writeFileSync(outPath, JSON.stringify(spec, null, 2), 'utf-8');
console.log(`✅ Generated public OpenAPI spec with ${includedCount} public endpoints at ${outPath}`);
