class Triangle {
    constructor(a, b, c){
        this.a = a
        this.b = b
        this.c = c
    }

    check_triangle(){
        if((this.a + this.b) < this.c || (this.a + this.c) < this.b || (this.c + this.b) < this.a){
            console.log("ERROR.NOT TRIANGLE")
            return false
        }
        return true
    }

    perimeter_triangle(){
        if(this.check_triangle() === false){
            return false
        }
        return this.a + this.b + this.c
    }

    square_triangle(){
        if(this.check_triangle() === false){
            return false
        }
        let p = this.perimeter_triangle()/2
        let square = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c))
        return square
    }

    rectangular_triangle(){
        if(this.check_triangle() === false){
            return false
        }
        let eps = 0.0001
        let ab = Math.pow(this.a, 2) + Math.pow(this.b, 2)
        let ac = Math.pow(this.a, 2) + Math.pow(this.c, 2)
        let bc = Math.pow(this.b, 2) + Math.pow(this.c, 2)
        if(ab - Math.pow(this.c, 2) < eps || ac - Math.pow(this.b, 2) < eps || bc - Math.pow(this.a, 2)){
            console.log("rectangular triangle")
            return true
        }
        console.log("NOT rectangular triangle")
        return false

    }
}

function main(){
    let tr = new Triangle(3, 4, 5)

    let tr_1 = new Triangle(0, 3, 5)

    tr_1.check_triangle()

    tr.check_triangle()
    console.log(tr.perimeter_triangle())
    console.log(tr.square_triangle())
    tr.rectangular_triangle()
}

main()