class Turtle{
    constructor(homex, homey){
        this.x = homex || 0
        this.y = homey || 0

        this.homex = homex
        this.homey = homey

        this.angle = 4.71238898038
        this.penstate = false
        this.displays = true

        this.lastX = this.x
        this.lastY = this.y
    }

    move(amt){
        this.lastX = this.x
        this.lastY = this.y
        this.x += amt * Math.cos(this.angle)
        this.y += amt * Math.sin(this.angle)
    }

    rotate(angle){
        this.angle += angle * Math.PI / 180
        this.angle %= Math.PI * 2
    }

    penState(a){
        this.penstate = a
    }

    display(a){
        this.displays = a
    }

    home(){
        this.x = this.homex
        this.y = this.homey
    }

    clean(){
        drawings = []
    }

    update(){
        if(this.penstate && (this.x != this.lastX || this.y != this.lastY)){
            drawings.push({
                ax: this.lastX,
                ay: this.lastY,
                bx: this.x,
                by: this.y
            })
        }
        this.lastX = this.x
        this.lastY = this.y
    }

    show(){
        if(this.displays){
            fill(0, 125, 0)
            ellipse(this.x, this.y, 10, 10)
        }
    }
}