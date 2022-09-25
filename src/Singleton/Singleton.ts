class Singleton {
    private static instance : Singleton;
    private fileName : string;

    private constructor(){
        this.fileName = "common.txt"
    }

    static getInstance(){
        if(Singleton.instance == undefined) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    getFileName(){
        return this.fileName;
    }

}

const a = Singleton.getInstance();
var fileName = a.getFileName();

console.log(fileName);