import React from 'react'

class ImgDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: 'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7e685ef2f903918fc8d13bca613d264b/b3119313b07eca80787730f59f2397dda14483b5.jpg'
        }
    }
    render () {
        let style = {
            width: this.props.width,
            height: this.props.height
        }
        return (
            <img src={this.state.url} style={style}/>
        )
    }
}

export default ImgDisplay