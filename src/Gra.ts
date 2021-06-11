interface tablica {
    punkty1: number
}
interface IStringList {
    readonly [index: number]: string
}
export class Gra implements tablica {
    static XD: number = 10
    public tab: string[][]
    public tabstr: string[][]
    public punkty1: number
    public kolory: IStringList
    constructor() {
        this.kolory = ["green", "red", "blue", "yellow", "pink"]
        this.tabstr = []
        this.plansza();
        this.tab = []
        this.punkty1 = 0
        this.kulki();
        this.kolorek();
        this.punkty();
        this.border()
    }
    private plansza() {
        
        for (let i = 0; i < 9; i++) {
            this.tabstr[i] = []
            for (let j = 0; j < 9; j++) {
                var pola: HTMLDivElement = document.createElement("div")
                pola.className = "pola"
                pola.id = "id" + i + "__" + j
                this.tabstr[i][j] = "id" + i + "__" + j
                var plansza: HTMLElement = document.getElementById("gra")
                plansza.appendChild(pola)
            }
        }
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                var divek: HTMLElement = document.getElementById("id" + i + "__" + j)
                divek.style.left = (j * 52).toString() + "px"
                divek.style.top = (i * 52).toString() + "px"
            }
        }

    }
    private kulki() {
        for (let i = 0; i < 9; i++) {
            this.tab[i] = []
            for (let j = 0; j < 9; j++) {
                this.tab[i][j] = "0"
            }
        }
        for (let a = 0; a < 3; a++) {
            let b = Math.floor(Math.random() * 9)
            let c = Math.floor(Math.random() * 9)
            if (this.tab[b][c] == "X") {
                a--
            }
            else {
                this.tab[b][c] = "X"
            }
        }
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (this.tab[i][j] == "X") {
                    let kolor = Math.floor(Math.random() * 5)
                    var pole: HTMLElement = document.getElementById("id" + i + "__" + j)
                    var kol: HTMLDivElement = document.createElement("div")
                    kol.className = "kule"
                    kol.style.backgroundColor = this.kolory[kolor]
                    pole.appendChild(kol)
                    pole.className = "kulka"
                }
            }
        }
    }
    private kolorek() {
        var divek: HTMLDivElement = document.createElement("div")
        divek.id = "losowanie"
        document.body.appendChild(divek)
        for (let a = 0; a < 3; a++) {
            let kolor = Math.floor(Math.random() * 5)
            var kol: HTMLDivElement = document.createElement("div")
            kol.className = "losowanie"
            kol.id = a.toString()
            kol.style.backgroundColor = this.kolory[kolor]
            divek.appendChild(kol)
        }
    }
    private punkty() {
        let XD: HTMLDivElement = document.createElement("div")
        XD.id = "koment"
        document.body.appendChild(XD)
        var kol1: HTMLDivElement = document.createElement("div")
        kol1.className = "punkty"
        kol1.id = "punkty"
        kol1.innerHTML = "TWOJE PUNKTY: " + this.punkty1
        document.body.appendChild(kol1)

    }
    @border
    private border() {
        return "border"
    }
}
function border(target: any, name: string, descriptor: any) {
    descriptor.value = function () {
        let els: HTMLElement = document.getElementById("losowanie")
        els.style.border = "1px"
        els.style.borderStyle = "solid"
        els.style.borderColor = "black"
    }

}
