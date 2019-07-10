function run(input, turtle){
    let cleaned = input.toUpperCase().split(' ')

    let tokens = []
    let tokenIndex = 0
    for (let i = 0; i < cleaned.length; i++) {
        if(cleaned[i+1] && cleaned [i+2] && cleaned[i + 1].match(/^(\+|-|\*|\/|\%)$/)){
            tokens[tokenIndex] = {
                type: 'num',
                value: eval(cleaned[i] + cleaned[++i] + cleaned[++i])
            }
        }
        if(cleaned[i] in number_commands){
            let cmd = number_commands[cleaned[i]]
            let pars = []
            for(let j = 0; j < cmd.length; j++){
                let next = cleaned[++i]
                if(next == undefined) return "EXCEPTION: MISSING ARGS AT END OF PROGRAM AT " + i
                pars.push(parseFloat(next))
            }
            tokens[tokenIndex] = {
                type: 'num',
                value: cmd(...pars)
            }
        }
        else{
            tokens[tokenIndex] = {
                type: cleaned[i].match(/\d/) ? 'num' : 'cmd',
                value: parseFloat(cleaned[i]) || cleaned[i]
            }
        }

        tokenIndex++
    }

    console.table(tokens)

    for (let i = 0; i < tokens.length; i++) {
        let cmd = commands[tokens[i].value]

        if(cmd == undefined && tokens[i].type == 'cmd') return "EXCEPTION: NOT A REGISTERED COMMAND AT " + i

        if(tokens[i].type == 'cmd'){
            let pars = [turtle]
            for(let j = 0; j < cmd.length - 1; j++){
                let tk = tokens[++i]
                if(tk == undefined) return "EXCEPTION: MISSING ARGS AT END OF PROGRAM AT " + i
                pars.push(tk.value)
            }
            cmd(...pars)
        }

        turtle.update()
    }
}