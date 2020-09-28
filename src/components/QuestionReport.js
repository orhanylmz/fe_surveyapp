import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class QuestionReport extends PureComponent {
    componentDidMount() {
        this.props.fetchReport(this.props.questionId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.questionId !== prevProps.questionId) {
            this.props.fetchReport(this.props.questionId);
        }
    }

    render() {
        return (
            <div>
                <h3 className="mt-6">Bar chart</h3>
                {this.props.report && <Bar data={this.props.report.dataBar} options={this.props.report.barChartOptions} />}

            </div>
        );
    }
}

QuestionReport.propTypes = {};

export default QuestionReport;