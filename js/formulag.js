document.write("<h1>formulag</h1>");

    var a= prompt ("Introduce un valor númerico (a)");
    var b= prompt ("Introduce un valor númerico (b)");
    var c= prompt ("Introduce un valor númerico (c)");

    //Dos resultados x1 y x2, necesitamos dos funciones
    function x1(a,b,c,){
        return (((-1)*b)-(Math.sqrt(Math.pow(b,2))-(4*a*c)))/(2*a);
    }
    var resultado_x1 = x1(a,b,c);
    alert ("x1 =" + resultado_x1)


    function x2(a,b,c){
        return (((-1)*b)+(Math.sqrt(Math.pow(b,2))-(4*a*c)))/(2*a);

    }
    var resultado_x2 = x2(a,b,c);
    alert ("x2 =" + resultado_x2)