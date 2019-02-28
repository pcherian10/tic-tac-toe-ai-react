import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'


class Template extends Component {

    render() {
        return (
        <MuiThemeProvider>
        <div>   
            <header>
                <h1> AI! TicTacToe</h1>
                <RaisedButton 
                    label={'Test Button'}
                    primary={true}
                    onClick={()=>{console.log('Hello I work')}}
                />
            </header>
            <main>
                {this.props.children}
            </main>
        </div>
        </MuiThemeProvider>
        )
    }
}

export default Template