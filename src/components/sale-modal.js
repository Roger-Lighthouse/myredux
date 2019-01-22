import React, { Component } from 'react'

class SaleModal extends Component {
    constructor(props) {
        super(props);
        console.log('Sale Modal', props)
          this.state = {
            jobinfoid: props.jobinfoid,
            address: props.address,
        }
        this.handleSave = this.handleSave.bind(this);

    }

    componentWillReceiveProps(nextProps) {
      console.log('Sale Modal', nextProps)
        this.setState({
          jobinfoid: nextProps.jobinfoid,
          address: nextProps.address,
        });
    }

    jobinfoidHandler(e) {
        this.setState({ jobinfoid: e.target.value });
    }

    addressHandler(e) {
        this.setState({ address: e.target.value });
    }

    handleSave() {
        const item = this.state;
        this.props.saveModalDetails(item)
    }

    render() {
      console.log("Trying to Render")
        return (
          <div>
                <div className="container" id="saleModal">
                      <div className="modal fade" id="saleModal" role="dialog">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal">&times;</button>
                              <h4 className="modal-title">Make Sale</h4>
                            </div>
                             <div className="modal-body">
                               NIUTS
                             </div>
                             <div className="modal-footer">
                              <button type="button" onClick={()=>this.handleSave} className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

          </div>

        );
    }
}

export default SaleModal;

// <div className="container" id="saleModal">
// <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//    <div className="modal-dialog" role="document">
//        <div className="modal-content">
//            <div className="modal-header">
//                <h5 className="modal-title" id="exampleModalLabel">Edit Jewel</h5>
//                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                    <span aria-hidden="true">&times;</span>
//                </button>
//            </div>
//            <div className="modal-body">
//                <p><span className="modal-lable">JobInfoID:</span><input value={this.state.jobinfoid} onChange={(e) => this.jobinfoidHandler(e)} /></p>
//                <p><span className="modal-lable">Address:</span><input value={this.state.address} onChange={(e) => this.addressHandler(e)} /></p>
//            </div>
//            <div className="modal-footer">
//                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
//            </div>
//        </div>
//    </div>
// </div>
// </div>
