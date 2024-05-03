export interface Quote {
    person: string
    quote: string
}

export enum TypoStatus {
    NotInput = 0,
    Correct = 1,
    Error = 2,
}

export enum Language {
    Korean = "ko",
    English = "en",
}

export enum Direction {
    Raise = "raise",
    Reduce = "reduce",
}
