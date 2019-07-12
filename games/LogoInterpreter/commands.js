let number_commands = {
    "INT": intCmd,
    'ROUND': roundCmd,
    "ABS": absCmd,
    "SQR":sqrtCmd,
    "LOG":logCmd,
    "LOG10":log10Cmd,
    "EXP":expCmd,
    "SIN":sinCmd,
    "COS":cosCmd,
    "TAN":tanCmd,
    "ATAN":atanCmd,
    "DEGREES":degreesCmd,
    "RANDOM": randomCmd,
    "PI": piCmd
}

function intCmd(n){
    return Math.floor(n)
}

function roundCmd(n){
    return Math.round(n)
}

function absCmd(n){
    return Math.abs(n)
}

function sqrtCmd(n){
    return Math.sqrt(n)
}

function logCmd(n){
    return Math.log(n)
}

function log10Cmd(n){
    return Math.log10(n)
}

function expCmd(n){
    return Math.exp(n)
}

function sinCmd(n){
    return Math.sin(n)
}

function cosCmd(n){
    return Math.cos(n)
}

function tanCmd(n){
    return Math.tan(n)
}

function atanCmd(n){
    return Math.atan(n)
}

function degreesCmd(n){
    return n * 180 / Math.PI
}

function randomCmd(n){
    return Math.random() * (n - 1)
}

function piCmd(){
    return Math.PI
}

let commands = {
    "FD": forwardCmd,
    "BK": backwardCmd,
    "RT": rightCmd,
    "LT": leftCmd,
    "PU": penUpCmd,
    "PD": penDownCmd,
    "HT": hideCmd,
    "ST": showCmd,
    "HOME": homeCmd,
    "CLS": clearCmd,
    "CLEAN": cleanCmd
}

function forwardCmd(turtle, amount) {
    turtle.move(amount)
    return turtle
}

function backwardCmd(turtle, amount) {
    turtle.move(-amount)
}

function rightCmd(turtle, angle) {
    turtle.rotate(angle)
}

function leftCmd(turtle, angle) {
    turtle.rotate(angle)
}

function penUpCmd(turtle){
    turtle.penState(false)
}

function penDownCmd(turtle){
    turtle.penState(true)
}

function hideCmd(turtle){
    turtle.display(false)
}

function showCmd(turtle){
    turtle.display(true)
}

function homeCmd(turtle){
    turtle.home()
}

function clearCmd(turtle){
    turtle.penState(false)
    turtle.home()
    turtle.clean()
}

function cleanCmd(turtle){
    turtle.clean()
}