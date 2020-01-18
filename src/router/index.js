import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import proDetail from '@/components/proDetail'

import Series from '@/components/series'
import SeriesType from '@/components/seriesType'
import seriesDetail from '@/components/seriesDetail'

import DataRoot from '@/components/dataRoot'
import DataDetail from '@/components/dataDetail'
import Projuct from '@/components/projuct'

import ProjectDetail from '@/components/projectDetail'

import dynamic from '@/components/dynamic'
import dynDetail from '@/components/dynDetail'


import About from '@/components/about'
import Contact from '@/components/contact'

import New from '@/components/new'

import experiment from '@/components/experiment'

import expDetail from '@/components/expDetail'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/Series',
        name: 'Series',
        component: Series
    }, {
        path: '/Series/SeriesType',
        name: 'SeriesType',
        component: SeriesType
    }, {
        path: '/Series/seriesType/seriesDetail',
        name: 'seriesDetail',
        component: seriesDetail
    }, {
        path: '/proDetail',
        name: 'proDetail',
        component: proDetail
    }, {
        path: '/projuct',
        name: 'Projuct',
        component: Projuct
    }, {
        path: '/projuct/ProjectDetail',
        name: 'ProjectDetail',
        component: ProjectDetail

    }, {
        path: '/dataRoot',
        name: 'DataRoot',
        component: DataRoot
    }, {
        path: '/dataRoot/dataDetail',
        name: 'DataDetail',
        component: DataDetail
    }, {
        path: '/dynamic',
        name: 'dynamic',
        component: dynamic
    }, {
        path: '/dynamic/dynDetail',
        name: 'dynDetail',
        component: dynDetail
    }, {
        path: '/About',
        name: 'About',
        component: About
    }, {
        path: '/Contact',
        name: 'Contact',
        component: Contact
    }, {
        path: '/new',
        name: 'New',
        component: New
    }, {
        path: '/Experiment',
        name: 'Experiment',
        component: experiment
    }, {
        path: '/Experiment/detail',
        name: 'expDetail',
        component: expDetail
    }
]
})