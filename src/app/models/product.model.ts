export  class ModelProduct{
    titulo : String; // title ( Requerido )
    Descripcion : String; // ( Requerido )
    sku : number;
    Peso : number;
    Largo : number;
    Color : String;
    Alto : number;
    Ancho : number;
    Talla : String;
    Precio;
    Precio_Descuento;

    // Campos Desarrollador
    Producto_Id : any = 0;
    Categoria_id : number = 2;
    Estado : number = 1; // ( Requerido )
    Creado_Por : number  = 1; // ( Requerido )
    Modificado_Por : number = 1; // ( Requerido )
    Fecha_Creacion : any = "2019-05-21 15:20:00" ; // ( Requerido )
    Fecha_Actualizacion : any = "2019-05-21 15:20:00"; // ( Requerido )
    // agregar informacion
    // referencia amazon removida

}