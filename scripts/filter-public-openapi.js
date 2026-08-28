import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.dirname(__dirname);

const outDir = path.join(baseDir, 'src', 'public');
const outPath = path.join(outDir, 'openapi.json');

const manifestCandidates = [
  path.join(outDir, 'developer-api-manifest.json'),
  path.join(baseDir, '..', 'ecommerceapi', 'src', 'main', 'resources', 'doc', 'developer-api-manifest.json'),
  path.join(baseDir, '..', 'ecommerceapi', 'target', 'classes', 'doc', 'developer-api-manifest.json'),
];

const openapiCandidates = [
  path.join(baseDir, '..', 'shopsynch_internall_docs', 'openapi.json'),
  path.join(outDir, 'openapi.json'),
];

const manifestPath = manifestCandidates.find(p => fs.existsSync(p));
const openapiPath = openapiCandidates.find(p => fs.existsSync(p));

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

if (!manifestPath || !openapiPath) {
  if (fs.existsSync(outPath)) {
    console.log(`ℹ️ Using pre-built public openapi.json in repository at ${outPath}`);
    process.exit(0);
  } else {
    console.error(`❌ Could not find developer-api-manifest.json or openapi.json to generate spec.`);
    process.exit(1);
  }
}

console.log(`Reading manifest from: ${manifestPath}`);
console.log(`Reading OpenAPI spec from: ${openapiPath}`);

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
const allowedEndpoints = new Map();

for (const ep of manifest.endpoints || []) {
  const method = (ep.httpMethod || '').toLowerCase();
  const epPath = ep.path || '';
  if (method && epPath) {
    allowedEndpoints.set(`${method}:${epPath}`, ep);
  }
}

console.log(`Allowed public endpoints count: ${allowedEndpoints.size}`);

const spec = JSON.parse(fs.readFileSync(openapiPath, 'utf-8'));
const newPaths = {};
const usedTags = new Set();
let includedCount = 0;

for (const [epPath, methods] of Object.entries(spec.paths || {})) {
  const matchedMethods = {};
  for (const [method, details] of Object.entries(methods)) {
    const key = `${method.toLowerCase()}:${epPath}`;
    if (allowedEndpoints.has(key)) {
      const epMeta = allowedEndpoints.get(key);
      const copyDetails = { ...details };
      
      const groupName = epMeta.group || 'GENERAL';
      copyDetails.tags = [groupName];
      usedTags.add(groupName);

      if (epMeta.title) {
        copyDetails.summary = epMeta.title;
      }
      copyDetails.operationId = `${method.toLowerCase()}_${epPath.replace(/[^a-zA-Z0-9]/g, '_')}`;
      
      matchedMethods[method] = copyDetails;
      includedCount++;
    }
  }
  if (Object.keys(matchedMethods).length > 0) {
    newPaths[epPath] = matchedMethods;
  }
}

spec.openapi = "3.0.3";
spec.paths = newPaths;
spec.tags = Array.from(usedTags).map(tag => ({ name: tag, description: `${tag} Endpoints` }));
spec.info = spec.info || {};
spec.info.title = "ShopSynch Public Developer API";
spec.info.description = "Public customer and merchant developer endpoints.";

fs.writeFileSync(outPath, JSON.stringify(spec, null, 2), 'utf-8');
console.log(`✅ Generated public OpenAPI spec with ${includedCount} public endpoints & ${spec.tags.length} active tags at ${outPath}`);
