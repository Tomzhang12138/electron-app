import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppLayout from './layout/app'
import ImgDisplay from './component/img'
import SvgIcon from '@/component/svgIcon'
import './page-less/index.css'
import getVersion from './render-process'

class App extends Component {
    constructor(props) {
        super(props)
        getVersion()
    }

    render () {
        return (
            <div>
                <ImgDisplay width='200px' height='200px' src='https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7e685ef2f903918fc8d13bca613d264b/b3119313b07eca80787730f59f2397dda14483b5.jpg'/>
                <SvgIcon iconClass='icon-paihangbang'/>
            </div>
        )
    }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(App)