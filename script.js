
function input(){
    const amount_of_numbers_text = document.getElementById(`quantidade_de_numeros`).value
    const amount_of_numbers = parseInt(amount_of_numbers_text)
    console.log(amount_of_numbers)
    
    const timeout = 1000
    const min_value = 1
    const max_value = 10

    for (let i = 0; i < amount_of_numbers; i++){
        setTimeout(() => {
            const random_value = Math.floor(Math.random() * (max_value - min_value + 1)) + min_value;
            console.log(`position: ${i + 1}, number: ${random_value}`);
            document.getElementById(`numero`).textContent = `${i + 1}º número: ${random_value}`;
        }, i * timeout)
    }
}



