import React, { Component } from 'react'
import FooterTemplate from './footerTemplate';
//mui
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    root: {
        height: 'auto',
        width: '100%',
        color: '#fff',
        margin: '20px 0'
    },
    container: {
        height: '100%',
        backgroundColor: '#424242'
    },
    logo: {
        width: '62%',
    },
    logoContainer: {
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        margin: 'auto',
        textAlign: 'center'
    },
})


class FooterContainer extends Component {
    render() {
        return (
            <FooterTemplate styles={this.props} />
        );
    };
};

export default withStyles(styles)(FooterContainer);