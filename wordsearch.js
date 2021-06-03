const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }

    let emptyString = "";
    for (let y = 0; y < letters[0].length; y++) {
        for (let x = 0; x < letters.length; x++) {
            emptyString += letters[x][y];
            
        }      
    }
    if (emptyString.includes(word)) {
        return true;
    } 
    return false; 
}
