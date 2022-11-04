export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function camelCase(str){
    str = str.toLowerCase();
    const words = str.split('_');

    const required = words.map(word => {
        return word[0].toUpperCase() + word.splice(1);
    })

    return required.join(" ");
}
