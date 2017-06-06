import React, { Component } from 'react'
import { connect } from 'react-redux';


import { Card, CardText, CardTitle } from 'material-ui/Card';


class PortfolioList extends Component {

    constructor(props) {
        super(props);
        this.state = { lastUpdate: '' };
    }

    renderList() {

        return this.props.portfolio.map((business) => {
            return (
                <div key={business.title} style={{marginBottom: 32 +'px', cursor: 'pointer'}} onClick={() => this.selectPortfolio(business.title)}>
                    <Card >
                        <CardTitle title={business.title} subtitle="Card subtitle" />
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    </Card>
                </div>
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
    selectPortfolio(businessName)
    {
        console.log(businessName + ' clicked');
    }
}

function mapStateToProps(state) {
    return {
        portfolio: state.portfolio
    };
}

export default connect(mapStateToProps)(PortfolioList)
