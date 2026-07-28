import { BackupManager } from "./backup-manager";
import { ImageEditor } from "./image-editor";

const imageEditor = new ImageEditor("/media/image.png", "png");
const backupManager = new BackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo("gif");

backupManager.backup();
imageEditor.convertFormatTo("bmp");

backupManager.backup();
imageEditor.convertFormatTo("jpg");

console.log(imageEditor);

backupManager.undo();
console.log(imageEditor);

backupManager.undo();
console.log(imageEditor);

backupManager.undo();
console.log(imageEditor);

backupManager.undo();
console.log(imageEditor);
