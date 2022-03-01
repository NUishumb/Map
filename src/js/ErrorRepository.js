export default class ErrorRepository {
    constructor() {
        this.codeArray = new Map();
        this.codeArray.set(this, { 404: 'Page Not Found', 405: 'Method Not Allowed', 406: 'Not Acceptable' });
    }

    translate(code) {
        if (this.codeArray.get(this)[code]) {
            return this.codeArray.get(this)[code];
        }
        return 'Unknown Error';
    }
}
