import React , { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Clients from './Clients'

const styles = () => ({
    root:{
        width:'80%',
        margin:'20px auto'
    },
    clientItem:{
        textAlign:'center',
    },
    imgContainer:{
        maxWidth:'100%',
        height:'auto',
        display:'block', 
        margin:'auto',
        textAlign:'center'

    },
    img:{
        width:'60%',
        bottom:0,
        horizantalAlign:'center'
    }
})


class ClientsContainer extends Component {
    
    state = {
        clients:{
            RawanCake:{
                name:'Rawan Cake',
                img:'images/clients/RC.png',
            },
            SajHaretna:{
                name:'Saj Haretna',
                img:'images/clients/SA.jpeg',
            },
            Jabri:{
                name:'Jabri',
                img:'images/clients/JA.png',
            },
            Dulux:{
                name:'Dulux',
                img:'images/clients/DU.jpeg',
            },
            AbuTafesh:{
                name:'Abu Tafesh',
                img:'images/clients/AT.jpg',
            },
            Test:{
                name:'Test',
                img:'images/clients/AT (copy).jpg'
            }
        }
    }


    render(){
        return(
            <div>
                <Clients data={this.state.clients} styles={this.props}></Clients>
            </div>
        )
    }
}


export default withStyles(styles)(ClientsContainer)