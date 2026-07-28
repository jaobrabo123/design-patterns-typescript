import { ImageEditor } from "./image-editor";
import { Memento } from "./memento";

export class BackupManager {
    private readonly mementos: Memento[] = [];

    constructor(private readonly imageEditor: ImageEditor) {}

    backup(): void {
        console.log(`Backup: salvando o estado de ${ImageEditor.name}`);
        this.mementos.push(this.imageEditor.save());
    }

    undo(): void {
        const memento = this.mementos.pop();

        if (!memento) {
            console.log("Backup no mementos");
            return;
        }

        this.imageEditor.restore(memento);
        console.log(`Backup: ${memento.getName()} foi restaurado com sucesso`);
    }

    showMementos(): void {
        this.mementos.forEach(console.log);
    }
}
