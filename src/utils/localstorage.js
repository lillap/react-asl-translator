export const setStorage = (key, value) => { // function for setting localstorage

    localStorage.setItem(key, JSON.stringify(value));

} 

export const getStorage = (key) => { // function for getting localstorage

    let value = JSON.parse(localStorage.getItem(key));

    if (!value) return false;
    
    return value;
    
}

export const clearStorage = () => { // function for clearing localstorage
    localStorage.clear();
} 