const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const bundlePath = process.argv[2] ? path.resolve(process.argv[2]) : "";

function fail(message) {
  console.error(message);
  process.exit(1);
}

function decodeDataUrl(dataUrl) {
  const match = String(dataUrl || "").match(/^data:([^;,]+)?(;base64)?,(.*)$/);
  if (!match) fail("Invalid image data in bundle.");
  const payload = match[3] || "";
  return match[2] ? Buffer.from(payload, "base64") : Buffer.from(decodeURIComponent(payload));
}

function assertInsideProject(targetPath) {
  const resolved = path.resolve(projectRoot, targetPath);
  if (!resolved.startsWith(projectRoot + path.sep)) {
    fail(`Refusing to write outside project: ${targetPath}`);
  }
  return resolved;
}

if (!bundlePath) {
  fail("Usage: node tools/apply-default-content-bundle.js path/to/vstar-default-content-bundle.json");
}

const bundle = JSON.parse(fs.readFileSync(bundlePath, "utf8"));
if (bundle.type !== "vstar-default-content-bundle") {
  fail("This is not a V-Star default content bundle.");
}

const files = Array.isArray(bundle.files) ? bundle.files : [];
files.forEach((file) => {
  if (!file || typeof file.path !== "string" || !file.dataUrl) return;
  if (!file.path.startsWith("assets/img/")) {
    fail(`Image target must stay under assets/img: ${file.path}`);
  }
  const target = assertInsideProject(file.path);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, decodeDataUrl(file.dataUrl));
});

const defaultsSource =
  typeof bundle.contentDefaultsJs === "string"
    ? bundle.contentDefaultsJs
    : `(function () {\n  window.VSTAR_DEFAULT_CONTENT_OVERRIDES = ${JSON.stringify(bundle.defaultState || {}, null, 2)};\n})();\n`;

fs.writeFileSync(assertInsideProject("assets/js/content-defaults.js"), defaultsSource, "utf8");
console.log(`Published ${files.length} image file(s) and updated assets/js/content-defaults.js.`);
