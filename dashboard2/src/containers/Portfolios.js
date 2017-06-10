import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardText, CardTitle } from 'material-ui/Card';


class Portfolios extends Component {

    constructor(props) {
        super(props);
        this.state = { lastUpdate: '' };
    }

    renderList() {
        return this.props.portfolio.map((business) => {
            return (
                <Link className="card" key={business.title} to={`/portfolio/${business.id}`} onClick={() => this.selectPortfolio(business.title)}>
                    <Card >
                        <CardTitle title={business.title} subtitle="Card subtitle" />
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    </Card>
                </Link>
            );
        });
    }

    render() {
        return (

            <div className="col-md-12">
                {this.renderList()}
            </div>
        );
    }
    selectPortfolio(businessName) {
        console.log(businessName + ' clicked');
    }
}

function mapStateToProps(state) {
    return {
        portfolio: state.portfolio
    };
}

export default connect(mapStateToProps)(Portfolios)
