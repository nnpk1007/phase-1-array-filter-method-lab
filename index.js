// findMatching- This function takes an array of drivers' names and a string as arguments, 
// and returns the matching list of drivers. The function should be case insensitive.
const findMatching = (driverNames, string) => {
    return driverNames.filter(name => name.toLowerCase() === string.toLowerCase());
}

// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array,
//  and returns all drivers whose names begin with the provided letters.
const fuzzyMatch = (driverNames, string) => {
    return driverNames.filter(name => name.indexOf(string) === 0)
}

// matchName - This function takes an array of driver objects and a string as arguments. 
// Each driver object has two properties: name and hometown. 
// The function should return each element whose name property matches the provided string argument.
const matchName = (driverNames, string) => {
    return driverNames.filter(driver => driver["name"] === string)
}