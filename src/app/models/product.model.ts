export  class ModelProduct{
    titulo : String; // title ( Requerido )
    Descripcion : String; // ( Requerido )
    SKU : number = 0;
    Peso : number = 0;
    Largo : number = 0;
    Color : String = "";
    Alto : number = 0;
    Ancho : number = 0;
    Talla : String = "0";
    Precio:number = 0;
    Precio_Descuento:number = 0;
    Stock_Limite: number = 0;
    Stock_Actual: number = 0;

    //Img
    Imagenes_1: any = null

    // Campos Desarrollador
    Producto_Id : any = 0;
    Categoria_id : number = 2;
    Estado : number = 1; // ( Requerido )
    Creado_Por : number  = 1; // ( Requerido )
    Modificado_Por : number = 1; // ( Requerido )
    Fecha_Creacion : any = "" ; // ( Requerido )
    Fecha_Actualizacion : any = ""; // ( Requerido )
    // agregar informacion
    // referencia amazon removida

}