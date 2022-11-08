class Book {

    constructor(
        private _author: string,
        private _title: string
    ) {
    }


    get author(): string{
        return this._author
    }

    get title(): string{
        return this._title
    }
}

interface RepositoryInterface<T> {
    save(entity: T): void
}

class BookRepository<T extends Book> implements RepositoryInterface<T>{
    save(entity: T):void {
        console.log("Saved")
    }
}