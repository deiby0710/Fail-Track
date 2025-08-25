export const formateDate = (formateDate) => {
    const date = new Date(formateDate);
    const año = date.getFullYear();
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const dia = String(date.getDate()).padStart(2, '0');
    const hora = String(date.getHours()).padStart(2, '0');
    const minutos = String(date.getMinutes()).padStart(2, '0');
    const segundos = String(date.getSeconds()).padStart(2, '0');
    const milisegundos = String(date.getMilliseconds()).padStart(3, '0');
    
    return `${año}-${mes}-${dia}T${hora}:${minutos}:${segundos}.${milisegundos}Z`;
}