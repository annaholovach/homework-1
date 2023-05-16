function findCompartment() {
    let ticketNumber = document.getElementById("ticketNumber").value;
    let compartmentNumber = ticketNumber <= 36 ? Math.ceil(ticketNumber / 4) : 10 - Math.ceil((ticketNumber - 36) / 2);
    let seatType;
    let seatPosition;

    if (ticketNumber > 54 || ticketNumber <= 0) {
        alert('Некоректне значення, перевірте правильність введених даних');
        result = '';
    };

    if (ticketNumber % 2 == 0) {
        seatType = 'верхнє місце';
    } else {
        seatType = 'нижнє місце';    
    };


    if (ticketNumber >= 37) {
        seatPosition = 'бічне';
    } else {
        seatPosition = 'не бічне';   
    };

    let result = `Номер купе: ${compartmentNumber} <br> Тип місця: ${seatType} <br> Положення місця: ${seatPosition}`;

    document.getElementById("result").innerHTML = result;
}