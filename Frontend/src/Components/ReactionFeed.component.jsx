import React, { Component } from 'react'
import getFeedbackById from '../actions/FeedBackActions/getFeedbackById'
import { Fade } from '@material-ui/core'

//de pus icon pt surprised fontawesome.com
export class ReactionFeed extends Component {
    constructor(props) {
        super(props)

        this.state = {
            smiley: 0,
            frown: 0,
            confused: 0,
            surprised: 0,
        }
    }

    updateState = async () => {
        const feedback = await getFeedbackById(this.props.feedbackId)

        if (feedback) {
            this.setState({
                smiley: feedback.Smiley,
                frown: feedback.Frown,
                confused: feedback.Confused,
                surprised: feedback.Surprised,
            })
            console.log(this.state)
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.updateState(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div >
                <span id="smiley" style={{ "margin-right": "20px" }}>
                    <Fade in={true} timeout={1000}>
                        <svg aria-hidden="true" width="50" height="50" fill="#3f51b5" focusable="false" data-prefix="far" data-icon="frown" class="svg-inline--fa fa-frown fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295.996 295.996">
                            <path d="M147.998,0C66.392,0,0,66.392,0,147.998s66.392,147.998,147.998,147.998s147.998-66.392,147.998-147.998   S229.605,0,147.998,0z M147.998,279.996c-36.256,0-69.143-14.696-93.022-38.44c-9.536-9.482-17.631-20.41-23.934-32.42   C21.442,190.847,16,170.047,16,147.998C16,75.214,75.214,16,147.998,16c34.523,0,65.987,13.328,89.533,35.102   c12.208,11.288,22.289,24.844,29.558,39.996c8.27,17.239,12.907,36.538,12.907,56.9   C279.996,220.782,220.782,279.996,147.998,279.996z"></path>
                            <circle cx="99.666" cy="114.998" r="16"></circle>
                            <circle cx="198.666" cy="114.998" r="16"></circle>
                            <path d="M147.715,229.995c30.954,0,60.619-15.83,77.604-42.113l-13.439-8.684c-15.597,24.135-44.126,37.604-72.693,34.308   c-22.262-2.567-42.849-15.393-55.072-34.308l-13.438,8.684c14.79,22.889,39.716,38.409,66.676,41.519   C140.814,229.8,144.27,229.995,147.715,229.995z"></path>
                        </svg>
                    </Fade>

                    <text class='feedback-text'>{this.state.smiley}</text>
                </span>
                <span id="surprised" style={{ "margin-right": "20px" }}>
                    <Fade in={true} timeout={1000}>
                        <svg width="50" height="50" data-prefix="far" fill="#3f51b5" className="svg-inline--fa fa-surprise fa-w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295.996 295.996">
                            <path d="M147.998,0C66.392,0,0,66.392,0,147.998c0,81.606,66.392,147.998,147.998,147.998c81.606,0,147.998-66.392,147.998-147.998   C295.996,66.392,229.605,0,147.998,0z M147.998,279.996c-36.257,0-69.143-14.696-93.023-38.44   c-9.536-9.482-17.631-20.41-23.934-32.42C21.442,190.847,16,170.047,16,147.998C16,75.214,75.214,16,147.998,16   c34.523,0,65.987,13.328,89.533,35.102c12.208,11.288,22.289,24.844,29.558,39.996c8.27,17.239,12.907,36.538,12.907,56.9   C279.996,220.782,220.782,279.996,147.998,279.996z"></path>
                            <circle cx="98.666" cy="114.998" r="16"></circle>
                            <circle cx="197.666" cy="114.998" r="16"></circle>
                            <circle cx="147.997" cy="199.331" r="31.5"></circle>

                        </svg>
                    </Fade>
                    <text class='feedback-text'>{this.state.surprised}</text>
                </span>
                <span id="frown" style={{ "margin-right": "20px" }}>
                    <Fade in={true} timeout={1000}>
                        <svg aria-hidden="true" width="50" height="50" fill="#3f51b5" focusable="false" data-prefix="far" data-icon="smile" class="svg-inline--fa fa-smile fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295.996 295.996">
                            <path d="M147.998,0C66.392,0,0,66.392,0,147.998c0,81.606,66.392,147.998,147.998,147.998c81.606,0,147.998-66.392,147.998-147.998   C295.996,66.392,229.604,0,147.998,0z M147.998,279.996c-36.257,0-69.143-14.696-93.023-38.44   c-9.536-9.482-17.631-20.41-23.934-32.42C21.442,190.847,16,170.047,16,147.998C16,75.214,75.214,16,147.998,16   c34.523,0,65.987,13.328,89.533,35.102c12.208,11.288,22.289,24.844,29.558,39.996c8.27,17.239,12.907,36.538,12.907,56.9   C279.996,220.782,220.782,279.996,147.998,279.996z"></path>
                            <path d="M163.638,187.607c17.554,3.671,33.322,13.54,44.4,27.789l12.631-9.82c-13.402-17.24-32.494-29.184-53.756-33.631   c-34.195-7.146-70.146,6.052-91.587,33.631l12.633,9.82C105.675,192.607,135.382,181.697,163.638,187.607z"></path>
                            <circle cx="98.666" cy="114.998" r="16"></circle>
                            <circle cx="197.666" cy="114.998" r="16"></circle>
                        </svg>
                    </Fade>
                    <text class='feedback-text'>{this.state.frown}</text>
                </span>
                <span id="confused">
                    <Fade in={true} timeout={1000}>
                        <svg aria-hidden="true" width="50" height="50" fill="#3f51b5" focusable="false" data-prefix="far" data-icon="question-circle" class="svg-inline--fa fa-question-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path xmlns="http://www.w3.org/2000/svg" d="m269.122 60.25c-75.805 0-137.478 61.672-137.478 137.478s61.672 137.478 137.478 137.478 137.478-61.672 137.478-137.478c-.001-75.806-61.673-137.478-137.478-137.478zm0 244.956c-59.263 0-107.478-48.214-107.478-107.478 0-59.263 48.214-107.478 107.478-107.478s107.478 48.214 107.478 107.478c-.001 59.263-48.215 107.478-107.478 107.478z"></path>
                            <path xmlns="http://www.w3.org/2000/svg" d="m271.821 116.417c-11.927-.741-23.279 3.346-31.962 11.507-8.562 8.046-13.472 19.398-13.472 31.144 0 8.284 6.716 15 15 15s15-6.716 15-15c0-3.552 1.427-6.849 4.018-9.284 2.586-2.431 5.977-3.645 9.558-3.425 6.266.389 11.479 5.603 11.868 11.869.344 5.523-2.857 10.613-7.964 12.666-11.994 4.822-19.744 16.43-19.744 29.572v11.867c0 8.284 6.716 15 15 15s15-6.716 15-15v-11.867c0-.776.402-1.523.935-1.737 17.125-6.884 27.861-23.907 26.716-42.359-1.333-21.446-18.509-38.621-39.953-39.953z"></path>
                            <path xmlns="http://www.w3.org/2000/svg" d="m269.122 241c-7.846 0-15.363 6.899-15 15 .364 8.127 6.591 15 15 15 7.846 0 15.363-6.899 15-15-.364-8.127-6.591-15-15-15z"></path>
                            <path xmlns="http://www.w3.org/2000/svg" d="m271.213 0c-110.001 0-199.493 89.492-199.493 199.492v26.207l-29.78 98.483c-2.331 7.707 1.839 15.879 9.447 18.515l50.754 17.585v70.512c0 8.284 6.716 15 15 15h76.265v51.206c0 8.284 6.716 15 15 15h182.531c8.284 0 15-6.716 15-15v-150.394c41.247-37.786 64.767-91.006 64.767-147.114.001-110-89.491-199.492-199.491-199.492zm109.985 328.443c-3.338 2.85-5.26 7.019-5.26 11.408v142.149h-152.531v-51.206c0-8.284-6.716-15-15-15h-76.265v-66.19c0-6.392-4.05-12.081-10.089-14.173l-47.225-16.362 26.25-86.81c.426-1.408.642-2.871.642-4.342v-28.425c0-93.458 76.034-169.492 169.493-169.492 93.458 0 169.492 76.034 169.492 169.492 0 49.661-21.69 96.661-59.507 128.951z"></path>
                        </svg>
                    </Fade>
                    <text class='feedback-text'>{this.state.confused}</text>
                </span>
            </div>
        )
    }
}

export default ReactionFeed
