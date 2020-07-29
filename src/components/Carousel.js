import React from 'react';

import Card from '../components/Card';

import devgrub from '../images/profile.jpg';
import linkedIn from '../images/linkedIn.jpg';
// import evverest from '../assets/images/evverest.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Dev Grub',
                    subTitle: 'The cookbook for developers',
                    imgSrc: devgrub,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Dennis Mistry',
                    subTitle: 'LinkedIn',
                    imgSrc: linkedIn,
                    link: 'https://www.linkedin.com/in/dennis-mistry-baa2b2116/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Github',
                    subTitle: 'A review of what I have been doing!:)',
                    imgSrc: devgrub,
                    link: 'https://github.com/mistrydennis',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;