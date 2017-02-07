export class Library {
    constructor() {
        this._name = 'Library';
    }

    get name() {
        return this._name;
    }

    static log = () => {
        console.log('this is shit men');
    }

}

