export class ModelProduct{
    
    Titulo : String = 'Jose luis manda'; // title ( Requerido )
    Descripcion : String = 'Esto es una prueba'; // ( Requerido )
    sku : number;
    Peso : number;
    Largo : number;
    Color : String;
    Alto : number;
    Ancho : number;
    Talla : String;
    Precio : number;
    Precio_Descuento : number;

    // Campos Desarrollador
    Producto_Id : number = 23
    Categoria_id : number = 1;
    Estado : number = 1; // ( Requerido )
    Creado_Por : number = 1 ; // ( Requerido )
    Modificado_Por : number = 1; // ( Requerido )
    Fecha_Creacion : any = '2019-05-21 15:20:00'; // ( Requerido )
    Fecha_Actualizacion : any = '2019-05-21 15:20:00'; // ( Requerido )
    // agregar informacion
    // referencia amazon removida

}