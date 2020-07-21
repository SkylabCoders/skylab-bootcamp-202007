function Hero() {
    const data = {
        name: "Magneto",
        id: 4
    };
    function getName() {
        return data.name;
    };
    function setName(x) {
        newName = x;
    };
    function getId() {
        return data.id;
    };
    function setId(x) {
        newId = x;
    };
    return { getName, setName, getId, setId };
};

console.log(Hero.getName);