import NuevoListener from "./generated/NuevoListener.js";

export class CustomNuevoListener extends NuevoListener {
    // Puedes agregar más métodos enter/exit para reglas específicas
    enterEveryRule(ctx) {
        console.log(`Entrando a: ${ctx.constructor.name}`);
    }

    exitEveryRule(ctx) {
        console.log(`Saliendo de: ${ctx.constructor.name}`);
    }
}
