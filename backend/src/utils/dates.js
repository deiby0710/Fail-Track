export const formateDate = (formateDate) => {
    const date = new Date(formateDate);
    const año = date.getFullYear();
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const dia = String(date.getDate()).padStart(2, '0');
    // const hora = String(date.getHours()).padStart(2, '0');
    // const minutos = String(date.getMinutes()).padStart(2, '0');
    // const segundos = String(date.getSeconds()).padStart(2, '0');
    // const milisegundos = String(date.getMilliseconds()).padStart(3, '0');

    // Hora fija en cero
    const hora = "00";
    const minutos = "00";
    const segundos = "00";
    const milisegundos = "000";
    console.log("La hora sera: " + `${hora} -- ${minutos} -- ${segundos}`)
    return `${año}-${mes}-${dia}T${hora}:${minutos}:${segundos}.${milisegundos}Z`;
}