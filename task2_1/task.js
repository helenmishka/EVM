class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    renderFields() {
        let messageX = "X: " + this.x;
        let messageY = "Y: " + this.y;
        let fullMessage = messageX + " " + messageY;
        console.log(fullMessage);
    }
}

class Line {
    constructor(dot_1, dot_2){
        this.dot_1 = dot_1
        this.dot_2 = dot_2
    }
    renderFields() {
        console.log("DOT №1")
        this.dot_1.renderFields()
        console.log("DOT №2")
        this.dot_2.renderFields()
    }
    len_line() {
        let len = Math.sqrt(Math.pow((this.dot_2.x-this.dot_1.x),2) + Math.pow((this.dot_2.y-this.dot_1.y),2))
        return len
    }
}

function main(){

    dot_1 = new Dot(0,0)
    dot_2 = new Dot(5,0)
    
    dot_1.renderFields()
    dot_2.renderFields()

    line = new Line(dot_1, dot_2)

    line.renderFields()
    console.log(line.len_line())

}
main()