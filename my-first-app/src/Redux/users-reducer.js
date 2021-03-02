import kosmokot from './../images/kosmokot.jpg'
import ryjik from './../images/ryjik.jpg'
import vasiliy from './../images/vasiliy.jpg'
import kisa from './../images/kisa.jpg'
import cherniy from './../images/cherniy.jpg'
import barsik from './../images/barsik.jpg'
import matroskin from './../images/matroskin.jpg'

let initialState = {
    users: [
        { name: 'Космокот', img: kosmokot, id: 1.1 },
        { name: 'Рыжик', img: ryjik, id: 1.2 },
        { name: 'Василий', img: vasiliy, id: 1.3},
        { name: 'Киса', img: kisa, id: 1.4},
        { name: 'Черный', img: cherniy, id: 1.5 },
        { name: 'Барсик', img: barsik, id: 1.6},
        { name: 'Матроскин', img: matroskin, id: 1.7},
    ]
}

const usersReducer = (state = initialState, action) => {
    return state;
}

export default usersReducer;