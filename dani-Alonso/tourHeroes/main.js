function Heroes() {
    let name = 'test';
    let id = 1;

    const getName = function() {
        return name;
    };
    const setName = function(input) {
        name = input;
    };
    const getId = function() {
        return id;
    };

    return { getName, setName, getId };
}