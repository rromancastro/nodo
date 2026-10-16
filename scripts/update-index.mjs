import { appendFileSync, existsSync, lstatSync, readFileSync } from 'node:fs';

export function prepareIndexUpdate(indexPath, name) {
    if (existsSync(indexPath) && lstatSync(indexPath).isSymbolicLink()) {
        throw new Error(`El index no debe ser un enlace: ${indexPath}`);
    }

    const content = existsSync(indexPath) ? readFileSync(indexPath, 'utf8') : '';
    const exportPattern = new RegExp(`export\\s+\\*\\s+from\\s+['"]\\./${name}/${name}(?:\\.jsx)?['"]\\s*;?`);
    const newline = content.includes('\r\n') ? '\r\n' : '\n';
    const separator = content && !content.endsWith('\n') ? newline : '';

    return () => {
        if (!exportPattern.test(content)) {
            appendFileSync(indexPath, `${separator}export * from "./${name}/${name}";${newline}`);
        }
    };
}
