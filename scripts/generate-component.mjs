import { existsSync, mkdirSync, realpathSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { prepareIndexUpdate } from './update-index.mjs';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const appRoot = realpathSync(path.join(projectRoot, 'app'));
const [name, ...extra] = process.argv.slice(2);

function fail(message) {
    console.error(message);
    process.exit(1);
}

if (!name || extra.length) {
    fail('Uso: npm run component -- NombreComponente\nEjemplo: npm run component -- ReviewCard');
}

if (!/^[A-Z][a-zA-Z0-9]*$/.test(name)) {
    fail('El nombre debe estar en PascalCase y contener solo letras y numeros. Ejemplo: ReviewCard.');
}

const componentsRoot = path.join(appRoot, 'components');
const destination = path.join(componentsRoot, name);

if (existsSync(componentsRoot) && realpathSync(componentsRoot) !== componentsRoot) {
    fail('app/components debe ser una carpeta local, no un enlace a otra ubicacion.');
}

if (existsSync(destination)) {
    fail(`Ya existe ${path.relative(projectRoot, destination)}. No se modifico ningun archivo.`);
}

const id = name.charAt(0).toLowerCase() + name.slice(1);
const jsx = `import './${id}.scss';\n\nexport const ${name} = () => {\n    return <div id='${id}'>\n        \n    </div>\n}\n`;
const scss = `#${id} {\n    \n}\n`;
const updateIndex = prepareIndexUpdate(path.join(componentsRoot, 'index.js'), name);

mkdirSync(componentsRoot, { recursive: true });
mkdirSync(destination);
writeFileSync(path.join(destination, `${name}.jsx`), jsx, { flag: 'wx' });
writeFileSync(path.join(destination, `${id}.scss`), scss, { flag: 'wx' });
updateIndex();

console.log(`Componente creado: ${path.relative(projectRoot, destination)}`);
console.log(`  ${name}.jsx\n  ${id}.scss`);
