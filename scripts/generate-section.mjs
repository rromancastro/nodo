import { existsSync, mkdirSync, realpathSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { prepareIndexUpdate } from './update-index.mjs';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const appRoot = realpathSync(path.join(projectRoot, 'app'));
const [name, folder, ...extra] = process.argv.slice(2);

function fail(message) {
    console.error(message);
    process.exit(1);
}

function isInsideApp(target) {
    const relative = path.relative(appRoot, target);
    return relative === '' || (
        relative !== '..' &&
        !relative.startsWith(`..${path.sep}`) &&
        !path.isAbsolute(relative)
    );
}

if (!name || !folder || extra.length) {
    fail('Uso: npm run section -- NombreSeccion carpeta\nEjemplo: npm run section -- HomeBenefits home\nUsa . como carpeta para crearla directamente en app.');
}

if (!/^[A-Z][a-zA-Z0-9]*$/.test(name)) {
    fail('El nombre debe estar en PascalCase y contener solo letras y numeros. Ejemplo: HomeBenefits.');
}

const normalizedFolder = folder.replaceAll('\\', '/');
if (path.posix.isAbsolute(normalizedFolder) || path.win32.isAbsolute(folder) || normalizedFolder.includes(':')) {
    fail('La carpeta debe ser relativa a app. Ejemplo: home o home/sections.');
}

const destination = path.resolve(appRoot, normalizedFolder, name);
if (!isInsideApp(destination)) {
    fail('La carpeta de destino debe quedar dentro de app.');
}

// Check existing ancestors too, so a symlink cannot redirect writes outside app.
let ancestor = destination;
while (!existsSync(ancestor)) {
    ancestor = path.dirname(ancestor);
}
if (!isInsideApp(realpathSync(ancestor))) {
    fail('La carpeta de destino apunta fuera de app.');
}

if (existsSync(destination)) {
    fail(`Ya existe ${path.relative(projectRoot, destination)}. No se modifico ningun archivo.`);
}

const id = name.charAt(0).toLowerCase() + name.slice(1);
const jsx = `import './${id}.scss';\n\nexport const ${name} = () => {\n    return <section id='${id}'>\n        \n    </section>\n}\n`;
const scss = `#${id} {\n    \n}\n`;
const updateIndex = prepareIndexUpdate(path.join(path.dirname(destination), 'index.js'), name);

mkdirSync(path.dirname(destination), { recursive: true });
mkdirSync(destination);
writeFileSync(path.join(destination, `${name}.jsx`), jsx, { flag: 'wx' });
writeFileSync(path.join(destination, `${id}.scss`), scss, { flag: 'wx' });
updateIndex();

console.log(`Seccion creada: ${path.relative(projectRoot, destination)}`);
console.log(`  ${name}.jsx\n  ${id}.scss`);
