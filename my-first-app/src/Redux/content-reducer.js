import { profileAPI } from '../api/api';
import { toggleIsFetching } from '../Redux/usersapi-reducer'

import kosmokot from './../images/kosmokot.jpg'
import ryjik from './../images/ryjik.jpg'
import vasiliy from './../images/vasiliy.jpg'
import kisa from './../images/kisa.jpg'
import cherniy from './../images/cherniy.jpg'
import barsik from './../images/barsik.jpg'
import matroskin from './../images/matroskin.jpg'


const PUBLISH_POST = 'content/PUBLISH-POST'
const SET_USER_PROFILE = 'content/SET_USER_PROFILE'
const SET_STATUS = 'content/SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'content/SAVE_PHOTO_SUCCESS'

let initialState = {
    users: [
        {
            id: 1.1,
            profileCard: {
                img: kosmokot,
            },
            profileInfo: {
                name: 'Космокот',
                date: '12.11.2016',
                city: 'Москва',
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
                    { id: 1.2, name: 'Рыжик', img: ryjik },
                    { id: 1.3, name: 'Василий', img: vasiliy },
                    { id: 1.4, name: 'Киса', img: kisa },
                    { id: 1.5, name: 'Черный', img: cherniy },
                    { id: 1.6, name: 'Барсик', img: barsik },
                    { id: 1.7, name: 'Матроскин', img: matroskin },
                ]
            },
            posts: {
                posts: [
                    { id: 1.2, name: 'Рыжик', text: 'Текст', img: ryjik },
                    { id: 1.3, name: 'Василий', text: 'Текст', img: vasiliy },
                    { id: 1.4, name: 'Киса', text: 'Текст', img: kisa },
                    { id: 1.5, name: 'Черный', text: 'Текст', img: cherniy },
                    { id: 1.6, name: 'Барсик', text: 'Текст', img: barsik },
                    { id: 1.7, name: 'Матроскин', text: 'Текст', img: matroskin },
                ]
            },
            subscriptions: {
                subscriptions: ['']
            },
        },
        {
            id: 1.2,
            profileCard: {
                img: ryjik,
            },
            profileInfo: {
                name: 'Рыжик',
                date: '4.7.2015',
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
                    { id: 1.1, name: 'Космокот', img: kosmokot },
                    { id: 1.3, name: 'Василий', img: vasiliy },
                    { id: 1.4, name: 'Киса', img: kisa },
                    { id: 1.5, name: 'Черный', img: cherniy },
                    { id: 1.6, name: 'Барсик', img: barsik },
                    { id: 1.7, name: 'Матроскин', img: matroskin },
                ]
            },
            posts: {
                posts: [
                    { id: 1.1, name: 'Космокот', text: 'Текст', img: kosmokot },
                    { id: 1.3, name: 'Василий', text: 'Текст', img: vasiliy },
                    { id: 1.4, name: 'Киса', text: 'Текст', img: kisa },
                    { id: 1.5, name: 'Черный', text: 'Текст', img: cherniy },
                    { id: 1.6, name: 'Барсик', text: 'Текст', img: barsik },
                    { id: 1.7, name: 'Матроскин', text: 'Текст', img: matroskin },
                ]
            },
            subscriptions: {
                subscriptions: ['']
            },
        },
        {
            id: 1.3,
            profileCard: {
                img: vasiliy,
            },
            profileInfo: {
                name: 'Василий',
                date: '5.12.2018',
                city: 'Казань',
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
                    { id: 1.2, name: 'Рыжик', img: ryjik },
                    { id: 1.1, name: 'Космокот', img: kosmokot },
                    { id: 1.4, name: 'Киса', img: kisa },
                    { id: 1.5, name: 'Черный', img: cherniy },
                    { id: 1.6, name: 'Барсик', img: barsik },
                    { id: 1.7, name: 'Матроскин', img: matroskin },
                ]
            },
            posts: {
                posts: [
                    { id: 1.2, name: 'Рыжик', text: 'Текст', img: ryjik },
                    { id: 1.1, name: 'Космокот', text: 'Текст', img: kosmokot },
                    { id: 1.4, name: 'Киса', text: 'Текст', img: kisa },
                    { id: 1.5, name: 'Черный', text: 'Текст', img: cherniy },
                    { id: 1.6, name: 'Барсик', text: 'Текст', img: barsik },
                    { id: 1.7, name: 'Матроскин', text: 'Текст', img: matroskin },
                ]
            },
            subscriptions: {
                subscriptions: ['']
            },
        },
        {
            id: 1.4,
            profileCard: {
                img: kisa,
            },
            profileInfo: {
                name: 'Киса',
                date: '12.12.2017',
                city: 'Новосибирск',
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
                    { id: 1.2, name: 'Рыжик', img: ryjik },
                    { id: 1.3, name: 'Василий', img: vasiliy },
                    { id: 1.1, name: 'Космокот', img: kosmokot },
                    { id: 1.5, name: 'Черный', img: cherniy },
                    { id: 1.6, name: 'Барсик', img: barsik },
                    { id: 1.7, name: 'Матроскин', img: matroskin },
                ]
            },
            posts: {
                posts: [
                    { id: 1.2, name: 'Рыжик', text: 'Текст', img: ryjik },
                    { id: 1.3, name: 'Василий', text: 'Текст', img: vasiliy },
                    { id: 1.1, name: 'Космокот', text: 'Текст', img: kosmokot },
                    { id: 1.5, name: 'Черный', text: 'Текст', img: cherniy },
                    { id: 1.6, name: 'Барсик', text: 'Текст', img: barsik },
                    { id: 1.7, name: 'Матроскин', text: 'Текст', img: matroskin },
                ]
            },
            subscriptions: {
                subscriptions: ['']
            },
        },
        {
            id: 1.5,
            profileCard: {
                img: cherniy,
            },
            profileInfo: {
                name: 'Черный',
                date: '7.11.2012',
                city: 'Самара',
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
                    { id: 1.2, name: 'Рыжик', img: ryjik },
                    { id: 1.3, name: 'Василий', img: vasiliy },
                    { id: 1.4, name: 'Киса', img: kisa },
                    { id: 1.1, name: 'Космокот', img: kosmokot },
                    { id: 1.6, name: 'Барсик', img: barsik },
                    { id: 1.7, name: 'Матроскин', img: matroskin },
                ]
            },
            posts: {
                posts: [
                    { id: 1.2, name: 'Рыжик', text: 'Текст', img: ryjik },
                    { id: 1.3, name: 'Василий', text: 'Текст', img: vasiliy },
                    { id: 1.4, name: 'Киса', text: 'Текст', img: kisa },
                    { id: 1.1, name: 'Космокот', text: 'Текст', img: kosmokot },
                    { id: 1.6, name: 'Барсик', text: 'Текст', img: barsik },
                    { id: 1.7, name: 'Матроскин', text: 'Текст', img: matroskin },
                ]
            },
            subscriptions: {
                subscriptions: ['']
            },
        },
        {
            id: 1.6,
            profileCard: {
                img: barsik,
            },
            profileInfo: {
                name: 'Барсик',
                date: '23.1.2015',
                city: 'Сыктывкар',
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
                    { id: 1.2, name: 'Рыжик', img: ryjik },
                    { id: 1.3, name: 'Василий', img: vasiliy },
                    { id: 1.4, name: 'Киса', img: kisa },
                    { id: 1.5, name: 'Черный', img: cherniy },
                    { id: 1.1, name: 'Космокот', img: kosmokot },
                    { id: 1.7, name: 'Матроскин', img: matroskin },
                ]
            },
            posts: {
                posts: [
                    { id: 1.2, name: 'Рыжик', text: 'Текст', img: ryjik },
                    { id: 1.3, name: 'Василий', text: 'Текст', img: vasiliy },
                    { id: 1.4, name: 'Киса', text: 'Текст', img: kisa },
                    { id: 1.5, name: 'Черный', text: 'Текст', img: cherniy },
                    { id: 1.1, name: 'Космокот', text: 'Текст', img: kosmokot },
                    { id: 1.7, name: 'Матроскин', text: 'Текст', img: matroskin },
                ]
            },
            subscriptions: {
                subscriptions: ['']
            },
        },
        {
            id: 1.7,
            profileCard: {
                img: matroskin,
            },
            profileInfo: {
                name: 'Матроскин',
                date: '26.5.2013',
                city: 'Краснодар',
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
                    { id: 1.2, name: 'Рыжик', img: ryjik },
                    { id: 1.3, name: 'Василий', img: vasiliy },
                    { id: 1.4, name: 'Киса', img: kisa },
                    { id: 1.5, name: 'Черный', img: cherniy },
                    { id: 1.6, name: 'Барсик', img: barsik },
                    { id: 1.1, name: 'Космокот', img: kosmokot },
                ]
            },
            posts: {
                posts: [
                    { id: 1.2, name: 'Рыжик', text: 'Текст', img: ryjik },
                    { id: 1.3, name: 'Василий', text: 'Текст', img: vasiliy },
                    { id: 1.4, name: 'Киса', text: 'Текст', img: kisa },
                    { id: 1.5, name: 'Черный', text: 'Текст', img: cherniy },
                    { id: 1.6, name: 'Барсик', text: 'Текст', img: barsik },
                    { id: 1.1, name: 'Космокот', text: 'Текст', img: kosmokot },
                ]
            },
            subscriptions: {
                subscriptions: ['']
            },
        },
    ],
    profile: {},
    status: '',
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
                    img: kosmokot,
                    name: stateCopy.users[idintificator].profileInfo.name,
                    id: 1.1
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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state;
    }
}

export const publishPost = (id, newPostText) => ({ type: PUBLISH_POST, id, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getUserProfile = (userId) => (dispatch) => {
    if (userId <= 1 || userId >= 2) {
        dispatch(toggleIsFetching())
        setTimeout(async () => {
            let response = await profileAPI.getProfile(userId)
            if (response.status === 200) {
                dispatch(setUserProfile(response.data))
                dispatch(toggleIsFetching())
            }
        }, 500)
    }
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    if (response.status === 200) {
        dispatch(setStatus(response.data))
    }
}

export const loadPhoto = (photos) => async (dispatch) => {
    let response = await profileAPI.savePhoto(photos)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}


export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        debugger
        return Promise.reject(response.data.messages[0])
    }
}



export default contentReducer;