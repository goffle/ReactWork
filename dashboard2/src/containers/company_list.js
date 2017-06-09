import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card, CardText, CardTitle, CardMedia } from 'material-ui/Card';


//http://react-dnd.github.io/react-dnd/

class CompanyList extends Component {

    constructor(props) {
        super(props);
        this.state = { lastUpdate: '' };
    }

    selectCompany(company) {
        console.log("Company selected : " + company.name)
    }

    renderList() {
        let companies = this.props.companies;
        let newCompanies = [];

        let raws = [];
        let index = 0;

        while (companies.length) newCompanies.push(companies.splice(0, 3));
        newCompanies.forEach((companyRow) => {
            let cells = [];
            companyRow.forEach((company) => {
                cells.push(this.createCard(company))
            });
            raws.push(<div key={index++} className="row">{cells}</div>)
        });

        return raws;
    }

    createCard(company) {
        return (
            <div key={company.name} className="col-md-4" style={{ marginBottom: 32 + 'px', cursor: 'pointer' }} onClick={() => this.selectCompany(company)}>
                <Card >
                    <CardTitle title={company.name} subtitle="Card subtitle" />
                    <CardMedia
                        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
                        <img src="https://unsplash.it/200/100" />
                    </CardMedia>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                </Card>
            </div>
        );
    }

    render() {
        return (
            <div className="">
                {this.renderList()}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        companies: state.companies
    };
}

export default connect(mapStateToProps)(CompanyList)
