let array = []

for(let i = 0; i < Infinity; i++) {
    let word = prompt ('введите команду')
    let command = word.split(', ')
    if(word == 'stop') {
        break
    }else if(command[0] == 'add') {
        array.push(command[1])
    }else if (command[0] == 'del') {
        for(let i = 0; i< array.length; i++){
            array[i] == command[1] ? array.splice(i,1) : ''
        }
    }
    console.log(array);
}


