const celsium = Number.parseFloat(prompt("Введите температуру в градусах Цельсия"));
alert(`Температура по Цельсию: ${celsium}, температура по Фаренгейту: ${convertToFarenhait(t).toFixed(1)}`)
function convertToFarenhait(temperature) {
    return 9 / 5 * temperature + 32;
}