describe('Hero Details', function () {
    let student;
    let studentDetailComponent;
    let name;
    let newName;
    beforeEach(function () {
        student = new Skylaber();
        studentDetailComponent = new StudentDetailComponent();
    });
    it('should create', function () {
        expect(student).toBeTruthy();
    })
    it('should create', function () {
        expect(studentDetailComponent).toBeTruthy();
    })
    it('should be able to change the name', function () {
        expect(studentDetailComponent.nameChange(newName).toEqual(name));
    })
})
