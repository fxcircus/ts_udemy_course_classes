// class Player {
//     readonly first: string
//     public readonly last: string
//     private score: number = 0

//     constructor(first: string, last: string) {
//         this.first = first
//         this.last = last
//         this.secretMethod() // This works! (we can access private from the constructor)
//     }

//     private secretMethod(): void {
//         console.log("Secret method!")
//     }
// }

class Player {
    private score: number = 0

    constructor(public readonly first: string, public last: string) {
        this.secretMethod() // This works! (we can access private from the constructor)
    }

    private secretMethod(): void {
        console.log("Secret method!")
    }
}

const player1 = new Player("Cooper", "dog")
console.log(player1)
// player1.secretMethod() // Property 'secretMethod' is private and only accessible within class 'Player'.