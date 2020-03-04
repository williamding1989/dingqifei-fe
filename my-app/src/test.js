import React , { Component } from 'react'
import  './test.css'

class Test extends Component{
	constructor(props){
        super(props)
        this.sendAjax = this.sendAjax.bind(this)
        this.state = {
            ajaxData: []
        }
    }
    componentDidMount(){
        this.sendAjax().then((res)=>{
            console.log('res',res.data)
            this.setState({
                ajaxData: res.data
            })
        })
    }
    sendAjax(){
        return new Promise((resolve,reject)=>{
            var httpRequest = new XMLHttpRequest()
            if (!httpRequest) {
                console.log('Giving up :( Cannot create an XMLHTTP instance')
                return false
            }
            httpRequest.open('GET', 'test.json')
            httpRequest.send()
            httpRequest.onreadystatechange = ()=>{
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    if (httpRequest.status === 200) {
                        resolve(JSON.parse(httpRequest.response))
                    } else {
                        reject('There was a problem with the request.')
                    }
                }
            }
        })

    }
	render (){
		return ( 
            <div>
                ajax获取到的数据:{this.state.ajaxData}
                <div className='listwrap'>
                    <div alt='' className='itemlist'>
                        <img alt='pic' src='./img-1.jpg'></img>
                    </div>
                    <div className='itemlist'>
                        <img alt='pic' src='./img-1.jpg'></img>
                    </div>
                    <div className='itemlist'>
                        <img alt='pic' src='./img-1.jpg'></img>
                    </div>
                    <div className='itemlist'>
                        <img alt='pic' src='./img-1.jpg'></img>
                    </div>
                    <div className='itemlist'>
                        <img alt='pic' src='./img-1.jpg'></img>
                    </div>
                    <div className='itemlist special'>
                        <img alt='pic' src='./img-1.jpg'></img>
                        <img alt='pic' src='./img-1.jpg'></img>
                        <img alt='pic' src='./img-1.jpg'></img>
                        <img alt='pic' src='./img-1.jpg'></img>
                    </div>
                </div>
            </div>
        )
	}
}


export default Test