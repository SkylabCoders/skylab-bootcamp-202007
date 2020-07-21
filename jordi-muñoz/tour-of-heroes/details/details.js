function Hero() {
    let name = 'batman';
    let id = 1;
    function getName() {
        return name;
    }
    function setName(value) {
        name = value;
    }
    function getId() {
        return id;
    }

    return {getName, setName, getId}
}



