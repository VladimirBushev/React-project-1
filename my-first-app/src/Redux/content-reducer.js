import { profileAPI } from '../api/api';
import { toggleIsFetching } from '../Redux/usersapi-reducer'

const PUBLISH_POST = 'PUBLISH-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    users: [
        {
            id: 1.1,
            profileCard: {
                img: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg',
            },
            profileInfo: {
                name: 'Космокот',
                date: '10.12.2016',
                city: 'Санкт-Петербург',
            },
            photos: {
                images: ['https://avatars.mds.yandex.net/get-zen_doc/1545908/pub_5ce2b140465c3000b3720afb_5ce2b565baeb6600affc7c7f/scale_1200',
                    'https://www.zastavki.com/pictures/1920x1200/2009/Space_The_launch_017978_.jpg',
                    'https://www.yenicaggazetesi.com.tr/d/other/yenicag-delik.jpg',
                    'https://www.picturesensations.com/wp-content/uploads/2016/11/M055-w.jpg',
                    'https://yandex-images.naydex.net/ACy973s70/c28d55Vin1kP/nqH6iPCEstYPJmSAM0aNqUgKCrkKSoWhW58MtlP-AP86Q4ARKd-fbIM5F7kakAkGw_dkyh4KBNhSaiEA1vtde94ADmjUxObWXkLTlbNCqQiIP3_sC9twET_--cY3urF6f8U1JSjbWmnGH9e5urH79GHGg7mp6WYKMJiV5fM-WF8v5C8rEhCip4wVYsHT1ZgYatrba_tcBkH7uL9FE5gjf1ohcLJ4aQi5FJ8Snl0X2KUQlYA5enj3yyBKBmZg_pq_2Ve-mICkYQYtNtAi0jWYO-jr-nl6n-QiGHnMtoEYU_86k0Ng-dnaCgS8wkxdZZsGAreiCLp69goii_bE805JnehlPPhyh5Mk_ZdzMkEVCNnoS7haCs5V8fgK_JWS6bI8y9FjwXk7qpnknXOO7zablxMmwdpJyWS6MvqHFsPOqv0KZy4bQfaztk51sLHRhejp6ApYmGiMBQMoOd4UQBqzzjnBcMDKuFl6ly4wzZ2H2HQBpeFJa8qm-PLKJWXwz2ssemXdOdNUY1SO1fBR8DcaSEu7uVnq7sXzGOpfhWHJUDwLkDBg2kj4aUftMO3fVMlFQuaBOGvZdGvQWrVncIz4n4g3vgpBpIKkjRRhwGO023nIOWo7q71lsTuqf9SCCnEdu-FT83r5-Fs3bFAsLWX6Z7D08Ok6aDZK80ildNLdSo65dkxa0SWztk8ls-BTlagoaJvKG7kPxOAruO1lcctCfdhyEJKI2vrJ9K0QXR4WGrfBlsOIG0glmLJY5DdjTSquKhYfS0Cn4cacRgABscQ6emloGblJjtZAeGuuZwG6kE1b0KDQubhb2ST8cl-d1tjXcVZiCApbVevBWub24e16fJh3TorCpLG0b6VDQHE0izgpKPo4Gk10wGtK_0TgWXBNeyFzUTuJ2rsmjhIvruV6pwNnoUoIKqWI0RlFNVCvetw5R05ak4WyBo0EIBIAdzlq-mrLi6l8NbN7yU-HA',
                ]
            },
            friends: {
                friends: [
                    { id: 1.2, name: 'Рыжик', img: 'https://www.zastavki.com/pictures/originals/2018Animals___Cats_Large_gray_cat_with_a_surprised_look_123712_.jpg' },
                    { id: 1.3, name: 'Василий', img: 'https://w-dog.ru/wallpapers/6/4/445936490088105/kotik-vzglyad-mechtaet.jpg' },
                    { id: 1.4, name: 'Киса', img: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic' },
                    { id: 1.5, name: 'Черный', img: 'https://neskychno.com/wp-content/uploads/2019/12/wsi-imageoptim-4-35-samie-krasivie-koshki-mira-3-1.jpg' },
                    { id: 1.6, name: 'Барсик', img: 'https://avatars.mds.yandex.net/get-zen_doc/1708265/pub_5e5ff8cc7101ab5f188ec1c9_5e5ffbc115421c7961ba83ad/scale_1200' },
                    { id: 1.7, name: 'Матроскин', img: 'http://img.crazys.info/files/i/2008.1.6/1199621372_wall_50.jpg' },
                ]
            },
            posts: {
                posts: [
                    { id: 1.1, name: 'Рыжик', text: 'Текст', img: 'https://www.zastavki.com/pictures/originals/2018Animals___Cats_Large_gray_cat_with_a_surprised_look_123712_.jpg' },
                    { id: 1.2, name: 'Василий', text: 'Текст', img: 'https://w-dog.ru/wallpapers/6/4/445936490088105/kotik-vzglyad-mechtaet.jpg' },
                    { id: 1.3, name: 'Киса', text: 'Текст', img: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic' },
                    { id: 1.4, name: 'Черный', text: 'Текст', img: 'https://neskychno.com/wp-content/uploads/2019/12/wsi-imageoptim-4-35-samie-krasivie-koshki-mira-3-1.jpg' },
                    { id: 1.5, name: 'Барсик', text: 'Текст', img: 'https://avatars.mds.yandex.net/get-zen_doc/1708265/pub_5e5ff8cc7101ab5f188ec1c9_5e5ffbc115421c7961ba83ad/scale_1200' },
                    { id: 1.6, name: 'Матроскин', text: 'Текст', img: 'http://img.crazys.info/files/i/2008.1.6/1199621372_wall_50.jpg' },
                ]
            },
            subscriptions: {
                subscriptions: ['']
            },
        },
        {
            id: 1.2,
            profileCard: {
                img: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg',
            },
            profileInfo: {
                name: 'Рыжик',
                date: '10.12.2016',
                city: 'Санкт-Петербург',
            },
            photos: {
                images: ['https://avatars.mds.yandex.net/get-zen_doc/1545908/pub_5ce2b140465c3000b3720afb_5ce2b565baeb6600affc7c7f/scale_1200',
                    'https://www.zastavki.com/pictures/1920x1200/2009/Space_The_launch_017978_.jpg',
                    'https://www.yenicaggazetesi.com.tr/d/other/yenicag-delik.jpg',
                    'https://www.picturesensations.com/wp-content/uploads/2016/11/M055-w.jpg',
                    'https://yandex-images.naydex.net/ACy973s70/c28d55Vin1kP/nqH6iPCEstYPJmSAM0aNqUgKCrkKSoWhW58MtlP-AP86Q4ARKd-fbIM5F7kakAkGw_dkyh4KBNhSaiEA1vtde94ADmjUxObWXkLTlbNCqQiIP3_sC9twET_--cY3urF6f8U1JSjbWmnGH9e5urH79GHGg7mp6WYKMJiV5fM-WF8v5C8rEhCip4wVYsHT1ZgYatrba_tcBkH7uL9FE5gjf1ohcLJ4aQi5FJ8Snl0X2KUQlYA5enj3yyBKBmZg_pq_2Ve-mICkYQYtNtAi0jWYO-jr-nl6n-QiGHnMtoEYU_86k0Ng-dnaCgS8wkxdZZsGAreiCLp69goii_bE805JnehlPPhyh5Mk_ZdzMkEVCNnoS7haCs5V8fgK_JWS6bI8y9FjwXk7qpnknXOO7zablxMmwdpJyWS6MvqHFsPOqv0KZy4bQfaztk51sLHRhejp6ApYmGiMBQMoOd4UQBqzzjnBcMDKuFl6ly4wzZ2H2HQBpeFJa8qm-PLKJWXwz2ssemXdOdNUY1SO1fBR8DcaSEu7uVnq7sXzGOpfhWHJUDwLkDBg2kj4aUftMO3fVMlFQuaBOGvZdGvQWrVncIz4n4g3vgpBpIKkjRRhwGO023nIOWo7q71lsTuqf9SCCnEdu-FT83r5-Fs3bFAsLWX6Z7D08Ok6aDZK80ildNLdSo65dkxa0SWztk8ls-BTlagoaJvKG7kPxOAruO1lcctCfdhyEJKI2vrJ9K0QXR4WGrfBlsOIG0glmLJY5DdjTSquKhYfS0Cn4cacRgABscQ6emloGblJjtZAeGuuZwG6kE1b0KDQubhb2ST8cl-d1tjXcVZiCApbVevBWub24e16fJh3TorCpLG0b6VDQHE0izgpKPo4Gk10wGtK_0TgWXBNeyFzUTuJ2rsmjhIvruV6pwNnoUoIKqWI0RlFNVCvetw5R05ak4WyBo0EIBIAdzlq-mrLi6l8NbN7yU-HA',
                ]
            },
            friends: {
                friends: [
                    { id: 1.2, name: 'Рыжик', img: 'https://www.zastavki.com/pictures/originals/2018Animals___Cats_Large_gray_cat_with_a_surprised_look_123712_.jpg' },
                    { id: 1.3, name: 'Василий', img: 'https://w-dog.ru/wallpapers/6/4/445936490088105/kotik-vzglyad-mechtaet.jpg' },
                    { id: 1.4, name: 'Киса', img: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic' },
                    { id: 1.5, name: 'Черный', img: 'https://neskychno.com/wp-content/uploads/2019/12/wsi-imageoptim-4-35-samie-krasivie-koshki-mira-3-1.jpg' },
                    { id: 1.6, name: 'Барсик', img: 'https://avatars.mds.yandex.net/get-zen_doc/1708265/pub_5e5ff8cc7101ab5f188ec1c9_5e5ffbc115421c7961ba83ad/scale_1200' },
                    { id: 1.7, name: 'Матроскин', img: 'http://img.crazys.info/files/i/2008.1.6/1199621372_wall_50.jpg' },
                ]
            },
            posts: {
                posts: [
                    { id: 1.1, name: 'Рыжик', text: 'Текст', img: 'https://www.zastavki.com/pictures/originals/2018Animals___Cats_Large_gray_cat_with_a_surprised_look_123712_.jpg' },
                    { id: 1.2, name: 'Василий', text: 'Текст', img: 'https://w-dog.ru/wallpapers/6/4/445936490088105/kotik-vzglyad-mechtaet.jpg' },
                    { id: 1.3, name: 'Киса', text: 'Текст', img: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic' },
                    { id: 1.4, name: 'Черный', text: 'Текст', img: 'https://neskychno.com/wp-content/uploads/2019/12/wsi-imageoptim-4-35-samie-krasivie-koshki-mira-3-1.jpg' },
                    { id: 1.5, name: 'Барсик', text: 'Текст', img: 'https://avatars.mds.yandex.net/get-zen_doc/1708265/pub_5e5ff8cc7101ab5f188ec1c9_5e5ffbc115421c7961ba83ad/scale_1200' },
                    { id: 1.6, name: 'Матроскин', text: 'Текст', img: 'http://img.crazys.info/files/i/2008.1.6/1199621372_wall_50.jpg' },
                ]
            },
            subscriptions: {
                subscriptions: ['']
            },
        },
        {
            id: 1.3,
            profileCard: {
                img: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg',
            },
            profileInfo: {
                name: 'Василий',
                date: '10.12.2016',
                city: 'Санкт-Петербург',
            },
            photos: {
                images: ['https://avatars.mds.yandex.net/get-zen_doc/1545908/pub_5ce2b140465c3000b3720afb_5ce2b565baeb6600affc7c7f/scale_1200',
                    'https://www.zastavki.com/pictures/1920x1200/2009/Space_The_launch_017978_.jpg',
                    'https://www.yenicaggazetesi.com.tr/d/other/yenicag-delik.jpg',
                    'https://www.picturesensations.com/wp-content/uploads/2016/11/M055-w.jpg',
                    'https://yandex-images.naydex.net/ACy973s70/c28d55Vin1kP/nqH6iPCEstYPJmSAM0aNqUgKCrkKSoWhW58MtlP-AP86Q4ARKd-fbIM5F7kakAkGw_dkyh4KBNhSaiEA1vtde94ADmjUxObWXkLTlbNCqQiIP3_sC9twET_--cY3urF6f8U1JSjbWmnGH9e5urH79GHGg7mp6WYKMJiV5fM-WF8v5C8rEhCip4wVYsHT1ZgYatrba_tcBkH7uL9FE5gjf1ohcLJ4aQi5FJ8Snl0X2KUQlYA5enj3yyBKBmZg_pq_2Ve-mICkYQYtNtAi0jWYO-jr-nl6n-QiGHnMtoEYU_86k0Ng-dnaCgS8wkxdZZsGAreiCLp69goii_bE805JnehlPPhyh5Mk_ZdzMkEVCNnoS7haCs5V8fgK_JWS6bI8y9FjwXk7qpnknXOO7zablxMmwdpJyWS6MvqHFsPOqv0KZy4bQfaztk51sLHRhejp6ApYmGiMBQMoOd4UQBqzzjnBcMDKuFl6ly4wzZ2H2HQBpeFJa8qm-PLKJWXwz2ssemXdOdNUY1SO1fBR8DcaSEu7uVnq7sXzGOpfhWHJUDwLkDBg2kj4aUftMO3fVMlFQuaBOGvZdGvQWrVncIz4n4g3vgpBpIKkjRRhwGO023nIOWo7q71lsTuqf9SCCnEdu-FT83r5-Fs3bFAsLWX6Z7D08Ok6aDZK80ildNLdSo65dkxa0SWztk8ls-BTlagoaJvKG7kPxOAruO1lcctCfdhyEJKI2vrJ9K0QXR4WGrfBlsOIG0glmLJY5DdjTSquKhYfS0Cn4cacRgABscQ6emloGblJjtZAeGuuZwG6kE1b0KDQubhb2ST8cl-d1tjXcVZiCApbVevBWub24e16fJh3TorCpLG0b6VDQHE0izgpKPo4Gk10wGtK_0TgWXBNeyFzUTuJ2rsmjhIvruV6pwNnoUoIKqWI0RlFNVCvetw5R05ak4WyBo0EIBIAdzlq-mrLi6l8NbN7yU-HA',
                ]
            },
            friends: {
                friends: [
                    { id: 1.2, name: 'Рыжик', img: 'https://www.zastavki.com/pictures/originals/2018Animals___Cats_Large_gray_cat_with_a_surprised_look_123712_.jpg' },
                    { id: 1.3, name: 'Василий', img: 'https://w-dog.ru/wallpapers/6/4/445936490088105/kotik-vzglyad-mechtaet.jpg' },
                    { id: 1.4, name: 'Киса', img: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic' },
                    { id: 1.5, name: 'Черный', img: 'https://neskychno.com/wp-content/uploads/2019/12/wsi-imageoptim-4-35-samie-krasivie-koshki-mira-3-1.jpg' },
                    { id: 1.6, name: 'Барсик', img: 'https://avatars.mds.yandex.net/get-zen_doc/1708265/pub_5e5ff8cc7101ab5f188ec1c9_5e5ffbc115421c7961ba83ad/scale_1200' },
                    { id: 1.7, name: 'Матроскин', img: 'http://img.crazys.info/files/i/2008.1.6/1199621372_wall_50.jpg' },
                ]
            },
            posts: {
                posts: [
                    { id: 1.1, name: 'Рыжик', text: 'Текст', img: 'https://www.zastavki.com/pictures/originals/2018Animals___Cats_Large_gray_cat_with_a_surprised_look_123712_.jpg' },
                    { id: 1.2, name: 'Василий', text: 'Текст', img: 'https://w-dog.ru/wallpapers/6/4/445936490088105/kotik-vzglyad-mechtaet.jpg' },
                    { id: 1.3, name: 'Киса', text: 'Текст', img: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic' },
                    { id: 1.4, name: 'Черный', text: 'Текст', img: 'https://neskychno.com/wp-content/uploads/2019/12/wsi-imageoptim-4-35-samie-krasivie-koshki-mira-3-1.jpg' },
                    { id: 1.5, name: 'Барсик', text: 'Текст', img: 'https://avatars.mds.yandex.net/get-zen_doc/1708265/pub_5e5ff8cc7101ab5f188ec1c9_5e5ffbc115421c7961ba83ad/scale_1200' },
                    { id: 1.6, name: 'Матроскин', text: 'Текст', img: 'http://img.crazys.info/files/i/2008.1.6/1199621372_wall_50.jpg' },
                ]
            },
            subscriptions: {
                subscriptions: ['']
            },
        },
        {
            id: 1.4,
            profileCard: {
                img: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg',
            },
            profileInfo: {
                name: 'Киса',
                date: '10.12.2016',
                city: 'Санкт-Петербург',
            },
            photos: {
                images: ['https://avatars.mds.yandex.net/get-zen_doc/1545908/pub_5ce2b140465c3000b3720afb_5ce2b565baeb6600affc7c7f/scale_1200',
                    'https://www.zastavki.com/pictures/1920x1200/2009/Space_The_launch_017978_.jpg',
                    'https://www.yenicaggazetesi.com.tr/d/other/yenicag-delik.jpg',
                    'https://www.picturesensations.com/wp-content/uploads/2016/11/M055-w.jpg',
                    'https://yandex-images.naydex.net/ACy973s70/c28d55Vin1kP/nqH6iPCEstYPJmSAM0aNqUgKCrkKSoWhW58MtlP-AP86Q4ARKd-fbIM5F7kakAkGw_dkyh4KBNhSaiEA1vtde94ADmjUxObWXkLTlbNCqQiIP3_sC9twET_--cY3urF6f8U1JSjbWmnGH9e5urH79GHGg7mp6WYKMJiV5fM-WF8v5C8rEhCip4wVYsHT1ZgYatrba_tcBkH7uL9FE5gjf1ohcLJ4aQi5FJ8Snl0X2KUQlYA5enj3yyBKBmZg_pq_2Ve-mICkYQYtNtAi0jWYO-jr-nl6n-QiGHnMtoEYU_86k0Ng-dnaCgS8wkxdZZsGAreiCLp69goii_bE805JnehlPPhyh5Mk_ZdzMkEVCNnoS7haCs5V8fgK_JWS6bI8y9FjwXk7qpnknXOO7zablxMmwdpJyWS6MvqHFsPOqv0KZy4bQfaztk51sLHRhejp6ApYmGiMBQMoOd4UQBqzzjnBcMDKuFl6ly4wzZ2H2HQBpeFJa8qm-PLKJWXwz2ssemXdOdNUY1SO1fBR8DcaSEu7uVnq7sXzGOpfhWHJUDwLkDBg2kj4aUftMO3fVMlFQuaBOGvZdGvQWrVncIz4n4g3vgpBpIKkjRRhwGO023nIOWo7q71lsTuqf9SCCnEdu-FT83r5-Fs3bFAsLWX6Z7D08Ok6aDZK80ildNLdSo65dkxa0SWztk8ls-BTlagoaJvKG7kPxOAruO1lcctCfdhyEJKI2vrJ9K0QXR4WGrfBlsOIG0glmLJY5DdjTSquKhYfS0Cn4cacRgABscQ6emloGblJjtZAeGuuZwG6kE1b0KDQubhb2ST8cl-d1tjXcVZiCApbVevBWub24e16fJh3TorCpLG0b6VDQHE0izgpKPo4Gk10wGtK_0TgWXBNeyFzUTuJ2rsmjhIvruV6pwNnoUoIKqWI0RlFNVCvetw5R05ak4WyBo0EIBIAdzlq-mrLi6l8NbN7yU-HA',
                ]
            },
            friends: {
                friends: [
                    { id: 1.2, name: 'Рыжик', img: 'https://www.zastavki.com/pictures/originals/2018Animals___Cats_Large_gray_cat_with_a_surprised_look_123712_.jpg' },
                    { id: 1.3, name: 'Василий', img: 'https://w-dog.ru/wallpapers/6/4/445936490088105/kotik-vzglyad-mechtaet.jpg' },
                    { id: 1.4, name: 'Киса', img: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic' },
                    { id: 1.5, name: 'Черный', img: 'https://neskychno.com/wp-content/uploads/2019/12/wsi-imageoptim-4-35-samie-krasivie-koshki-mira-3-1.jpg' },
                    { id: 1.6, name: 'Барсик', img: 'https://avatars.mds.yandex.net/get-zen_doc/1708265/pub_5e5ff8cc7101ab5f188ec1c9_5e5ffbc115421c7961ba83ad/scale_1200' },
                    { id: 1.7, name: 'Матроскин', img: 'http://img.crazys.info/files/i/2008.1.6/1199621372_wall_50.jpg' },
                ]
            },
            posts: {
                posts: [
                    { id: 1.1, name: 'Рыжик', text: 'Текст', img: 'https://www.zastavki.com/pictures/originals/2018Animals___Cats_Large_gray_cat_with_a_surprised_look_123712_.jpg' },
                    { id: 1.2, name: 'Василий', text: 'Текст', img: 'https://w-dog.ru/wallpapers/6/4/445936490088105/kotik-vzglyad-mechtaet.jpg' },
                    { id: 1.3, name: 'Киса', text: 'Текст', img: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic' },
                    { id: 1.4, name: 'Черный', text: 'Текст', img: 'https://neskychno.com/wp-content/uploads/2019/12/wsi-imageoptim-4-35-samie-krasivie-koshki-mira-3-1.jpg' },
                    { id: 1.5, name: 'Барсик', text: 'Текст', img: 'https://avatars.mds.yandex.net/get-zen_doc/1708265/pub_5e5ff8cc7101ab5f188ec1c9_5e5ffbc115421c7961ba83ad/scale_1200' },
                    { id: 1.6, name: 'Матроскин', text: 'Текст', img: 'http://img.crazys.info/files/i/2008.1.6/1199621372_wall_50.jpg' },
                ]
            },
            subscriptions: {
                subscriptions: ['']
            },
        },
        {
            id: 1.5,
            profileCard: {
                img: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg',
            },
            profileInfo: {
                name: 'Черный',
                date: '10.12.2016',
                city: 'Санкт-Петербург',
            },
            photos: {
                images: ['https://avatars.mds.yandex.net/get-zen_doc/1545908/pub_5ce2b140465c3000b3720afb_5ce2b565baeb6600affc7c7f/scale_1200',
                    'https://www.zastavki.com/pictures/1920x1200/2009/Space_The_launch_017978_.jpg',
                    'https://www.yenicaggazetesi.com.tr/d/other/yenicag-delik.jpg',
                    'https://www.picturesensations.com/wp-content/uploads/2016/11/M055-w.jpg',
                    'https://yandex-images.naydex.net/ACy973s70/c28d55Vin1kP/nqH6iPCEstYPJmSAM0aNqUgKCrkKSoWhW58MtlP-AP86Q4ARKd-fbIM5F7kakAkGw_dkyh4KBNhSaiEA1vtde94ADmjUxObWXkLTlbNCqQiIP3_sC9twET_--cY3urF6f8U1JSjbWmnGH9e5urH79GHGg7mp6WYKMJiV5fM-WF8v5C8rEhCip4wVYsHT1ZgYatrba_tcBkH7uL9FE5gjf1ohcLJ4aQi5FJ8Snl0X2KUQlYA5enj3yyBKBmZg_pq_2Ve-mICkYQYtNtAi0jWYO-jr-nl6n-QiGHnMtoEYU_86k0Ng-dnaCgS8wkxdZZsGAreiCLp69goii_bE805JnehlPPhyh5Mk_ZdzMkEVCNnoS7haCs5V8fgK_JWS6bI8y9FjwXk7qpnknXOO7zablxMmwdpJyWS6MvqHFsPOqv0KZy4bQfaztk51sLHRhejp6ApYmGiMBQMoOd4UQBqzzjnBcMDKuFl6ly4wzZ2H2HQBpeFJa8qm-PLKJWXwz2ssemXdOdNUY1SO1fBR8DcaSEu7uVnq7sXzGOpfhWHJUDwLkDBg2kj4aUftMO3fVMlFQuaBOGvZdGvQWrVncIz4n4g3vgpBpIKkjRRhwGO023nIOWo7q71lsTuqf9SCCnEdu-FT83r5-Fs3bFAsLWX6Z7D08Ok6aDZK80ildNLdSo65dkxa0SWztk8ls-BTlagoaJvKG7kPxOAruO1lcctCfdhyEJKI2vrJ9K0QXR4WGrfBlsOIG0glmLJY5DdjTSquKhYfS0Cn4cacRgABscQ6emloGblJjtZAeGuuZwG6kE1b0KDQubhb2ST8cl-d1tjXcVZiCApbVevBWub24e16fJh3TorCpLG0b6VDQHE0izgpKPo4Gk10wGtK_0TgWXBNeyFzUTuJ2rsmjhIvruV6pwNnoUoIKqWI0RlFNVCvetw5R05ak4WyBo0EIBIAdzlq-mrLi6l8NbN7yU-HA',
                ]
            },
            friends: {
                friends: [
                    { id: 1.2, name: 'Рыжик', img: 'https://www.zastavki.com/pictures/originals/2018Animals___Cats_Large_gray_cat_with_a_surprised_look_123712_.jpg' },
                    { id: 1.3, name: 'Василий', img: 'https://w-dog.ru/wallpapers/6/4/445936490088105/kotik-vzglyad-mechtaet.jpg' },
                    { id: 1.4, name: 'Киса', img: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic' },
                    { id: 1.5, name: 'Черный', img: 'https://neskychno.com/wp-content/uploads/2019/12/wsi-imageoptim-4-35-samie-krasivie-koshki-mira-3-1.jpg' },
                    { id: 1.6, name: 'Барсик', img: 'https://avatars.mds.yandex.net/get-zen_doc/1708265/pub_5e5ff8cc7101ab5f188ec1c9_5e5ffbc115421c7961ba83ad/scale_1200' },
                    { id: 1.7, name: 'Матроскин', img: 'http://img.crazys.info/files/i/2008.1.6/1199621372_wall_50.jpg' },
                ]
            },
            posts: {
                posts: [
                    { id: 1.1, name: 'Рыжик', text: 'Текст', img: 'https://www.zastavki.com/pictures/originals/2018Animals___Cats_Large_gray_cat_with_a_surprised_look_123712_.jpg' },
                    { id: 1.2, name: 'Василий', text: 'Текст', img: 'https://w-dog.ru/wallpapers/6/4/445936490088105/kotik-vzglyad-mechtaet.jpg' },
                    { id: 1.3, name: 'Киса', text: 'Текст', img: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic' },
                    { id: 1.4, name: 'Черный', text: 'Текст', img: 'https://neskychno.com/wp-content/uploads/2019/12/wsi-imageoptim-4-35-samie-krasivie-koshki-mira-3-1.jpg' },
                    { id: 1.5, name: 'Барсик', text: 'Текст', img: 'https://avatars.mds.yandex.net/get-zen_doc/1708265/pub_5e5ff8cc7101ab5f188ec1c9_5e5ffbc115421c7961ba83ad/scale_1200' },
                    { id: 1.6, name: 'Матроскин', text: 'Текст', img: 'http://img.crazys.info/files/i/2008.1.6/1199621372_wall_50.jpg' },
                ]
            },
            subscriptions: {
                subscriptions: ['']
            },
        },
        {
            id: 1.6,
            profileCard: {
                img: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg',
            },
            profileInfo: {
                name: 'Барсик',
                date: '10.12.2016',
                city: 'Санкт-Петербург',
            },
            photos: {
                images: ['https://avatars.mds.yandex.net/get-zen_doc/1545908/pub_5ce2b140465c3000b3720afb_5ce2b565baeb6600affc7c7f/scale_1200',
                    'https://www.zastavki.com/pictures/1920x1200/2009/Space_The_launch_017978_.jpg',
                    'https://www.yenicaggazetesi.com.tr/d/other/yenicag-delik.jpg',
                    'https://www.picturesensations.com/wp-content/uploads/2016/11/M055-w.jpg',
                    'https://yandex-images.naydex.net/ACy973s70/c28d55Vin1kP/nqH6iPCEstYPJmSAM0aNqUgKCrkKSoWhW58MtlP-AP86Q4ARKd-fbIM5F7kakAkGw_dkyh4KBNhSaiEA1vtde94ADmjUxObWXkLTlbNCqQiIP3_sC9twET_--cY3urF6f8U1JSjbWmnGH9e5urH79GHGg7mp6WYKMJiV5fM-WF8v5C8rEhCip4wVYsHT1ZgYatrba_tcBkH7uL9FE5gjf1ohcLJ4aQi5FJ8Snl0X2KUQlYA5enj3yyBKBmZg_pq_2Ve-mICkYQYtNtAi0jWYO-jr-nl6n-QiGHnMtoEYU_86k0Ng-dnaCgS8wkxdZZsGAreiCLp69goii_bE805JnehlPPhyh5Mk_ZdzMkEVCNnoS7haCs5V8fgK_JWS6bI8y9FjwXk7qpnknXOO7zablxMmwdpJyWS6MvqHFsPOqv0KZy4bQfaztk51sLHRhejp6ApYmGiMBQMoOd4UQBqzzjnBcMDKuFl6ly4wzZ2H2HQBpeFJa8qm-PLKJWXwz2ssemXdOdNUY1SO1fBR8DcaSEu7uVnq7sXzGOpfhWHJUDwLkDBg2kj4aUftMO3fVMlFQuaBOGvZdGvQWrVncIz4n4g3vgpBpIKkjRRhwGO023nIOWo7q71lsTuqf9SCCnEdu-FT83r5-Fs3bFAsLWX6Z7D08Ok6aDZK80ildNLdSo65dkxa0SWztk8ls-BTlagoaJvKG7kPxOAruO1lcctCfdhyEJKI2vrJ9K0QXR4WGrfBlsOIG0glmLJY5DdjTSquKhYfS0Cn4cacRgABscQ6emloGblJjtZAeGuuZwG6kE1b0KDQubhb2ST8cl-d1tjXcVZiCApbVevBWub24e16fJh3TorCpLG0b6VDQHE0izgpKPo4Gk10wGtK_0TgWXBNeyFzUTuJ2rsmjhIvruV6pwNnoUoIKqWI0RlFNVCvetw5R05ak4WyBo0EIBIAdzlq-mrLi6l8NbN7yU-HA',
                ]
            },
            friends: {
                friends: [
                    { id: 1.2, name: 'Рыжик', img: 'https://www.zastavki.com/pictures/originals/2018Animals___Cats_Large_gray_cat_with_a_surprised_look_123712_.jpg' },
                    { id: 1.3, name: 'Василий', img: 'https://w-dog.ru/wallpapers/6/4/445936490088105/kotik-vzglyad-mechtaet.jpg' },
                    { id: 1.4, name: 'Киса', img: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic' },
                    { id: 1.5, name: 'Черный', img: 'https://neskychno.com/wp-content/uploads/2019/12/wsi-imageoptim-4-35-samie-krasivie-koshki-mira-3-1.jpg' },
                    { id: 1.6, name: 'Барсик', img: 'https://avatars.mds.yandex.net/get-zen_doc/1708265/pub_5e5ff8cc7101ab5f188ec1c9_5e5ffbc115421c7961ba83ad/scale_1200' },
                    { id: 1.7, name: 'Матроскин', img: 'http://img.crazys.info/files/i/2008.1.6/1199621372_wall_50.jpg' },
                ]
            },
            posts: {
                posts: [
                    { id: 1.1, name: 'Рыжик', text: 'Текст', img: 'https://www.zastavki.com/pictures/originals/2018Animals___Cats_Large_gray_cat_with_a_surprised_look_123712_.jpg' },
                    { id: 1.2, name: 'Василий', text: 'Текст', img: 'https://w-dog.ru/wallpapers/6/4/445936490088105/kotik-vzglyad-mechtaet.jpg' },
                    { id: 1.3, name: 'Киса', text: 'Текст', img: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic' },
                    { id: 1.4, name: 'Черный', text: 'Текст', img: 'https://neskychno.com/wp-content/uploads/2019/12/wsi-imageoptim-4-35-samie-krasivie-koshki-mira-3-1.jpg' },
                    { id: 1.5, name: 'Барсик', text: 'Текст', img: 'https://avatars.mds.yandex.net/get-zen_doc/1708265/pub_5e5ff8cc7101ab5f188ec1c9_5e5ffbc115421c7961ba83ad/scale_1200' },
                    { id: 1.6, name: 'Матроскин', text: 'Текст', img: 'http://img.crazys.info/files/i/2008.1.6/1199621372_wall_50.jpg' },
                ]
            },
            subscriptions: {
                subscriptions: ['']
            },
        },
        {
            id: 1.7,
            profileCard: {
                img: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg',
            },
            profileInfo: {
                name: 'Матроскин',
                date: '10.12.2016',
                city: 'Санкт-Петербург',
            },
            photos: {
                images: ['https://avatars.mds.yandex.net/get-zen_doc/1545908/pub_5ce2b140465c3000b3720afb_5ce2b565baeb6600affc7c7f/scale_1200',
                    'https://www.zastavki.com/pictures/1920x1200/2009/Space_The_launch_017978_.jpg',
                    'https://www.yenicaggazetesi.com.tr/d/other/yenicag-delik.jpg',
                    'https://www.picturesensations.com/wp-content/uploads/2016/11/M055-w.jpg',
                    'https://yandex-images.naydex.net/ACy973s70/c28d55Vin1kP/nqH6iPCEstYPJmSAM0aNqUgKCrkKSoWhW58MtlP-AP86Q4ARKd-fbIM5F7kakAkGw_dkyh4KBNhSaiEA1vtde94ADmjUxObWXkLTlbNCqQiIP3_sC9twET_--cY3urF6f8U1JSjbWmnGH9e5urH79GHGg7mp6WYKMJiV5fM-WF8v5C8rEhCip4wVYsHT1ZgYatrba_tcBkH7uL9FE5gjf1ohcLJ4aQi5FJ8Snl0X2KUQlYA5enj3yyBKBmZg_pq_2Ve-mICkYQYtNtAi0jWYO-jr-nl6n-QiGHnMtoEYU_86k0Ng-dnaCgS8wkxdZZsGAreiCLp69goii_bE805JnehlPPhyh5Mk_ZdzMkEVCNnoS7haCs5V8fgK_JWS6bI8y9FjwXk7qpnknXOO7zablxMmwdpJyWS6MvqHFsPOqv0KZy4bQfaztk51sLHRhejp6ApYmGiMBQMoOd4UQBqzzjnBcMDKuFl6ly4wzZ2H2HQBpeFJa8qm-PLKJWXwz2ssemXdOdNUY1SO1fBR8DcaSEu7uVnq7sXzGOpfhWHJUDwLkDBg2kj4aUftMO3fVMlFQuaBOGvZdGvQWrVncIz4n4g3vgpBpIKkjRRhwGO023nIOWo7q71lsTuqf9SCCnEdu-FT83r5-Fs3bFAsLWX6Z7D08Ok6aDZK80ildNLdSo65dkxa0SWztk8ls-BTlagoaJvKG7kPxOAruO1lcctCfdhyEJKI2vrJ9K0QXR4WGrfBlsOIG0glmLJY5DdjTSquKhYfS0Cn4cacRgABscQ6emloGblJjtZAeGuuZwG6kE1b0KDQubhb2ST8cl-d1tjXcVZiCApbVevBWub24e16fJh3TorCpLG0b6VDQHE0izgpKPo4Gk10wGtK_0TgWXBNeyFzUTuJ2rsmjhIvruV6pwNnoUoIKqWI0RlFNVCvetw5R05ak4WyBo0EIBIAdzlq-mrLi6l8NbN7yU-HA',
                ]
            },
            friends: {
                friends: [
                    { id: 1.2, name: 'Рыжик', img: 'https://www.zastavki.com/pictures/originals/2018Animals___Cats_Large_gray_cat_with_a_surprised_look_123712_.jpg' },
                    { id: 1.3, name: 'Василий', img: 'https://w-dog.ru/wallpapers/6/4/445936490088105/kotik-vzglyad-mechtaet.jpg' },
                    { id: 1.4, name: 'Киса', img: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic' },
                    { id: 1.5, name: 'Черный', img: 'https://neskychno.com/wp-content/uploads/2019/12/wsi-imageoptim-4-35-samie-krasivie-koshki-mira-3-1.jpg' },
                    { id: 1.6, name: 'Барсик', img: 'https://avatars.mds.yandex.net/get-zen_doc/1708265/pub_5e5ff8cc7101ab5f188ec1c9_5e5ffbc115421c7961ba83ad/scale_1200' },
                    { id: 1.7, name: 'Матроскин', img: 'http://img.crazys.info/files/i/2008.1.6/1199621372_wall_50.jpg' },
                ]
            },
            posts: {
                posts: [
                    { id: 1.1, name: 'Рыжик', text: 'Текст', img: 'https://www.zastavki.com/pictures/originals/2018Animals___Cats_Large_gray_cat_with_a_surprised_look_123712_.jpg' },
                    { id: 1.2, name: 'Василий', text: 'Текст', img: 'https://w-dog.ru/wallpapers/6/4/445936490088105/kotik-vzglyad-mechtaet.jpg' },
                    { id: 1.3, name: 'Киса', text: 'Текст', img: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic' },
                    { id: 1.4, name: 'Черный', text: 'Текст', img: 'https://neskychno.com/wp-content/uploads/2019/12/wsi-imageoptim-4-35-samie-krasivie-koshki-mira-3-1.jpg' },
                    { id: 1.5, name: 'Барсик', text: 'Текст', img: 'https://avatars.mds.yandex.net/get-zen_doc/1708265/pub_5e5ff8cc7101ab5f188ec1c9_5e5ffbc115421c7961ba83ad/scale_1200' },
                    { id: 1.6, name: 'Матроскин', text: 'Текст', img: 'http://img.crazys.info/files/i/2008.1.6/1199621372_wall_50.jpg' },
                ]
            },
            subscriptions: {
                subscriptions: ['']
            },
        },
    ],
    profile: {},
    status: ''
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {

        case PUBLISH_POST: {
            let idintificator = (Math.round((action.id - 1) * 10)) - 1
            let stateCopy = { ...state }
            stateCopy.users = [...state.users]
            stateCopy.users[idintificator] = { ...state.users[idintificator] }
            stateCopy.users[idintificator].posts = { ...state.users[idintificator].posts }
            stateCopy.users[idintificator].posts.posts = [...state.users[idintificator].posts.posts]
            let textMes = action.newPostText
            if (textMes.length) {
                stateCopy.users[idintificator].posts.posts.unshift({
                    text: action.newPostText,
                    img: stateCopy.users[idintificator].profileCard.img,
                    name: stateCopy.users[idintificator].profileInfo.name
                })
                return stateCopy;
            }
            break
        }
        case SET_USER_PROFILE: {
            if (action.profile) {
                let stateCopy = {
                    ...state,
                    users: [],
                    profile: action.profile
                }
                return stateCopy
            } else {
                return {
                    users: [...initialState.users],
                    profile: { ...initialState.profile }
                };
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const publishPost = (id, newPostText) => ({ type: PUBLISH_POST, id, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => (dispatch) => {
    if (userId <= 1 || userId >= 2) {
        dispatch(toggleIsFetching())
        setTimeout(async () => {
            let response = await profileAPI.getProfile(userId)
            dispatch(setUserProfile(response.data))
            dispatch(toggleIsFetching())
        }, 500)
    }
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))

}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}


export default contentReducer;