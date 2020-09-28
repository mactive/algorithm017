function copy(value) {
    return JSON.parse(JSON.stringify(value));
}

function isArrayEqual(value1 = [], value2 = []) {
    let hash = copy(value2);
    if (value1.length === value2.length) {
        for (let i = 0; i < value1.length; i++) {
            const index = hash.indexOf(value1[i]);
            if (index > -1) {
                hash.splice(index, 1);
            } else {
                return false;
            }
        }

        return true;
    }

    return false;
}


const res1 = isArrayEqual([1,2,3], [2,1,3]); // true
const res2 = isArrayEqual([1,2], [1,1]); // false