

import common from '../../common';

// Here is a HACK, because the real traslation is: "y subirla en la carpeta '/etc/nginx' de tu servidor. "
// but the HTML order of the templates are wrong: "y subirla en el servidor '/etc/nginx' carpeta."

export default {
    downloadTheGeneratedConfig: '<b>Descargar</b> la configuracion generada:',
    andUploadItToYourServers: 'y <b>subirla</b> en',
    directory: '.',
    or: 'o, ',
    copyBase64StringOfCompressedConfig: 'Copiar el texto comprimido en base64 de la configuracion',
    pasteItInYourServersCommandLineAndExecute: ', péguelo en la línea de comando de su servidor y ejecútelo.',
    navigateToYourNginxConfigurationDirectoryOnYourServer: `Navega en <b>la carpeta de configuracion</b> de ${common.nginx} de tu servidor:`,
    createABackupOfYourCurrentNginxConfiguration: `Crea un <b>respaldo</b> de tu configuracion actual de ${common.nginx}:`,
    extractTheNewCompressedConfigurationArchiveUsingTar: '<b>Extraer</b> el nuevo archivo de configuracion comprimido usando tar:',
    download: 'Descargar',
};
