const unique = (arr) => {
    filterArray = [];
    arr.forEach(element => {
        if (this.filterArray.indexOf(element) == -1) {       //value of duplicate array is compared with newArray
            this.filterArray.push(element);
        }
    });
    return filterArray;
}