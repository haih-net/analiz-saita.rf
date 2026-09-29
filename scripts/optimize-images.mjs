import { createRequire } from 'node:module'
import { execFileSync } from 'node:child_process'
import { readdir, stat } from 'node:fs/promises'
import { join } from 'node:path'
const requireGlobal = createRequire(import.meta.url)
const sharp = requireGlobal(
  join(
    execFileSync('npm', ['root', '-g'], { encoding: 'utf8' }).trim(),
    'sharp',
  ),
)
const root = process.cwd()
async function walk(dir) {
  const result = []
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) result.push(...(await walk(p)))
    else if (p.endsWith('.png')) result.push(p)
  }
  return result
}
const rows = []
for (const file of await walk(join(root, 'app/pages'))) {
  const icon = file.includes('/ExperimentOutcomes/')
  const width = icon
    ? 176
    : file.includes('/Hero/')
      ? 1200
      : file.includes('/RequestEvidence/')
        ? 1080
        : 1440
  const before = await stat(file)
  for (const w of icon ? [width] : [600, width]) {
    const dest = file.replace(/\.png$/, w === width ? '.webp' : '-small.webp')
    const info = await sharp(file)
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(dest)
    rows.push({
      source: file.slice(root.length + 1),
      output: dest.slice(root.length + 1),
      width: info.width,
      height: info.height,
      bytes: info.size,
      sourceBytes: before.size,
    })
  }
}
console.log(JSON.stringify(rows, null, 2))
