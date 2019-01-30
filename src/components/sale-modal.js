import React, { Component } from 'react'

class SaleModal extends Component {
    constructor(props) {
        super(props);
          this.state = {
            jobinfoid: props.jobinfoid,
            address: props.address,
        }
        this.handleSave = this.handleSave.bind(this);

    }

    componentWillReceiveProps(nextProps) {
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
