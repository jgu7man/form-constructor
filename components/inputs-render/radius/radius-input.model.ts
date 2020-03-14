export interface OPCION { value: string, index: number }

export class RadiusModel {
    constructor(
        public etiqueta: string,
        public ID: string,
        public requerido: boolean,
        public opciones: OPCION[],
        public info?: string
    ) {
        
    }
}