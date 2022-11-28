const t = Number.parseFloat(prompt("Введите температуру в градусах Цельсия"));
alert(`Температура по Цельсию: ${t}, температура по Фаренгейту: ${convertToFarenhait(t).toFixed(1)}`)
function convertToFarenhait(temperatuere) {
    return 9 / 5 * temperatuere + 32
}