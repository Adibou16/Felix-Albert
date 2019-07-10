let turtle
let drawings = []

function setup(){
    createCanvas(800, 800)
    background(51)

    turtle = new Turtle(width/2, height/2)
    
    const codeform = document.getElementById('codeform')
    codeform.addEventListener('submit', function(e){
        e.preventDefault()
        const input = codeform.inputcode.value

        console.log(run(input, turtle))
    })
}

function draw(){
    background(51)
    turtle.show()
    for(l of drawings){
        line(l.ax, l.ay, l.bx, l.by)
    }
}