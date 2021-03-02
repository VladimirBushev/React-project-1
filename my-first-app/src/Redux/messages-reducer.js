import ryjik from './../images/ryjik.jpg'
import vasiliy from './../images/vasiliy.jpg'
import kisa from './../images/kisa.jpg'
import cherniy from './../images/cherniy.jpg'
import barsik from './../images/barsik.jpg'
import matroskin from './../images/matroskin.jpg'
import kosmokot from './../images/kosmokot.jpg'

const WHAT_FRIEND_DIALOG_SHOW = 'WHAT-FRIEND-DIALOG-SHOW'
const SEND_MESSAGE = 'SEND-MESSAGE'





let initialState = {
    myImg: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg',
    friend: 'all',
    dialogs: {
        barsik: {
            messages: [
                { id: 'my', time: '10:00', text: 'Текст Текст Текст Текст' },
                { id: 'my', time: '19:00', text: 'Текст Текст' },
                { id: 'fr', time: '18:00', text: 'Текст Текст Текст Текст' },
                { id: 'fr', time: '17:00', text: 'Текст Текст Текст Текст' },
                { id: 'my', time: '16:00', text: 'Текст' },
            ],
            name: 'Барсик',
            to: 'barsik',
            lastMes: '',
            lastMesTime: '',
            img: barsik,
        },
        vasiliy: {
            messages: [],
            name: 'Василий',
            to: 'vasiliy',
            lastMes: '',
            img: vasiliy,
        },
        ryjik: {
            messages: [],
            name: 'Рыжик',
            to: 'ryjik',
            lastMes: '',
            img: ryjik,
        },
        chernyi: {
            messages: [],
            name: 'Черный',
            to: 'chernyi',
            lastMes: '',
            img: cherniy,
        },
        kisa: {
            messages: [],
            name: 'Киса',
            to: 'kisa',
            lastMes: '',
            img: kisa,
        },
        matroskin: {
            messages: [],
            name: 'Матроскин',
            to: 'matroskin',
            lastMes: '',
            img: matroskin,
        },
        kosmokot: {
            messages: [],
            name: 'Космокот',
            to: 'kosmokot',
            lastMes: '',
            img: kosmokot,
        },
    },
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case WHAT_FRIEND_DIALOG_SHOW: {
            return {
                ...state,
                dialogs: {
                    ...state.dialogs
                },
                friend: action.friend
            }
        }

        case SEND_MESSAGE: {
            let stateCopy = {
                ...state,
                dialogs: {
                    ...state.dialogs,
                    [state.friend]: {
                        ...state.dialogs[state.friend],
                        messages: [...state.dialogs[state.friend].messages]
                    }
                }
            }
            for (let dialog in stateCopy.dialogs) {
                stateCopy.dialogs[dialog].last++
            }
            let textMes = action.message
            if (textMes.length) {
                let hours = new Date().getHours()
                let minutes = new Date().getMinutes()
                minutes = JSON.stringify(minutes)
                if (minutes.length < 2) minutes = '0' + minutes
                stateCopy.dialogs[stateCopy.friend].messages = [...stateCopy.dialogs[stateCopy.friend].messages, { id: 'my', time: hours + ':' + minutes, text: textMes }]
                stateCopy.dialogs[stateCopy.friend].last = 1;
                if (textMes.length > 30) {
                    textMes = textMes.slice(0, 30) + '...'
                }
                stateCopy.dialogs[stateCopy.friend].lastMes = textMes
                stateCopy.dialogs[stateCopy.friend].lastMesTime = hours + ':' + minutes;
            }
            return stateCopy;
        }
        default:
            return state;
    }
}

export const whatFriendDialogActionCreator = (friend) => ({ type: WHAT_FRIEND_DIALOG_SHOW, friend })
export const addMessActionCreator = (message) => ({ type: SEND_MESSAGE, message })

export default dialogsReducer;