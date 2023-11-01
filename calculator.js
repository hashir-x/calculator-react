function display(content) {
    result.value += content
}

function clearScreen(){
    result.value = ""
}

function lastElement(){
    result.value = result.value.slice(0,-1)
}

function calc(){
    try {
        result.value = eval(result.value)
    } catch (error) {
        console.log("ERROR");
    }
    
}