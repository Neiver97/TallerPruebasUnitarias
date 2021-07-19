const generador_token = require('../../src/ejercicio');

describe('Pruebas unitarias ', () => {
    
    it('Se validan los null', () => {
        let value = generador_token(null,null,null);
        expect(value).toBe(null);
    });

    it('Se validan los undefined', () => {
        let value = generador_token(undefined,undefined,undefined);
        expect(value).toBe(undefined);
    });
    
    it('Entradas numéricas', () => {
        let a= [0,1,2,3,4,5,6];
        let b= [0,1,2,3,4,5,6,7,8,9];
        let c= [1,2,3,4,5,6];
        let value = generador_token(a,b,c);
        expect(value).toBe('0,1,2,34,5,62,3,4,5');
    });

    it('dos entradas numéricas y un string', () => {
        let x= [0,1,2,3,4,5,6,7,8];
        let y= [0,1,2,3,4,5,6,7,8];
        let z= ['1','2','3','4'];
        let value = generador_token(x,y,z);
        expect(value).toBe('0,1,2,34,5,6,72,3,4,5');
    });
    
    it('entrada de 8 dígitos y con string', () => {
        let x= ['0','1','2','3','4','5','6','7'];
        let y= ['0','1','2','3','4','5','6','7'];
        let z= ['0','1','2','3','4','5','6','7'];
        let value = generador_token(x,y,z);
        expect(value).toBe('0,1,2,34,5,6,72,3,4,5');
    });
    
});
