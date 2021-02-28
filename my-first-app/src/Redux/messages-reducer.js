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
            img: 'https://w-dog.ru/wallpapers/6/4/445936490088105/kotik-vzglyad-mechtaet.jpg',
        },
        vasiliy: {
            messages: [],
            name: 'Василий',
            to: 'vasiliy',
            lastMes: '',
            img: 'https://www.zastavki.com/pictures/originals/2018Animals___Cats_Large_gray_cat_with_a_surprised_look_123712_.jpg',
        },
        semen: {
            messages: [],
            name: 'Семен',
            to: 'semen',
            lastMes: '',
            img: 'https://tipik.ru/wp-content/uploads/2019/06/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B5%D0%B3%D0%BE-%D1%81%D1%82%D0%BE%D0%BB%D0%B0-%E2%80%94-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C008.jpg',
        },
        ryjik: {
            messages: [],
            name: 'Рыжик',
            to: 'ryjik',
            lastMes: '',
            img: 'http://img.crazys.info/files/i/2008.1.6/1199621372_wall_50.jpg',
        },
        chernyi: {
            messages: [],
            name: 'Черный',
            to: 'chernyi',
            lastMes: '',
            img: 'https://avatars.mds.yandex.net/get-zen_doc/1708265/pub_5e5ff8cc7101ab5f188ec1c9_5e5ffbc115421c7961ba83ad/scale_1200',
        },
        kisa: {
            messages: [],
            name: 'Киса',
            to: 'kisa',
            lastMes: '',
            img: 'https://neskychno.com/wp-content/uploads/2019/12/wsi-imageoptim-4-35-samie-krasivie-koshki-mira-3-1.jpg',
        },
        matroskin: {
            messages: [],
            name: 'Матроскин',
            to: 'matroskin',
            lastMes: '',
            img: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic',
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