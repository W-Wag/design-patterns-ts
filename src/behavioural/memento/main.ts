import { ImageEditor } from './image-editor';
import { ImageEditorBackupManger } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupManager = new ImageEditorBackupManger(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo('gif');

backupManager.backup();
imageEditor.convertFormatTo('jpg');

backupManager.backup();
imageEditor.convertFormatTo('png');

console.log(imageEditor);

backupManager.undo();
console.log(imageEditor);
