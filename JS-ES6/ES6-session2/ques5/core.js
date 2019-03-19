const calc = {
    circle: (radius)=>{
        return 3.14 * radius * radius;
    },
    rectangle: (l,b)=>{
        return l*b;
    },
    cylinder: (r,h)=>{
        return (2*3.14*r*h)+(2*3.14*r*2)
    }
}