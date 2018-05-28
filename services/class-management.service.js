angular.module('myApp').service('classService',function(){

    this.classes = [
        {
            id : 1,
            name : "D10CN1",
            majors : "CNTT"
        },
        {
            id : 2,
            name : "D10VT1",
            majors : "DTVT"
        }
    ];
    this.items = [
            {
                id : 1,
                label : "CNTT"
            },
            {
                id : 2,
                label : "DTVT"
            }
        ];

    this.getMajors = function(){
        return this.items;
    };

    this.getClass = function () {
        var a = [];
        angular.copy(this.classes, a);
        return a;
    };

    this.add = function (name, label) {
        this.classes.push({id : this.classes.length + 1, name : name, majors : label});
    };

    this.remove = function (id) {
        var index = -1;
        for(var i = 0; i < this.classes.length; i ++){
            if (this.classes[i].id == id){
                index = i;
                break;
            }
        }
        this.classes.splice(index, 1);
    };

    this.view = function (id) {
        var a = [];
        for(var i = 0; i < this.classes.length; i++){
            if(this.classes[i].id == id){
                angular.copy(this.classes[i], a);
                return a;
                break;
            }
        }
    };

    this.update = function (id, nameModal, majorsModal) {
        for (var i = 0; i < this.classes.length; i++) {
            if (this.classes[i].id == id) {
                this.classes[i].name = nameModal;
                this.classes[i].majors = majorsModal;
            }
        }
    }
});