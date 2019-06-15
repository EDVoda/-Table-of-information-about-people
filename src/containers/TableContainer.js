import { connect } from 'react-redux'
import Table from '../components/Table'
import { getInfo, getState } from '../actions/info-action'


const mapStateToProps = state =>
    ({
        info: state.info.info,
        error: state.info.errors,
        state: state.info.state_table
    });

const mapDispatchToProps = dispatch => {
    return {
        getInfo: (e) => dispatch(getInfo(e)),
        getState: (e) => dispatch(getState(e)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
