export class Piece {
    type: string;
    name: PieceType;
    constructor(name: string){
        this.type = "GamePiece"
        this.name = selectPieceType(name);
        
    }
}
export const generatePieces = (): Map<string, Piece> => {
    const values = ['DOG', 'IRON', 'BOOT', 'THIMBLE', 'HAT', 'MOUSE']
    let pieces: Map<string, Piece> = new Map();
    values.forEach(elem => {
        pieces.set(elem, new Piece(elem))
    })
    return pieces;
}

export enum PieceType{
    DOG='DOG',
    IRON='IRON',
    BOOT='BOOT',
    THIMBLE='THIMBLE',
    HAT='HAT',
    MOUSE='MOUSE'
};

export const selectPieceType = (value: string): PieceType => {
    
    
    switch (value) {
        case 'DOG':
            return PieceType.DOG;
            break;
            
        case 'IRON':
            return PieceType.IRON;
            break;
            
        case 'BOOT':
            return PieceType.BOOT;
            break;
            
        case 'THIMBLE':
            return PieceType.THIMBLE;
            break;
            
        case 'HAT':
            return PieceType.HAT;
            break;
            
        case 'MOUSE':
            return PieceType.MOUSE;
            break;
            
    
        // default:
        //     break;
    }
}
