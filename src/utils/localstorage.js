export const setStorage = (key, value) => {

    localStorage.setItem(key, JSON.stringify(value));
} 

export const getStorage = (key) => {

    let value = JSON.parse(localStorage.getItem(key));

    if (!value) return false;
    
    return value;
    
}