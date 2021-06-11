import { SymbolTable } from "../node_modules/typescript/lib/typescript"
import { Gra } from "./Gra"

interface KeyValueProcessor {
    (value: string): void;
};
function addKeyValue(value: string): void {
    let kom: HTMLElement = document.getElementById("koment")
    kom.innerHTML = value
}
export class Move {
    private poczatekx: number
    private poczateky: number
    sciezka: string[]
    protected test: Gra
    zmienna: boolean
    tablica: HTMLElement[][]
    zmien: boolean
    usunieto: boolean
    tablicamoja: any[]
    kierunek: string
    array: string[]
    kvp: KeyValueProcessor = addKeyValue;
    constructor() {
        this.array = ["ZABAWNE!!", "SŁABO!!!", "POSTARAJ SIĘ BARDZIEJ!!!", "BUUUUUUUU!", "DOBRZE!!!"]
        // this.kvp("BU")
        this.test = new Gra()
        this.zmienna = true
        this.poczatekx = 0
        this.poczateky = 0
        this.sciezka = []
        this.tablica = [[], []]
        this.tablicamoja = []
        this.zmien = true
        this.usunieto = false
        this.kierunek = "prawo"
        let move = (e: MouseEvent) => { this.move(e, this) }
        let usun = () => { this.usun(this, usuwanie2) }
        let usuwanie2 = () => { this.usuwanie2(this) }
        let nex = () => { this.next(this, usun, usuwanie2) }
        let klik = (e: MouseEvent) => { this.click(e, this, move, nex) }
        document.body.addEventListener("click", klik)
    }
    public click(e: MouseEvent, thisd: Move, move: EventListener, nex: EventListener) {
        let els = e.target as HTMLElement
        // if (els.className == "kule" && els.parentElement.className == "kulka") {
        //     let sl = els.parentElement.id.slice(2).split("__")
        //     let y = parseInt(sl[0])
        //     let x = parseInt(sl[1])
        //     if(this.poczatekx == x && this.poczateky == y){
        //         this.zmienna = false
        //     }
        //     else {
        //         if (this.poczateky != 0 && this.poczatekx != 0){
                    
        //             // let dis2: HTMLElement = document.getElementById("id" + this.poczateky + "__" + this.poczatekx)
                  
        //             // let es2 = dis2.children[0] as HTMLElement
        //             // if(es2 != undefined){
        //             //     console.log(es2)

        //             //     es2.style.width = "30px"
        //             //     es2.style.height = "30px"
        //             //     dis2.className = "kulka"
        //             //     this.test.tab[this.poczateky][this.poczatekx] = "X"
                        
        //             // }
        //             // this.zmienna = true
        //         }

        //     }
        // }
        console.log(this.poczatekx, this.poczateky)
        if (this.zmienna == true) {
            for (let x = 0; x < 9; x++) {
                for (let y = 0; y < 9; y++) {
                    let dis1: HTMLElement = document.getElementById("id" + x + "__" + y)
                    dis1.style.backgroundColor = "white"
                }
            }
            for (let a = 0; a < 9; a++) {
                for (let b = 0; b < 9; b++) {
                    if (this.test.tab[a][b] != "X" && this.test.tab[a][b] != "S") {
                        this.test.tab[a][b] = "0"
                    }
                }
            }
            let tab = thisd.test.tab
            let es = e.target as HTMLElement;
            if (es.className == "kulka") {
                let sl = es.id.slice(2).split("__")
                let y = parseInt(sl[0])
                let x = parseInt(sl[1])
                if (tab[y][x - 1] != undefined && tab[y][x - 1] != "X" || tab[y][x + 1] != undefined && tab[y][x + 1] != "X" || tab[y - 1] != undefined && tab[y - 1][x] != "X" || tab[y + 1] != undefined && tab[y + 1][x] != "X") {
                    let es2 = es.children[0] as HTMLElement
                    es2.style.width = "40px"
                    es2.style.height = "40px"
                    this.poczatekx = x
                    this.poczateky = y
                    tab[y][x] = "S"
                    es.className = "klikS"
                    document.body.addEventListener("mousemove", move)
                    let zmienna1 = 1
                    this.rekurencja(this.poczatekx, this.poczateky, es, zmienna1)
                    this.zmienna = false
                }
            }
            if (es.className == "kule") {
                let sl = es.parentElement.id.slice(2).split("__")
                let y = parseInt(sl[0])
                let x = parseInt(sl[1])
                if (tab[y][x - 1] != undefined && tab[y][x - 1] != "X" || tab[y][x + 1] != undefined && tab[y][x + 1] != "X" || tab[y - 1] != undefined && tab[y - 1][x] != "X" || tab[y + 1] != undefined && tab[y + 1][x] != "X") {
                    es.style.width = "40px"
                    es.style.height = "40px"
                    this.poczatekx = x
                    this.poczateky = y
                    tab[y][x] = "S"
                    // es.className = "klikk"
                    es.parentElement.className = "klikS"
                    document.body.addEventListener("mousemove", move)
                    let zmienna1 = 1
                    this.rekurencja(this.poczatekx, this.poczateky, es, zmienna1)
                    this.zmienna = false
                }
            }
        }
        else {
            let es1 = e.target as HTMLElement;
            let sl = es1.id.slice(2).split("__")
            let y = parseInt(sl[0])
            let x = parseInt(sl[1])
            if (es1.className == "kule") {
                sl = es1.parentElement.id.slice(2).split("__")
                y = parseInt(sl[0])
                x = parseInt(sl[1])
            }
            if (es1.className == "pola" && this.test.tab[y][x] != "0") {
                document.body.removeEventListener("mousemove", move)
                let divek: HTMLElement = document.getElementById("id" + this.poczateky + "__" + this.poczatekx)
                let divek1 = divek.children[0] as HTMLElement;
                let mojeid = divek1.id
                divek1.remove()
                let kolor = divek1.style.backgroundColor
                let divek2: HTMLDivElement = document.createElement("div")
                divek2.className = "kule"
                divek2.id = mojeid
                divek2.style.backgroundColor = kolor
                es1.appendChild(divek2)
                this.test.tab[this.poczateky][this.poczatekx] = "0"
                this.test.tab[y][x] = "X"
                divek.className = "pola"
                for (let a = 0; a < 9; a++) {
                    for (let b = 0; b < 9; b++) {
                        let dis1: HTMLElement = document.getElementById("id" + a + "__" + b)
                        if (dis1.style.backgroundColor == "red") {
                            dis1.style.backgroundColor = "pink"
                        }
                    }
                }
                let dis2: HTMLElement = document.getElementById("id" + y + "__" + x)
                dis2.className = "kulka"
                setTimeout(nex, 500)
            }
            else if (es1.className == "kule" || es1.className == "kulka" || es1.className == "klikS" || this.test.tab[y][x] == "0") {
                document.body.removeEventListener("mousemove", move)
                if (es1.className == "klikS") {
                    let es2 = es1.children[0] as HTMLElement
                    es2.style.width = "30px"
                    es2.style.height = "30px"
                    es1.className = "kulka"
                    this.test.tab[this.poczateky][this.poczatekx] = "X"
                }
                if (es1.className == "kule" && es1.parentElement.className == "klikS") {
                    es1.style.width = "30px"
                    es1.style.height = "30px"
                    es1.parentElement.className = "kulka"
                    this.test.tab[this.poczateky][this.poczatekx] = "X"
                }
                if (es1.className == "kule" && es1.parentElement.className == "kulka") {
                    let dis2: HTMLElement = document.getElementById("id" + this.poczateky + "__" + this.poczatekx)
                    let es2 = dis2.children[0] as HTMLElement
                    es2.style.width = "30px"
                    es2.style.height = "30px"
                    dis2.className = "kulka"
                    this.test.tab[this.poczateky][this.poczatekx] = "X"
                }
                if (es1.className == "kulka") {
                    let dis2: HTMLElement = document.getElementById("id" + this.poczateky + "__" + this.poczatekx)
                    let es2 = dis2.children[0] as HTMLElement
                    es2.style.width = "30px"
                    es2.style.height = "30px"
                    dis2.className = "kulka"
                    this.test.tab[this.poczateky][this.poczatekx] = "X"
                }
                if (this.test.tab[y][x] == "0") {
                    let dis2: HTMLElement = document.getElementById("id" + this.poczateky + "__" + this.poczatekx)
                    let es2 = dis2.children[0] as HTMLElement
                    es2.style.width = "30px"
                    es2.style.height = "30px"
                    this.test.tab[this.poczateky][this.poczatekx] = "X"
                }
                for (let x = 0; x < 9; x++) {
                    for (let y = 0; y < 9; y++) {
                        let dis1: HTMLElement = document.getElementById("id" + x + "__" + y)
                        dis1.style.backgroundColor = "white"
                    }
                }

            }
            this.zmienna = true
            for (let a = 0; a < 9; a++) {
                for (let b = 0; b < 9; b++) {
                    if (this.test.tab[a][b] != "X" && this.test.tab[a][b] != "S") {
                        this.test.tab[a][b] = "0"
                    }
                }
            }
        }
    }
    public next(thisd: Move, usun: EventListener, usuwanie2: EventListener) {
        for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {
                let kul: HTMLElement = document.getElementById("id" + x + "__" + y)
                if (kul.children[0] != undefined) {
                    let kulka = kul.children[0] as HTMLDivElement
                    this.tablica = [[], [], [], [], [], [], [], []]
                    this.zmien = true
                    this.kierunek = "0"
                    thisd.sprawdzanie(kulka, x, y, this.tablica, this.zmien, this.kierunek)
                }
            }
        }
        for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {
                let kul: HTMLElement = document.getElementById("id" + x + "__" + y)
                if (kul.children[0] != undefined) {
                    let kulka = kul.children[0] as HTMLDivElement
                    this.tablica = [[], [], [], [], [], [], [], []]
                    this.zmien = true
                    this.kierunek = "0"
                    thisd.sprawdzanie1(kulka, x, y, this.tablica, this.zmien, this.kierunek)
                }
            }
        }
        setTimeout(usun, 300)
    }
    private usun(thisd: Move, usuwanie2: EventListener) {
        let kuleczki: HTMLCollectionOf<Element> = document.getElementsByClassName("kule")
        let len = kuleczki.length
        for (let a = 0; a < thisd.tablicamoja.length; a++) {
            if (thisd.tablicamoja[a][0].length >= 5) {
                for (let b = 0; b < thisd.tablicamoja[a][0].length; b++) {
                    if (thisd.tablicamoja[a][0][b] != undefined) {
                        let item = thisd.tablicamoja[a][0][b] as HTMLElement
                        if (item.parentElement != null) {
                            item.parentElement.className = "pola"
                            let es1 = item.parentElement as HTMLElement;
                            let sl = es1.id.slice(2).split("__")
                            let y = parseInt(sl[0])
                            let x = parseInt(sl[1])
                            this.test.tab[y][x] = "0"
                        }

                        item.remove()
                        this.usunieto = true
                    }
                }
            }
            if (thisd.tablicamoja[a][1].length >= 5) {
                for (let b = 0; b < thisd.tablicamoja[a][1].length; b++) {
                    if (thisd.tablicamoja[a][1][b] != undefined) {
                        let item = thisd.tablicamoja[a][1][b] as HTMLElement
                        if (item.parentElement != null) {
                            item.parentElement.className = "pola"
                            let es1 = item.parentElement as HTMLElement;
                            let sl = es1.id.slice(2).split("__")
                            let y = parseInt(sl[0])
                            let x = parseInt(sl[1])
                            this.test.tab[y][x] = "0"
                        }

                        item.remove()
                        this.usunieto = true
                    }
                }
            }
            if (thisd.tablicamoja[a][2].length >= 5) {
                for (let b = 0; b < thisd.tablicamoja[a][2].length; b++) {
                    if (thisd.tablicamoja[a][2][b] != undefined) {
                        let item = thisd.tablicamoja[a][2][b] as HTMLElement
                        if (item.parentElement != null) {
                            item.parentElement.className = "pola"
                            let es1 = item.parentElement as HTMLElement;
                            let sl = es1.id.slice(2).split("__")
                            let y = parseInt(sl[0])
                            let x = parseInt(sl[1])
                            this.test.tab[y][x] = "0"
                        }

                        item.remove()
                        this.usunieto = true
                    }
                }
            }
            if (thisd.tablicamoja[a][3].length >= 5) {
                for (let b = 0; b < thisd.tablicamoja[a][3].length; b++) {
                    if (thisd.tablicamoja[a][3][b] != undefined) {
                        let item = thisd.tablicamoja[a][3][b] as HTMLElement
                        if (item.parentElement != null) {
                            item.parentElement.className = "pola"
                            let es1 = item.parentElement as HTMLElement;
                            let sl = es1.id.slice(2).split("__")
                            let y = parseInt(sl[0])
                            let x = parseInt(sl[1])
                            this.test.tab[y][x] = "0"
                        }

                        item.remove()
                        this.usunieto = true
                    }
                }
            }
            if (thisd.tablicamoja[a][4].length >= 5) {
                for (let b = 0; b < thisd.tablicamoja[a][4].length; b++) {
                    if (thisd.tablicamoja[a][4][b] != undefined) {
                        let item = thisd.tablicamoja[a][4][b] as HTMLElement
                        if (item.parentElement != null) {
                            item.parentElement.className = "pola"
                            let es1 = item.parentElement as HTMLElement;
                            let sl = es1.id.slice(2).split("__")
                            let y = parseInt(sl[0])
                            let x = parseInt(sl[1])
                            this.test.tab[y][x] = "0"
                        }

                        item.remove()
                        this.usunieto = true
                    }
                }
            }
            if (thisd.tablicamoja[a][5].length >= 5) {
                for (let b = 0; b < thisd.tablicamoja[a][5].length; b++) {
                    if (thisd.tablicamoja[a][5][b] != undefined) {
                        let item = thisd.tablicamoja[a][5][b] as HTMLElement
                        if (item.parentElement != null) {
                            item.parentElement.className = "pola"
                            let es1 = item.parentElement as HTMLElement;
                            let sl = es1.id.slice(2).split("__")
                            let y = parseInt(sl[0])
                            let x = parseInt(sl[1])
                            this.test.tab[y][x] = "0"
                        }

                        item.remove()
                        this.usunieto = true
                    }
                }
            }
            if (thisd.tablicamoja[a][6].length >= 5) {
                for (let b = 0; b < thisd.tablicamoja[a][6].length; b++) {
                    if (thisd.tablicamoja[a][6][b] != undefined) {
                        let item = thisd.tablicamoja[a][6][b] as HTMLElement
                        if (item.parentElement != null) {
                            item.parentElement.className = "pola"
                            let es1 = item.parentElement as HTMLElement;
                            let sl = es1.id.slice(2).split("__")
                            let y = parseInt(sl[0])
                            let x = parseInt(sl[1])
                            this.test.tab[y][x] = "0"
                        }

                        item.remove()
                        this.usunieto = true
                    }
                }
            }
            if (thisd.tablicamoja[a][7].length >= 5) {
                for (let b = 0; b < thisd.tablicamoja[a][7].length; b++) {
                    if (thisd.tablicamoja[a][7][b] != undefined) {
                        let item = thisd.tablicamoja[a][7][b] as HTMLElement
                        if (item.parentElement != null) {
                            item.parentElement.className = "pola"
                            let es1 = item.parentElement as HTMLElement;
                            let sl = es1.id.slice(2).split("__")
                            let y = parseInt(sl[0])
                            let x = parseInt(sl[1])
                            this.test.tab[y][x] = "0"
                        }
                        item.remove()
                        this.usunieto = true
                    }
                }
            }
        }
        let kuleczki2: HTMLCollectionOf<Element> = document.getElementsByClassName("kule")
        let len2 = kuleczki2.length
        if (len - len2 != 0) {
            this.test.punkty1 = this.test.punkty1 + len - len2
            this.punkty(this)
        }
        thisd.tablicamoja = []
        for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {
                let dis1: HTMLElement = document.getElementById("id" + x + "__" + y)
                dis1.style.backgroundColor = "white"
            }
        }
        if (this.usunieto == false) {
            
            for (let a = 0; a < 3; a++) {
                let zmienna = 0
                let b = Math.floor(Math.random() * 9)
                let c = Math.floor(Math.random() * 9)
                if (this.test.tab[b][c] == "X") {
                    for(let x = 0;x < 9;x++){
                        for(let y=0 ;y<9;y++){
                            if(this.test.tab[x][y] == "X") {
                                zmienna = zmienna + 1
                            }
                        }
                    }
                    if(zmienna < 80){
                        console.log(zmienna)
                        a--
                    }
                    else{
                        console.log(zmienna)
                        alert("koniec")
                    }
                }
                else {
                    this.test.tab[b][c] = "X"
                    let pole: HTMLElement = document.getElementById("id" + b + "__" + c)
                    let kol: HTMLDivElement = document.createElement("div")
                    let przep: HTMLElement = document.getElementById(a.toString())
                    kol.className = "kule"
                    kol.style.backgroundColor = przep.style.backgroundColor
                    pole.appendChild(kol)
                    pole.className = "kulka"
                }
            }
            let gr: HTMLElement = document.getElementById("losowanie")
            gr.remove()
            var divek: HTMLDivElement = document.createElement("div")
            divek.id = "losowanie"
            divek.style.border = "1px"
            divek.style.borderStyle = "solid"
            divek.style.borderColor = "black"
            document.body.appendChild(divek)
            for (let a = 0; a < 3; a++) {
                let kolor = Math.floor(Math.random() * 5)
                var kol: HTMLDivElement = document.createElement("div")
                kol.className = "losowanie"
                kol.id = a.toString()
                kol.style.backgroundColor = this.test.kolory[kolor]
                divek.appendChild(kol)
            }
        }
        this.usunieto = false
        for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {
                let kul: HTMLElement = document.getElementById("id" + x + "__" + y)
                if (kul.children[0] != undefined) {
                    let kulka = kul.children[0] as HTMLDivElement
                    this.tablica = [[], [], [], [], [], [], [], []]
                    this.zmien = true
                    this.kierunek = "0"
                    thisd.sprawdzanie(kulka, x, y, this.tablica, this.zmien, this.kierunek)
                }
            }
        }
        for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {
                let kul: HTMLElement = document.getElementById("id" + x + "__" + y)
                if (kul.children[0] != undefined) {
                    let kulka = kul.children[0] as HTMLDivElement
                    this.tablica = [[], [], [], [], [], [], [], []]
                    this.zmien = true
                    this.kierunek = "0"
                    thisd.sprawdzanie1(kulka, x, y, this.tablica, this.zmien, this.kierunek)
                }
            }
        }
        setTimeout(usuwanie2, 300)
    }
    private punkty(thisd: Move) {
        let punk: HTMLElement = document.getElementById("punkty")
        punk.innerHTML = "TWOJE PUNKTY: " + thisd.test.punkty1
    }
    private usuwanie2(thisd: Move) {
        let kuleczki: HTMLCollectionOf<Element> = document.getElementsByClassName("kule")
        let len = kuleczki.length
        for (let a = 0; a < thisd.tablicamoja.length; a++) {
            if (thisd.tablicamoja[a][0].length >= 5) {
                for (let b = 0; b < thisd.tablicamoja[a][0].length; b++) {
                    if (thisd.tablicamoja[a][0][b] != undefined) {
                        let item = thisd.tablicamoja[a][0][b] as HTMLElement
                        if (item.parentElement != null) {
                            item.parentElement.className = "pola"
                            let es1 = item.parentElement as HTMLElement;
                            let sl = es1.id.slice(2).split("__")
                            let y = parseInt(sl[0])
                            let x = parseInt(sl[1])
                            this.test.tab[y][x] = "0"
                        }
                        item.remove()
                    }
                }
            }
            if (thisd.tablicamoja[a][1].length >= 5) {
                for (let b = 0; b < thisd.tablicamoja[a][1].length; b++) {
                    if (thisd.tablicamoja[a][1][b] != undefined) {
                        let item = thisd.tablicamoja[a][1][b] as HTMLElement
                        if (item.parentElement != null) {
                            item.parentElement.className = "pola"
                            let es1 = item.parentElement as HTMLElement;
                            let sl = es1.id.slice(2).split("__")
                            let y = parseInt(sl[0])
                            let x = parseInt(sl[1])
                            this.test.tab[y][x] = "0"
                        }

                        item.remove()
                    }
                }
            }
            if (thisd.tablicamoja[a][2].length >= 5) {
                for (let b = 0; b < thisd.tablicamoja[a][2].length; b++) {
                    if (thisd.tablicamoja[a][2][b] != undefined) {
                        let item = thisd.tablicamoja[a][2][b] as HTMLElement
                        if (item.parentElement != null) {
                            item.parentElement.className = "pola"
                            let es1 = item.parentElement as HTMLElement;
                            let sl = es1.id.slice(2).split("__")
                            let y = parseInt(sl[0])
                            let x = parseInt(sl[1])
                            this.test.tab[y][x] = "0"
                        }

                        item.remove()
                    }
                }
            }
            if (thisd.tablicamoja[a][3].length >= 5) {
                for (let b = 0; b < thisd.tablicamoja[a][3].length; b++) {
                    if (thisd.tablicamoja[a][3][b] != undefined) {
                        let item = thisd.tablicamoja[a][3][b] as HTMLElement
                        if (item.parentElement != null) {
                            item.parentElement.className = "pola"
                            let es1 = item.parentElement as HTMLElement;
                            let sl = es1.id.slice(2).split("__")
                            let y = parseInt(sl[0])
                            let x = parseInt(sl[1])
                            this.test.tab[y][x] = "0"
                        }

                        item.remove()
                    }
                }
            }
            if (thisd.tablicamoja[a][4].length >= 5) {
                for (let b = 0; b < thisd.tablicamoja[a][4].length; b++) {
                    if (thisd.tablicamoja[a][4][b] != undefined) {
                        let item = thisd.tablicamoja[a][4][b] as HTMLElement
                        if (item.parentElement != null) {
                            item.parentElement.className = "pola"
                            let es1 = item.parentElement as HTMLElement;
                            let sl = es1.id.slice(2).split("__")
                            let y = parseInt(sl[0])
                            let x = parseInt(sl[1])
                            this.test.tab[y][x] = "0"
                        }

                        item.remove()
                    }
                }
            }
            if (thisd.tablicamoja[a][5].length >= 5) {
                for (let b = 0; b < thisd.tablicamoja[a][5].length; b++) {
                    if (thisd.tablicamoja[a][5][b] != undefined) {
                        let item = thisd.tablicamoja[a][5][b] as HTMLElement
                        if (item.parentElement != null) {
                            item.parentElement.className = "pola"
                            let es1 = item.parentElement as HTMLElement;
                            let sl = es1.id.slice(2).split("__")
                            let y = parseInt(sl[0])
                            let x = parseInt(sl[1])
                            this.test.tab[y][x] = "0"
                        }

                        item.remove()
                    }
                }
            }
            if (thisd.tablicamoja[a][6].length >= 5) {
                for (let b = 0; b < thisd.tablicamoja[a][6].length; b++) {
                    if (thisd.tablicamoja[a][6][b] != undefined) {
                        let item = thisd.tablicamoja[a][6][b] as HTMLElement
                        if (item.parentElement != null) {
                            item.parentElement.className = "pola"
                            let es1 = item.parentElement as HTMLElement;
                            let sl = es1.id.slice(2).split("__")
                            let y = parseInt(sl[0])
                            let x = parseInt(sl[1])
                            this.test.tab[y][x] = "0"
                        }
                        item.remove()
                    }
                }
            }
            if (thisd.tablicamoja[a][7].length >= 5) {
                for (let b = 0; b < thisd.tablicamoja[a][7].length; b++) {
                    if (thisd.tablicamoja[a][7][b] != undefined) {
                        let item = thisd.tablicamoja[a][7][b] as HTMLElement
                        if (item.parentElement != null) {
                            item.parentElement.className = "pola"
                            let es1 = item.parentElement as HTMLElement;
                            let sl = es1.id.slice(2).split("__")
                            let y = parseInt(sl[0])
                            let x = parseInt(sl[1])
                            this.test.tab[y][x] = "0"
                        }
                        item.remove()
                    }
                }
            }
        }
        let kuleczki2: HTMLCollectionOf<Element> = document.getElementsByClassName("kule")
        let len2 = kuleczki2.length
        if (len - len2 != 0) {
            this.test.punkty1 = this.test.punkty1 + len - len2
            this.punkty(this)
        }
        thisd.tablicamoja = []
        this.koniec()
    }
    private sprawdzanie(kula: HTMLElement, positionx: number, positiony: number, tablica: HTMLElement[][], zmien: boolean, kierunek: string) {
        let kolorek = kula.style.backgroundColor
        let diveke: HTMLElement = document.getElementById("id" + (positionx + 1).toString() + "__" + (positiony + 1).toString())
        let divekf: HTMLElement = document.getElementById("id" + (positionx + 1).toString() + "__" + (positiony - 1).toString())
        let divekg: HTMLElement = document.getElementById("id" + (positionx - 1).toString() + "__" + (positiony - 1).toString())
        let divekh: HTMLElement = document.getElementById("id" + (positionx - 1).toString() + "__" + (positiony + 1).toString())
        if (tablica[0].length == 0) {
            tablica[0].push(kula)
        }
        if (tablica[1].length == 0) {
            tablica[1].push(kula)
        }
        if (tablica[2].length == 0) {
            tablica[2].push(kula)
        }
        if (tablica[3].length == 0) {
            tablica[3].push(kula)
        }
        if (tablica[4].length == 0) {
            tablica[4].push(kula)
        }
        if (tablica[5].length == 0) {
            tablica[5].push(kula)
        }
        if (tablica[6].length == 0) {
            tablica[6].push(kula)
        }
        if (tablica[7].length == 0) {
            tablica[7].push(kula)
        }
        zmien = true
        if (diveke != null) {
            if (diveke.children[0] != undefined && kierunek == "0" || diveke.children[0] != undefined && kierunek == "prawodol") {
                kierunek = "prawodol"
                let divek2 = diveke.children[0] as HTMLElement
                let kolorek2 = divek2.style.backgroundColor
                if (kolorek == kolorek2) {
                    for (let a = 0; a < tablica[4].length; a++) {
                        if (tablica[4][a] == divek2) {
                            zmien = false
                        }
                    }
                    if (zmien == true) {
                        tablica[4].push(divek2)
                    }
                    this.tablicamoja.push(tablica)
                    this.sprawdzanie(kula, positionx + 1, positiony + 1, tablica, zmien, kierunek)
                }
            }
        }
        zmien = true
        if (divekf != null) {
            if (divekf.children[0] != undefined && kierunek == "0" || divekf.children[0] != undefined && kierunek == "lewodol") {
                kierunek = "lewodol"
                let divek2 = divekf.children[0] as HTMLElement
                let kolorek2 = divek2.style.backgroundColor
                if (kolorek == kolorek2) {
                    for (let a = 0; a < tablica[5].length; a++) {
                        if (tablica[5][a] == divek2) {
                            zmien = false
                        }
                    }
                    if (zmien == true) {
                        tablica[5].push(divek2)
                    }
                    this.tablicamoja.push(tablica)
                    this.sprawdzanie(kula, positionx + 1, positiony - 1, tablica, zmien, kierunek)
                }
            }
        }
        zmien = true
        if (divekg != null) {
            if (divekg.children[0] != undefined && kierunek == "0" || divekg.children[0] != undefined && kierunek == "goralewo") {
                kierunek = "goralewo"
                let divek2 = divekg.children[0] as HTMLElement
                let kolorek2 = divek2.style.backgroundColor
                if (kolorek == kolorek2) {
                    for (let a = 0; a < tablica[6].length; a++) {
                        if (tablica[6][a] == divek2) {
                            zmien = false
                        }
                    }
                    if (zmien == true) {
                        tablica[6].push(divek2)
                    }
                    this.tablicamoja.push(tablica)
                    this.sprawdzanie(kula, positionx - 1, positiony - 1, tablica, zmien, kierunek)
                }
            }
        }
        zmien = true
        if (divekh != null) {
            if (divekh.children[0] != undefined && kierunek == "0" || divekh.children[0] != undefined && kierunek == "goraprawo") {
                kierunek = "goraprawo"
                let divek2 = divekh.children[0] as HTMLElement
                let kolorek2 = divek2.style.backgroundColor
                if (kolorek == kolorek2) {
                    for (let a = 0; a < tablica[7].length; a++) {
                        if (tablica[7][a] == divek2) {
                            zmien = false
                        }
                    }
                    if (zmien == true) {
                        tablica[7].push(divek2)
                    }
                    this.tablicamoja.push(tablica)
                    this.sprawdzanie(kula, positionx - 1, positiony + 1, tablica, zmien, kierunek)
                }
            }
        }
    }
    private sprawdzanie1(kula: HTMLElement, positionx: number, positiony: number, tablica: HTMLElement[][], zmien: boolean, kierunek: string) {
        let kolorek = kula.style.backgroundColor
        let divek: HTMLElement = document.getElementById("id" + positionx.toString() + "__" + (positiony + 1).toString())
        let divekb: HTMLElement = document.getElementById("id" + (positionx + 1).toString() + "__" + positiony.toString())
        let divekc: HTMLElement = document.getElementById("id" + (positionx - 1).toString() + "__" + (positiony).toString())
        let divekd: HTMLElement = document.getElementById("id" + (positionx).toString() + "__" + (positiony - 1).toString())
        if (tablica[0].length == 0) {
            tablica[0].push(kula)
        }
        if (tablica[1].length == 0) {
            tablica[1].push(kula)
        }
        if (tablica[2].length == 0) {
            tablica[2].push(kula)
        }
        if (tablica[3].length == 0) {
            tablica[3].push(kula)
        }
        if (tablica[4].length == 0) {
            tablica[4].push(kula)
        }
        if (tablica[5].length == 0) {
            tablica[5].push(kula)
        }
        if (tablica[6].length == 0) {
            tablica[6].push(kula)
        }
        if (tablica[7].length == 0) {
            tablica[7].push(kula)
        }
        zmien = true
        if (divek != null) {
            if (divek.children[0] != undefined && kierunek == "0" || divek.children[0] != undefined && kierunek == "prawo") {
                kierunek = "prawo"
                let divek2 = divek.children[0] as HTMLElement
                let kolorek2 = divek2.style.backgroundColor
                if (kolorek == kolorek2) {
                    zmien = true
                    for (let a = 0; a < tablica[0].length; a++) {
                        if (tablica[0][a] == divek2) {
                            zmien = false
                        }
                    }
                    if (zmien == true) {
                        tablica[0].push(divek2)
                    }
                    this.tablicamoja.push(tablica)
                    this.sprawdzanie1(kula, positionx, positiony + 1, tablica, zmien, kierunek)
                }
            }
        }
        zmien = true
        if (divekb != null) {
            if (divekb.children[0] != undefined && kierunek == "0" || divekb.children[0] != undefined && kierunek == "dol") {
                kierunek = "dol"
                let divek2 = divekb.children[0] as HTMLElement
                let kolorek2 = divek2.style.backgroundColor
                if (kolorek == kolorek2) {
                    for (let a = 0; a < tablica[1].length; a++) {
                        if (tablica[1][a] == divek2) {
                            zmien = false
                        }
                    }
                    if (zmien == true) {
                        tablica[1].push(divek2)
                    }
                    this.tablicamoja.push(tablica)
                    this.sprawdzanie1(kula, positionx + 1, positiony, tablica, zmien, kierunek)
                }
            }
        }
        zmien = true
        if (divekc != null) {
            if (divekc.children[0] != undefined && kierunek == "0" || divekc.children[0] != undefined && kierunek == "gora") {
                kierunek = "gora"
                let divek2 = divekc.children[0] as HTMLElement
                let kolorek2 = divek2.style.backgroundColor
                if (kolorek == kolorek2) {
                    for (let a = 0; a < tablica[2].length; a++) {
                        if (tablica[2][a] == divek2) {
                            zmien = false
                        }
                    }
                    if (zmien == true) {
                        tablica[2].push(divek2)
                    }
                    this.tablicamoja.push(tablica)
                    this.sprawdzanie1(kula, positionx - 1, positiony, tablica, zmien, kierunek)
                }
            }
        }
        zmien = true
        if (divekd != null) {
            if (divekd.children[0] != undefined && kierunek == "0" || divekd.children[0] != undefined && kierunek == "lewo") {
                kierunek = "lewo"
                let divek2 = divekd.children[0] as HTMLElement
                let kolorek2 = divek2.style.backgroundColor
                if (kolorek == kolorek2) {
                    for (let a = 0; a < tablica[3].length; a++) {
                        if (tablica[3][a] == divek2) {
                            zmien = false
                        }
                    }
                    if (zmien == true) {
                        tablica[3].push(divek2)
                    }
                    this.tablicamoja.push(tablica)
                    this.sprawdzanie1(kula, positionx, positiony - 1, tablica, zmien, kierunek)
                }
            }
        }

    }
    private rekurencja(liczbax: number, liczbay: number, es: HTMLElement, zmienna1: number) {
        if (liczbax <= 8 && liczbax >= 0 && liczbay >= 0 && liczbay <= 8) {

            if (liczbax - 1 >= 0) {
                if (this.test.tab[liczbay][liczbax - 1] == "0" || parseInt(this.test.tab[liczbay][liczbax - 1]) > zmienna1 + 1) {
                    this.test.tab[liczbay][liczbax - 1] = zmienna1.toString()
                    this.rekurencja(liczbax - 1, liczbay, es, zmienna1 + 1)
                }
            }
            if (liczbay - 1 >= 0) {
                if (this.test.tab[liczbay - 1][liczbax] == "0" || parseInt(this.test.tab[liczbay - 1][liczbax]) > zmienna1 + 1) {
                    this.test.tab[liczbay - 1][liczbax] = zmienna1.toString()
                    this.rekurencja(liczbax, liczbay - 1, es, zmienna1 + 1)
                }
            }
            if (liczbax + 1 <= 8) {
                if (this.test.tab[liczbay][liczbax + 1] == "0" || parseInt(this.test.tab[liczbay][liczbax + 1]) > zmienna1 + 1) {
                    this.test.tab[liczbay][liczbax + 1] = zmienna1.toString()
                    this.rekurencja(liczbax + 1, liczbay, es, zmienna1 + 1)
                }
            }
            if (liczbay + 1 <= 8) {
                if (this.test.tab[liczbay + 1][liczbax] == "0" || parseInt(this.test.tab[liczbay + 1][liczbax]) > zmienna1 + 1) {
                    this.test.tab[liczbay + 1][liczbax] = zmienna1.toString()
                    this.rekurencja(liczbax, liczbay + 1, es, zmienna1 + 1)
                }
            }
        }
    }
    private move(e: MouseEvent, thisd: Move) {
        if (e.clientX >= 10 && e.clientX <= 477 && e.clientY >= 10 && e.clientY <= 477) {
            let bx = Math.floor((e.clientX - 10) / 52)
            let by = Math.floor((e.clientY - 10) / 52)
            let div: HTMLElement = document.getElementById("id" + by.toString() + "__" + bx.toString())
            if (div.className == "pola" || div.className == "klikS") {
                let num = parseInt(this.test.tab[by][bx])
                let table: string[] = []
                this.rekurencjamove(bx, by, num, table)
            }
        }

    }
    private rekurencjamove(liczbax: number, liczbay: number, num: number, table: Array<string>) {
        if (liczbax == this.poczatekx && liczbay == this.poczateky) {
            let str1 = "id" + this.poczateky.toString() + "__" + this.poczatekx.toString()
            table.push(str1)
            for (let x = 0; x < 9; x++) {
                for (let y = 0; y < 9; y++) {
                    let dis1: HTMLElement = document.getElementById("id" + x + "__" + y)
                    dis1.style.backgroundColor = "white"

                }
            }
            for (let a = 0; a < table.length; a++) {
                let dis: HTMLElement = document.getElementById(table[a])

                dis.style.backgroundColor = "red"
            }
        }
        else {
            if (this.test.tab[liczbay][liczbax + 1] == "S" || this.test.tab[liczbay][liczbax - 1] == "S" || liczbay + 1 <= 8 && this.test.tab[liczbay + 1][liczbax] == "S" || liczbay - 1 >= 0 && this.test.tab[liczbay - 1][liczbax] == "S") {
                let str = "id" + liczbay.toString() + "__" + liczbax.toString()
                table.push(str)
                let str1 = "id" + this.poczateky.toString() + "__" + this.poczatekx.toString()
                table.push(str1)
                for (let x = 0; x < 9; x++) {
                    for (let y = 0; y < 9; y++) {
                        let dis1: HTMLElement = document.getElementById("id" + x + "__" + y)
                        dis1.style.backgroundColor = "white"

                    }
                }
                for (let a = 0; a < table.length; a++) {
                    let dis: HTMLElement = document.getElementById(table[a])

                    dis.style.backgroundColor = "red"
                }
            }
            else {
                if (parseInt(this.test.tab[liczbay][liczbax + 1]) == num - 1) {
                    let str = "id" + liczbay.toString() + "__" + liczbax.toString()
                    table.push(str)
                    this.rekurencjamove(liczbax + 1, liczbay, num - 1, table)
                }
                else if (parseInt(this.test.tab[liczbay][liczbax - 1]) == num - 1) {
                    let str = "id" + liczbay.toString() + "__" + liczbax.toString()
                    table.push(str)
                    this.rekurencjamove(liczbax - 1, liczbay, num - 1, table)
                }
                else if (liczbay + 1 <= 8 && parseInt(this.test.tab[liczbay + 1][liczbax]) == num - 1) {
                    let str = "id" + liczbay.toString() + "__" + liczbax.toString()
                    table.push(str)
                    this.rekurencjamove(liczbax, liczbay + 1, num - 1, table)
                }
                else if (liczbay - 1 >= 0 && parseInt(this.test.tab[liczbay - 1][liczbax]) == num - 1) {
                    let str = "id" + liczbay.toString() + "__" + liczbax.toString()
                    table.push(str)
                    this.rekurencjamove(liczbax, liczbay - 1, num - 1, table)
                }
            }
        }
    }
    
    private koniec() {
        let ilosc: HTMLCollectionOf<Element> = document.getElementsByClassName("kule")
        if (ilosc.length == 81 || ilosc.length == 0) {
            this.alercik()
        }
        let komentarze = Math.floor(Math.random() * 5)
        this.kvp(this.array[komentarze])
        setTimeout(function () {
            let kom: HTMLElement = document.getElementById("koment")
            kom.innerHTML = ""
        }, 1000)
    }
    @alert1
    private alercik(){
        alert("KONIEC GRY, TWOJE PUNKTY: " + this.test.punkty1)
    }

}
function alert1(target: any, name: string, descriptor: any) {
    alert("Witaj")
}

